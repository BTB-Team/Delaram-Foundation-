/* =========================================================

    navbar
========================================================= */

// ===== منوی موبایل ===== 
window.toggleMobileMenu = function() { const menu = document.getElementById('mobile-menu'); if (menu) menu.classList.toggle('show'); }; 

// ===== افکت اسکرول نوبار ===== 
window.addEventListener('scroll', function() { const navbar = document.getElementById('navbar'); if (navbar) { if (window.scrollY > 50) { navbar.classList.add('shadow-lg'); navbar.style.background = 'rgba(255,255,255,0.95)'; } else { navbar.classList.remove('shadow-lg'); navbar.style.background = 'rgba(255,255,255,0.7)'; } } }); 

// ===== کرسر سفارشی ===== 
const cursorOutline = document.getElementById('cursor-outline'); 
const cursorDot = document.getElementById('cursor-dot');
 if (cursorOutline && cursorDot) { window.addEventListener('mousemove', function(e) { cursorDot.style.left = e.clientX + 'px'; cursorDot.style.top = e.clientY + 'px'; cursorDot.style.opacity = '1'; cursorOutline.animate( { left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: 'forwards' } ); cursorOutline.style.opacity = '1'; }); document.querySelectorAll('a, button, .clickable').forEach(el => { el.addEventListener('mouseenter', () => { cursorOutline.style.width = '60px'; cursorOutline.style.height = '60px'; cursorOutline.style.borderColor = '#b18a5e'; cursorDot.style.backgroundColor = '#b18a5e'; }); el.addEventListener('mouseleave', () => { cursorOutline.style.width = '40px'; 
 cursorOutline.style.height = '40px'; cursorOutline.style.borderColor = '#009fe3'; cursorDot.style.backgroundColor = '#009fe3'; }); });document.addEventListener('mouseleave', () => { cursorOutline.style.opacity = '0'; cursorDot.style.opacity = '0'; }); } 
  
 // ===== دکمه برگشت به بالا ===== 
   const backToTopBtn = document.getElementById('backToTopBtn'); if (backToTopBtn) { window.addEventListener('scroll', () => { if (window.scrollY > 300) { backToTopBtn.style.opacity = '1'; backToTopBtn.style.visibility = 'visible'; } else { backToTopBtn.style.opacity = '0'; backToTopBtn.style.visibility = 'hidden'; } }); backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }); }
   
   // ===== سیستم ترجمه (فقط کلیدهای هدر و فوتر) ===== 
   const translations = { en: { home: "Home", about: "About", services: "Services", activities: "Activities", partners: "Partners", blog: "Blog", contact: "Contact", join_us: "Join Us", donate: "Donate ♡", lang_en: "EN", lang_da: "دری", 
    footer_description: "ECAO is dedicated to creating positive change through community empowerment and sustainable development.",
     quick_links: "Quick Links", 
     location: "Kabul, Afghanistan", 
     phone: "+93 764 348 000", email: "info@ecao.ngo", 
     support_us: "Support Us", support_description: "Your contribution can change lives for thousands of Afghans in need.", 
     donate_now: "Donate Now", developer: "Design and Developed by Taqi Raya(BTB)", 
     copyright: "© 2014 - 2026 ECAO. All rights reserved.", back_top: "↑" }, 
     da: { home: "خانه", 
      about: "در باره", 
      services: "خدمات", 
      activities: "فعالیت‌ها", 
      partners: "شریک‌ها",
       blog: "وبلاگ",
        contact: "تماس با ما", 
       join_us: "عضویت", 
      donate: "کمک ♡", 
      lang_en: "EN", lang_da: "دری", 
      footer_description: "ای‌سی‌ای‌او متعهد به ایجاد تغییر مثبت از طریق توانمندسازی جامعه و توسعه پایدار است.",
       quick_links: "لینک‌های سریع", 
       location: "کابل، افغانستان", 
       phone: "+93 764 348 000", 
       email: "info@ecao.ngo", 
       support_us: "حمایت از ما", 
       support_description: "سهولت شما می‌تواند زندگی‌های هزاران افغان نیازمند را تغییر دهد.", 
       donate_now: "همین حالا کمک کنید", 
       developer: "طراحی و توسعه توسط تقی رایا (BTB)", 
       copyright: "© 2014 - 2026 ای‌سی‌ای‌او. تمامی حقوق محفوظ است.", 
       back_top: "↑" } }; 
// ===== نکته مهم: ===== // برای هر صفحه جدید، ترجمه‌های مخصوص آن صفحه را //
// به این آبجکت اضافه کنید. مثلاً: 
 translations.en.page_title = "Services";
  translations.da.page_title = "خدمات"; 
 function setLanguage(lang) { if (!translations[lang]) return; document.querySelectorAll('[data-i18n]')
.forEach(elem => { const key = elem.getAttribute('data-i18n'); 
  if (translations[lang][key]) { if (elem.tagName === 'SPAN' && elem.classList.contains('material-icons')) return; 
  elem.innerText = translations[lang][key]; } }); } document.querySelectorAll('.lang-switch a').forEach(link => { link.addEventListener('click', 
  (e) => { e.preventDefault(); const lang = link.getAttribute('href').split('=')[1]; localStorage.setItem('lang', lang); setLanguage(lang); 
   document.querySelectorAll('.lang-switch a').forEach(l => l.classList.remove('active'));
   link.classList.add('active'); }); }); window.addEventListener('DOMContentLoaded', () => { const savedLang = localStorage.getItem('lang') || 'en'; 
  setLanguage(savedLang); document.querySelectorAll('.lang-switch a').forEach(link => { if (link.getAttribute('href').includes(savedLang)) { link.classList.add('active'); } 
  else { link.classList.remove('active'); } }); });


  //Language
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

