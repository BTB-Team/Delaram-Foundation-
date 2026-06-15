

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
    type: 'bullets',
  },
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

if (backToTopBtn) {
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
}






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
    
    // ⭐ رندر مجدد کارت‌های بلاگ و سرویس با زبان جدید ⭐
    setTimeout(() => {
      if (typeof renderHomePostCards === 'function') {
        console.log("🔄 رندر مجدد کارت‌های Blog با زبان جدید");
        renderHomePostCards();
      }
      if (typeof renderHomeServiceCards === 'function') {
        console.log("🔄 رندر مجدد کارت‌های Services با زبان جدید");
        renderHomeServiceCards();
      }
    }, 200);
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
















// ⭐⭐⭐ صدا زدن فانکشن نمایش 3 پست آخر ⭐⭐⭐
window.addEventListener('load', () => {
  console.log("🔵 صفحه Home کامل بارگذاری شد");



  
window.addEventListener('load', () => {
  if (typeof renderHomeServiceCards === 'function') {
    renderHomeServiceCards();
  }
});
  
  // چک کردن وجود ARTICLES
  if (typeof ARTICLES !== 'undefined') {
    console.log("✅ ARTICLES یافت شد:", ARTICLES.length, "پست");
  } else {
    console.error("❌ ARTICLES یافت نشد!");
  }

  // تعریف تابع renderHomeServiceCards
  function renderHomeServiceCards() {
    console.log("🔵 renderHomeServiceCards فراخوانی شد (صفحه Home)");

    const container = document.getElementById('home-services-container');
    if (!container) {
      console.error("❌ عنصر 'home-services-container' پیدا نشد!");
      return;
    }

    // حذف کارت‌های قبلی
    container.innerHTML = '';

    const lang = localStorage.getItem('lang') || 'en';

    // فرض بر این است که SERVICES در جایی قبل تعریف شده است
    if (!Array.isArray(SERVICES)) {
      console.error("❌ متغیر SERVICES تعریف نشده یا آرایه نیست");
      return;
    }

    const lastServices = SERVICES.slice(-3); // فقط 3 سرویس آخر

    lastServices.forEach((service, index) => {
      console.log(`📝 در حال رندر سرویس ${index + 1}:`, service.title_en);

      const card = document.createElement('div');
      card.className = 'home-service-card';
      card.onclick = () => {
        window.location.href = `services.html`;
      };

      // ساختار داخلی کارت
      card.innerHTML = `
        <div class="home-card-img">
          <img src="${service.image}" alt="${lang === 'fa' ? service.title_fa : service.title_en}">
        </div>
        <div class="home-card-body">
          <span class="home-card-tag">${lang === 'fa' ? service.date_fa : service.date_en}</span>
          <h3 class="home-card-title">${lang === 'fa' ? service.title_fa : service.title_en}</h3>
          <p class="home-card-desc">${lang === 'fa' ? service.text_fa : service.text_en}</p>
          <button class="read-more-btn">
            ${lang === 'fa' ? 'بیشتر بدانید' : 'Learn More'} 
            <span class="material-icons">arrow_forward</span>
          </button>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // فراخوانی تابع پس از لود صفحه
  renderHomeServiceCards();
});










const homePartnerCardsData = [
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

function renderHomePartnerCards(lang = "en") {
  const container = document.getElementById("home-partners-container");
  if (!container) return;

  container.innerHTML = homePartnerCardsData.map(card => `
    <div class="partner-card">
      <div class="partner-card__icon">
        <img src="${card.icon}" alt="${lang === "dr" ? card.titleDr : card.titleEn}">
      </div>
      <h3 class="partner-card__title">
        ${lang === "dr" ? card.titleDr : card.titleEn}
      </h3>
      <p class="partner-card__description">
        ${lang === "dr" ? card.descriptionDr : card.descriptionEn}
      </p>
      <span class="partner-card__status">
        ${lang === "dr" ? card.statusDr : card.statusEn}
      </span>
    </div>
  `).join("");
}

window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  renderHomePartnerCards(savedLang);
});