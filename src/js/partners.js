/* =========================================================
   PARTNERS DATA
========================================================= */
const partnerCardsData = [
  {
    icon: "./src/assets/svg/icon.svg",
    titleEn: "Afghanistan",
    titleDr: "افغانستان",
    descriptionEn: "International Organization for Migration working with ECAO on shelter projects.",
    descriptionDr: "سازمان بین‌المللی مهاجرت با ECAO روی پروژه‌های سرپناه همکاری می‌کند.",
    statusEn: "Active partner",
    statusDr: "همکار فعال"
  },
  {
    icon: "./src/assets/svg/icon.svg",
    titleEn: "Education Partner",
    titleDr: "همکار آموزشی",
    descriptionEn: "Supporting education programs and learning opportunities for young people.",
    descriptionDr: "حمایت از برنامه‌های آموزشی و فرصت‌های یادگیری برای جوانان.",
    statusEn: "Active partner",
    statusDr: "همکار فعال"
  },
  {
    icon: "./src/assets/svg/icon.svg",
    titleEn: "Community Partner",
    titleDr: "همکار اجتماعی",
    descriptionEn: "Working together to strengthen communities and create lasting impact.",
    descriptionDr: "همکاری برای تقویت جوامع و ایجاد تاثیر ماندگار.",
    statusEn: "Active partner",
    statusDr: "همکار فعال"
  }
];

/* =========================================================
   PARTNERS PAGE TRANSLATIONS
========================================================= */
const partnersTranslations = {
  en: {
    hero_title: "Building stronger communities together",
    hero_description: "Collaborating with global organizations to create lasting impact since 2014",
    section_title: "We are working together on project",
    section_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio dolore mollitia consequatur et hic.",
    cta_title: "Would you like to interested with us",
    cta_description: "We're always looking to collaborate with organizations that share our vision for a better future in Afghanistan.",
    cta_button: "Become a partner →"
  },
  fa: {
    hero_title: "با همدیگر جوامع قوی‌تر بسازیم",
    hero_description: "همکاری با سازمان‌های جهانی برای تاثیر ماندگار از سال 2014",
    section_title: "ما باهم روی پروژه کار می‌کنیم",
    section_description: "سازمان بین‌المللی مهاجرت با ECAO روی پروژه‌های سرپناه همکاری می‌کند.",
    cta_title: "آیا دوست دارید با ما همکاری کنید؟",
    cta_description: "ما همیشه به دنبال همکاری با سازمان‌هایی هستیم که دیدگاه ما را برای آینده بهتر در افغانستان شریک باشند",
    cta_button: "شریک ما شوید →"
  }
};

/* =========================================================
   RENDER PARTNER CARDS
========================================================= */
function renderPartnersCards(containerId, lang = "en") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = partnerCardsData.map(card => `
    <div class="partner-card">
      <div class="partner-card__icon">
        <img src="${card.icon}" alt="${lang === "fa" ? card.titleDr : card.titleEn}">
      </div>
      <h3 class="partner-card__title">
        ${lang === "fa" ? card.titleDr : card.titleEn}
      </h3>
      <p class="partner-card__description">
        ${lang === "fa" ? card.descriptionDr : card.descriptionEn}
      </p>
      <span class="partner-card__status">
        ${lang === "fa" ? card.statusDr : card.statusEn}
      </span>
    </div>
  `).join("");
}

/* =========================================================
   UPDATE PARTNERS PAGE TEXTS
========================================================= */
function updatePartnersTexts(lang) {
  document.querySelectorAll("[data-partners-i18n]").forEach(el => {
    const key = el.getAttribute("data-partners-i18n");
    if (partnersTranslations[lang] && partnersTranslations[lang][key]) {
      el.textContent = partnersTranslations[lang][key];
    }
  });

  // تغییر جهت متن
  document.body.dir = lang === "fa" ? "rtl" : "ltr";
  document.documentElement.lang = lang === "fa" ? "fa" : "en";
}

/* =========================================================
   CHANGE LANGUAGE
========================================================= */
function changePartnersLanguage(lang) {
  updatePartnersTexts(lang);
  renderPartnersCards("partners-page-cards-container", lang);
  
  // ذخیره زبان در localStorage
  localStorage.setItem("lang", lang);
}

/* =========================================================
   EVENTS
========================================================= */
window.addEventListener("languageChanged", function(e) {
  changePartnersLanguage(e.detail.lang);
});

/* =========================================================
   INITIAL LOAD
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  changePartnersLanguage(savedLang);
});