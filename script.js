(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const games = S.work.filter((w) => w.kind === "game");
  const photos = S.work.filter((w) => w.kind === "photo");
  const ordered = [...games, ...photos];
  const emailText = `${S.email.user}[at]${S.email.domain}`;

  /* ---------- shared pieces ---------- */
  const media = (w) =>
    w.cover
      ? `<img src="${esc(w.cover)}" alt="${esc(w.title)}" loading="lazy"${w.pos ? ` style="object-position:${esc(w.pos)}"` : ""}>`
      : `<div class="title-card" style="--c:${esc(w.accent || "#f0ede6")}"><small><span>${esc(w.year || "")}</span><span>${esc(w.kind)}</span></small><i></i><b>${esc(w.title)}</b></div>`;

  const card = (w, i) => `
    <a class="work-card fade-up" href="#/work/${slug(w.title)}">
      <div class="media">${media(w)}</div>
      <div class="work-meta"><div class="work-num">(${pad(i + 1)})</div><div class="work-title">${esc(w.title)}</div><div class="work-tag">${esc(w.tag)}</div></div>
    </a>`;

  const meta = (l, r) => `<div class="section-meta"><span>${l}</span><span>${r}</span></div>`;

  const footer = () => `
    <footer>
      <div class="footer-top">
        <div class="poem fade-up">${S.poem.map((l) => `<p>${l}</p>`).join("")}</div>
        <div class="footer-links fade-up">
          <h4>Quick Links</h4>
          <ul>${["Home", "Profile", "Work", "Contact"].map((p) => `<li><a class="scramble" href="#/${p === "Home" ? "" : p.toLowerCase()}">${p}</a></li>`).join("")}<li><a class="scramble" href="${esc(S.cvPage)}">CV</a></li></ul>
          <h4>Networks</h4>
          <ul>${S.networks.map(([n, u]) => `<li><a class="scramble" href="${esc(u)}" target="_blank" rel="noopener">${n}</a></li>`).join("")}</ul>
        </div>
      </div>
      <div class="footer-bottom"><span>©${new Date().getFullYear()} ${esc(S.name)}</span><a href="#top" data-top>Back to top ↑</a></div>
    </footer>`;

  /* ---------- pages ---------- */
  const pages = {
    home: () => `
      <section id="hero">
        <div class="hero-top">
          <h1 class="hero-title">${esc(S.name.split(" ")[0])}<br>${esc(S.name.split(" ").slice(1).join(" "))}<span class="deg">°</span></h1>
          <div class="hero-side">${esc(S.role)}<br>${esc(S.location)}<br><span id="clock">--:--:--</span> PT</div>
        </div>
        <div class="salon">${S.gallery.map((src, i) => `
          <button class="frame" data-lb aria-label="Open photo ${i + 1}">
            <img src="${esc(src)}" alt="Photo by ${esc(S.name)}" loading="${i < 6 ? "eager" : "lazy"}"><span class="idx"></span>
          </button>`).join("")}</div>
      </section>
      ${meta("© Work", "PG* — 03")}
      <section class="work-wrap">
        <div class="work-header fade-up"><h2 class="big">Featured<br>Work</h2><a class="see-all" href="#/work">See all works →</a></div>
        <div class="work-grid">${S.work.filter((w) => w.featured).map(card).join("")}</div>
      </section>
      ${meta("© Shots", "PG* — 05")}
      <section class="work-wrap">
        <div class="work-header fade-up"><h2 class="big">Photo<br>graphy</h2><a class="see-all" href="#/work">See all photos →</a></div>
        <div class="work-grid">${S.work.filter((w) => w.featuredPhoto).map(card).join("")}</div>
      </section>
      ${meta("© Help Center", "PG* — 07")}
      <section class="faq">
        <h2 class="big fade-up">FAQ.</h2>
        <div class="faq-grid">
          <div class="faq-img fade-up${S.faqImageCrop === false ? " uncropped" : ""}"><img src="${esc(S.faqImage || S.gallery[0])}" alt="" loading="lazy"></div>
          <div>${S.faq.map(([q, a]) => `
            <div class="faq-item fade-up"><button class="faq-q" aria-expanded="false"><span>${esc(q)}</span><span class="faq-icon">+</span></button><div class="faq-a">${esc(a)}</div></div>`).join("")}</div>
        </div>
      </section>
      ${footer()}`,

    profile: () => `
      ${meta("© Profile", "PG* — 02")}
      <section class="profile">
        <div><div class="portrait fade-up">
          <span class="corner tl">// Portrait</span><span class="corner br">${esc(S.handle)}</span>
          <img src="${esc(S.portrait)}" alt="${esc(S.name)}" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'monogram',textContent:'${esc(S.name.split(" ").map((p) => p[0]).join(""))}'}))">
        </div></div>
        <div>
          <div class="block about fade-up"><div class="eyebrow">// About</div><h2 class="big" style="margin-bottom:28px">Hi, I'm ${esc(S.name.split(" ")[0])}.</h2>${S.about.map((p) => `<p>${esc(p)}</p>`).join("")}
            <div class="btn-row"><a class="btn" href="${esc(S.resume)}" target="_blank" rel="noopener">Résumé PDF ↓</a><a class="btn" href="${esc(S.cvPage)}">View CV →</a></div></div>
          <div class="block fade-up"><div class="eyebrow">// Identity</div><div class="kv">${S.identity.map(([k, v]) => `<div>${esc(k)}</div><div>${esc(v)}</div>`).join("")}</div></div>
          <div class="block fade-up"><div class="eyebrow">// Stats + Styles</div>
            <div class="stats">${S.stats.map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("")}</div>
            <div class="chips">${S.styles.map((s) => `<span>${esc(s)}</span>`).join("")}</div></div>
          <div class="block fade-up"><div class="eyebrow">// Experience</div>
            <ul class="timeline">${S.cv.experience.map((e) => `<li><div class="when">${esc(e.when)}</div><div><h3>${esc(e.role)} <span>— ${esc(e.org)}</span></h3><p>${esc(e.project || e.bullets[0])}</p></div></li>`).join("")}</ul>
            <a class="see-all" href="${esc(S.cvPage)}" style="display:inline-block;margin-top:18px">Full CV →</a></div>
          <div class="block fade-up"><div class="eyebrow">// Off the clock — <a href="https://instagram.com/k2ttan" target="_blank" rel="noopener">@k2ttan</a></div>
            <div class="strip">${S.offClock.map((src) => `<button data-lb aria-label="Open photo"><img src="${esc(src)}" alt="" loading="lazy"></button>`).join("")}</div>
            ${S.avatar ? `<div class="sign-off"><img class="avatar" src="${esc(S.avatar)}" alt="" width="64" height="64"><span>${esc(S.handle)}</span></div>` : ""}</div>
        </div>
      </section>
      ${footer()}`,

    work: () => `
      ${meta("© Works", "PG* — 04")}
      <section class="work-wrap">
        <div class="work-header fade-up"><h2 class="big">All<br>Works</h2><span class="see-all">(${pad(S.work.length)})</span></div>
        <div class="group-label fade-up"><span>// Games</span><span>${pad(games.length)}</span></div>
        <div class="work-grid">${games.map(card).join("")}</div>
        <div class="group-label fade-up"><span>// Photography</span><span>${pad(photos.length)}</span></div>
        <div class="work-grid">${photos.map((w, i) => card(w, i + games.length)).join("")}</div>
      </section>
      ${footer()}`,

    contact: () => `
      ${meta("© Contact", "PG* — 05")}
      <section class="contact">
        <div class="eyebrow fade-up">// Say hello</div>
        <h2 class="big fade-up">Let's make<br>something.</h2>
        <a class="mail fade-up" href="#" data-mail>${esc(emailText)}</a>
        <div class="contact-rows fade-up">${S.networks.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener"><span class="scramble">${n}</span><small>${esc(u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))} ↗</small></a>`).join("")}
          <a href="${esc(S.cvPage)}"><span class="scramble">CV</span><small>Web page →</small></a>
          <a href="${esc(S.resume)}" target="_blank" rel="noopener"><span class="scramble">Résumé</span><small>PDF ↗</small></a></div>
      </section>
      ${footer()}`,

    project: (id) => {
      const i = ordered.findIndex((w) => slug(w.title) === id);
      if (i < 0) return pages.notfound();
      const w = ordered[i], prev = ordered[(i - 1 + ordered.length) % ordered.length], next = ordered[(i + 1) % ordered.length];
      return `
      ${meta(`© ${esc(w.kind === "game" ? "Game" : "Photo")} — (${pad(i + 1)})`, esc(w.year || ""))}
      <section class="project">
        <a class="proj-back" href="#/work">← All works</a>
        <div class="proj-head">
          <div class="fade-up">${w.logo ? `<img class="proj-logo" src="${esc(w.logo)}" alt="${esc(w.title)} logo">` : ""}<div class="eyebrow">${esc(w.tag)}</div><h2 class="big">${esc(w.title)}</h2></div>
          <div class="fade-up"><p class="proj-summary">${esc(w.summary)}</p>
            <div class="btn-row">${(w.links || (w.link ? [["Visit ↗", w.link]] : [])).map(([label, url]) => `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>`).join("")}</div></div>
        </div>
        <div class="proj-hero fade-up">${w.hero ? `<img src="${esc(w.hero)}" alt="${esc(w.title)}" loading="lazy">` : media(w)}</div>
        <div class="kv fade-up" style="margin:32px 0 48px">${(w.details || []).map(([k, v]) => `<div>${esc(k)}</div><div>${esc(v)}</div>`).join("")}</div>
        ${w.images && w.images.length ? `<div class="proj-gallery${w.kind === "game" ? " wide" : ""}">${w.images.map((src, j) => `<button class="fade-up" data-lb aria-label="Open image ${j + 1}"><img src="${esc(src)}" alt="${esc(w.title)} ${j + 1}" loading="lazy"></button>`).join("")}</div>` : ""}
        ${w.responsibilities ? `<div class="resp fade-up"><div class="eyebrow">// Responsibilities</div><div class="resp-grid">${w.responsibilities.map((g) => `<div class="resp-group"><h3>${esc(g.title)}</h3><ul>${g.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul></div>`).join("")}</div></div>` : ""}
        <div class="proj-nav"><a href="#/work/${slug(prev.title)}">← ${esc(prev.title)}</a><a href="#/work/${slug(next.title)}">${esc(next.title)} →</a></div>
      </section>
      ${footer()}`;
    },

    notfound: () => `${meta("© 404", "PG* — ??")}<section class="contact"><h2 class="big">Lost<br>signal.</h2><a class="btn" href="#/">Back home</a></section>${footer()}`,
  };

  /* ---------- router ---------- */
  const app = $("#app");
  function route() {
    const [, name = "", id] = (location.hash || "#/").split("/");
    const key = name === "" ? "home" : name === "work" && id ? "project" : pages[name] && name !== "project" ? name : "notfound";
    app.innerHTML = pages[key](id);
    app.className = "page active";
    document.querySelectorAll(".nav-links a").forEach((a) => a.classList.toggle("active", a.dataset.page === (key === "project" ? "work" : key)));
    const w = key === "project" && ordered.find((x) => slug(x.title) === id);
    document.title = w ? `${w.title} — ${S.name}` : key === "home" ? `${S.name} — ${S.role}` : `${key === "notfound" ? "404" : key[0].toUpperCase() + key.slice(1)} — ${S.name}`;
    window.scrollTo(0, 0);
    wire();
    if (key === "home") heroWave();
  }

  /* ---------- behaviours ---------- */
  let io;
  function wire() {
    io && io.disconnect();
    io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("visible"), io.unobserve(e.target))), { rootMargin: "0px 0px -8% 0px" });
    app.querySelectorAll(".fade-up").forEach((el) => io.observe(el));

    // photo slots whose file doesn't exist yet are removed, and the wall is renumbered
    const renumber = () => app.querySelectorAll(".frame .idx").forEach((s, i) => (s.textContent = pad(i + 1)));
    app.querySelectorAll("[data-lb] img").forEach((img) => {
      const drop = () => { img.closest("[data-lb]").remove(); renumber(); };
      if (img.complete && !img.naturalWidth) drop(); else img.addEventListener("error", drop);
    });
    renumber();

    app.querySelectorAll(".faq-q").forEach((b) =>
      b.addEventListener("click", () => {
        const it = b.parentElement, open = !it.classList.contains("open");
        app.querySelectorAll(".faq-item.open").forEach((x) => { x.classList.remove("open"); x.firstElementChild.setAttribute("aria-expanded", "false"); });
        it.classList.toggle("open", open); b.setAttribute("aria-expanded", open);
      })
    );
    // lightbox set = sibling images in the same container
    app.querySelectorAll("[data-lb]").forEach((b) =>
      b.addEventListener("click", () => {
        const sibs = [...b.parentElement.querySelectorAll("[data-lb]")];
        openLB(sibs.map((s) => s.querySelector("img").getAttribute("src")), sibs.indexOf(b));
      })
    );
    app.querySelectorAll("[data-mail]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); location.href = "mailto:" + S.email.user + "@" + S.email.domain; }));
    app.querySelectorAll("[data-top]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }));
    app.querySelectorAll(".scramble").forEach(scramble);
    bindHover(app);
  }

  // colour sweeps across the photo wall once, then tiles stay greyscale until hovered
  function heroWave() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTimeout(() => app.querySelectorAll(".frame").forEach((f, i) => {
      setTimeout(() => f.classList.add("lit"), i * 90);
      setTimeout(() => f.classList.remove("lit"), 1050 + i * 90);
    }), 250);
  }

  // hover text scramble on links
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789°*/#";
  function scramble(el) {
    const label = el.textContent;
    let t;
    el.addEventListener("mouseenter", () => {
      let f = 0;
      clearInterval(t);
      t = setInterval(() => {
        el.textContent = label.split("").map((c, i) => (i < f / 2 || c === " " ? c : glyphs[(Math.random() * glyphs.length) | 0])).join("");
        if (++f > label.length * 2) { clearInterval(t); el.textContent = label; }
      }, 28);
    });
  }

  // lightbox
  const lb = $("#lightbox"), lbImg = $("#lightbox img"), lbCount = $(".lb-count");
  let lbSet = [], lbI = 0;
  function openLB(set, i) { if (!set.length) return; lbSet = set; lbI = i; showLB(); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
  function showLB() { lbImg.src = lbSet[lbI]; lbCount.textContent = `${pad(lbI + 1)} / ${pad(lbSet.length)}`; }
  function closeLB() { lb.classList.remove("open"); document.body.style.overflow = ""; }
  const step = (d) => { lbI = (lbI + d + lbSet.length) % lbSet.length; showLB(); };
  $(".lb-close").onclick = closeLB;
  $(".lb-prev").onclick = () => step(-1);
  $(".lb-next").onclick = () => step(1);
  lb.addEventListener("click", (e) => e.target === lb && closeLB());
  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLB();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  // custom crosshair cursor
  const cur = $(".cursor"), dot = $(".cursor-dot");
  addEventListener("mousemove", (e) => {
    cur.style.left = dot.style.left = e.clientX + "px";
    cur.style.top = dot.style.top = e.clientY + "px";
  });
  function bindHover(root) {
    root.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", () => cur.classList.add("hover"));
      el.addEventListener("mouseleave", () => cur.classList.remove("hover"));
    });
  }

  // theme toggle (remembered per browser, shared with cv.html)
  const tt = $(".theme-toggle");
  try { if (localStorage.getItem("theme") === "light") document.body.classList.add("light"); } catch {}
  tt.addEventListener("click", () => {
    const light = document.body.classList.toggle("light");
    tt.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
    try { localStorage.setItem("theme", light ? "light" : "dark"); } catch {}
  });

  // Vancouver clock in the hero
  setInterval(() => {
    const c = $("#clock");
    if (c) c.textContent = new Date().toLocaleTimeString("en-CA", { timeZone: "America/Vancouver", hour12: false });
  }, 1000);

  const logoText = $("#logo-text");
  if (logoText) logoText.textContent = S.handle;
  bindHover(document);
  addEventListener("hashchange", route);
  route();
})();
