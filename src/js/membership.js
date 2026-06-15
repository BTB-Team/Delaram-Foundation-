
const savedLang =
    localStorage.getItem("lang") || "en";

function updateLanguage(lang) {

    document.querySelectorAll("[data-en]").forEach(el => {

        const text = el.getAttribute(`data-${lang}`);

        if (!text) return;

        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            return;
        }

        el.innerText = text;

    });

    document.querySelectorAll("[data-placeholder-en]").forEach(input => {

        const placeholder =
            input.getAttribute(`data-placeholder-${lang}`);

        if (placeholder) {
            input.placeholder = placeholder;
        }

    });

}

function setLanguage(lang) {

    document.documentElement.lang = lang;

    document.documentElement.dir =
        lang === "fa" ? "rtl" : "ltr";

    localStorage.setItem("lang", lang);

    updateLanguage(lang);

    document.querySelectorAll(".lang-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    document.querySelector(`.${lang}-btn`)
        ?.classList.add("active");
}

setLanguage(savedLang);

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

document.querySelectorAll('a[href^="#"]')
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

const yearEl =
    document.querySelector(".current-year");

if (yearEl) {
    yearEl.textContent =
        new Date().getFullYear();
}

