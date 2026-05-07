/* =========================================
   LANGUAGE SYSTEM
========================================= */

const savedLang =
  localStorage.getItem("lang") || "en";

setLanguage(savedLang);

function setLanguage(lang){

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

if(yearEl){

  yearEl.textContent =
    new Date().getFullYear();

}