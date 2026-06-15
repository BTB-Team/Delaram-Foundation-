<<<<<<< HEAD
// ===== داده‌های فعالیت‌ها =====
const ACTIVITIES = [
  {
    id: '1',
    image: './src/assets/images/1776498176771-428887401.webp',
    title_en: 'Social Activities',
    title_fa: 'فعالیت‌های اجتماعی',
    text_en: 'Social activities connect people together, creating bonds and shared experiences.',
    text_fa: 'فعالیت‌های اجتماعی مردم را به هم نزدیک می‌سازد، و پیوندها و تجربه‌های مشترک ایجاد می‌کند.',
    fullText_en: 'Social activities bring people together and create bonds.\nThey encourage teamwork and collaboration among communities.\nSuch activities often include cultural events and group projects.\nThey help individuals develop communication and leadership skills.\nParticipation increases awareness of social responsibilities.\nOverall, they strengthen unity and collective growth.',
    fullText_fa: 'فعالیت‌های اجتماعی باعث نزدیکی و اتحاد مردم می‌شود.\nآن‌ها همکاری و کار گروهی را تقویت می‌کنند.\nاین فعالیت‌ها شامل رویدادهای فرهنگی و پروژه‌های گروهی است.\nمهارت‌های ارتباطی و رهبری افراد را رشد می‌دهد.\nشرکت در این فعالیت‌ها آگاهی اجتماعی را افزایش می‌دهد.\nدر نهایت، اتحاد و رشد جمعی را تقویت می‌کند.',
    date_en: 'May 18, 2026',
    date_fa: '۱۸ می ۲۰۲۶'
  },
  {
    id: '2',
    image: './src/assets/images/1776498854234-427495685.webp',
    title_en: 'Health',
    title_fa: 'سلامتی',
    text_en: 'Health is the foundation of life, requiring balance in body and mind.',
    text_fa: 'سلامتی اساس زندگی است، و نیازمند تعادل جسم و روان می‌باشد.',
    fullText_en: 'Health is the foundation of a productive life.\nMaintaining good health requires balanced nutrition and exercise.\nIt also involves mental well-being and stress management.\nPreventive care reduces risks of chronic diseases.\nHealthy habits improve energy and daily performance.\nStrong health ensures longevity and quality of life.',
    fullText_fa: 'سلامتی پایه زندگی پربار است.\nتغذیه متوازن و ورزش برای حفظ سلامتی ضروری است.\nسلامتی روان و مدیریت استرس نیز اهمیت دارد.\nمراقبت پیشگیرانه خطر بیماری‌های مزمن را کاهش می‌دهد.\nعادات سالم انرژی و عملکرد روزانه را بهبود می‌بخشد.\nسلامتی قوی عمر طولانی و کیفیت زندگی را تضمین می‌کند.',
    date_en: 'May 20, 2026',
    date_fa: '۲۰ می ۲۰۲۶'
  },
  {
    id: '3',
    image: './src/assets/images/1776497223256-383512761.webp',
    title_en: 'Education',
    title_fa: 'آموزش',
    text_en: 'Education empowers individuals with knowledge, opening doors to opportunities.',
    text_fa: 'آموزش افراد را با دانش توانمند می‌سازد، و دروازه‌های فرصت‌ها را می‌گشاید.',
    fullText_en: 'Education empowers individuals with knowledge and skills.\nIt opens doors to opportunities and career growth.\nLearning fosters creativity and critical thinking abilities.\nEducation builds awareness of social and global issues.\nIt helps shape responsible and informed citizens.\nUltimately, education drives progress and innovation.',
    fullText_fa: 'آموزش افراد را با دانش و مهارت توانمند می‌سازد.\nفرصت‌های شغلی و رشد را فراهم می‌کند.\nیادگیری خلاقیت و تفکر انتقادی را پرورش می‌دهد.\nآگاهی اجتماعی و جهانی را افزایش می‌دهد.\nشهروندان مسئول و آگاه تربیت می‌کند.\nدر نهایت، آموزش محرک پیشرفت و نوآوری است.',
    date_en: 'May 22, 2026',
    date_fa: '۲۲ می ۲۰۲۶'
  },
  {
    id: '4',
    image: './src/assets/images/1776498176771-428887401.webp',
    title_en: 'Community Development',
    title_fa: 'توسعه جامعه',
    text_en: 'Building stronger communities through collaboration and shared goals.',
    text_fa: 'ساختن جوامع قوی‌تر از طریق همکاری و اهداف مشترک.',
    fullText_en: 'Community development focuses on empowering local populations.\nIt involves creating sustainable infrastructure and services.\nCollaboration between residents and organizations is key.\nProjects address education, health, and economic needs.\nStrong communities foster resilience and self-sufficiency.\nDevelopment initiatives create lasting positive change.',
    fullText_fa: 'توسعه جامعه بر توانمندسازی جمعیت محلی تمرکز دارد.\nایجاد زیرساخت‌ها و خدمات پایدار را شامل می‌شود.\nهمکاری بین ساکنان و سازمان‌ها کلیدی است.\nپروژه‌ها نیازهای آموزشی، بهداشتی و اقتصادی را برطرف می‌کنند.\nجوامع قوی انعطاف‌پذیری و خودکفایی را تقویت می‌کنند.\nابتکارات توسعه تغییرات مثبت پایدار ایجاد می‌کنند.',
    date_en: 'May 25, 2026',
    date_fa: '۲۵ می ۲۰۲۶'
  },
  {
    id: '5',
    image: './src/assets/images/1776498854234-427495685.webp',
    title_en: 'Women Empowerment',
    title_fa: 'توانمندسازی زنان',
    text_en: 'Supporting women through education, skills training, and leadership programs.',
    text_fa: 'حمایت از زنان از طریق آموزش، آموزش مهارت و برنامه‌های رهبری.',
    fullText_en: 'Women empowerment is essential for societal progress.\nEducation and training provide women with valuable skills.\nLeadership programs help women take active roles.\nEconomic independence strengthens families and communities.\nEmpowered women contribute to sustainable development.\nEquality and opportunity create a better future for all.',
    fullText_fa: 'توانمندسازی زنان برای پیشرفت جامعه ضروری است.\nآموزش و آموزش مهارت‌های ارزشمند به زنان می‌دهد.\nبرنامه‌های رهبری به زنان کمک می‌کند نقش‌های فعال داشته باشند.\nاستقلال اقتصادی خانواده‌ها و جوامع را تقویت می‌کند.\nزنان توانمند به توسعه پایدار کمک می‌کنند.\nبرابری و فرصت آینده بهتری برای همه ایجاد می‌کند.',
    date_en: 'May 28, 2026',
    date_fa: '۲۸ می ۲۰۲۶'
  },
  {
    id: '6',
    image: './src/assets/images/1776497223256-383512761.webp',
    title_en: 'Youth Programs',
    title_fa: 'برنامه‌های جوانان',
    text_en: 'Engaging youth in meaningful activities that build skills and character.',
    text_fa: 'درگیر کردن جوانان در فعالیت‌های معنادار که مهارت‌ها و شخصیت را می‌سازد.',
    fullText_en: 'Youth programs provide guidance and opportunities.\nThey focus on education, sports, and creative activities.\nMentorship helps young people develop confidence.\nSkills training prepares youth for future careers.\nPositive engagement reduces risky behaviors.\nInvesting in youth builds a stronger tomorrow.',
    fullText_fa: 'برنامه‌های جوانان راهنمایی و فرصت‌ها را فراهم می‌کنند.\nآن‌ها بر آموزش، ورزش و فعالیت‌های خلاق تمرکز دارند.\nمربیگری به جوانان کمک می‌کند اعتماد به نفس پیدا کنند.\nآموزش مهارت‌ها جوانان را برای مشاغل آینده آماده می‌کند.\nمشارکت مثبت رفتارهای پرخطر را کاهش می‌دهد.\nسرمایه‌گذاری در جوانان فردای قوی‌تر می‌سازد.',
    date_en: 'May 30, 2026',
    date_fa: '۳۰ می ۲۰۲۶'
  }
];

console.log("📦 تعداد فعالیت‌ها:", ACTIVITIES.length);

// ===== ساخت کارت با سایزهای ثابت =====
function createActivityCard(activity, lang) {
  // ⭐ کارت اصلی - سایز ثابت
  const card = document.createElement('div');
  card.style.cssText = `
    position: relative;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    box-shadow: 0 6px 16px rgba(15,23,42,.08);
    overflow: visible;
    transition: transform 0.8s ease, box-shadow 0.8s ease, border-color 0.8s ease;
    cursor: pointer;
    background: white;
    width: 100%;
    max-width: 380px;
    min-height: 460px;
    display: flex;
    flex-direction: column;
  `;

  // ⭐ تصویر - سایز ثابت 220px
  const imageWrapper = document.createElement('div');
  imageWrapper.style.cssText = `
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 220px;
    flex-shrink: 0;
  `;

  const img = document.createElement('img');
  img.src = activity.image;
  img.alt = lang === 'fa' ? activity.title_fa : activity.title_en;
  img.style.cssText = `
    width: 100%;
    height: 100%;
    display: block;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    object-fit: cover;
    transition: transform 0.8s ease;
  `;

  const gradientOverlay = document.createElement('div');
  gradientOverlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: linear-gradient(to top, rgba(1, 36, 47, 0.9), transparent);
    opacity: 0;
    transition: opacity 0.8s ease;
    pointer-events: none;
    z-index: 1;
  `;

  // ⭐ تاریخ - سایز ثابت
  const dateLabel = document.createElement('span');
  dateLabel.textContent = lang === 'fa' ? activity.date_fa : activity.date_en;
  dateLabel.style.cssText = `
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: rgba(238, 236, 236, 0.95);
    color: #0f172a;
    padding: 0.4rem 0.8rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
    transition: transform 0.3s ease;
    white-space: nowrap;
    height: 28px;
    display: flex;
    align-items: center;
    line-height: 1;
  `;

  dateLabel.addEventListener('mouseenter', () => {
    dateLabel.style.transform = 'scale(1.08)';
  });
  dateLabel.addEventListener('mouseleave', () => {
    dateLabel.style.transform = 'scale(1)';
  });

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(gradientOverlay);
  imageWrapper.appendChild(dateLabel);

  // ⭐ محتوا - padding ثابت
  const contentWrapper = document.createElement('div');
  contentWrapper.style.cssText = `
    padding: 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

  // ⭐ عنوان - سایز ثابت 56px (2 خط)
  const title = document.createElement('h3');
  title.textContent = lang === 'fa' ? activity.title_fa : activity.title_en;
  title.style.cssText = `
    font-size: 1.15rem;
    margin: 0 0 0.75rem 0;
    color: #0f172a;
    transition: color 0.3s ease;
    font-weight: 600;
    height: 56px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
    flex-shrink: 0;
  `;

  // ⭐ متن کوتاه - سایز ثابت 66px (3 خط)
  const shortText = document.createElement('p');
  shortText.textContent = lang === 'fa' ? activity.text_fa : activity.text_en;
  shortText.style.cssText = `
    color: #64748b;
    margin: 0 0 0.75rem 0;
    white-space: pre-line;
    line-height: 1.5;
    font-size: 0.9rem;
    height: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    flex-shrink: 0;
  `;

  // ⭐ متن کامل - مخفی
  const extraText = document.createElement('p');
  extraText.textContent = lang === 'fa' ? activity.fullText_fa : activity.fullText_en;
  extraText.style.cssText = `
    color: #64748b;
    display: none;
    margin: 0 0 0.75rem 0;
    white-space: pre-line;
    line-height: 1.5;
    font-size: 0.9rem;
  `;

  // ⭐ خط جداکننده - فاصله ثابت
  const hr = document.createElement('hr');
  hr.style.cssText = `
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: auto 0 0.75rem 0;
    flex-shrink: 0;
  `;

  // ⭐ دکمه Read more - سایز ثابت 36px
  const readMoreBtn = document.createElement('span');
  readMoreBtn.textContent = lang === 'fa' ? 'بیشتر بخوانید ▼' : 'Read more ▼';
  readMoreBtn.style.cssText = `
    color: #b45309;
    font-weight: 600;
    cursor: pointer;
    display: block;
    text-align: center;
    transition: color 0.3s ease;
    font-size: 0.9rem;
    height: 36px;
    line-height: 36px;
    flex-shrink: 0;
  `;

  let expanded = false;
  readMoreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    expanded = !expanded;
    
    if (expanded) {
      shortText.style.display = 'none';
      extraText.style.display = 'block';
      card.style.minHeight = 'auto';
      readMoreBtn.textContent = lang === 'fa' ? 'کمتر بخوانید ▲' : 'Read less ▲';
    } else {
      shortText.style.display = '-webkit-box';
      extraText.style.display = 'none';
      card.style.minHeight = '460px';
      readMoreBtn.textContent = lang === 'fa' ? 'بیشتر بخوانید ▼' : 'Read more ▼';
    }
  });

  // ⭐ Hover effects
  card.addEventListener('mouseenter', () => {
    gradientOverlay.style.opacity = '1';
    card.style.borderColor = '#b45309';
    card.style.transform = 'translateY(-12px)';
    card.style.boxShadow = '0 20px 36px rgba(180, 83, 9, 0.22)';
    title.style.color = '#b45309';
    img.style.transform = 'scale(1.1)';
  });
  
  card.addEventListener('mouseleave', () => {
    gradientOverlay.style.opacity = '0';
    card.style.borderColor = '#e2e8f0';
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 6px 16px rgba(15,23,42,.08)';
    title.style.color = '#0f172a';
    img.style.transform = 'scale(1)';
  });

  // اضافه کردن همه بخش‌ها
  contentWrapper.appendChild(title);
  contentWrapper.appendChild(shortText);
  contentWrapper.appendChild(extraText);
  contentWrapper.appendChild(hr);
  contentWrapper.appendChild(readMoreBtn);

  card.appendChild(imageWrapper);
  card.appendChild(contentWrapper);

  return card;
}

// ===== رندر همه فعالیت‌ها =====
window.renderActivities = function() {
  console.log("🔵 renderActivities شروع");
  
  const container = document.getElementById('cards-container');
  if (!container) {
    console.error("❌ cards-container پیدا نشد!");
    return;
  }
  
  container.innerHTML = '';
  container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  `;
  
  const lang = localStorage.getItem('lang') || 'en';
  
  ACTIVITIES.forEach(activity => {
    const card = createActivityCard(activity, lang);
    container.appendChild(card);
  });
  
  console.log("✅ Activities رندر شد");
};

// ===== رندر 3 فعالیت آخر برای Home =====
window.renderHomeActivityCards = function() {
  console.log("🔵 renderHomeActivityCards شروع");
  
  const container = document.getElementById('home-activities-container');
  if (!container) {
    console.error("❌ home-activities-container پیدا نشد!");
    return;
  }
  
  container.innerHTML = '';
  container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  `;
  
  const lang = localStorage.getItem('lang') || 'en';
  const lastActivities = ACTIVITIES.slice(-3);
  
  lastActivities.forEach(activity => {
    const card = createActivityCard(activity, lang);
    container.appendChild(card);
  });
  
  console.log("✅ Home Activities رندر شد");
};

// ===== اجرا =====
document.addEventListener('DOMContentLoaded', () => {
  console.log("🟢 DOM آماده");
  
  if (document.getElementById('cards-container')) {
    renderActivities();
  }
});

console.log("✅ activities.js کامل شد");
=======
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
>>>>>>> 6f9fe9cfc110f3b6aa7b8e9f4c0c82c64c49a236
