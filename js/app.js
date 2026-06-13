/* =========================================================================
   app.js  —  Bộ não của trang (bạn KHÔNG cần sửa; nội dung nằm ở data.js)
   ========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  startFallingPetals();
  runTeaser();
});


/* ---------- Tim / cánh hoa rơi ---------- */
function startFallingPetals() {
  const layer = document.getElementById("falling");
  const emojis = ["🌸", "💗", "💕", "🌷", "💞"];
  setInterval(() => {
    const el = document.createElement("span");
    el.className = "petal";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 16 + Math.random() * 18 + "px";
    const dur = 6 + Math.random() * 6;
    el.style.animationDuration = dur + "s";
    layer.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000);
  }, 750);
}


/* ---------- Teaser ---------- */
function runTeaser() {
  const teaser = document.getElementById("teaser");
  const textEl = document.getElementById("teaser-text");
  const btnEl = document.getElementById("teaser-btn");

  if (!Array.isArray(TEASER) || TEASER.length === 0) {
    teaser.classList.add("hidden");
    showContent();
    return;
  }

  let i = 0;
  function render() {
    textEl.textContent = TEASER[i].loiNhan;
    btnEl.textContent = TEASER[i].nut || "💕";
    textEl.classList.remove("pop-in");
    void textEl.offsetWidth;
    textEl.classList.add("pop-in");
  }
  btnEl.addEventListener("click", () => {
    i++;
    if (i < TEASER.length) {
      render();
    } else {
      teaser.classList.add("fade-out");
      setTimeout(() => { teaser.classList.add("hidden"); showContent(); }, 320);
    }
  });
  render();
}


/* ---------- Hiện nội dung chính ---------- */
function showContent() {
  document.getElementById("content").classList.remove("hidden");
  applySectionTitles();
  buildHero();
  buildPlaces();
  buildSecret();
  buildGallery();
  setupReveal();
  buildMap();
  window.scrollTo({ top: 0 });
}


/* ---------- Tiêu đề các mục (lấy từ data.js) ---------- */
function applySectionTitles() {
  setText("title-places", typeof TIEU_DE_NOI !== "undefined" ? TIEU_DE_NOI : null);
  setText("title-gallery", typeof TIEU_DE_ANH_DEP !== "undefined" ? TIEU_DE_ANH_DEP : null);
  setText("title-map", typeof TIEU_DE_BAN_DO !== "undefined" ? TIEU_DE_BAN_DO : null);
  setText("footer-text", typeof CHU_CUOI_TRANG !== "undefined" ? CHU_CUOI_TRANG : null);
}
function setText(id, value) {
  if (value == null) return; // giữ chữ mặc định trong HTML nếu chưa khai báo
  const el = document.getElementById(id);
  if (!el) return;
  if (String(value).trim() === "") {
    el.style.display = "none"; // để trống "" -> ẩn luôn cho gọn
  } else {
    el.textContent = value;
  }
}


/* ---------- Hero ---------- */
function buildHero() {
  document.getElementById("hero-title").textContent = TIEU_DE || "";
  document.getElementById("hero-subtitle").textContent =
    typeof TIEU_DE_PHU !== "undefined" ? TIEU_DE_PHU : "";
  const img = document.getElementById("hero-img");
  img.src = ANH_DAI_DIEN || "";
  img.onerror = () => { img.onerror = null; img.src = placeholderImage("💕"); };
  if (!ANH_DAI_DIEN) img.src = placeholderImage("💕");
}


/* ---------- Slideshow "những nơi ta đã đi qua" ---------- */
function buildPlaces() {
  const list = document.getElementById("places-list");
  list.innerHTML = "";

  (NHUNG_NOI || []).forEach((noi) => {
    const anh = (noi.anh && noi.anh.length) ? noi.anh : [placeholderImage(noi.ten)];

    const wrap = document.createElement("section");
    wrap.className = "slideshow reveal";

    // các slide ảnh
    anh.forEach((src, idx) => {
      const img = document.createElement("img");
      img.className = "slide" + (idx === 0 ? " active" : "");
      img.src = src;
      img.alt = noi.ten || "";
      img.loading = "lazy";
      img.onerror = () => { img.onerror = null; img.src = placeholderImage(noi.ten); };
      wrap.appendChild(img);
    });

    // caption tên + ghi chú
    const cap = document.createElement("div");
    cap.className = "slide-caption";
    cap.innerHTML =
      `<div class="slide-name">${escapeHtml(noi.ten || "")}</div>` +
      `<div class="slide-note">${escapeHtml(noi.ghiChu || "")}</div>`;
    wrap.appendChild(cap);

    // bộ đếm + gợi ý bấm (chỉ khi có nhiều hơn 1 ảnh)
    const counter = document.createElement("div");
    counter.className = "slide-counter";
    counter.textContent = `1 / ${anh.length}`;
    wrap.appendChild(counter);

    if (anh.length > 1) {
      const hint = document.createElement("div");
      hint.className = "tap-hint";
      hint.textContent = "bấm để xem ảnh tiếp 👆";
      wrap.appendChild(hint);
    }

    // BẤM 1 LẦN -> ảnh tiếp theo (lặp vòng)
    let cur = 0;
    wrap.addEventListener("click", () => {
      if (anh.length < 2) return;
      const slides = wrap.querySelectorAll(".slide");
      slides[cur].classList.remove("active");
      cur = (cur + 1) % slides.length;
      slides[cur].classList.add("active");
      counter.textContent = `${cur + 1} / ${slides.length}`;
    });

    list.appendChild(wrap);
  });
}


/* ---------- Địa điểm ẩn giấu ---------- */
function buildSecret() {
  if (typeof NOI_AN_GIAU === "undefined" || !NOI_AN_GIAU) {
    document.querySelector(".secret-section").style.display = "none";
    return;
  }
  document.getElementById("secret-lock-text").textContent = NOI_AN_GIAU.loiNhanKhoa || "Bí mật 🤫";
  document.getElementById("secret-title").textContent = NOI_AN_GIAU.tieuDe || "";
  document.getElementById("secret-message").textContent = NOI_AN_GIAU.loiNhanMo || "";

  if (NOI_AN_GIAU.anh) {
    const img = document.getElementById("secret-img");
    img.src = NOI_AN_GIAU.anh;
    img.classList.remove("hidden");
    img.onerror = () => { img.classList.add("hidden"); };
  }

  document.getElementById("secret-btn").addEventListener("click", () => {
    document.querySelector(".secret-locked").classList.add("hidden");
    document.querySelector(".secret-open").classList.remove("hidden");
    heartBurst();
  });
}


/* ---------- Gallery ảnh đẹp + video + lời nhắn ---------- */
function buildGallery() {
  const box = document.getElementById("gallery");
  box.innerHTML = "";

  const items = (ANH_DEP || []).slice();
  const msgs = (LOI_NHAN || []).slice();

  // Xen lời nhắn vào giữa các ảnh (sau mỗi 3 mục lại chèn 1 lời nhắn)
  let mi = 0;
  items.forEach((it, idx) => {
    box.appendChild(makeGalleryItem(it));
    if ((idx + 1) % 3 === 0 && mi < msgs.length) {
      box.appendChild(makeMessage(msgs[mi++]));
    }
  });
  // còn lời nhắn thừa thì thêm nốt
  while (mi < msgs.length) box.appendChild(makeMessage(msgs[mi++]));
}

function makeGalleryItem(it) {
  const div = document.createElement("div");
  div.className = "gallery-item reveal";
  if (it.type === "video") {
    const v = document.createElement("video");
    v.src = it.src;
    v.controls = true;
    v.playsInline = true;
    v.preload = "none";
    div.appendChild(v);
  } else {
    const img = document.createElement("img");
    img.src = it.src;
    img.loading = "lazy";
    img.alt = "";
    img.onerror = () => { img.onerror = null; img.src = placeholderImage("🌸"); };
    img.addEventListener("click", () => openLightbox(img.src, "", ""));
    div.appendChild(img);
  }
  return div;
}

function makeMessage(text) {
  const div = document.createElement("div");
  div.className = "gallery-message reveal";
  div.textContent = text;
  return div;
}


/* ---------- Bản đồ ---------- */
function buildMap() {
  const diaDiem = (NHUNG_NOI || []).filter(
    (n) => typeof n.lat === "number" && typeof n.lng === "number"
  );
  if (diaDiem.length === 0) { document.querySelector(".map-section").style.display = "none"; return; }

  const map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap", maxZoom: 18,
  }).addTo(map);

  const points = [];
  diaDiem.forEach((n) => {
    L.marker([n.lat, n.lng]).addTo(map)
      .bindPopup(`<strong>${escapeHtml(n.ten || "")}</strong><br>${escapeHtml(n.ghiChu || "")}`);
    points.push([n.lat, n.lng]);
  });
  if (points.length > 1) {
    L.polyline(points, { color: "#ff6fa5", weight: 3, dashArray: "6 8" }).addTo(map);
  }
  map.fitBounds(points, { padding: [50, 50] });
  if (points.length === 1) map.setZoom(13);
  setTimeout(() => map.invalidateSize(), 200);
}


/* ---------- Lightbox ---------- */
function openLightbox(src, ten, ghiChu) {
  const box = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-caption").textContent = [ten, ghiChu].filter(Boolean).join(" — ");
  box.classList.remove("hidden");
}
(function () {
  const box = document.getElementById("lightbox");
  const close = () => box.classList.add("hidden");
  document.getElementById("lightbox-close").addEventListener("click", close);
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();


/* ---------- Reveal khi cuộn ---------- */
function setupReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("show"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}


/* ---------- Hiệu ứng tim nổ khi mở thẻ bí mật ---------- */
function heartBurst() {
  const layer = document.getElementById("falling");
  for (let i = 0; i < 24; i++) {
    const el = document.createElement("span");
    el.className = "petal";
    el.textContent = "💖";
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 18 + Math.random() * 22 + "px";
    const dur = 3 + Math.random() * 3;
    el.style.animationDuration = dur + "s";
    layer.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000);
  }
}


/* ---------- Tiện ích ---------- */
function placeholderImage(text) {
  const label = escapeHtml(text || "Kỷ niệm");
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="#ffd6e6"/><stop offset="1" stop-color="#ff9ebd"/></linearGradient></defs>` +
    `<rect width="800" height="600" fill="url(#g)"/>` +
    `<text x="400" y="280" font-size="120" text-anchor="middle">🌸</text>` +
    `<text x="400" y="370" font-size="36" fill="#fffafc" text-anchor="middle" font-family="Nunito, sans-serif">${label}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
