/* ============================================================
   SLIDE CONTENT — edit this file to change what appears on screen
   ============================================================
   Each slide has:
     - id:        unique identifier (used for CSS targeting + anchor)
     - eyebrow:   small label above title — the course ID (AI 40, etc.)
                  Rendered with a leading em-dash by CSS.
     - title:     main headline — short marketing title
     - titleCase: "title" | "upper"  (controls text-transform)
     - font:      "instrument" | "fraunces" | "caprasimo" | "syne"
                  | "unicaone"  | "cormorant" | "playfair" | "bebas"
     - italic:    optional boolean, for italicized display fonts
     - tags:      array of 2–4 genre-style tags (rendered bullet-separated)
     - hook:      one-sentence blurb under the title
     - cta:       text on the Learn more button (set "" to hide; kiosk hides anyway)
     - href:      where Learn more scrolls/links to (anchor or URL)
     - image:     path to Midjourney image; until then `palette` drives a gradient
     - palette:   [colorA, colorB, colorC] for the placeholder gradient
     - panDirection: "nw" | "ne" | "sw" | "se" | "out"
                     "nw/ne/sw/se" subtly pan the image in that corner direction.
                     "out" pulls back from a slight zoom — a "reveal" effect for closers.
   ============================================================ */

const SLIDES = [
  {
    id: "hero",
    eyebrow: "Long Beach City College",
    title: "AI for Digital Transformation",
    titleCase: "title",
    font: "instrument",
    italic: true,
    tags: ["Associate of Science", "No coding required", "Workforce-ready", "Transferable"],
    hook: "Six courses. Real tools. Real careers. Start where you are.",
    cta: "Explore the program",
    href: "#program",
    image: "images/hero.jpg",
    palette: ["#0b0f1c", "#1e293b", "#f4a259"],
    panDirection: "nw"
  },
  {
    id: "ai-40",
    eyebrow: "AI 40",
    title: "Foundational AI & Machine Learning",
    titleCase: "title",
    font: "fraunces",
    tags: ["Beginner-friendly", "Ethics-first", "Hands-on"],
    hook: "Make sense of AI — then evaluate, apply, and question it across business, education, and healthcare.",
    cta: "Course details",
    href: "#course-ai-40",
    image: "images/ai-40.jpg",
    palette: ["#020617", "#0369a1", "#7dd3fc"],
    panDirection: "ne"
  },
  {
    id: "ai-45",
    eyebrow: "AI 45",
    title: "Generative AI",
    titleCase: "upper",
    font: "caprasimo",
    tags: ["Creative", "Prompt engineering", "No-code"],
    hook: "Text, image, and audio generation — from the models behind them to the prompts that make them sing.",
    cta: "Course details",
    href: "#course-ai-45",
    image: "images/ai-45.jpg",
    palette: ["#1e0b3e", "#7c2d92", "#fb7185"],
    panDirection: "se"
  },
  {
    id: "ai-60",
    eyebrow: "AI 60",
    title: "Conversational & Agentic AI",
    titleCase: "upper",
    font: "syne",
    tags: ["Chatbots", "Autonomous agents", "User-centered design"],
    hook: "Design, build, and deploy AI assistants that talk, reason, and get work done — responsibly.",
    cta: "Course details",
    href: "#course-ai-60",
    image: "images/ai-60.jpg",
    palette: ["#042f2e", "#115e59", "#5eead4"],
    panDirection: "sw"
  },
  {
    id: "ai-65",
    eyebrow: "AI 65",
    title: "Multi-Modal AI",
    titleCase: "upper",
    font: "unicaone",
    tags: ["Vision + Language", "Audio + Video", "Accessibility-first"],
    hook: "When AI sees, hears, and speaks at once — build inclusive tools that work across every modality.",
    cta: "Course details",
    href: "#course-ai-65",
    image: "images/ai-65.jpg",
    palette: ["#1e1b4b", "#581c87", "#fda4af"],
    panDirection: "ne"
  },
  {
    id: "ai-70",
    eyebrow: "AI 70",
    title: "Human–AI Collaboration",
    titleCase: "title",
    font: "cormorant",
    italic: true,
    tags: ["Productivity", "Workflow automation", "RAG + agents"],
    hook: "Map workflows, chain AI with the tools you already use, and multiply what one person can do.",
    cta: "Course details",
    href: "#course-ai-70",
    image: "images/ai-70.jpg",
    palette: ["#1c1917", "#78350f", "#fbbf24"],
    panDirection: "nw"
  },
  {
    id: "ai-80",
    eyebrow: "AI 80",
    title: "AI Integration Studio",
    titleCase: "title",
    font: "playfair",
    tags: ["Capstone", "Portfolio project", "Industry-ready"],
    hook: "Ship a real-world AI solution end-to-end. Walk out with a portfolio employers want to see.",
    cta: "Course details",
    href: "#course-ai-80",
    image: "images/ai-80.jpg",
    palette: ["#052e16", "#166534", "#facc15"],
    panDirection: "se"
  },
  {
    id: "enroll-cta",
    eyebrow: "Now enrolling",
    title: "Your turn.",
    titleCase: "title",
    font: "instrument",
    italic: true,
    tags: ["Stackable certificates", "60 units", "Financial aid eligible"],
    hook: "Built for working adults, career-changers, and anyone the AI wave is reshaping — which is everyone.",
    cta: "How to enroll",
    href: "#enroll",
    image: "images/enroll-cta.jpg",
    palette: ["#0b0f1c", "#334155", "#f4a259"],
    panDirection: "out"
  }
];

/* ============================================================
   SLIDE TIMING — edit these to change pace
   ============================================================
   Each slide follows this cycle:
   1. Fade in from black         (FADE_IN_MS)
   2. Sequenced text reveal      (eyebrow → title → tags → hook)
   3. Hold with Ken Burns pan    (remainder of SLIDE_DURATION_MS)
   4. Fade out to black          (FADE_OUT_MS)
   5. Black pause                (BLACK_PAUSE_MS)
   ============================================================ */
const SLIDE_DURATION_MS = 8000;   // total visible time: fade-in + reveal + hold + fade-out
const FADE_IN_MS        = 700;
const FADE_OUT_MS       = 800;
const BLACK_PAUSE_MS    = 400;    // black gap between slides
