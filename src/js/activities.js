// // ===== منوی موبایل ===== 
// window.toggleMobileMenu = function() { const menu = document.getElementById('mobile-menu'); if (menu) menu.classList.toggle('show'); }; 

// // ===== افکت اسکرول نوبار ===== 
// window.addEventListener('scroll', function() { const navbar = document.getElementById('navbar'); if (navbar) { if (window.scrollY > 50) { navbar.classList.add('shadow-lg'); navbar.style.background = 'rgba(255,255,255,0.95)'; } else { navbar.classList.remove('shadow-lg'); navbar.style.background = 'rgba(255,255,255,0.7)'; } } }); 

// // ===== کرسر سفارشی ===== 
// const cursorOutline = document.getElementById('cursor-outline'); 
// const cursorDot = document.getElementById('cursor-dot');
//  if (cursorOutline && cursorDot) { window.addEventListener('mousemove', function(e) { cursorDot.style.left = e.clientX + 'px'; cursorDot.style.top = e.clientY + 'px'; cursorDot.style.opacity = '1'; cursorOutline.animate( { left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: 'forwards' } ); cursorOutline.style.opacity = '1'; }); document.querySelectorAll('a, button, .clickable').forEach(el => { el.addEventListener('mouseenter', () => { cursorOutline.style.width = '60px'; cursorOutline.style.height = '60px'; cursorOutline.style.borderColor = '#b18a5e'; cursorDot.style.backgroundColor = '#b18a5e'; }); el.addEventListener('mouseleave', () => { cursorOutline.style.width = '40px'; 
//  cursorOutline.style.height = '40px'; cursorOutline.style.borderColor = '#009fe3'; cursorDot.style.backgroundColor = '#009fe3'; }); });document.addEventListener('mouseleave', () => { cursorOutline.style.opacity = '0'; cursorDot.style.opacity = '0'; }); } 
  
//  // ===== دکمه برگشت به بالا ===== 
//    const backToTopBtn = document.getElementById('backToTopBtn'); if (backToTopBtn) { window.addEventListener('scroll', () => { if (window.scrollY > 300) { backToTopBtn.style.opacity = '1'; backToTopBtn.style.visibility = 'visible'; } else { backToTopBtn.style.opacity = '0'; backToTopBtn.style.visibility = 'hidden'; } }); backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }); }
   
//    // ===== سیستم ترجمه (فقط کلیدهای هدر و فوتر) ===== 
//    const translations = { en: { home: "Home", about: "About", services: "Services", activities: "Activities", partners: "Partners", blog: "Blog", contact: "Contact", join_us: "Join Us", donate: "Donate ♡", lang_en: "EN", lang_da: "دری", 
//     footer_description: "ECAO is dedicated to creating positive change through community empowerment and sustainable development.",
//      quick_links: "Quick Links", 
//      location: "Kabul, Afghanistan", 
//      phone: "+93 764 348 000", email: "info@ecao.ngo", 
//      support_us: "Support Us", support_description: "Your contribution can change lives for thousands of Afghans in need.", 
//      donate_now: "Donate Now", developer: "Design and Developed by Taqi Raya(BTB)", 
//      copyright: "© 2014 - 2026 ECAO. All rights reserved.", back_top: "↑" }, 
//      da: { home: "خانه", 
//       about: "در باره", 
//       services: "خدمات", 
//       activities: "فعالیت‌ها", 
//       partners: "شریک‌ها",
//        blog: "وبلاگ",
//         contact: "تماس با ما", 
//        join_us: "عضویت", 
//       donate: "کمک ♡", 
//       lang_en: "EN", lang_da: "دری", 
//       footer_description: "ای‌سی‌ای‌او متعهد به ایجاد تغییر مثبت از طریق توانمندسازی جامعه و توسعه پایدار است.",
//        quick_links: "لینک‌های سریع", 
//        location: "کابل، افغانستان", 
//        phone: "+93 764 348 000", 
//        email: "info@ecao.ngo", 
//        support_us: "حمایت از ما", 
//        support_description: "سهولت شما می‌تواند زندگی‌های هزاران افغان نیازمند را تغییر دهد.", 
//        donate_now: "همین حالا کمک کنید", 
//        developer: "طراحی و توسعه توسط تقی رایا (BTB)", 
//        copyright: "© 2014 - 2026 ای‌سی‌ای‌او. تمامی حقوق محفوظ است.", 
//        back_top: "↑" } }; 
// // ===== نکته مهم: ===== // برای هر صفحه جدید، ترجمه‌های مخصوص آن صفحه را //
// // به این آبجکت اضافه کنید. مثلاً: 
//  translations.en.page_title = "Services";
//   translations.da.page_title = "خدمات"; 
//  function setLanguage(lang) { if (!translations[lang]) return; document.querySelectorAll('[data-i18n]')
// .forEach(elem => { const key = elem.getAttribute('data-i18n'); 
//   if (translations[lang][key]) { if (elem.tagName === 'SPAN' && elem.classList.contains('material-icons')) return; 
//   elem.innerText = translations[lang][key]; } }); } document.querySelectorAll('.lang-switch a').forEach(link => { link.addEventListener('click', 
//   (e) => { e.preventDefault(); const lang = link.getAttribute('href').split('=')[1]; localStorage.setItem('lang', lang); setLanguage(lang); 
//    document.querySelectorAll('.lang-switch a').forEach(l => l.classList.remove('active'));
//    link.classList.add('active'); }); }); window.addEventListener('DOMContentLoaded', () => { const savedLang = localStorage.getItem('lang') || 'en'; 
//   setLanguage(savedLang); document.querySelectorAll('.lang-switch a').forEach(link => { if (link.getAttribute('href').includes(savedLang)) { link.classList.add('active'); } 
  // else { link.classList.remove('active'); } }); });





// main content scripts from jamila haydari
  
// تغییر زبان به دو حالت
const translations = {
  en: {
    heroTitle: "Activities Pages",
    heroText: "Join us in building sustainable foundations for the future of Afghanistan.",
    servicesTitle: "Our Activities",
    servicesText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem et explicabo saepe magnam.",
    ctaTitle: "Ready to Make a Difference?",
    ctaText: "Join us in our mission to empower communities and build sustainable foundations for the future of Afghanistan.",
    ctaBtn1: "Contact Us →",
    ctaBtn2: "Support Our Work →",
    cards: [
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "Secoial Activities",
        text: "Social activities connect people together, \ncreating bonds and shared experiences.",
        fullText: `Social activities bring people together and create bonds.
They encourage teamwork and collaboration among communities.
Such activities often include cultural events and group projects.
They help individuals develop communication and leadership skills.
Participation increases awareness of social responsibilities.
Overall, they strengthen unity and collective growth.`,
        date: "April 18, 2026"
      },
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "Health",
        text: "Health is the foundation of life, \nrequiring balance in body and mind.",
        fullText: `Health is the foundation of a productive life.
Maintaining good health requires balanced nutrition and exercise.
It also involves mental well-being and stress management.
Preventive care reduces risks of chronic diseases.
Healthy habits improve energy and daily performance.
Strong health ensures longevity and quality of life.`,
        date: "April 18, 2026"
      },


        {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "Secoial Activities",
        text: "Social activities connect people together, \ncreating bonds and shared experiences.",
        fullText: `Social activities bring people together and create bonds.
They encourage teamwork and collaboration among communities.
Such activities often include cultural events and group projects.
They help individuals develop communication and leadership skills.
Participation increases awareness of social responsibilities.
Overall, they strengthen unity and collective growth.`,
        date: "April 18, 2026"
      },
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "Health",
        text: "Health is the foundation of life, \nrequiring balance in body and mind.",
        fullText: `Health is the foundation of a productive life.
Maintaining good health requires balanced nutrition and exercise.
It also involves mental well-being and stress management.
Preventive care reduces risks of chronic diseases.
Healthy habits improve energy and daily performance.
Strong health ensures longevity and quality of life.`,
        date: "April 18, 2026"
      },

      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "Education",
        text: "Education empowers individuals with knowledge, \nopening doors to opportunities.",
        fullText: `Education empowers individuals with knowledge and skills.
It opens doors to opportunities and career growth.
Learning fosters creativity and critical thinking abilities.
Education builds awareness of social and global issues.
It helps shape responsible and informed citizens.
Ultimately, education drives progress and innovation.`,
        date: "April 18, 2026"
      },
       {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "Secoial Activities",
        text: "Social activities connect people together, \ncreating bonds and shared experiences.",
        fullText: `Social activities bring people together and create bonds.
They encourage teamwork and collaboration among communities.
Such activities often include cultural events and group projects.
They help individuals develop communication and leadership skills.
Participation increases awareness of social responsibilities.
Overall, they strengthen unity and collective growth.`,
        date: "April 18, 2026"
      },
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "Health",
        text: "Health is the foundation of life, \nrequiring balance in body and mind.",
        fullText: `Health is the foundation of a productive life.
Maintaining good health requires balanced nutrition and exercise.
It also involves mental well-being and stress management.
Preventive care reduces risks of chronic diseases.
Healthy habits improve energy and daily performance.
Strong health ensures longevity and quality of life.`,
        date: "April 18, 2026"
      },
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "Education",
        text: "Education empowers individuals with knowledge, \nopening doors to opportunities.",
        fullText: `Education empowers individuals with knowledge and skills.
It opens doors to opportunities and career growth.
Learning fosters creativity and critical thinking abilities.
Education builds awareness of social and global issues.
It helps shape responsible and informed citizens.
Ultimately, education drives progress and innovation.`,
        date: "April 18, 2026"
      }
    ]
  },
  fa: {
    heroTitle: "توانمندسازی جوامع",
    heroText: "با ما همراه شوید در ساختن بنیادهای پایدار برای آینده افغانستان.",
    servicesTitle: "خدمات ما",
    servicesText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ...",
    ctaTitle: "آماده‌ای برای ایجاد تغییر؟",
    ctaText: "با ما همراه شوید در مأموریت توانمندسازی جوامع و ساختن بنیادهای پایدار برای آینده افغانستان.",
    ctaBtn1: "تماس با ما →",
    ctaBtn2: "حمایت از کار ما →",
    cards: [
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "فعالیت‌های اجتماعی",
        text: "فعالیت‌های اجتماعی مردم را به هم نزدیک می‌سازد، \nو پیوندها و تجربه‌های مشترک ایجاد می‌کند.",
        fullText: `فعالیت‌های اجتماعی باعث نزدیکی و اتحاد مردم می‌شود.
آن‌ها همکاری و کار گروهی را تقویت می‌کنند.
این فعالیت‌ها شامل رویدادهای فرهنگی و پروژه‌های گروهی است.
مهارت‌های ارتباطی و رهبری افراد را رشد می‌دهد.
شرکت در این فعالیت‌ها آگاهی اجتماعی را افزایش می‌دهد.
در نهایت، اتحاد و رشد جمعی را تقویت می‌کند.`,
        date: "۱۸ اپریل ۲۰۲۶"
      },
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "سلامتی",
        text: "سلامتی اساس زندگی است، \nو نیازمند تعادل جسم و روان می‌باشد.",
        fullText: `سلامتی پایه زندگی پربار است.
تغذیه متوازن و ورزش برای حفظ سلامتی ضروری است.
سلامتی روان و مدیریت استرس نیز اهمیت دارد.
مراقبت پیشگیرانه خطر بیماری‌های مزمن را کاهش می‌دهد.
عادات سالم انرژی و عملکرد روزانه را بهبود می‌بخشد.
سلامتی قوی عمر طولانی و کیفیت زندگی را تضمین می‌کند.`,
        date: "۱۸ اپریل ۲۰۲۶"
      },


       {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "فعالیت‌های اجتماعی",
        text: "فعالیت‌های اجتماعی مردم را به هم نزدیک می‌سازد، \nو پیوندها و تجربه‌های مشترک ایجاد می‌کند.",
        fullText: `فعالیت‌های اجتماعی باعث نزدیکی و اتحاد مردم می‌شود.
آن‌ها همکاری و کار گروهی را تقویت می‌کنند.
این فعالیت‌ها شامل رویدادهای فرهنگی و پروژه‌های گروهی است.
مهارت‌های ارتباطی و رهبری افراد را رشد می‌دهد.
شرکت در این فعالیت‌ها آگاهی اجتماعی را افزایش می‌دهد.
در نهایت، اتحاد و رشد جمعی را تقویت می‌کند.`,
        date: "۱۸ اپریل ۲۰۲۶"
      },
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "سلامتی",
        text: "سلامتی اساس زندگی است، \nو نیازمند تعادل جسم و روان می‌باشد.",
        fullText: `سلامتی پایه زندگی پربار است.
تغذیه متوازن و ورزش برای حفظ سلامتی ضروری است.
سلامتی روان و مدیریت استرس نیز اهمیت دارد.
مراقبت پیشگیرانه خطر بیماری‌های مزمن را کاهش می‌دهد.
عادات سالم انرژی و عملکرد روزانه را بهبود می‌بخشد.
سلامتی قوی عمر طولانی و کیفیت زندگی را تضمین می‌کند.`,
        date: "۱۸ اپریل ۲۰۲۶"
      },


      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "آموزش",
        text: "آموزش افراد را با دانش توانمند می‌سازد، \nو دروازه‌های فرصت‌ها را می‌گشاید.",
        fullText: `آموزش افراد را با دانش و مهارت توانمند می‌سازد.
فرصت‌های شغلی و رشد را فراهم می‌کند.
یادگیری خلاقیت و تفکر انتقادی را پرورش می‌دهد.
آگاهی اجتماعی و جهانی را افزایش می‌دهد.
شهروندان مسئول و آگاه تربیت می‌کند.
در نهایت، آموزش محرک پیشرفت و نوآوری است.`,
        date: "۱۸ اپریل ۲۰۲۶"
      },
       {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "فعالیت‌های اجتماعی",
        text: "فعالیت‌های اجتماعی مردم را به هم نزدیک می‌سازد، \nو پیوندها و تجربه‌های مشترک ایجاد می‌کند.",
        fullText: `فعالیت‌های اجتماعی باعث نزدیکی و اتحاد مردم می‌شود.
آن‌ها همکاری و کار گروهی را تقویت می‌کنند.
این فعالیت‌ها شامل رویدادهای فرهنگی و پروژه‌های گروهی است.
مهارت‌های ارتباطی و رهبری افراد را رشد می‌دهد.
شرکت در این فعالیت‌ها آگاهی اجتماعی را افزایش می‌دهد.
در نهایت، اتحاد و رشد جمعی را تقویت می‌کند.`,
        date: "۱۸ اپریل ۲۰۲۶"
      },
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "سلامتی",
        text: "سلامتی اساس زندگی است، \nو نیازمند تعادل جسم و روان می‌باشد.",
        fullText: `سلامتی پایه زندگی پربار است.
تغذیه متوازن و ورزش برای حفظ سلامتی ضروری است.
سلامتی روان و مدیریت استرس نیز اهمیت دارد.
مراقبت پیشگیرانه خطر بیماری‌های مزمن را کاهش می‌دهد.
عادات سالم انرژی و عملکرد روزانه را بهبود می‌بخشد.
سلامتی قوی عمر طولانی و کیفیت زندگی را تضمین می‌کند.`,
        date: "۱۸ اپریل ۲۰۲۶"
      },
      {
        image: "./src/assets/images/1776498176771-428887401.webp.jpg",
        title: "آموزش",
        text: "آموزش افراد را با دانش توانمند می‌سازد، \nو دروازه‌های فرصت‌ها را می‌گشاید.",
        fullText: `آموزش افراد را با دانش و مهارت توانمند می‌سازد.
فرصت‌های شغلی و رشد را فراهم می‌کند.
یادگیری خلاقیت و تفکر انتقادی را پرورش می‌دهد.
آگاهی اجتماعی و جهانی را افزایش می‌دهد.
شهروندان مسئول و آگاه تربیت می‌کند.
در نهایت، آموزش محرک پیشرفت و نوآوری است.`,
        date: "۱۸ اپریل ۲۰۲۶"
      }
    ]
  }
};


// ساخت کارت‌ها با همان استایل اصلی
function renderCards(lang = "en") {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";
  const cardsData = translations[lang].cards;

  cardsData.forEach(card => {
  // کارت اصلی
  const cardElement = document.createElement("div");
  cardElement.style.position = "relative";
  cardElement.style.border = "1px solid #e2e8f0";
  cardElement.style.borderRadius = "1rem";
  cardElement.style.boxShadow = "0 6px 16px rgba(15,23,42,.08)";
  cardElement.style.overflow = "hidden";
  cardElement.style.transition = "transform 0.8s ease, box-shadow 0.8s ease, border-color 0.8s ease";
  cardElement.style.cursor = "pointer";

  // تصویر + overlay
  const imageWrapper = document.createElement("div");
  imageWrapper.style.position = "relative";

  const img = document.createElement("img");
  img.src = card.image;
  img.alt = card.title;
  img.style.width = "100%";
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

  // تاریخ روی عکس
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

  dateLabel.addEventListener("mouseenter", () => {
    dateLabel.style.transform = "scale(1.08)";
  });
  dateLabel.addEventListener("mouseleave", () => {
    dateLabel.style.transform = "scale(1)";
  });

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(gradientOverlay);
  imageWrapper.appendChild(dateLabel);

  // عنوان
  const title = document.createElement("h3");
  title.textContent = card.title;
  title.style.fontSize = "1.25rem";
  title.style.margin = "1.25rem";
  title.style.color = "#000000";
  title.style.transition = "color 0.3s ease";

  // متن کوتاه
  const shortText = document.createElement("p");
  shortText.textContent = card.text;
  shortText.style.color = "#475569";
  shortText.style.margin = "1.25rem";
  shortText.style.whiteSpace = "pre-line"; // برای نمایش دو نیم خط

  // متن کامل
  const extraText = document.createElement("p");
  extraText.textContent = card.fullText;
  extraText.style.color = "#475569";
  extraText.style.display = "none";
  extraText.style.margin = "1.25rem";

  // خط جداکننده
  const hr = document.createElement("hr");
  hr.style.border = "none";
  hr.style.borderTop = "1px solid #e2e8f0";
  hr.style.margin = "1.25rem";

  // دکمه Read more پایین وسط با آیکون
  const readMoreBtn = document.createElement("span");
  readMoreBtn.textContent = "Read more ▼";
  readMoreBtn.style.color = "#b45309";
  readMoreBtn.style.fontWeight = "600";
  readMoreBtn.style.cursor = "pointer";
  readMoreBtn.style.display = "block";
  readMoreBtn.style.margin = "1.55rem auto"; // وسط چین
  readMoreBtn.style.textAlign = "center";

  let expanded = false;
  readMoreBtn.addEventListener("click", () => {
    expanded = !expanded;
    extraText.style.display = expanded ? "block" : "none";
    readMoreBtn.textContent = expanded ? "Read less ▲" : "Read more ▼";
  });

  // افکت hover کارت
  cardElement.addEventListener("mouseenter", () => {
    gradientOverlay.style.opacity = "1";
    cardElement.style.borderColor = "#b45309";
    cardElement.style.transform = "translateY(-12px)";
    cardElement.style.boxShadow = "0 20px 36px rgba(43, 139, 199, 0.22)";
    title.style.color = "#b45309";
  });
  cardElement.addEventListener("mouseleave", () => {
    gradientOverlay.style.opacity = "0";
    cardElement.style.borderColor = "#e2e8f0";
    cardElement.style.transform = "translateY(0)";
    cardElement.style.boxShadow = "0 6px 16px rgba(139, 162, 216, 0.08)";
    title.style.color = "#000000";
  });

  // اضافه کردن همه بخش‌ها به کارت
  cardElement.appendChild(imageWrapper);
  cardElement.appendChild(title);
  cardElement.appendChild(shortText);
  cardElement.appendChild(extraText);
  cardElement.appendChild(hr);
  cardElement.appendChild(readMoreBtn);

  container.appendChild(cardElement);
});

}



// تغییر زبان کل سایت
function switchLanguage(lang) {
  const data = translations[lang];

  // Hero
  document.querySelector(".hero-title").textContent = data.heroTitle;
  document.querySelector(".hero-text").textContent = data.heroText;

  // Services
  document.querySelector(".section-title").textContent = data.servicesTitle;
  document.querySelector(".services-section p").textContent = data.servicesText;

  
  // Cards
  renderCards(lang);
}

// دکمه‌های تغییر زبان
document.getElementById("btn-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("btn-fa").addEventListener("click", () => switchLanguage("fa"));

// بارگذاری پیش‌فرض انگلیسی
switchLanguage("en");
