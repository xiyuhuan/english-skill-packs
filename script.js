const githubBase =
  "https://github.com/xiyuhuan/english-skill-packs";

const textbooks = [
  {
    title: "人教版七年级上册",
    publisher: "人教版",
    stage: "初中",
    level: "七年级上",
    cover: "assets/教材和目录/人教版七年级上册课本封面.jpg",
    directory: ["assets/教材和目录/人教版七年级上册课本目录（1）.jpg", "assets/教材和目录/人教版七年级上册课本目录(2).jpg"],
  },
  {
    title: "人教版七年级下册",
    publisher: "人教版",
    stage: "初中",
    level: "七年级下",
    cover: "assets/教材和目录/人教版七年级下册课本封面.jpg",
    directory: ["assets/教材和目录/人教版七年级下册目录（1）.jpg", "assets/教材和目录/人教版七年级下册目录（2）.jpg"],
  },
  {
    title: "人教版八年级上册",
    publisher: "人教版",
    stage: "初中",
    level: "八年级上",
    cover: "assets/教材和目录/人教版八年级上册课本封面.jpg",
    directory: ["assets/教材和目录/人教版八年级上册课本目录（1）.jpg", "assets/教材和目录/人八上目录（2）.jpg"],
  },
  {
    title: "人教版八年级下册",
    publisher: "人教版",
    stage: "初中",
    level: "八年级下",
    cover: "assets/教材和目录/人八下封面.jpg",
    directory: ["assets/教材和目录/人八下目录（1）.jpg", "assets/教材和目录/人八下目录（2）.jpg"],
  },
  {
    title: "人教版九年级上册",
    publisher: "人教版",
    stage: "初中",
    level: "九年级上",
    cover: "assets/教材和目录/人九上封面.jpg",
    directory: ["assets/教材和目录/人九上目录（1）.jpg", "assets/教材和目录/人九上目录（2）.jpg"],
  },
  {
    title: "人教版九年级下册",
    publisher: "人教版",
    stage: "初中",
    level: "九年级下",
    cover: "assets/教材和目录/人九下封面.jpg",
    directory: ["assets/教材和目录/人九下目录（1）.jpg", "assets/教材和目录/人九下目录（2）.jpg"],
  },
  {
    title: "人教版高中英语必修一",
    publisher: "人教版",
    stage: "高中",
    level: "必修一",
    cover: "assets/教材和目录/人教版英语必修一封面.jpg",
    directory: ["assets/教材和目录/人教版英语必修一目录（1）.jpg", "assets/教材和目录/人教版英语必修一目录（2）.jpg"],
  },
  {
    title: "人教版高中英语必修二",
    publisher: "人教版",
    stage: "高中",
    level: "必修二",
    cover: "assets/教材和目录/人教版英语必修二封面.jpg",
    directory: ["assets/教材和目录/人教版英语必修二目录（1）.jpg", "assets/教材和目录/人教版英语必修二目录（2）.jpg"],
  },
  {
    title: "人教版高中英语必修三",
    publisher: "人教版",
    stage: "高中",
    level: "必修三",
    cover: "assets/教材和目录/人教版英语必修三封面.jpg",
    directory: ["assets/教材和目录/人教版英语必修三目录（1）.jpg", "assets/教材和目录/人教版英语必修三目录（2）.jpg"],
  },
  {
    title: "外研版七年级上册",
    publisher: "外研版",
    stage: "初中",
    level: "七年级上",
    cover: "assets/教材和目录/外研英语七年级上册课本封面.jpg",
    directory: ["assets/教材和目录/外研英语七年级上册目录.jpg"],
  },
  {
    title: "外研版七年级下册",
    publisher: "外研版",
    stage: "初中",
    level: "七年级下",
    cover: "assets/教材和目录/外研英语七年级下册课本封面.jpg",
    directory: ["assets/教材和目录/外研英语七年级下册目录.jpg"],
  },
  {
    title: "外研版八年级上册",
    publisher: "外研版",
    stage: "初中",
    level: "八年级上",
    cover: "assets/教材和目录/外研英语八年级上册课本封面.jpg",
    directory: ["assets/教材和目录/外研英语八年级上册目录.jpg"],
  },
  {
    title: "外研版八年级下册",
    publisher: "外研版",
    stage: "初中",
    level: "八年级下",
    cover: "assets/教材和目录/外研英语八年级下册课本封面.jpg",
    directory: ["assets/教材和目录/外研英语八年级下册目录.jpg"],
  },
  {
    title: "外研版九年级上册",
    publisher: "外研版",
    stage: "初中",
    level: "九年级上",
    cover: "assets/教材和目录/外研英语九年级上册课本封面.jpg",
    directory: ["assets/教材和目录/外研英语九年级上册目录.jpg"],
  },
  {
    title: "外研版九年级下册",
    publisher: "外研版",
    stage: "初中",
    level: "九年级下",
    cover: "assets/教材和目录/外研英语九年级下册课本封面.jpg",
    directory: ["assets/教材和目录/外研英语九年级下册目录.jpg"],
  },
  {
    title: "外研版高中英语必修一",
    publisher: "外研版",
    stage: "高中",
    level: "必修一",
    cover: "assets/教材和目录/外研英语必修一课本封面.jpg",
    directory: ["assets/教材和目录/外研英语必修一目录（1）.jpg", "assets/教材和目录/外研英语必修一目录（2）.jpg"],
  },
  {
    title: "外研版高中英语必修二",
    publisher: "外研版",
    stage: "高中",
    level: "必修二",
    cover: "assets/教材和目录/外研英语必修二课本封面.jpg",
    directory: ["assets/教材和目录/外研英语必修二目录（1）.jpg", "assets/教材和目录/外研英语必修二目录（2）.jpg"],
  },
  {
    title: "外研版高中英语必修三",
    publisher: "外研版",
    stage: "高中",
    level: "必修三",
    cover: "assets/教材和目录/外研英语必修三课本封面.jpg",
    directory: ["assets/教材和目录/外研英语必修三目录（1）.jpg", "assets/教材和目录/外研英语必修三目录（2）.jpg"],
  },
].map((book, index) => ({
  ...book,
  index: String(index + 1).padStart(2, "0"),
  url: githubBase,
}));

const coverGrid = document.querySelector("#coverGrid");
const showcaseSection = document.querySelector("#showcase");
const showcasePanels = document.querySelector("#showcasePanels");
const closingSection = document.querySelector(".closing-section");
const closingSticky = document.querySelector("#closingSticky");
const searchInput = document.querySelector("#searchInput");
const heroTitle = document.querySelector("#heroTitle");
const feedbackForm = document.querySelector("#feedbackForm");
const feedbackNote = document.querySelector("#feedbackNote");
const filterButtons = document.querySelectorAll(".filter-button");
const railButtons = document.querySelectorAll(".rail-button");
const dockItems = document.querySelectorAll(".dock-item");
let activeFilter = "all";
let activePanel = 0;
let ticking = false;
let closingTicking = false;

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u4e00-\u9fa5-]/g, "");
}

function renderTextbooks() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = textbooks.filter((book) => {
    const text = `${book.title} ${book.publisher} ${book.stage} ${book.level}`.toLowerCase();
    const filterMatched =
      activeFilter === "all" || book.publisher === activeFilter || book.stage === activeFilter;
    return filterMatched && text.includes(keyword);
  });

  if (!filtered.length) {
    coverGrid.innerHTML = '<div class="empty-state">没有找到匹配的教材封面，请换个关键词试试。</div>';
    return;
  }

  coverGrid.innerHTML = filtered
    .map(
      (book) => `
        <a class="cover-card" href="${book.url}" target="_blank" rel="noreferrer" aria-label="下载${book.title} Skill 包">
          <div class="cover-frame">
            <img src="${book.cover}" alt="${book.title}封面" loading="lazy" />
            <div class="cover-overlay">
              <span class="download-pill">打开 GitHub 下载</span>
              <p>${book.directory.length} 张目录图已整理，可用于后续按单元拆分 Skill。</p>
            </div>
          </div>
          <div class="cover-info">
            <div class="cover-info-top">
              <div class="cover-tags">
                <span>${book.publisher}</span>
                <span>${book.stage}</span>
              </div>
              <span class="cover-index">${book.index}</span>
            </div>
            <h3>${book.title}</h3>
            <p>${book.level} · 点击封面跳转下载</p>
          </div>
        </a>
      `,
    )
    .join("");
}

function renderShowcase() {
  const showcaseGroups = [
    {
      count: "01",
      color: "#f06725",
      eyebrow: "People's Education Press",
      title: "人教版教材 Skill 包",
      text: "覆盖人教版初中与高中英语教材。滑动浏览封面，点击任意课本进入对应 GitHub 下载页。",
      books: textbooks.filter((book) => book.publisher === "人教版"),
    },
    {
      count: "02",
      color: "#ef2840",
      eyebrow: "FLTRP English",
      title: "外研版教材 Skill 包",
      text: "外研版初高中英语封面以作品卡形式展示，保持视频里的大色块、叠层和横向页面感。",
      books: textbooks.filter((book) => book.publisher === "外研版"),
    },
  ];

  showcasePanels.innerHTML = showcaseGroups
    .map(
      (group, groupIndex) => `
        <article class="scroll-panel" style="--panel-color: ${group.color}" data-panel="${groupIndex}">
          <div class="showcase-copy">
            <span class="panel-count">(${group.count})</span>
            <p class="eyebrow">${group.eyebrow}</p>
            <h2>${group.title}</h2>
            <p>${group.text}</p>
          </div>
          <button class="carousel-button carousel-button-left" type="button" data-direction="-1" aria-label="向左滑动课本">‹</button>
          <div class="showcase-strip" tabindex="0" aria-label="${group.title}封面滑动列表">
            <div class="showcase-track">
              ${group.books
                .map(
                  (book, bookIndex) => `
                    <a
                      class="stage-book"
                      style="--lift: ${bookIndex % 2 === 0 ? "0px" : "-22px"}"
                      href="${book.url}"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="下载${book.title} Skill 包"
                    >
                      <img src="${book.cover}" alt="${book.title}封面" loading="lazy" />
                      <span>${book.title}</span>
                    </a>
                  `,
                )
                .join("")}
            </div>
          </div>
          <button class="carousel-button carousel-button-right" type="button" data-direction="1" aria-label="向右滑动课本">›</button>
        </article>
      `,
    )
    .join("");

  setupShowcaseCarousels();
  updateShowcase(true);
}

function setupShowcaseCarousels() {
  document.querySelectorAll(".scroll-panel").forEach((panel) => {
    const strip = panel.querySelector(".showcase-strip");
    const buttons = panel.querySelectorAll(".carousel-button");
    let animationFrame = 0;
    let direction = 0;

    function step() {
      if (!direction) {
        animationFrame = 0;
        return;
      }

      strip.scrollLeft += direction * 7;
      animationFrame = requestAnimationFrame(step);
    }

    function start(nextDirection) {
      direction = nextDirection;
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(step);
      }
    }

    function stop() {
      direction = 0;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    }

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => start(Number(button.dataset.direction)));
      button.addEventListener("mouseleave", stop);
      button.addEventListener("focus", () => start(Number(button.dataset.direction)));
      button.addEventListener("blur", stop);
      button.addEventListener("click", () => {
        strip.scrollBy({ left: Number(button.dataset.direction) * 280, behavior: "smooth" });
      });
    });
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateShowcase(force = false) {
  const panels = [...document.querySelectorAll(".scroll-panel")];
  if (!panels.length) {
    return;
  }

  const sectionTop = showcaseSection.offsetTop;
  const scrollable = Math.max(showcaseSection.offsetHeight - window.innerHeight, 1);
  const progress = clamp((window.scrollY - sectionTop) / scrollable, 0, 1);
  const rawPanel = progress * (panels.length - 1);
  const nextPanel = clamp(Math.round(rawPanel), 0, panels.length - 1);

  activePanel = nextPanel;

  panels.forEach((panel, index) => {
    const relative = index - rawPanel;
    const distance = Math.abs(relative);
    let y = 0;
    let scale = 1;
    let opacity = 1;
    let brightness = 1;

    if (relative < -1) {
      y = -118;
      scale = 0.985;
      opacity = 0;
    } else if (relative < 0) {
      y = relative * 118;
      scale = 1 + relative * 0.015;
      opacity = 1 + relative * 0.75;
    } else if (relative <= 1) {
      y = relative * 58;
      scale = 1 - relative * 0.035;
      brightness = 1 - relative * 0.08;
    } else if (relative <= 2) {
      y = 58 + (relative - 1) * 30;
      scale = 0.965 - (relative - 1) * 0.035;
      brightness = 0.92 - (relative - 1) * 0.14;
    } else {
      y = 96;
      scale = 0.91;
      opacity = 0;
    }

    panel.classList.toggle("is-active", index === activePanel);
    panel.style.transform = `translateY(${y}%) scale(${scale})`;
    panel.style.opacity = String(clamp(opacity, 0, 1));
    panel.style.filter = `brightness(${clamp(brightness, 0.72, 1)})`;
    panel.style.zIndex = String(50 - Math.round(distance * 8));
  });

  railButtons.forEach((button, index) => {
    button.classList.toggle("active", index === activePanel);
  });

}

function requestShowcaseUpdate() {
  if (ticking) {
    return;
  }

  ticking = true;
  requestAnimationFrame(() => {
    updateShowcase();
    ticking = false;
  });
}

function updateDockState() {
  const sections = [...dockItems].map((item) => document.querySelector(item.getAttribute("href")));
  const currentIndex = sections.reduce((activeIndex, section, index) => {
    if (section && section.offsetTop <= window.scrollY + window.innerHeight * 0.36) {
      return index;
    }
    return activeIndex;
  }, 0);

  dockItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentIndex);
  });
}

function updateClosingTheme() {
  if (!closingSection || !closingSticky) {
    return;
  }

  const sectionTop = closingSection.offsetTop;
  const scrollable = Math.max(closingSection.offsetHeight - window.innerHeight, 1);
  const progress = clamp((window.scrollY - sectionTop) / scrollable, 0, 1);
  closingSticky.classList.toggle("is-dark", progress >= 0.48);
}

function setupHeroTitleGradient() {
  if (!heroTitle) {
    return;
  }

  const heroArea = heroTitle.closest(".hero");
  const pointer = {
    currentX: 50,
    currentY: 50,
    targetX: 50,
    targetY: 50,
    glow: 0,
    targetGlow: 0,
    frame: 0,
  };

  function animateTitleGradient() {
    pointer.currentX += (pointer.targetX - pointer.currentX) * 0.075;
    pointer.currentY += (pointer.targetY - pointer.currentY) * 0.075;
    pointer.glow += (pointer.targetGlow - pointer.glow) * 0.09;

    heroTitle.style.setProperty("--title-x", `${pointer.currentX}%`);
    heroTitle.style.setProperty("--title-y", `${pointer.currentY}%`);
    heroTitle.style.setProperty("--title-glow", pointer.glow.toFixed(3));

    const moving =
      Math.abs(pointer.targetX - pointer.currentX) > 0.05 ||
      Math.abs(pointer.targetY - pointer.currentY) > 0.05 ||
      Math.abs(pointer.targetGlow - pointer.glow) > 0.01;

    if (moving) {
      pointer.frame = requestAnimationFrame(animateTitleGradient);
    } else {
      pointer.frame = 0;
    }
  }

  function requestTitleAnimation() {
    if (!pointer.frame) {
      pointer.frame = requestAnimationFrame(animateTitleGradient);
    }
  }

  heroArea.addEventListener("pointermove", (event) => {
    const rect = heroTitle.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    pointer.targetX = clamp(x, -8, 108);
    pointer.targetY = clamp(y, -10, 110);
    pointer.targetGlow = 1;
    requestTitleAnimation();
  });

  heroArea.addEventListener("pointerleave", () => {
    pointer.targetGlow = 0;
    requestTitleAnimation();
  });
}

function requestClosingUpdate() {
  if (closingTicking) {
    return;
  }

  closingTicking = true;
  requestAnimationFrame(() => {
    updateClosingTheme();
    closingTicking = false;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderTextbooks();
  });
});

searchInput.addEventListener("input", renderTextbooks);

railButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panels = document.querySelectorAll(".scroll-panel");
    const targetIndex = Number(button.dataset.panel);
    const sectionTop = showcaseSection.offsetTop;
    const scrollable = Math.max(showcaseSection.offsetHeight - window.innerHeight, 1);
    const targetY = sectionTop + (targetIndex / Math.max(panels.length - 1, 1)) * scrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  });
});

window.addEventListener("scroll", requestShowcaseUpdate, { passive: true });
window.addEventListener("scroll", requestClosingUpdate, { passive: true });
window.addEventListener("scroll", updateDockState, { passive: true });
window.addEventListener("resize", () => {
  updateShowcase(true);
  updateClosingTheme();
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(feedbackForm).entries());
  const saved = JSON.parse(localStorage.getItem("skillHubFeedback") || "[]");
  saved.push({
    ...data,
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem("skillHubFeedback", JSON.stringify(saved));
  feedbackForm.reset();
  feedbackNote.textContent = "已收到，谢谢你的建议。当前记录已保存在本机浏览器中。";
});

renderShowcase();
renderTextbooks();
updateDockState();
updateClosingTheme();
setupHeroTitleGradient();
