# Midjourney Prompt Directions — LBCC AI for Digital Transformation

This document provides ready-to-use Midjourney prompts for the eight kiosk carousel slides. Each prompt is crafted to produce a cinematic, editorial, human-centered image aligned with that slide's specific typography, palette, and narrative role.

---

## How to use this doc

1. Copy the **Primary prompt** for a slide into Midjourney.
2. Run it 1–2 times (4 images per run). Pick the strongest.
3. Upscale using Midjourney's upscaler (or the newer high-res upscaler for ≥3000px wide).
4. Export as **JPG at ~85% quality**, aim for **~1.5–2 MB** per image.
5. Save using the filename listed for that slide.
6. Drop the file into the project's `/images/` folder.
7. In `assets/slides.js`, set the slide's `image` field to `"images/FILENAME.jpg"` — the gradient placeholder gets replaced automatically.

---

## Universal parameters (append to every prompt)

```
--ar 16:9 --style raw --stylize 300 --no text, watermark, logo, signature, words, letters
```

- `--ar 16:9` matches hallway monitor and modern laptop aspect
- `--style raw` fights the over-processed default "AI art" look
- `--stylize 300` is moderate — keeps the set coherent without going cartoon
- `--no` list prevents Midjourney from inventing fake text/logos in the frame (it loves to do this)

Add `--v 7` (or whatever the current Midjourney version is) if you want to lock it.

---

## Universal style anchor (already baked into each prompt below)

> *cinematic editorial photograph, volumetric dawn light, deep shadows with rich warm highlights, shallow depth of field, subtle film grain, 35mm, human-centered emotion, hopeful and confident, high-end university brand campaign*

This language threads through every prompt so the eight slides read as one coherent film.

---

## Critical compositional rule

Every image needs **soft, darker negative space in the bottom-left third of the frame** — that's where the eyebrow, title, genres, and blurb sit on top of the image. If the subject crowds the bottom-left, the overlay text becomes unreadable.

Each prompt below includes explicit composition cues to keep that area clear. Don't remove them.

---

# The prompts

---

## Slide 1 — Hero: *"AI for Digital Transformation"*
**Typography:** Instrument Serif italic · **Palette:** midnight + dawn amber · **Filename:** `hero.jpg`

**What this image does:** Sets the entire tone. Warmth, possibility, diverse humans, Long Beach. This is *the* brand shot.

**Primary prompt:**
```
Wide cinematic portrait of a diverse group of adult learners — mid-20s to mid-50s, mixed ethnicities including Latina, Black, Asian, and white — gathered warmly around a softly glowing holographic workspace hovering above a table, a moment of shared discovery lit across their faces, golden dawn light pouring through floor-to-ceiling windows, Long Beach waterfront softly visible in distant morning haze, modern creative university classroom interior, subject group composed center-right of frame, soft darker atmospheric negative space in the bottom-left third for title overlay, cinematic editorial photograph, volumetric light, rich warm highlights and deep indigo shadows, shallow depth of field, 35mm film grain, hopeful confident tone, high-end university brand campaign --ar 16:9 --style raw --stylize 300 --no text, watermark, logo, signature, letters
```

---

## Slide 2 — AI 40: *Foundational AI & Machine Learning*
**Typography:** Fraunces · **Palette:** deep ocean + sky blue · **Filename:** `ai-40.jpg`

**What this image does:** Scholarly, contemplative discovery. The foundations are being laid.

**Primary prompt:**
```
Intimate cinematic portrait of a Latina woman in her early 30s studying a luminous floating diagram of interconnected data nodes and pathways, three-quarter profile view, deep blue ambient library-like lighting, warm amber key light catching her thoughtful face from stage left, morning haze and dust motes in the air, tall windows behind, sense of dawn discovery, subject composed center-right of frame, soft darker atmospheric negative space in the bottom-left third for title overlay, cinematic editorial photograph, volumetric light, shallow depth of field, 35mm film grain, hopeful contemplative tone, high-end university brand campaign --ar 16:9 --style raw --stylize 300 --no text, watermark, logo, signature, letters
```

*Variation: swap "Latina woman in her early 30s" for "Black woman in her late 20s" or "East Asian man in his 40s" for alternate takes.*

---

## Slide 3 — AI 45: *Generative AI*
**Typography:** Caprasimo ALL CAPS · **Palette:** violet twilight + coral · **Filename:** `ai-45.jpg`

**What this image does:** Creation from nothing. The creative act. Warm, expressive, bold.

**Primary prompt:**
```
Close-up cinematic shot of an artist's hands hovering just above a glowing luminous canvas, typed words visibly dissolving into abstract painted imagery mid-transformation, magenta and coral studio lighting pouring from behind the canvas, deep violet shadows wrapping around, a palpable moment of conjuring something from nothing, creative studio atmosphere with soft dust and faint smoke, hands composed center-right of frame, soft darker atmospheric negative space in the bottom-left third for title overlay, cinematic editorial photograph, rich warm highlights, shallow depth of field, 35mm film grain, creative wonder tone, high-end university brand campaign --ar 16:9 --style raw --stylize 350 --no text, watermark, logo, signature, letters
```

*Alternative framing: replace "artist's hands" with "a young artist in their 20s mid-gesture, expression of focused delight" for a face-forward version.*

---

## Slide 4 — AI 60: *Conversational & Agentic AI*
**Typography:** Syne 800 ALL CAPS · **Palette:** deep forest + luminous teal · **Filename:** `ai-60.jpg`

**What this image does:** Empathetic dialogue with AI. Conversation, presence, responsiveness.

**Primary prompt:**
```
Cinematic close-up portrait of a Black woman in her 40s mid-conversation with a softly luminous teal AI interface hovering beside her, expressive empathetic face half-lit by ambient cyan-teal glow, warm amber desk lamp light falling from behind her right shoulder, quiet modern workplace at dusk, deep forest-green shadows and atmospheric depth, sense of genuine dialogue and understanding, subject composed center-right of frame in three-quarter view, soft darker atmospheric negative space in the bottom-left third for title overlay, cinematic editorial photograph, shallow depth of field, 35mm film grain, intimate conversational mood, high-end university brand campaign --ar 16:9 --style raw --stylize 300 --no text, watermark, logo, signature, letters
```

---

## Slide 5 — AI 65: *Multi-Modal AI*
**Typography:** Unica One ALL CAPS · **Palette:** cosmic indigo + spectrum pink · **Filename:** `ai-65.jpg`

**What this image does:** Many senses converging. Prismatic, inclusive wonder. Light becoming meaning.

**Primary prompt:**
```
Surreal cinematic scene of a translucent glass prism suspended mid-air refracting a beam of dawn light into floating fragments — softly glowing image shards, text ribbons, sound waveforms, and ghostly video panels — a thoughtful Southeast Asian university student in their 20s standing in profile nearby, hand raised in quiet wonder, deep indigo-to-lavender-pink gradient atmosphere, cosmic dust and volumetric light beams, prismatic ambient glow, subject and prism composed center-right of frame, soft darker atmospheric negative space in the bottom-left third for title overlay, cinematic editorial photograph, shallow depth of field, 35mm film grain, inclusive wondrous tone, high-end university brand campaign --ar 16:9 --style raw --stylize 400 --no text, watermark, logo, signature, letters
```

---

## Slide 6 — AI 70: *Human–AI Collaboration*
**Typography:** Cormorant Garamond italic · **Palette:** bronze + warm honey · **Filename:** `ai-70.jpg`

**What this image does:** Partnership and craft. Two kinds of intelligence working in rhythm.

**Primary prompt:**
```
Cinematic overhead close-up of two pairs of hands working in rhythm on a shared warmly-lit workspace — one set of warm human hands, one set subtly luminous suggesting AI presence — arranging a connected constellation of tasks, sticky notes, and softly glowing workflow nodes, warm honey-gold key light, deep bronze shadows, tactile paper and wood textures, sense of duet and collaborative craft, composition centered-right of frame, soft darker atmospheric negative space in the bottom-left third for title overlay, cinematic editorial photograph, shallow depth of field, 35mm film grain, warm partnership mood, high-end university brand campaign --ar 16:9 --style raw --stylize 300 --no text, watermark, logo, signature, letters
```

---

## Slide 7 — AI 80: *AI Integration Studio* (Capstone)
**Typography:** Playfair Display Black · **Palette:** deep emerald + harvest gold · **Filename:** `ai-80.jpg`

**What this image does:** Triumph. Achievement. The capstone reveal. Pride of finished work.

**Primary prompt:**
```
Cinematic editorial portrait of a confident Middle Eastern man in his mid-30s presenting a working AI project onstage to a softly blurred supportive audience of peers and industry panelists, emerald green and harvest gold stage lighting, dramatic volumetric beams from above, a glowing project display behind him, moment of pride and capstone reveal, subject composed center-right of frame in three-quarter view, soft out-of-focus audience silhouettes receding into darkness, soft darker atmospheric negative space in the bottom-left third for title overlay, cinematic editorial photograph, shallow depth of field, 35mm film grain, triumphant celebratory tone, high-end university brand campaign --ar 16:9 --style raw --stylize 300 --no text, watermark, logo, signature, letters
```

---

## Slide 8 — CTA: *"Start this fall. Finish career-ready."*
**Typography:** Bebas Neue ALL CAPS · **Palette:** midnight + dawn amber (closes the loop with the hero) · **Filename:** `enroll-cta.jpg`

**What this image does:** Momentum. Quiet confidence. The threshold crossed.

**Primary prompt:**
```
Cinematic wide shot of a silhouetted adult learner stepping forward through a warm glowing doorway of light toward a dawn horizon, soft Long Beach skyline faintly visible through morning amber haze, deep navy foreground transitioning upward into sunrise gold and amber sky, posture of quiet confident momentum, figure composed center-right of frame mid-stride, soft darker atmospheric negative space in the bottom-left third for title overlay, cinematic editorial photograph, shallow depth of field, 35mm film grain, hopeful momentum mood, high-end university brand campaign --ar 16:9 --style raw --stylize 300 --no text, watermark, logo, signature, letters
```

---

# Consistency tips

- **Regenerate with the same seed** (`--seed NNNN`) if you find a composition you like and want minor variations. Midjourney shows the seed in the job details.
- **Run all eight prompts in one session** if you can — Midjourney's state drifts slightly day to day, and same-session generations tend to feel more cohesive.
- **If any slide feels off-tone** relative to the others, try adjusting `--stylize` up or down by 50–100 and regenerate.
- **Keep a backup of unused generations** — some may look better once you see them in context with real overlaid typography. What looks weak alone may shine under the title.
- **Check the bottom-left on every image before committing** — if the subject or bright lighting crowds that corner, the overlay text won't survive. Regenerate rather than work around it.

---

# Demographic distribution across the set

The prompts deliberately spread representation across the eight slides:

- Slide 1 (Hero): diverse group, ages 20s–50s, mixed ethnicities
- Slide 2 (AI 40): Latina woman, 30s *(swap suggestions included)*
- Slide 3 (AI 45): hands only (identity-agnostic)
- Slide 4 (AI 60): Black woman, 40s
- Slide 5 (AI 65): Southeast Asian student, 20s
- Slide 6 (AI 70): hands (two skin tones, identity-agnostic)
- Slide 7 (AI 80): Middle Eastern man, 30s
- Slide 8 (CTA): silhouette (identity in posture only)

Feel free to rebalance — Midjourney's output varies and you may want different representation in any given run. The goal is a set that reflects LBCC's actual student population.

---

Program lead: **Vincent Calip**  ·  AI for Digital Transformation  ·  Long Beach City College
