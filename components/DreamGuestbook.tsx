"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./DreamGuestbook.module.css";

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

interface StoredPayload {
  version: number;
  entries: GuestbookEntry[];
}

const STORAGE_KEY = "pips-midnight-nursery:dream-guestbook:v1";
const MAX_ENTRIES = 50;
const MIN_NAME_LEN = 2;
const MAX_NAME_LEN = 32;
const MIN_MSG_LEN = 3;
const MAX_MSG_LEN = 240;

// Safe UUID generator with math fallback
function generateEntryId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    try {
      return crypto.randomUUID();
    } catch {
      // ignore
    }
  }
  return `entry-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// Format local timestamp safely
function formatTimestamp(ts: number): string {
  if (typeof ts !== "number" || !Number.isFinite(ts) || isNaN(ts) || ts <= 0) return "";
  try {
    const d = new Date(ts);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

// Format safe ISO string for <time dateTime="...">
function toSafeISOString(ts: number): string | undefined {
  if (typeof ts !== "number" || !Number.isFinite(ts) || isNaN(ts) || ts <= 0) return undefined;
  try {
    const d = new Date(ts);
    if (isNaN(d.getTime())) return undefined;
    return d.toISOString();
  } catch {
    return undefined;
  }
}

type StorageStatus = "ready" | "corrupted" | "unsupported_version" | "unavailable";

export default function DreamGuestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [storageWarning, setStorageWarning] = useState<string | null>(null);
  const [storageStatus, setStorageStatus] = useState<StorageStatus>("ready");
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isHydrated, setIsHydrated] = useState<boolean>(false);

  const statusRef = useRef<HTMLDivElement>(null);

  // Safe client hydration from localStorage
  useEffect(() => {
    setIsHydrated(true);
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        setStorageStatus("unavailable");
        setStorageWarning("Browser storage is not available. Wishes cannot be saved on this device.");
        return;
      }
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) {
        // First-time visitor: storage is clean and ready
        setStorageStatus("ready");
        setEntries([]);
        return;
      }

      let parsed: unknown;
      try {
        parsed = JSON.parse(raw);
      } catch {
        setStorageStatus("corrupted");
        setStorageWarning("Existing guestbook data was corrupted or malformed. Submissions are paused to protect the raw payload on this device.");
        return;
      }

      if (!parsed || typeof parsed !== "object") {
        setStorageStatus("corrupted");
        setStorageWarning("Existing guestbook data is not in a valid format. Submissions are paused to protect the stored payload.");
        return;
      }

      const payload = parsed as Partial<StoredPayload>;
      if (typeof payload.version !== "number" || payload.version !== 1) {
        setStorageStatus("unsupported_version");
        setStorageWarning(`Existing guestbook data uses an unsupported schema version (${payload.version ?? "unknown"}). Submissions are paused to prevent overwriting your data.`);
        return;
      }

      if (!Array.isArray(payload.entries)) {
        setStorageStatus("corrupted");
        setStorageWarning("Existing guestbook entries list is malformed. Submissions are paused to protect the stored payload.");
        return;
      }

      // Validate each entry structure thoroughly
      const validEntries: GuestbookEntry[] = payload.entries
        .filter(
          (item): item is GuestbookEntry =>
            Boolean(
              item &&
              typeof item === "object" &&
              typeof item.id === "string" &&
              item.id.trim().length > 0 &&
              typeof item.name === "string" &&
              item.name.trim().length > 0 &&
              typeof item.message === "string" &&
              item.message.trim().length > 0 &&
              typeof item.timestamp === "number" &&
              Number.isFinite(item.timestamp) &&
              !isNaN(item.timestamp)
            )
        )
        .slice(0, MAX_ENTRIES);

      setStorageStatus("ready");
      setEntries(validEntries);
    } catch {
      setStorageStatus("unavailable");
      setStorageWarning("Unable to access local storage on this browser.");
    }
  }, []);

  const handleConfirmReset = () => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem(STORAGE_KEY);
      }
      setEntries([]);
      setStorageStatus("ready");
      setStorageWarning(null);
      setShowResetConfirm(false);
      setStatusMessage({
        type: "success",
        text: "✦ Guestbook storage has been safely reset. You can now tuck in new bedtime wishes.",
      });
    } catch {
      setStatusMessage({
        type: "error",
        text: "Unable to clear local storage on this browser.",
      });
    }
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const trimmedName = name.trim();
    const trimmedMsg = message.trim();

    if (!trimmedName) {
      setNameError("Please enter your name or a bedtime nickname.");
      isValid = false;
    } else if (trimmedName.length < MIN_NAME_LEN) {
      setNameError(`Name must be at least ${MIN_NAME_LEN} characters.`);
      isValid = false;
    } else if (trimmedName.length > MAX_NAME_LEN) {
      setNameError(`Name cannot exceed ${MAX_NAME_LEN} characters.`);
      isValid = false;
    } else {
      setNameError(null);
    }

    if (!trimmedMsg) {
      setMessageError("Please write a short bedtime wish.");
      isValid = false;
    } else if (trimmedMsg.length < MIN_MSG_LEN) {
      setMessageError(`Wish must be at least ${MIN_MSG_LEN} characters.`);
      isValid = false;
    } else if (trimmedMsg.length > MAX_MSG_LEN) {
      setMessageError(`Wish cannot exceed ${MAX_MSG_LEN} characters.`);
      isValid = false;
    } else {
      setMessageError(null);
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (storageStatus !== "ready") {
      setStatusMessage({
        type: "error",
        text: "Submissions are paused because existing stored guestbook data cannot be safely read. Please reset storage below to start fresh on this device.",
      });
      return;
    }

    if (!validateForm()) {
      setStatusMessage({ type: "error", text: "Please correct the errors in your wish before tucking it in." });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    const trimmedName = name.trim();
    const trimmedMsg = message.trim();

    const newEntry: GuestbookEntry = {
      id: generateEntryId(),
      name: trimmedName,
      message: trimmedMsg,
      timestamp: Date.now(),
    };

    // Calculate updated list newest first, capped at MAX_ENTRIES
    const updatedEntries = [newEntry, ...entries].slice(0, MAX_ENTRIES);

    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const payload: StoredPayload = {
          version: 1,
          entries: updatedEntries,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        // Successfully saved
        setEntries(updatedEntries);
        setName("");
        setMessage("");
        setNameError(null);
        setMessageError(null);
        setStatusMessage({
          type: "success",
          text: "✦ Your wish has been safely tucked into the nursery book!",
        });
      } else {
        throw new Error("localStorage is unavailable");
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Could not save your wish to local storage (storage full or restricted). Your text was preserved above.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="dream-guestbook"
      className={styles.guestbookSection}
      aria-labelledby="guestbook-title"
    >
      <div className={styles.guestbookContainer}>
        {/* Section Header */}
        <header className={styles.guestbookHeader}>
          <div className={styles.guestbookDivider} aria-hidden="true">
            <span className={styles.dividerLine} />
            <span>☾ · ✦ · ☽</span>
            <span className={styles.dividerLine} />
          </div>
          <p className={styles.eyebrow}>A Little Note Before Dreams</p>
          <h2 id="guestbook-title" className={styles.title}>
            Leave a Wish for the Night
          </h2>
          <p className={styles.intro}>
            Pip keeps a little book of bedtime wishes. Leave a kind thought, a dream you hope to have, or a note for the next sleepy wanderer.
          </p>

          <div className={styles.disclaimerPill} role="note">
            <span className={styles.disclaimerIcon} aria-hidden="true">✦</span>
            <span>Your wishes are saved in this browser only. Other visitors cannot see them.</span>
          </div>
        </header>

        {/* Storage Warning if local storage fails */}
        {storageWarning && (
          <div className={styles.storageWarningBanner} role="alert">
            <div className={styles.warningHeaderRow}>
              <span aria-hidden="true">⚠️</span>
              <div>
                <strong>Storage Notice: </strong>
                <span>{storageWarning}</span>
              </div>
            </div>
            {(storageStatus === "corrupted" || storageStatus === "unsupported_version") && (
              <div className={styles.recoveryBox}>
                <p className={styles.recoveryPrompt}>
                  Your raw storage payload has been preserved intact and was not overwritten. If you want to start fresh in this browser, you may reset the guestbook storage.
                </p>
                {!showResetConfirm ? (
                  <button
                    type="button"
                    onClick={() => setShowResetConfirm(true)}
                    className={styles.recoveryBtn}
                  >
                    Reset Guestbook on This Device
                  </button>
                ) : (
                  <div className={styles.confirmResetDialog} role="region" aria-label="Reset confirmation">
                    <p className={styles.confirmWarningText}>
                      Are you sure? This will permanently erase any saved wishes from this browser and reset storage to a fresh state.
                    </p>
                    <div className={styles.confirmBtnRow}>
                      <button
                        type="button"
                        onClick={handleConfirmReset}
                        className={styles.confirmDangerBtn}
                      >
                        Yes, Reset Storage
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowResetConfirm(false)}
                        className={styles.cancelResetBtn}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className={styles.guestbookGrid}>
          {/* Left Column: Form Card */}
          <div className={styles.formCard}>
            <div className={styles.formCardHeader}>
              <span className={styles.formCardIcon} aria-hidden="true">📖</span>
              <h3 className={styles.formCardTitle}>Tuck a Wish Into the Registry</h3>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="guestbook-name" className={styles.label}>
                    What shall we call you? <span aria-hidden="true">*</span>
                  </label>
                  <span
                    className={`${styles.charCount} ${name.length > MAX_NAME_LEN - 5 ? styles.charCountNearLimit : ""}`}
                    aria-live="polite"
                  >
                    {name.length}/{MAX_NAME_LEN}
                  </span>
                </div>
                <input
                  id="guestbook-name"
                  type="text"
                  required
                  minLength={MIN_NAME_LEN}
                  maxLength={MAX_NAME_LEN}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError(null);
                  }}
                  className={`${styles.input} ${nameError ? styles.inputError : ""}`}
                  placeholder="e.g. Sleepy Baker or Star Seeker"
                  aria-invalid={nameError ? "true" : "false"}
                  aria-describedby={nameError ? "guestbook-name-error" : undefined}
                />
                {nameError && (
                  <span id="guestbook-name-error" className={styles.errorMessage} role="alert">
                    {nameError}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="guestbook-message" className={styles.label}>
                    Your bedtime wish <span aria-hidden="true">*</span>
                  </label>
                  <span
                    className={`${styles.charCount} ${message.length > MAX_MSG_LEN - 20 ? styles.charCountNearLimit : ""}`}
                    aria-live="polite"
                  >
                    {message.length}/{MAX_MSG_LEN}
                  </span>
                </div>
                <textarea
                  id="guestbook-message"
                  required
                  minLength={MIN_MSG_LEN}
                  maxLength={MAX_MSG_LEN}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (messageError) setMessageError(null);
                  }}
                  className={`${styles.textarea} ${messageError ? styles.inputError : ""}`}
                  placeholder="Tell Pip about a dream you'd love to visit tonight..."
                  rows={4}
                  aria-invalid={messageError ? "true" : "false"}
                  aria-describedby={messageError ? "guestbook-message-error" : undefined}
                />
                {messageError && (
                  <span id="guestbook-message-error" className={styles.errorMessage} role="alert">
                    {messageError}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting || storageStatus !== "ready"}
                className={styles.submitBtn}
                title={storageStatus !== "ready" ? "Submissions are paused to protect stored data" : undefined}
                aria-disabled={isSubmitting || storageStatus !== "ready"}
              >
                <span>Tuck My Wish Into the Book ✦</span>
              </button>

              {/* Status Announcements */}
              {statusMessage && (
                <div
                  ref={statusRef}
                  role="status"
                  aria-live="polite"
                  className={statusMessage.type === "success" ? styles.statusSuccess : styles.statusError}
                >
                  <span aria-hidden="true">{statusMessage.type === "success" ? "✓" : "⚠️"}</span>
                  <span>{statusMessage.text}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Registry Entries */}
          <div className={styles.entriesCard}>
            <div className={styles.entriesCardHeader}>
              <div className={styles.entriesTitleGroup}>
                <span className={styles.entriesTitleIcon} aria-hidden="true">✦</span>
                <h3 className={styles.entriesCardTitle}>Nursery Dream Registry</h3>
              </div>
              <span className={styles.entriesCountBadge}>
                {isHydrated ? `${entries.length} ${entries.length === 1 ? "Wish" : "Wishes"} on this device` : "Loading..."}
              </span>
            </div>

            {isHydrated && entries.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon} aria-hidden="true">☁️</div>
                <p className={styles.emptyText}>
                  The pages are still waiting for their first little wish. Will you leave one?
                </p>
              </div>
            ) : (
              <ul className={styles.entriesList} aria-label="Bedtime wishes recorded in this browser">
                {entries.map((item) => (
                  <li key={item.id} className={styles.entryCard}>
                    <div className={styles.entryMeta}>
                      <div className={styles.entryAuthorGroup}>
                        <span className={styles.entryStar} aria-hidden="true">✦</span>
                        <strong className={styles.entryAuthor}>{item.name}</strong>
                      </div>
                      {item.timestamp && toSafeISOString(item.timestamp) && (
                        <time dateTime={toSafeISOString(item.timestamp)} className={styles.entryTime}>
                          {formatTimestamp(item.timestamp)}
                        </time>
                      )}
                    </div>
                    <p className={styles.entryMessage}>{item.message}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
