# Pip's Midnight Nursery — Official Asset Inventory

**Date of Verification:** 2026-10-18  
**Source Origin:** `https://hax.baby/baby/assets/`  
**License / Terms:** 100% free and approved for haX.baby hackathon use (per official `README.txt`). Cropping, resizing, animation, and CSS filters are explicitly authorized.  
**Handbook Reference:** [IMPLEMENTATION_HANDBOOK.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/IMPLEMENTATION_HANDBOOK.md) Section 5  

---

## 1. Primary Standalone Assets (`public/assets/`)

These four official studio renders were downloaded directly and verified against their HTTP headers and binary signatures:

| Filename | Format | Magic Signature | Pixel Dimensions | File Size | Intended Role & Placement |
|---|:---:|:---:|:---:|---:|---|
| [`pip_avatar_cloud.png`](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/public/assets/pip_avatar_cloud.png) | PNG | `89 50 4E 47` (Valid) | **896 × 1090** | 659,279 bytes (~644 KB) | **Hero / Welcome (Dream Gate):** Pip floating on a dream cloud waving a tiny hand. Focal character hook. |
| [`pip_lullaby_box.png`](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/public/assets/pip_lullaby_box.png) | PNG | `89 50 4E 47` (Valid) | **1024 × 924** | 806,440 bytes (~788 KB) | **Invention 1 (Lullaby Lab):** Music box with golden winding key and star chimes for interactive audio. |
| [`pip_dream_lantern.png`](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/public/assets/pip_dream_lantern.png) | PNG | `89 50 4E 47` (Valid) | **1024 × 914** | 742,252 bytes (~725 KB) | **Invention 2 (Nightlight Atelier):** Glowing crescent moon lantern for interactive lighting mood controls. |
| [`pip_portrait.png`](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/public/assets/pip_portrait.png) | PNG | `89 50 4E 47` (Valid) | **682 × 1024** | 608,118 bytes (~594 KB) | **Meet Pip Section:** Official studio portrait presenting Pip's canon, nightcap, pink bow, and smile. |

---

## 2. Official Asset Pack Archive (`track1-pip-asset-pack.zip`)

- **File Path:** [`public/assets/track1-pip-asset-pack.zip`](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/public/assets/track1-pip-asset-pack.zip)
- **Archive Size:** 3,553,498 bytes (~3.39 MB)
- **HTTP Status:** 200 OK
- **Archive Integrity:** Verified valid via `System.IO.Compression.ZipFile` (CRC / stream reading passed with zero errors).

### Archive Contents (9 Entries):

| Entry Name | Uncompressed Size | Compressed Size | Format / Content |
|---|---:|---:|---|
| `README.txt` | 843 bytes | 503 bytes | Official usage terms, attribution approval, and asset descriptions. |
| `pip_avatar_cloud.jpg` | 133,264 bytes | 132,280 bytes | 896 × 1090 JPEG (High-performance lightweight alternative, ~80% smaller than PNG). |
| `pip_avatar_cloud.png` | 732,409 bytes | 683,788 bytes | 896 × 1090 PNG (Full alpha studio render). |
| `pip_dream_lantern.jpg` | 126,582 bytes | 125,754 bytes | 1024 × 914 JPEG (Lightweight mobile alternative). |
| `pip_dream_lantern.png` | 826,675 bytes | 791,024 bytes | 1024 × 914 PNG (Full alpha studio render). |
| `pip_lullaby_box.jpg` | 145,566 bytes | 144,748 bytes | 1024 × 924 JPEG (Lightweight mobile alternative). |
| `pip_lullaby_box.png` | 887,578 bytes | 850,898 bytes | 1024 × 924 PNG (Full alpha studio render). |
| `pip_portrait.jpg` | 166,445 bytes | 165,801 bytes | 682 × 1024 JPEG (Lightweight mobile alternative). |
| `pip_portrait.png` | 716,309 bytes | 657,672 bytes | 682 × 1024 PNG (Full alpha studio render). |

---

## 3. Extraction Decision & Storage Policy

- **Policy:** As prescribed in [IMPLEMENTATION_HANDBOOK.md](file:///c:/Users/MD%20ASIF/Projects/pip-midnight-nursery/IMPLEMENTATION_HANDBOOK.md) Section 5 and Section 6.3, avoid creating redundant file duplication.
- **Action:**
  1. The four standalone PNG assets reside at the root of `public/assets/` where they can be directly referenced by Next.js image components (e.g. `/assets/pip_avatar_cloud.png`).
  2. The archive `track1-pip-asset-pack.zip` is preserved intact as the official distribution package.
  3. `README.txt` was extracted to `public/assets/OFFICIAL_ASSET_README.txt` to ensure licensing and usage permissions remain permanently documented in source control.
  4. Full extraction of redundant duplicate PNGs was declined to keep the repository lightweight. JPEG versions remain accessible inside the archive for performance optimization if needed during later mobile audits.
