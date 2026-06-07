/* =========================================
   LANGUAGE SYSTEM
========================================= */

const savedLang =
  localStorage.getItem("lang") || "en";

setLanguage(savedLang);

function setLanguage(lang) {

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "fa"
      ? "rtl"
      : "ltr";

  localStorage.setItem("lang", lang);

}


/* =========================================
   LANGUAGE BUTTONS
========================================= */

const faBtn =
  document.querySelector(".fa-btn");

const enBtn =
  document.querySelector(".en-btn");

faBtn?.addEventListener("click", () => {
  setLanguage("fa");
});

enBtn?.addEventListener("click", () => {
  setLanguage("en");
});


/* =========================================
   SMOOTH SCROLL
========================================= */

document
  .querySelectorAll('a[href^="#"]')

  .forEach(link => {

    link.addEventListener("click", e => {

      e.preventDefault();

      const target =
        document.querySelector(
          link.getAttribute("href")
        );

      target?.scrollIntoView({
        behavior: "smooth"
      });

    });

  });


/* =========================================
   FOOTER YEAR
========================================= */

const yearEl =
  document.querySelector(".current-year");

if (yearEl) {

  yearEl.textContent =
    new Date().getFullYear();

}




/* =========================================
   Header and footer site
========================================= */
document.addEventListener('DOMContentLoaded', function () {

  const translations = {
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      activities: "Activities",
      partners: "Partners",
      blog: "Blog",
      contact: "Contact",
      join_us: "Join Us",
      donate: "Donate ♡",
      footer_description: "ECAO is dedicated to creating positive change through community empowerment and sustainable development.",
      quick_links: "Quick Links",
      support_us: "Support Us",
      support_description: "Your contribution can change lives for thousands of Afghans in need.",
      donate_now: "Donate Now ♡",
      location: "Kabul, Afghanistan",
      developer: "Design and Developed by Taqi Raya (BTB)",
      copyright: "© 2014 - 2026 ECAO. All rights reserved."
    },
    fa: {
      home: "خانه",
      about: "درباره ما",
      services: "خدمات",
      activities: "فعالیت‌ها",
      partners: "شرکا",
      blog: "بلاگ",
      contact: "تماس",
      join_us: "عضویت",
      donate: "کمک مالی ♡",
      footer_description: "سازمان ECAO متعهد به ایجاد تغییرات مثبت از طریق توانمندسازی جامعه و توسعه پایدار است.",
      quick_links: "لینک‌های سریع",
      support_us: "حمایت از ما",
      support_description: "کمک شما می‌تواند زندگی هزاران افغان نیازمند را تغییر دهد.",
      donate_now: "کمک مالی ♡",
      location: "کابل، افغانستان",
      developer: "طراحی و توسعه توسط تقی رایا (BTB)",
      copyright: "© ۲۰۱۴ - ۲۰۲۶ ECAO. تمام حقوق محفوظ است."
    }
  };

  let currentLang = localStorage.getItem("lang") || "en";

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "fa") ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));
    if (lang === "en") {
      const enBtn = document.getElementById("enBtn");
      const enBtnMob = document.getElementById("enBtnMob");
      if (enBtn) enBtn.classList.add("active");
      if (enBtnMob) enBtnMob.classList.add("active");
    } else {
      const faBtn = document.getElementById("faBtn");
      const faBtnMob = document.getElementById("faBtnMob");
      if (faBtn) faBtn.classList.add("active");
      if (faBtnMob) faBtnMob.classList.add("active");
    }

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
  }

  const enBtn = document.getElementById("enBtn");
  const faBtn = document.getElementById("faBtn");
  const enBtnMob = document.getElementById("enBtnMob");
  const faBtnMob = document.getElementById("faBtnMob");

  if (enBtn) enBtn.addEventListener("click", () => setLanguage("en"));
  if (faBtn) faBtn.addEventListener("click", () => setLanguage("fa"));
  if (enBtnMob) enBtnMob.addEventListener("click", () => setLanguage("en"));
  if (faBtnMob) faBtnMob.addEventListener("click", () => setLanguage("fa"));

  setLanguage(currentLang);

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");
      });
    });
  }

  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  const backBtn = document.getElementById("backToTopBtn");

  if (backBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backBtn.classList.add("show");
      } else {
        backBtn.classList.remove("show");
      }
    });

    backBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

});



