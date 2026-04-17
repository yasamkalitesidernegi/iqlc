const translations = {
  tr: {
    pageTitle: "IQLC 2026",
    header: {
      tagline: "Uluslararası Yaşam Kalitesi Konferansı",
    },
    nav: {
      home: "Ana Sayfa",
      about: "Konferans",
      topics: "Temalar",
      speakers: "Konuşmacılar",
      contact: "İletişim",
    },
    hero: {
      badge: "IQLC 2026",
      title: "Uluslararası Yaşam Kalitesi Konferansı",
      subtitle:
        "Akademi, sağlık, toplum ve sürdürülebilir yaşam ekseninde uluslararası buluşma.",
      cta1: "Detayları İncele",
      cta2: "İletişime Geç",
    },
    ticker: [
      "Uluslararası katılım",
      "Bilimsel oturumlar",
      "Çağrılı konuşmacılar",
      "Yaşam kalitesi odaklı yaklaşım",
      "Sürdürülebilir gelecek vizyonu",
      "Çok disiplinli akademik paylaşım",
    ],
    about: {
      eyebrow: "Konferans",
      title: "IQLC 2026 Hakkında",
      card1Title: "Uluslararası Katılım",
      card1Text:
        "Farklı ülkelerden akademisyenleri, uzmanları ve kurumları bir araya getiren çok disiplinli bir platform.",
      card2Title: "Bilimsel İçerik",
      card2Text:
        "Yaşam kalitesi, sağlık, eğitim, çevre, kent ve toplumsal refah ekseninde güncel oturumlar.",
      card3Title: "Küresel Etki",
      card3Text:
        "Bilgi paylaşımını güçlendiren, iş birliği fırsatları sunan ve sürdürülebilir gelecek vizyonunu destekleyen bir buluşma.",
    },
    topics: {
      eyebrow: "Temalar",
      title: "Odak Alanları",
      item1: "Sağlık ve İyi Oluş",
      item2: "Eğitim ve Toplum",
      item3: "Kent, Çevre ve Yaşam",
      item4: "Sosyal Politika",
      item5: "Sürdürülebilirlik",
      item6: "Disiplinlerarası Çalışmalar",
    },
    speakers: {
      eyebrow: "Konuşmacılar",
      title: "Yakında Açıklanacak",
      text: "Davetli konuşmacılar ve oturum detayları çok yakında bu alanda paylaşılacaktır.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bizimle İletişime Geçin",
      text: "Konferansla ilgili soru, iş birliği ve katılım talepleriniz için bizimle iletişime geçebilirsiniz.",
    },
    footer: {
      copy: "© 2026 IQLC - Tüm hakları saklıdır.",
    },
    slides: [
      {
        title: "Uluslararası Yaşam Kalitesi Konferansı",
        subtitle:
          "Akademi, sağlık, toplum ve sürdürülebilir yaşam ekseninde uluslararası buluşma.",
        image: "assets/slide-1.jpg",
      },
      {
        title: "Bilimsel Paylaşım ve İş Birliği",
        subtitle:
          "Araştırmacılar, uzmanlar ve kurumlar için güçlü bir ortak platform.",
        image: "assets/slide-2.jpg",
      },
      {
        title: "Sürdürülebilir Yaşam İçin Ortak Vizyon",
        subtitle:
          "Yaşam kalitesini güçlendiren çözümler, tartışmalar ve yeni iş birlikleri.",
        image: "assets/slide-3.jpg",
      },
    ],
  },

  en: {
    pageTitle: "IQLC 2026",
    header: {
      tagline: "International Quality of Life Conference",
    },
    nav: {
      home: "Home",
      about: "Conference",
      topics: "Themes",
      speakers: "Speakers",
      contact: "Contact",
    },
    hero: {
      badge: "IQLC 2026",
      title: "International Quality of Life Conference",
      subtitle:
        "An international meeting point for academia, health, society, and sustainable living.",
      cta1: "Explore Details",
      cta2: "Contact Us",
    },
    ticker: [
      "International participation",
      "Scientific sessions",
      "Invited speakers",
      "Quality of life focus",
      "Vision for a sustainable future",
      "Interdisciplinary academic exchange",
    ],
    about: {
      eyebrow: "Conference",
      title: "About IQLC 2026",
      card1Title: "International Participation",
      card1Text:
        "A multidisciplinary platform bringing together academics, experts, and institutions from different countries.",
      card2Title: "Scientific Content",
      card2Text:
        "Up-to-date sessions focused on quality of life, health, education, environment, cities, and social well-being.",
      card3Title: "Global Impact",
      card3Text:
        "A meeting point that strengthens knowledge exchange, creates collaboration opportunities, and supports a sustainable future vision.",
    },
    topics: {
      eyebrow: "Themes",
      title: "Focus Areas",
      item1: "Health and Well-Being",
      item2: "Education and Society",
      item3: "City, Environment and Life",
      item4: "Social Policy",
      item5: "Sustainability",
      item6: "Interdisciplinary Studies",
    },
    speakers: {
      eyebrow: "Speakers",
      title: "Coming Soon",
      text: "Invited speakers and session details will be announced here very soon.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      text: "You can contact us for questions, collaboration requests, and participation inquiries regarding the conference.",
    },
    footer: {
      copy: "© 2026 IQLC - All rights reserved.",
    },
    slides: [
      {
        title: "International Quality of Life Conference",
        subtitle:
          "An international meeting point for academia, health, society, and sustainable living.",
        image: "assets/slide-1.jpg",
      },
      {
        title: "Scientific Exchange and Collaboration",
        subtitle:
          "A strong common platform for researchers, experts, and institutions.",
        image: "assets/slide-2.jpg",
      },
      {
        title: "A Shared Vision for Sustainable Living",
        subtitle:
          "Solutions, discussions, and new collaborations that strengthen quality of life.",
        image: "assets/slide-3.jpg",
      },
    ],
  },
};

let currentLang = localStorage.getItem("siteLang") || "tr";
let currentSlide = 0;
let sliderInterval = null;

const htmlEl = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const tickerTrack = document.getElementById("tickerTrack");
const heroSlider = document.getElementById("heroSlider");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function applyTranslations(lang) {
  const dict = translations[lang];

  htmlEl.setAttribute("lang", lang);
  document.title = dict.pageTitle;

  translatableElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getNestedValue(dict, key);

    if (value) {
      el.textContent = value;
    }
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderTicker(lang);
  renderSlide(currentSlide, lang);
}

function renderTicker(lang) {
  const items = translations[lang].ticker;

  if (!tickerTrack) return;

  const repeated = [...items, ...items, ...items];
  tickerTrack.innerHTML = repeated
    .map((item) => `<span class="ticker-item">${item}</span>`)
    .join("");
}

function renderSlide(index, lang) {
  const slides = translations[lang].slides;
  const slide = slides[index];

  if (!slide || !heroSlider) return;

  const slideContainer = heroSlider.querySelector(".hero-slide");
  const titleEl = slideContainer.querySelector("h1");
  const subtitleEl = slideContainer.querySelector("p");
  const bgEl = slideContainer.querySelector(".hero-bg");

  titleEl.textContent = slide.title;
  subtitleEl.textContent = slide.subtitle;
  bgEl.src = slide.image;
  bgEl.alt = slide.title;
}

function nextSlide() {
  const slides = translations[currentLang].slides;
  currentSlide = (currentSlide + 1) % slides.length;
  renderSlide(currentSlide, currentLang);
}

function prevSlide() {
  const slides = translations[currentLang].slides;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  renderSlide(currentSlide, currentLang);
}

function startSlider() {
  stopSlider();
  sliderInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
  }
}

function setLanguage(lang) {
  currentLang = lang;
  currentSlide = 0;
  localStorage.setItem("siteLang", lang);
  applyTranslations(lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

if (nextSlideBtn) {
  nextSlideBtn.addEventListener("click", () => {
    nextSlide();
    startSlider();
  });
}

if (prevSlideBtn) {
  prevSlideBtn.addEventListener("click", () => {
    prevSlide();
    startSlider();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
  startSlider();
});
