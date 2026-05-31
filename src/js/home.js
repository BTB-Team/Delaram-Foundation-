// Mobile Menu Toggle
window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('show');
    }
};

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if (navbar) {
        if (scrollPos > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(255,255,255,0.95)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(255,255,255,0.7)';
        }
    }
});

// Custom Cursor Logic
const cursorOutline = document.getElementById('cursor-outline');
const cursorDot = document.getElementById('cursor-dot');

if (cursorOutline && cursorDot) {
    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorDot.style.opacity = '1';

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
        cursorOutline.style.opacity = '1';
    });

    const links = document.querySelectorAll('a, button, .clickable');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.borderColor = '#b18a5e';
            cursorDot.style.backgroundColor = '#b18a5e';
        });
        link.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.borderColor = '#009fe3';
            cursorDot.style.backgroundColor = '#009fe3';
        });
    });

    document.addEventListener('mouseleave', () => {
        cursorOutline.style.opacity = '0';
        cursorDot.style.opacity = '0';
    });
}

// اسلایدر اصلی
const mainSwiper = new Swiper('.heroSwiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1200,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.visibility = "visible";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.visibility = "hidden";
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ترجمه‌ها - یک آبجکت واحد و کامل
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
    lang_en: "EN",
    lang_da: "دری",
    // Hero Slider
    learn_more: "Learn More",
    visionTitle: "Vision",
    Our_Future_Goals: "Our future goals",
    Mission: "Mission",
    What_We_Do: "What we do daily",
    // Section 1 - About
    about_ecao: "About Education, Cultural and Art Organization (ECAO)",
    who_we_are: "Who We Are",
    p: "ECAO is a non-governmental academic and cultural entity established with the goal of enhancing awareness, knowledge, technical, and artistic skills among the young generation. The organization is dedicated to creating a dynamic and inspiring learning environment that fosters intellectual, moral, scientific, and cultural growth among students and learners.",
    see_more: "See More",
    // Section 2 - Purpose
    purpose_title: "Our Purpose",
    visionText: "To become one of the most reputable educational and cultural organizations in Afghanistan, recognized for the promotion of knowledge, ethics, and art.",
    missionTitle: "Mission",
    missionText: "To educate and nurture an aware, creative, and responsible generation capable of playing an active role in the reconstruction of the country.",
    // Footer
    footer_description: "ECAO is dedicated to creating positive change through community empowerment and sustainable development.",
    quick_links: "Quick Links",
    location: "Kabul, Afghanistan",
    phone: "+93 764 348 000",
    email: "info@ecao.ngo",
    support_us: "Support Us",
    support_description: "Your contribution can change lives for thousands of Afghans in need.",
    donate_now: "Donate Now",
    developer: "Design and Developed by Taqi Raya(BTB)",
    copyright: "© 2014 - 2026 ECAO. All rights reserved.",
    back_top: "↑"
  },
  da: {
    home: "خانه",
    about: "در باره",
    services: "خدمات",
    activities: "فعالیت‌ها",
    partners: "شریک‌ها",
    blog: "وبلاگ",
    contact: "تماس با ما",
    join_us: "عضویت",
    donate: "کمک ♡",
    lang_en: "EN",
    lang_da: "دری",
    // Hero Slider
    learn_more: "بیشتر بدانید",
    visionTitle: "دیدگاه",
    Our_Future_Goals: "اهداف آینده ما",
    Mission: "ماموریت",
    What_We_Do: "کارهای روزانه ما",
    // Section 1 - About
    about_ecao: "درباره سازمان آموزشی، فرهنگی و هنری (ECAO)",
    who_we_are: "ما کی هستیم",
    p: "ECAO یک نهاد غیردولتی آموزشی و فرهنگی است که با هدف ارتقای آگاهی، دانش، مهارت‌های فنی و هنری در میان نسل جوان تأسیس شده است. این سازمان متعهد به ایجاد محیط یادگیری پویا و الهام‌بخش است که رشد فکری، اخلاقی، علمی و فرهنگی را در میان دانش‌آموزان و یادگیرندگان تقویت می‌کند.",
    see_more: "بیشتر ببینید",
    // Section 2 - Purpose
    purpose_title: "هدف ما",
    visionText: "به یکی از معتبرترین سازمان‌های آموزشی و فرهنگی در افغانستان تبدیل شدن که به ترویج دانش، اخلاق و هنر شناخته شود.",
    missionTitle: "ماموریت",
    missionText: "آموزش و پرورش نسلی آگاه، خلاق و مسئول که بتواند نقش فعالی در بازسازی کشور ایفا کند.",
    // Footer
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
    back_top: "↑"
  }
};

// تابع تغییر زبان
function setLanguage(lang) {
  if (!translations[lang]) return;
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // برای المان‌هایی که آیکون material دارند، فقط متن را عوض نکن
      if (elem.tagName === 'SPAN' && elem.classList.contains('material-icons')) return;
      elem.innerText = translations[lang][key];
    }
  });
}

// رویدادهای تغییر زبان
document.querySelectorAll('.lang-switch a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = link.getAttribute('href').split('=')[1];
    localStorage.setItem('lang', lang);
    setLanguage(lang);
    document.querySelectorAll('.lang-switch a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// بارگذاری زبان ذخیره شده
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
  document.querySelectorAll('.lang-switch a').forEach(link => {
    if (link.getAttribute('href').includes(savedLang)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});



