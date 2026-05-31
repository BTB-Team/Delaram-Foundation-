// ===== منوی موبایل ===== 
window.toggleMobileMenu = function() { 
  const menu = document.getElementById('mobile-menu'); 
  if (menu) menu.classList.toggle('show'); 
}; 

// ===== افکت اسکرول نوبار ===== 
window.addEventListener('scroll', function() { 
  const navbar = document.getElementById('navbar'); 
  if (navbar) { 
    if (window.scrollY > 50) { 
      navbar.classList.add('shadow-lg'); 
      navbar.style.background = 'rgba(255,255,255,0.95)'; 
    } else { 
      navbar.classList.remove('shadow-lg'); 
      navbar.style.background = 'rgba(255,255,255,0.7)'; 
    } 
  } 
}); 

// ===== کرسر سفارشی ===== 
const cursorOutline = document.getElementById('cursor-outline'); 
const cursorDot = document.getElementById('cursor-dot');
if (cursorOutline && cursorDot) { 
  window.addEventListener('mousemove', function(e) { 
    cursorDot.style.left = e.clientX + 'px'; 
    cursorDot.style.top = e.clientY + 'px'; 
    cursorDot.style.opacity = '1'; 
    cursorOutline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: 'forwards' }); 
    cursorOutline.style.opacity = '1'; 
  }); 
  document.querySelectorAll('a, button, .clickable').forEach(el => { 
    el.addEventListener('mouseenter', () => { 
      cursorOutline.style.width = '60px'; 
      cursorOutline.style.height = '60px'; 
      cursorOutline.style.borderColor = '#b18a5e'; 
      cursorDot.style.backgroundColor = '#b18a5e'; 
    }); 
    el.addEventListener('mouseleave', () => { 
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

// ===== دکمه برگشت به بالا ===== 
const backToTopBtn = document.getElementById('backToTopBtn'); 
if (backToTopBtn) { 
  window.addEventListener('scroll', () => { 
    if (window.scrollY > 300) { 
      backToTopBtn.style.opacity = '1'; 
      backToTopBtn.style.visibility = 'visible'; 
    } else { 
      backToTopBtn.style.opacity = '0'; 
      backToTopBtn.style.visibility = 'hidden'; 
    } 
  }); 
  backToTopBtn.addEventListener('click', () => { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }); 
}

// ===== سیستم ترجمه عمومی (هدر + فوتر + صفحات) ===== 
const globalTranslations = { 
  en: { 
    home: "Home", about: "About", services: "Services", activities: "Activities", 
    partners: "Partners", blog: "Blog", contact: "Contact", join_us: "Join Us", 
    donate: "Donate ♡", lang_en: "EN", lang_da: "دری", 
    footer_description: "ECAO is dedicated to creating positive change through community empowerment and sustainable development.",
    quick_links: "Quick Links", location: "Kabul, Afghanistan", 
    phone: "+93 764 348 000", email: "info@ecao.ngo", 
    support_us: "Support Us", 
    support_description: "Your contribution can change lives for thousands of Afghans in need.", 
    donate_now: "Donate Now", 
    developer: "Design and Developed by Taqi Raya(BTB)", 
    copyright: "© 2014 - 2026 ECAO. All rights reserved.", 
    back_top: "↑" 
  }, 
  da: { 
    home: "خانه", about: "در باره", services: "خدمات", activities: "فعالیت‌ها", 
    partners: "شریک‌ها", blog: "وبلاگ", contact: "تماس با ما", join_us: "عضویت", 
    donate: "کمک ♡", lang_en: "EN", lang_da: "دری", 
    footer_description: "ای‌سی‌ای‌او متعهد به ایجاد تغییر مثبت از طریق توانمندسازی جامعه و توسعه پایدار است.",
    quick_links: "لینک‌های سریع", location: "کابل، افغانستان", 
    phone: "+93 764 348 000", email: "info@ecao.ngo", 
    support_us: "حمایت از ما", 
    support_description: "سهولت شما می‌تواند زندگی‌های هزاران افغان نیازمند را تغییر دهد.", 
    donate_now: "همین حالا کمک کنید", 
    developer: "طراحی و توسعه توسط تقی رایا (BTB)", 
    copyright: "© 2014 - 2026 ای‌سی‌ای‌او. تمامی حقوق محفوظ است.", 
    back_top: "↑" 
  } 
};

// تابع تنظیم زبان عمومی
function setLanguage(lang) { 
  const trans = globalTranslations[lang]; 
  if (!trans) return; 
  document.querySelectorAll('[data-i18n]').forEach(elem => { 
    const key = elem.getAttribute('data-i18n'); 
    if (trans[key]) { 
      if (elem.tagName === 'SPAN' && elem.classList.contains('material-icons')) return; 
      elem.innerText = trans[key]; 
    } 
  }); 
  // اگر تابع ترجمه صفحه‌ای وجود دارد، آن را هم صدا بزن
  if (typeof switchPageLanguage === 'function') {
    switchPageLanguage(lang);
  }
} 

// رویداد کلیک دکمه‌های زبان در هدر
document.querySelectorAll('.lang-switch a').forEach(link => { 
  link.addEventListener('click', (e) => { 
    e.preventDefault(); 
    const lang = link.getAttribute('href').split('=')[1]; 
    localStorage.setItem('lang', lang); 
    setLanguage(lang); 
    document.querySelectorAll('.lang-switch a').forEach(l => l.classList.remove('active'));
    // فعال کردن همه دکمه‌های همان زبان
    document.querySelectorAll('.lang-switch a').forEach(l => {
      if (l.getAttribute('href').includes(lang)) l.classList.add('active');
    });
  }); 
}); 

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



// داده‌های صفحه services به دو زبان
const pageTranslations = {
  en: {
    heroTitle: "Empowering Communities",
    heroText: "Join us in building sustainable foundations for the future of Afghanistan.",
    servicesTitle: "Our Services",
    servicesText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem et explicabo saepe magnam, ipsam ad sunt iste perferendis sit quia quo iusto itaque illo veritatis officiis repellendus quis reprehenderit.",
    ctaTitle: "Ready to Make a Difference?",
    ctaText: "Join us in our mission to empower communities and build sustainable foundations for the future of Afghanistan.",
    ctaBtn1: "Contact Us →",
    ctaBtn2: "Support Our Work →",
    readMore: "Read more ▼",
    readLess: "Read less ▲",
    cards: [
      {
        image: "./src/assets/images/1776498176771-428887401.webp",
        title: "Social Activities",
        text: "Social activities connect people together, \ncreating bonds and shared experiences.",
        fullText: "Social activities bring people together and create bonds.\nThey encourage teamwork and collaboration among communities.\nSuch activities often include cultural events and group projects.\nThey help individuals develop communication and leadership skills.\nParticipation increases awareness of social responsibilities.\nOverall, they strengthen unity and collective growth.",
        date: "April 18, 2026"
      },
      {
        image: "./src/assets/images/1776498854234-427495685.webp",
        title: "Health",
        text: "Health is the foundation of life, \nrequiring balance in body and mind.",
        fullText: "Health is the foundation of a productive life.\nMaintaining good health requires balanced nutrition and exercise.\nIt also involves mental well-being and stress management.\nPreventive care reduces risks of chronic diseases.\nHealthy habits improve energy and daily performance.\nStrong health ensures longevity and quality of life.",
        date: "April 18, 2026"
      },
      {
        image: "./src/assets/images/1776497223256-383512761.webp",
        title: "Education",
        text: "Education empowers individuals with knowledge, \nopening doors to opportunities.",
        fullText: "Education empowers individuals with knowledge and skills.\nIt opens doors to opportunities and career growth.\nLearning fosters creativity and critical thinking abilities.\nEducation builds awareness of social and global issues.\nIt helps shape responsible and informed citizens.\nUltimately, education drives progress and innovation.",
        date: "April 18, 2026"
      }
    ]
  },
  da: {
    heroTitle: "توانمندسازی جوامع",
    heroText: "با ما همراه شوید در ساختن بنیادهای پایدار برای آینده افغانستان.",
    servicesTitle: "خدمات ما",
    servicesText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
    ctaTitle: "آماده‌ای برای ایجاد تغییر؟",
    ctaText: "با ما همراه شوید در مأموریت توانمندسازی جوامع و ساختن بنیادهای پایدار برای آینده افغانستان.",
    ctaBtn1: "تماس با ما →",
    ctaBtn2: "حمایت از کار ما →",
    readMore: "بیشتر بخوانید ▼",
    readLess: "کمتر بخوانید ▲",
    cards: [
      {
        image: "./src/assets/images/1776498176771-428887401.webp",
        title: "فعالیت‌های اجتماعی",
        text: "فعالیت‌های اجتماعی مردم را به هم نزدیک می‌سازد، \nو پیوندها و تجربه‌های مشترک ایجاد می‌کند.",
        fullText: "فعالیت‌های اجتماعی باعث نزدیکی و اتحاد مردم می‌شود.\nآن‌ها همکاری و کار گروهی را تقویت می‌کنند.\nاین فعالیت‌ها شامل رویدادهای فرهنگی و پروژه‌های گروهی است.\nمهارت‌های ارتباطی و رهبری افراد را رشد می‌دهد.\nشرکت در این فعالیت‌ها آگاهی اجتماعی را افزایش می‌دهد.\nدر نهایت، اتحاد و رشد جمعی را تقویت می‌کند.",
        date: "۱۸ اپریل ۲۰۲۶"
      },
      {
        image: "./src/assets/images/1776498854234-427495685.webp",
        title: "سلامتی",
        text: "سلامتی اساس زندگی است، \nو نیازمند تعادل جسم و روان می‌باشد.",
        fullText: "سلامتی پایه زندگی پربار است.\nتغذیه متوازن و ورزش برای حفظ سلامتی ضروری است.\nسلامتی روان و مدیریت استرس نیز اهمیت دارد.\nمراقبت پیشگیرانه خطر بیماری‌های مزمن را کاهش می‌دهد.\nعادات سالم انرژی و عملکرد روزانه را بهبود می‌بخشد.\nسلامتی قوی عمر طولانی و کیفیت زندگی را تضمین می‌کند.",
        date: "۱۸ اپریل ۲۰۲۶"
      },
      {
        image: "./src/assets/images/1776497223256-383512761.webp",
        title: "آموزش",
        text: "آموزش افراد را با دانش توانمند می‌سازد، \nو دروازه‌های فرصت‌ها را می‌گشاید.",
        fullText: "آموزش افراد را با دانش و مهارت توانمند می‌سازد.\nفرصت‌های شغلی و رشد را فراهم می‌کند.\nیادگیری خلاقیت و تفکر انتقادی را پرورش می‌دهد.\nآگاهی اجتماعی و جهانی را افزایش می‌دهد.\nشهروندان مسئول و آگاه تربیت می‌کند.\nدر نهایت، آموزش محرک پیشرفت و نوآوری است.",
        date: "۱۸ اپریل ۲۰۲۶"
      }
    ]
  }
};

// متغیر برای نگهداری زبان فعلی
let currentPageLang = 'en';

// تابع ساخت کارت‌ها
function renderCards(lang) {
  const container = document.getElementById("cards-container");
  if (!container) return;
  container.innerHTML = "";
  const cardsData = pageTranslations[lang].cards;

  cardsData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.style.position = "relative";
    cardElement.style.border = "1px solid #e2e8f0";
    cardElement.style.borderRadius = "1rem";
    cardElement.style.boxShadow = "0 6px 16px rgba(15,23,42,.08)";
    cardElement.style.overflow = "hidden";
    cardElement.style.transition = "transform 0.8s ease, box-shadow 0.8s ease, border-color 0.8s ease";
    cardElement.style.cursor = "pointer";

    const imageWrapper = document.createElement("div");
    imageWrapper.style.position = "relative";

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.title;
    img.style.width = "100%";
    img.style.height = "40vh";
    img.style.display = "block";
    img.style.borderTopLeftRadius = "1rem";
    img.style.borderTopRightRadius = "1rem";

    const gradientOverlay = document.createElement("div");
    gradientOverlay.style.position = "absolute";
    gradientOverlay.style.top = "0";
    gradientOverlay.style.left = "0";
    gradientOverlay.style.right = "0";
    gradientOverlay.style.bottom = "0";
    gradientOverlay.style.borderTopLeftRadius = "1rem";
    gradientOverlay.style.borderTopRightRadius = "1rem";
    gradientOverlay.style.background = "linear-gradient(to top, rgba(1, 36, 47, 0.9), transparent)";
    gradientOverlay.style.opacity = "0";
    gradientOverlay.style.transition = "opacity 0.8s ease";

    const dateLabel = document.createElement("span");
    dateLabel.textContent = card.date;
    dateLabel.style.position = "absolute";
    dateLabel.style.top = "1rem";
    dateLabel.style.right = "1rem";
    dateLabel.style.background = "rgba(238, 236, 236, 0.8)";
    dateLabel.style.color = "#000000";
    dateLabel.style.padding = "0.35rem 0.75rem";
    dateLabel.style.borderRadius = "0.5rem";
    dateLabel.style.fontSize = "0.875rem";
    dateLabel.style.fontWeight = "600";
    dateLabel.style.zIndex = "2";
    dateLabel.style.transition = "transform 0.3s ease";

    dateLabel.addEventListener("mouseenter", () => { dateLabel.style.transform = "scale(1.08)"; });
    dateLabel.addEventListener("mouseleave", () => { dateLabel.style.transform = "scale(1)"; });

    imageWrapper.appendChild(img);
    imageWrapper.appendChild(gradientOverlay);
    imageWrapper.appendChild(dateLabel);

    const title = document.createElement("h3");
    title.textContent = card.title;
    title.style.fontSize = "1.25rem";
    title.style.margin = "1.25rem";
    title.style.color = "#000000";
    title.style.transition = "color 0.3s ease";

    const shortText = document.createElement("p");
    shortText.textContent = card.text;
    shortText.style.color = "#475569";
    shortText.style.margin = "1.25rem";
    shortText.style.whiteSpace = "pre-line";

    const extraText = document.createElement("p");
    extraText.textContent = card.fullText;
    extraText.style.color = "#475569";
    extraText.style.display = "none";
    extraText.style.margin = "1.25rem";
    extraText.style.whiteSpace = "pre-line";

    const hr = document.createElement("hr");
    hr.style.border = "none";
    hr.style.borderTop = "1px solid #e2e8f0";
    hr.style.margin = "1.25rem";

    const readMoreBtn = document.createElement("span");
    readMoreBtn.textContent = pageTranslations[lang].readMore;
    readMoreBtn.style.color = "#c08a02";
    readMoreBtn.style.fontWeight = "600";
    readMoreBtn.style.cursor = "pointer";
    readMoreBtn.style.display = "block";
    readMoreBtn.style.margin = "1.55rem auto";
    readMoreBtn.style.textAlign = "center";

    let expanded = false;
    readMoreBtn.addEventListener("click", () => {
      expanded = !expanded;
      extraText.style.display = expanded ? "block" : "none";
      readMoreBtn.textContent = expanded ? pageTranslations[lang].readLess : pageTranslations[lang].readMore;
    });

    cardElement.addEventListener("mouseenter", () => {
      gradientOverlay.style.opacity = "1";
      cardElement.style.borderColor = "#00c3ff";
      cardElement.style.transform = "translateY(-12px)";
      cardElement.style.boxShadow = "0 20px 36px rgba(43, 139, 199, 0.22)";
      title.style.color = "#c08a02";
    });
    cardElement.addEventListener("mouseleave", () => {
      gradientOverlay.style.opacity = "0";
      cardElement.style.borderColor = "#e2e8f0";
      cardElement.style.transform = "translateY(0)";
      cardElement.style.boxShadow = "0 6px 16px rgba(15,23,42,.08)";
      title.style.color = "#0f172a";
    });

    cardElement.appendChild(imageWrapper);
    cardElement.appendChild(title);
    cardElement.appendChild(shortText);
    cardElement.appendChild(extraText);
    cardElement.appendChild(hr);
    cardElement.appendChild(readMoreBtn);
    container.appendChild(cardElement);
  });
}

// تابع تغییر زبان صفحه (فراخوانی از main.js)
function switchPageLanguage(lang) {
  const data = pageTranslations[lang];
  if (!data) return;
  currentPageLang = lang;

  // Hero
  const heroTitle = document.querySelector(".hero-title");
  const heroText = document.querySelector(".hero-text");
  if (heroTitle) heroTitle.textContent = data.heroTitle;
  if (heroText) heroText.textContent = data.heroText;

  // Services section
  const sectionTitle = document.querySelector(".section-title");
  const sectionText = document.querySelector(".services-section p");
  if (sectionTitle) sectionTitle.textContent = data.servicesTitle;
  if (sectionText) sectionText.textContent = data.servicesText;

  // CTA
  const ctaH2 = document.querySelector(".cta-section h2");
  const ctaP = document.querySelector(".cta-section p");
  const ctaBtn1 = document.querySelector(".cta-buttons a.btn");
  const ctaBtnAlt = document.querySelector(".cta-buttons a.btn-alt");
  if (ctaH2) ctaH2.textContent = data.ctaTitle;
  if (ctaP) ctaP.textContent = data.ctaText;
  if (ctaBtn1) ctaBtn1.textContent = data.ctaBtn1;
  if (ctaBtnAlt) ctaBtnAlt.textContent = data.ctaBtn2;

  // کارت‌ها
  renderCards(lang);
}

// بارگذاری اولیه
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  switchPageLanguage(savedLang);
});

// دکمه بالا
const btn2 = document.getElementById("backToTopBtn2");
if (btn2) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { btn2.classList.add("show"); } 
    else { btn2.classList.remove("show"); }
  });
  btn2.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });
}