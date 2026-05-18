/* =========================================================
    Language
========================================================= */

const savedLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {

    document.documentElement.lang = lang;

    document.documentElement.dir =
        lang === "fa" ? "rtl" : "ltr";

    localStorage.setItem("lang", lang);

    updateLanguage(lang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    document.querySelector(`.${lang}-btn`)
        ?.classList.add("active");
}

function updateLanguage(lang) {

    document.querySelectorAll("[data-en]").forEach(el => {

        const text =
            el.getAttribute(`data-${lang}`);

        if (text) {
            el.textContent = text;
        }

    });

    document.querySelectorAll("[data-placeholder-en]").forEach(input => {

        const placeholder =
            input.getAttribute(`data-placeholder-${lang}`);

        if (placeholder) {
            input.placeholder = placeholder;
        }

    });

}

setLanguage(savedLang);

document.querySelector(".fa-btn")
    ?.addEventListener("click", () => {
        setLanguage("fa");
    });

document.querySelector(".en-btn")
    ?.addEventListener("click", () => {
        setLanguage("en");
    });

