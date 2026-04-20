/* ============================================================
   CAROUSEL LOGIC
   - Reads SLIDES from slides.js
   - Renders slides, dots, and course cards
   - Handles auto-advance, click-to-jump, keyboard nav
   - Detects ?kiosk=1 URL param for hallway-display mode
   ============================================================ */

(function () {
  "use strict";

  // --- Kiosk mode detection --------------------------------------
  const params = new URLSearchParams(window.location.search);
  const isKiosk = params.get("kiosk") === "1" || params.get("kiosk") === "true";
  if (isKiosk) document.body.classList.add("is-kiosk");

  // --- Build placeholder gradient (stand-in for Midjourney image)
  function paletteGradient(palette, dir) {
    const [a, b, c] = palette;
    // Position the radial highlights based on pan direction for richer feel
    const positions = {
      nw: ["20% 20%", "80% 70%"],
      ne: ["80% 20%", "20% 70%"],
      sw: ["20% 80%", "80% 30%"],
      se: ["80% 80%", "20% 30%"]
    };
    const [p1, p2] = positions[dir] || positions.nw;
    return `
      radial-gradient(ellipse at ${p1}, ${c}55 0%, transparent 55%),
      radial-gradient(ellipse at ${p2}, ${b}88 0%, transparent 60%),
      linear-gradient(135deg, ${a} 0%, ${b} 60%, ${a} 100%)
    `;
  }

  // --- Render slides ---------------------------------------------
  const slidesEl = document.getElementById("slides");
  const dotsEl   = document.getElementById("dots");
  const progressEl = document.getElementById("progressBar");

  SLIDES.forEach((s, i) => {
    const slide = document.createElement("article");
    slide.className = "slide";
    slide.setAttribute("data-pan", s.panDirection || "nw");
    slide.setAttribute("aria-hidden", "true");

    // Background — either a Midjourney image or a gradient stand-in
    const bgStyle = s.image
      ? `background-image: url('${s.image}');`
      : `background: ${paletteGradient(s.palette, s.panDirection)};`;

    // Tags render as inline bullet-separated text (movie-poster genre line)
    const tagsHtml = (s.tags || []).map(t => `<span class="slide__tag">${t}</span>`).join("");

    // Title classes: per-slide font + case + italic
    const titleClasses = [
      "slide__title",
      s.font ? `f-${s.font}` : "",
      s.titleCase === "upper" ? "is-upper" : "",
      s.italic ? "is-italic" : ""
    ].filter(Boolean).join(" ");

    const ctaHtml = s.cta && s.href
      ? `<div class="slide__cta"><a class="slide__cta-btn" href="${s.href}">${s.cta}</a></div>`
      : "";

    slide.innerHTML = `
      <div class="slide__bg" style="${bgStyle}"></div>
      <div class="slide__vignette"></div>
      <div class="slide__grain"></div>
      <div class="slide__meta">
        <span class="slide__eyebrow">${s.eyebrow}</span>
        <h1 class="${titleClasses}">${s.title}</h1>
        <p class="slide__tags">${tagsHtml}</p>
        <p class="slide__hook">${s.hook}</p>
      </div>
      ${ctaHtml}
    `;

    slidesEl.appendChild(slide);

    // Dot
    const dot = document.createElement("button");
    dot.className = "stage__dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}: ${s.title}`);
    dot.addEventListener("click", () => goTo(i, true));
    dotsEl.appendChild(dot);
  });

  const slideEls = Array.from(slidesEl.children);
  const dotEls   = Array.from(dotsEl.children);

  // --- Slide engine ----------------------------------------------
  let idx = 0;
  let timerId = null;
  let transitionId = null;
  let progressStart = 0;
  let progressRaf = null;
  let paused = false;

  // Total off-time between two slides (fade-out + black pause + fade-in)
  const TRANSITION_MS = FADE_OUT_MS + BLACK_PAUSE_MS;

  function activate(i) {
    slideEls.forEach((el, n) => {
      const on = n === i;
      el.classList.toggle("is-active", on);
      el.setAttribute("aria-hidden", on ? "false" : "true");
    });
    dotEls.forEach((el, n) => el.classList.toggle("is-active", n === i));
  }

  function deactivateAll() {
    slideEls.forEach(el => {
      el.classList.remove("is-active");
      el.setAttribute("aria-hidden", "true");
    });
    dotEls.forEach(el => el.classList.remove("is-active"));
  }

  function tickProgress() {
    const elapsed = performance.now() - progressStart;
    const pct = Math.min(100, (elapsed / SLIDE_DURATION_MS) * 100);
    progressEl.style.width = pct + "%";
    if (pct < 100 && !paused) progressRaf = requestAnimationFrame(tickProgress);
  }

  function startTimer() {
    stopTimer();
    progressStart = performance.now();
    progressEl.style.width = "0%";
    progressRaf = requestAnimationFrame(tickProgress);
    timerId = setTimeout(() => goTo(idx + 1), SLIDE_DURATION_MS);
  }

  function stopTimer() {
    if (timerId) { clearTimeout(timerId); timerId = null; }
    if (transitionId) { clearTimeout(transitionId); transitionId = null; }
    if (progressRaf) { cancelAnimationFrame(progressRaf); progressRaf = null; }
  }

  // Fade-to-black transition: current slide fades out, brief black pause,
  // then the target slide fades in. No cross-fade overlap.
  function goTo(n, userInitiated) {
    const next = ((n % SLIDES.length) + SLIDES.length) % SLIDES.length;
    stopTimer();

    // Trigger fade-out on all slides
    deactivateAll();

    // After fade-out + black pause, activate the next slide
    transitionId = setTimeout(() => {
      idx = next;
      activate(idx);
      if (!paused) startTimer();
    }, FADE_OUT_MS + BLACK_PAUSE_MS);
  }

  // --- Kickoff ---------------------------------------------------
  activate(0);
  startTimer();

  // --- Interaction (non-kiosk only) ------------------------------
  if (!isKiosk) {
    // Pause carousel on hover of the stage
    const stage = document.getElementById("stage");
    stage.addEventListener("mouseenter", () => {
      paused = true;
      stopTimer();
    });
    stage.addEventListener("mouseleave", () => {
      paused = false;
      startTimer();
    });

    // Keyboard: arrow keys
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") goTo(idx + 1, true);
      else if (e.key === "ArrowLeft") goTo(idx - 1, true);
    });
  }

  // --- Render course grid (web mode only) -----------------------
  const courseGrid = document.getElementById("courseGrid");
  if (courseGrid) {
    const COURSES = SLIDES.filter(s => s.id !== "hero" && s.id !== "enroll-cta");
    COURSES.forEach(c => {
      const card = document.createElement("article");
      card.className = "course-card";
      card.id = `course-${c.id}`;
      const tagsHtml = (c.tags || []).map(t => `<span class="course-card__tag">${t}</span>`).join("");
      card.innerHTML = `
        <div class="course-card__eyebrow">${c.eyebrow}</div>
        <h3 class="course-card__title">${c.title}</h3>
        <p class="course-card__desc">${c.hook}</p>
        <p class="course-card__tags">${tagsHtml}</p>
        <div class="course-card__meta">
          <span>3 units</span>
          <span>54 lecture hours</span>
          <span>Max 40 students</span>
        </div>
      `;
      courseGrid.appendChild(card);
    });
  }
})();
