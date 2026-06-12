document.addEventListener('DOMContentLoaded', function () {

  const contactTranslations = {
    en: {
      hero_title: "Get in Touch",
      hero_desc: "We would love to hear from you. Contact us for any questions, support, or partnership opportunities.",
      address_label: "Address",
      address_value: "Kabul, Afghanistan",
      phone_label: "Phone",
      email_label: "Email",
      form_name: "Full Name",
      form_name_placeholder: "Enter your name",
      form_email: "Email Address",
      form_email_placeholder: "Enter your email",
      form_subject: "Subject",
      form_subject_placeholder: "Enter subject",
      form_message: "Message",
      form_message_placeholder: "Write your message...",
      form_submit: "Send Message"
    },
    fa: {
      hero_title: "با ما در تماس شوید",
      hero_desc: "ما خوشحال می‌شویم از شما بشنویم. برای سوالات، همکاری یا دریافت معلومات با ما تماس بگیرید.",
      address_label: "آدرس",
      address_value: "کابل، افغانستان",
      phone_label: "شماره تماس",
      email_label: "ایمیل",
      form_name: "نام کامل",
      form_name_placeholder: "نام خود را وارد کنید",
      form_email: "ایمیل",
      form_email_placeholder: "ایمیل خود را وارد کنید",
      form_subject: "موضوع",
      form_subject_placeholder: "موضوع را وارد کنید",
      form_message: "پیام",
      form_message_placeholder: "پیام خود را بنویسید...",
      form_submit: "ارسال پیام"
    }
  };

  function updateContactPage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (contactTranslations[lang] && contactTranslations[lang][key]) {
        el.textContent = contactTranslations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (contactTranslations[lang] && contactTranslations[lang][key]) {
        el.placeholder = contactTranslations[lang][key];
      }
    });
  }

  window.addEventListener('languageChanged', function (e) {
    updateContactPage(e.detail.lang);
  });

  const savedLang = localStorage.getItem("lang") || "en";
  updateContactPage(savedLang);

});