# Antigravity Workflow & Engineering Governance Rules

**Project:** Pip's Midnight Nursery  
**Authoritative Handbook:** [IMPLEMENTATION_HANDBOOK.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/IMPLEMENTATION_HANDBOOK.md)  
**Living Context:** [PROJECT_CONTEXT.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/PROJECT_CONTEXT.md)  
**Effective Date:** 2026-10-18

---

## 1. Core Operating Principles

These rules are permanent operational guardrails governing every phase, subagent, and implementation cycle in this project.

1. **Handbook as Single Source of Truth:**
   - [IMPLEMENTATION_HANDBOOK.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/IMPLEMENTATION_HANDBOOK.md) is the final source of truth for scope, canon, aesthetics, architecture, and acceptance criteria.
   - [PROJECT_CONTEXT.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/PROJECT_CONTEXT.md) is the living status reference.
   - Never overwrite, truncate, or invent handbook contents.

2. **Phase Discipline & Scope Boundaries:**
   - Execute only the current authorized phase. Never jump ahead to future phases without explicit approval.
   - Reject premature feature implementation (e.g., scaffolding full applications or installing libraries before architecture/assets are validated).

3. **Evidence Over Assumptions:**
   - Never claim success without observable, verifiable proof (command exit codes, build logs, file existence, test outputs, browser rendering).
   - Use three strict statuses in reporting:
     - **Verified:** Supported by tangible command output, inspected file contents, or test results.
     - **Not Verified:** Planned, assumed, or pending execution.
     - **Blocked:** Prevented by a missing credential, missing permission, or unverified prerequisite.

---

## 2. Pre-Execution Protocol (Every Prompt / Every Phase)

Before writing or modifying a single line of code in any session:

1. **Read Authoritative Documents:**
   - Review [IMPLEMENTATION_HANDBOOK.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/IMPLEMENTATION_HANDBOOK.md) completely or check relevant sections against the current phase.
   - Read [PROJECT_CONTEXT.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/PROJECT_CONTEXT.md) and this [ANTIGRAVITY_WORKFLOW.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/ANTIGRAVITY_WORKFLOW.md).
2. **Inspect Workspace & Git State:**
   - Run `git status`, verify branch, inspect working tree, check uncommitted changes.
   - Inspect files present in the project directory before assuming files exist or are absent.
3. **Verify Phase Acceptance Criteria:**
   - Confirm the exact deliverables, constraints, and criteria of the current phase.
4. **Identify Conflicts or Ambiguities:**
   - If requirements conflict across documents, pause and flag the conflict to the user. Do not make silent assumptions.

---

## 3. Engineering & Code Standards

1. **Minimal, Incremental, Reviewable Changes:**
   - Write clean, modular, self-contained code.
   - Avoid monolithic edits or massive indiscriminate refactors.
   - Keep pull requests and commits atomic and tied to specific milestones.

2. **Character Canon & Creative Integrity:**
   - Maintain Pip's canon: gentle, sleepy, round skull baby with warm amber eye-lights, pink bow, nightcap, and friendly demeanor.
   - Strictly prohibit horror, grotesque, or eerie visual tropes.
   - Avoid generic AI-generated templates (monotonous card grids, neon cyberpunk accents, unmotivated glassmorphism, floating purple blobs).

3. **Performance & Progressive Enhancement:**
   - Layered 2D graphics and lightweight SVG/CSS are primary.
   - 3D is strictly selective and stretch-only; core application must render fast and be fully functional without 3D or WebGL.
   - Lazy-load heavy components, optimize image assets, and avoid blocking first paint.

4. **Accessibility & Responsive Sound Rules:**
   - Full keyboard accessibility and visible focus indicators for all interactive controls.
   - Respect `prefers-reduced-motion` across all animations and transitions.
   - No audio autoplay under any circumstances.
   - Audio must feature an easily discoverable, universal mute control with persistent state.

5. **Secrets & Security:**
   - Never commit API keys, service-role tokens, or credentials into source control.
   - Store secrets only in `.env.local` (ensuring `.gitignore` excludes them).
   - Sanitize and validate all user inputs in guestbook interactions.

---

## 4. Collaboration & Git Safety

1. **Teammate Respect:**
   - Coordinate file ownership between Team Member A (`mdasif-x1`) and Team Member B (`mohdasif-v1`).
   - Never overwrite, delete, or rewrite a teammate's commits or files without explicit review.
2. **Git Integrity:**
   - Never force-push (`git push --force`) to shared branches.
   - Never invent or fabricate commits, timestamps, or authors.
   - All commits must represent genuine work within the hackathon timeframe.

---

## 5. Post-Execution & Phase Wrap-up Protocol

At the conclusion of each phase:

1. **Run Verification Commands:**
   - Run linter, type checks, and production build checks.
   - Check browser console for errors or unhandled warnings.
2. **Synchronize Documentation:**
   - Update the progress table and verified state in [PROJECT_CONTEXT.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/PROJECT_CONTEXT.md).
   - Log decisions and outcomes in [IMPLEMENTATION_HANDBOOK.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/IMPLEMENTATION_HANDBOOK.md) if architecture or scope changed.
3. **Generate Evidence-Based Report:**
   - Present inspected files, created/modified files, exact command outputs, and verified criteria.
   - Recommend exactly **one** next phase with clear scope and acceptance criteria.
   - Await explicit user authorization before proceeding.
