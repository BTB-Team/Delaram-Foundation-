const donateTranslations = {
  en: {
    hero_title: "support our work",
    hero_desc: "Your contribution directly fuels sustainable change and humanitarian aid in Afghanistan.",
    card_title: "Financial Support",
    card_subtitle: "Secure Transactions",
    donate_text: "For donation arrangements, bank transfer details, or submitting proof of donation, please contact us.",
    phone: "Phone",
    email: "Email",
    footer_help: "Need help with your donation?",
    audit_text: "ECAO is fully audited and 100% transparent."
  },
  fa: {
    hero_title: "از کار ما حمایت کنید",
    hero_desc: "کمک شما مستقیماً باعث تغییر پایدار و کمک‌های بشردوستانه در افغانستان می‌شود.",
    card_title: "حمایت مالی",
    card_subtitle: "پرداخت‌های امن",
    donate_text: "برای هماهنگی کمک، معلومات انتقال بانکی، یا ارسال رسید کمک، لطفاً با ما تماس بگیرید.",
    phone: "تلیفون",
    email: "ایمیل",
    footer_help: "برای کمک در اهدای خود نیاز به راهنمایی دارید؟",
    audit_text: "ECAO به‌طور کامل حسابرسی شده و ۱۰۰٪ شفاف است."
  }
};

function setDonateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (donateTranslations[lang] && donateTranslations[lang][key]) {
      el.textContent = donateTranslations[lang][key];
    }
  });

  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "fa" ? "fa" : "en";

  window.dispatchEvent(new CustomEvent("languageChanged", {
    detail: { lang }
  }));
}

document.getElementById("enBtn")?.addEventListener("click", () => setDonateLanguage("en"));
document.getElementById("faBtn")?.addEventListener("click", () => setDonateLanguage("fa"));
document.getElementById("enBtnMob")?.addEventListener("click", () => setDonateLanguage("en"));
document.getElementById("faBtnMob")?.addEventListener("click", () => setDonateLanguage("fa"));

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setDonateLanguage(savedLang);

  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("languageChanged", {
      detail: { lang: savedLang }
    }));
  }, 50);
});