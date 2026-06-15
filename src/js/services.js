/* =========================================================
   SERVICES DATA
========================================================= */
const SERVICES = [
  {
    id: '1',
    image: './src/assets/images/1776498176771-428887401.webp',
    title_en: 'Social Activities',
    title_fa: 'فعالیت‌های اجتماعی',
    text_en: 'Social activities connect people together, creating bonds and shared experiences.',
    text_fa: 'فعالیت‌های اجتماعی مردم را به هم نزدیک می‌سازد، و پیوندها و تجربه‌های مشترک ایجاد می‌کند.',
    fullText_en: 'Social activities bring people together and create bonds.\nThey encourage teamwork and collaboration among communities.\nSuch activities often include cultural events and group projects.',
    fullText_fa: 'فعالیت‌های اجتماعی باعث نزدیکی و اتحاد مردم می‌شود.\nآن‌ها همکاری و کار گروهی را تقویت می‌کنند.\nاین فعالیت‌ها شامل رویدادهای فرهنگی و پروژه‌های گروهی است.',
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
    fullText_en: 'Health is the foundation of a productive life.\nMaintaining good health requires balanced nutrition and exercise.\nIt also involves mental well-being and stress management.',
    fullText_fa: 'سلامتی پایه زندگی پربار است.\nتغذیه متوازن و ورزش برای حفظ سلامتی ضروری است.\nسلامتی روان و مدیریت استرس نیز اهمیت دارد.',
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
    fullText_en: 'Education empowers individuals with knowledge and skills.\nIt opens doors to opportunities and career growth.\nLearning fosters creativity and critical thinking abilities.',
    fullText_fa: 'آموزش افراد را با دانش و مهارت توانمند می‌سازد.\nفرصت‌های شغلی و رشد را فراهم می‌کند.\nیادگیری خلاقیت و تفکر انتقادی را پرورش می‌دهد.',
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
    fullText_en: 'Community development focuses on empowering local populations.\nIt involves creating sustainable infrastructure and services.\nCollaboration between residents and organizations is key.',
    fullText_fa: 'توسعه جامعه بر توانمندسازی جمعیت محلی تمرکز دارد.\nایجاد زیرساخت‌ها و خدمات پایدار را شامل می‌شود.\nهمکاری بین ساکنان و سازمان‌ها کلیدی است.',
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
    fullText_en: 'Women empowerment is essential for societal progress.\nEducation and training provide women with valuable skills.\nLeadership programs help women take active roles.',
    fullText_fa: 'توانمندسازی زنان برای پیشرفت جامعه ضروری است.\nآموزش و آموزش مهارت‌های ارزشمند به زنان می‌دهد.\nبرنامه‌های رهبری به زنان کمک می‌کند نقش‌های فعال داشته باشند.',
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
    fullText_en: 'Youth programs provide guidance and opportunities.\nThey focus on education, sports, and creative activities.\nMentorship helps young people develop confidence.',
    fullText_fa: 'برنامه‌های جوانان راهنمایی و فرصت‌ها را فراهم می‌کنند.\nآن‌ها بر آموزش، ورزش و فعالیت‌های خلاق تمرکز دارند.\nمربیگری به جوانان کمک می‌کند اعتماد به نفس پیدا کنند.',
    date_en: 'May 30, 2026',
    date_fa: '۳۰ می ۲۰۲۶'
  }
];

console.log("📦 تعداد سرویس‌ها:", SERVICES.length);

/* =========================================================
   LANGUAGE STATE
========================================================= */
let currentLang = localStorage.getItem('lang') || 'en';

/* =========================================================
   SERVICES PAGE TRANSLATIONS
========================================================= */
const SERVICES_TRANSLATIONS = {
  en: {
    services_hero_title: "Empowering Communities",
    services_hero_text: "Join us in building sustainable foundations for the future of Afghanistan.",
    services_title: "Our Services",
    services_intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem et explicabo saepe magnam, ipsam ad sunt iste perferendis sit quia quo iusto itaque illo veritatis officiis repellendus quis reprehenderit.",
    cta_title: "Ready to Make a Difference?",
    cta_text: "Join us in our mission to empower communities and build sustainable foundations for the future of Afghanistan.",
    cta_contact: "Contact Us →",
    cta_support: "Support Our Work →"
  },
  fa: {
    services_hero_title: "توانمندسازی جوامع",
    services_hero_text: "با ما در ساختن پایه‌های پایدار برای آینده افغانستان همراه شوید.",
    services_title: "خدمات ما",
    services_intro: "لورم ایپسوم متن ساختگی است که برای نمایش در طراحی استفاده می‌شود.",
    cta_title: "آماده‌اید تفاوت ایجاد کنید؟",
    cta_text: "در مأموریت ما برای توانمندسازی جوامع و ساختن پایه‌های پایدار برای آینده افغانستان همراه شوید.",
    cta_contact: "تماس با ما →",
    cta_support: "حمایت از کار ما →"
  }
};

/* =========================================================
   UPDATE SERVICES PAGE TEXTS
========================================================= */
function updateServicesTexts(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (SERVICES_TRANSLATIONS[lang] && SERVICES_TRANSLATIONS[lang][key]) {
      el.textContent = SERVICES_TRANSLATIONS[lang][key];
    }
  });
}

/* =========================================================
   CREATE SERVICE CARD
========================================================= */
function createServiceCard(service, lang) {
  const card = document.createElement('div');
  card.style.cssText = `
    position: relative;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    box-shadow: 0 6px 16px rgba(15,23,42,.08);
    overflow: hidden;
    transition: transform 0.8s ease, box-shadow 0.8s ease, border-color 0.8s ease;
    cursor: pointer;
    width: 100%;
    max-width: 380px;
    min-height: 460px;
    display: flex;
    flex-direction: column;
    background: white;
    margin: 0 auto;
  `;

  const imageWrapper = document.createElement('div');
  imageWrapper.style.cssText = `
    position: relative;
    width: 100%;
    height: 220px;
    flex-shrink: 0;
    overflow: hidden;
  `;

  const img = document.createElement('img');
  img.src = service.image;
  img.alt = lang === 'fa' ? service.title_fa : service.title_en;
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

  const dateLabel = document.createElement('span');
  dateLabel.textContent = lang === 'fa' ? service.date_fa : service.date_en;
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

  const contentWrapper = document.createElement('div');
  contentWrapper.style.cssText = `
    padding: 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

  const title = document.createElement('h3');
  title.textContent = lang === 'fa' ? service.title_fa : service.title_en;
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

  const shortText = document.createElement('p');
  shortText.textContent = lang === 'fa' ? service.text_fa : service.text_en;
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

  const extraText = document.createElement('p');
  extraText.textContent = lang === 'fa' ? service.fullText_fa : service.fullText_en;
  extraText.style.cssText = `
    color: #64748b;
    display: none;
    margin: 0 0 0.75rem 0;
    white-space: pre-line;
    line-height: 1.5;
    font-size: 0.9rem;
  `;

  const hr = document.createElement('hr');
  hr.style.cssText = `
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: auto 0 0.75rem 0;
    flex-shrink: 0;
  `;

  const readMoreBtn = document.createElement('span');
  readMoreBtn.textContent = lang === 'fa' ? 'بیشتر بخوانید ▼' : 'Read more ▼';
  readMoreBtn.style.cssText = `
    color: #c08a02;
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

  card.addEventListener('mouseenter', () => {
    gradientOverlay.style.opacity = '1';
    card.style.borderColor = '#a3e9fe';
    card.style.transform = 'translateY(-12px)';
    card.style.boxShadow = '0 20px 36px rgba(43, 139, 199, 0.22)';
    title.style.color = '#c08a02';
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

  contentWrapper.appendChild(title);
  contentWrapper.appendChild(shortText);
  contentWrapper.appendChild(extraText);
  contentWrapper.appendChild(hr);
  contentWrapper.appendChild(readMoreBtn);

  card.appendChild(imageWrapper);
  card.appendChild(contentWrapper);

  return card;
}

/* =========================================================
   RENDER SERVICES PAGE CARDS
========================================================= */
function renderServices() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  console.log("🔵 renderServices شروع");
  container.innerHTML = "";
  container.className = "services-grid-container";

  SERVICES.forEach((service, index) => {
    console.log(`📝 رندر سرویس ${index + 1}:`, service.title_en);
    const card = createServiceCard(service, currentLang);
    container.appendChild(card);
  });

  console.log("✅ همه سرویس‌ها رندر شدند");
}

/* =========================================================
   RENDER HOME SERVICE CARDS
========================================================= */
window.renderHomeServiceCards = function () {
  console.log("🔵 renderHomeServiceCards شروع");

  const container = document.getElementById('home-services-container');
  if (!container) {
    console.error("❌ home-services-container پیدا نشد!");
    return;
  }

  container.innerHTML = '';
  container.className = "home-cards-grid";

  const lang = localStorage.getItem('lang') || 'en';
  const lastServices = SERVICES.slice(-3);

  lastServices.forEach(service => {
    const card = createServiceCard(service, lang);
    container.appendChild(card);
  });

  console.log("✅ Home Services رندر شد - 3 کارت آخر");
};

/* =========================================================
   EVENTS
========================================================= */
window.addEventListener("languageChanged", function (e) {
  currentLang = e.detail.lang;
  updateServicesTexts(currentLang);
  renderServices();
});

/* =========================================================
   INITIAL LOAD
========================================================= */
if (document.getElementById('cards-container')) {
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    currentLang = savedLang;
    updateServicesTexts(savedLang);
    renderServices();
  });
}

console.log("✅ services.js آماده");