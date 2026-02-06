# AURA Website Design System

> **Philosophy:** "The Void & The Mirage"
> AURA is not just a tool; it is a digital entity living in the void. It emerges from the darkness (The Void) as a glowing, sentient interface (The Mirage).

---

## 🎨 Color Palette

The AURA palette is built on high-contrast neon accents against a deep, absolute black background.

### The Void (Backgrounds)
| Name | Hex | Usage |
|------|-----|-------|
| **Void** | `#000000` | Main background color. Absolute black. |
| **Void Soft** | `#0A0A0A` | Card backgrounds, slightly elevated surfaces. |
| **Void Lighter** | `#111111` | Headers, secondary cards. |

### The Mirage (Primary Accents)
| Name | Hex | Preview | Usage |
|------|-----|---------|-------|
| **Halo** | `#00F0FF` | 🔵 **Cyan** | Primary brand color. Used for AURA Core, energy fields, and active states. Represents intelligence and speed. |
| **Heartbeat** | `#FF4D6D` | 🔴 **Pink** | Action color. Used for primary buttons ("Initialize", "Voice"). Represents the "living" aspect of AURA. |
| **Tether** | `#5D5FEF` | 🟣 **Purple** | Connectivity color. Used for logic, memory, and deep processing visualizations. |

### Neutral Tones
| Name | Hex | Usage |
|------|-----|-------|
| **Gray 100** | `#F5F5F5` | Primary text, headings. |
| **Gray 400** | `#A3A3A3` | Secondary text, subtitles. |
| **Gray 600** | `#525252` | Borders, subtle dividers. |

---

## 🔤 Typography

We use a modern, geometric font stack to convey precision and futurism.

### 1. Headline Font: **Outfit**
*   **Weights:** Bold (700), ExtraBold (800)
*   **Usage:** Hero titles, Section headers.
*   **Characteristics:** Geometric, tall x-height, modern sans-serif.

### 2. Body Font: **Manrope**
*   **Weights:** Regular (400), Medium (500)
*   **Usage:** Paragraphs, UI labels, buttons.
*   **Characteristics:** Clean, highly readable, semi-geometric.

### 3. Monospace: **Jura / JetBrains Mono**
*   **Weights:** Regular (400)
*   **Usage:** Code snippets, technical specs, "terminal" style text.
*   **Characteristics:** Technical, robotic, precise.

---

## 💎 Design Elements

### Glassmorphism
Elements float above the void using a sophisticated glass effect.
*   **Background:** 3% White opacity
*   **Border:** 8% White opacity (1px)
*   **Backdrop Blur:** 12px
*   **Effect:** Creates depth and layer separation without blocking the background entirely.

### "Ice" Physics
Animations follow a specific "Ice" physics model—smooth acceleration with a long, gliding deceleration.
*   **Feel:** Frictionless, high-inertia, premium.
*   **Curve:** `cubic-bezier(0.16, 1, 0.3, 1)`
*   **Usage:** Hover states, page transitions, revealing elements.

### The AURA Core
The central visual element of the brand.
*   **Composition:** A glowing central sphere surrounded by rotating energy rings.
*   **Behavior:** "Breathes" (pulses) rhythmically to simulate life.
*   **Interactivity:** Reacts to scroll speed (spins faster) and mouse movement (parallax depth).

---

## 🖼️ Brand Assets

### Logo
*   **Icon:** A white/cyan circular mark representing the AURA Core.
*   **Wordmark:** "AURA" in **Outfit** Bold, tracking wide.
*   **Favicon:** The AURA circular icon.

### Imagery
*   **No Photos:** The site relies entirely on CSS-generated abstract shapes, gradients, and icons.
*   **Ambient Orbs:** Large, blurred colored orbs (Cyan, Purple, Pink) float in the background to create atmospheric lighting.

---

## 📱 Layout Structure

1.  **Hero Section:** Full-screen immersive experience. Centered AURA Core. Value proposition.
2.  **Speed Comparison:** Side-by-side terminal windows comparing AURA vs. Competitors.
3.  **Story Timeline:** Vertical line connecting "Task Handoff" -> "Background Processing" -> "Callback".
4.  **AURA Router:** Visual diagram of the 3-path routing system (Fast Track, Deep Think, Agentic).
5.  **Memory Tiers:** Grid layout showing Short-term vs. Long-term memory capabilities.
6.  **Tool Store:** Grid of glass cards representing integrations (Calendar, Email, etc.).
7.  **Voice Interface:** Audio visualizer wave effect.

---

## 🚀 Deployment & Tech Stack

*   **Framework:** Astro (Static Site Generator)
*   **Styling:** Vanilla CSS (Variables + Flexbox/Grid)
*   **Icons:** Lucide Icons
*   **Hosting:** GitHub Pages
*   **Domain:** `encresa.com`
