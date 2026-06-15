/* =========================================================
   ACTIVITIES DATA
========================================================= */
const ACTIVITIES = [
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

console.log("📦 تعداد فعالیت‌ها:", ACTIVITIES.length);

/* =========================================================
   LANGUAGE STATE
========================================================= */
let currentLangActivities = localStorage.getItem('lang') || 'en';

/* =========================================================
   ACTIVITIES PAGE TRANSLATIONS
========================================================= */
const ACTIVITIES_TRANSLATIONS = {
  en: {
    activities_hero_title: "Empowering Communities",
    activities_hero_text: "Join us in building sustainable foundations for the future of Afghanistan.",
    activities_title: "Our Activities",
    activities_intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem et explicabo saepe magnam, ipsam ad sunt iste perferendis sit quia quo iusto itaque illo veritatis officiis repellendus quis reprehenderit.",
    cta_title: "Ready to Make a Difference?",
    cta_text: "Join us in our mission to empower communities and build sustainable foundations for the future of Afghanistan.",
    cta_contact: "Contact Us →",
    cta_support: "Support Our Work →"
  },
  fa: {
    activities_hero_title: "توانمندسازی جوامع",
    activities_hero_text: "با ما در ساختن پایه‌های پایدار برای آینده افغانستان همراه شوید.",
    activities_title: "فعالیت‌های ما",
    activities_intro: "لورم ایپسوم متن ساختگی است که برای نمایش در طراحی استفاده می‌شود.",
    cta_title: "آماده‌اید تفاوت ایجاد کنید؟",
    cta_text: "در مأموریت ما برای توانمندسازی جوامع و ساختن پایه‌های پایدار برای آینده افغانستان همراه شوید.",
    cta_contact: "تماس با ما →",
    cta_support: "حمایت از کار ما →"
  }
};

/* =========================================================
   UPDATE ACTIVITIES PAGE TEXTS
========================================================= */
function updateActivitiesTexts(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (ACTIVITIES_TRANSLATIONS[lang] && ACTIVITIES_TRANSLATIONS[lang][key]) {
      el.textContent = ACTIVITIES_TRANSLATIONS[lang][key];
    }
  });
}

/* =========================================================
   CREATE ACTIVITY CARD
========================================================= */
function createActivityCard(activity, lang) {
  const card = document.createElement('div');
  card.style.cssText = `
    position: relative;
    border: 1px solid var(--border-light);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    transition: transform 0.6s ease, box-shadow 0.6s ease, border-color 0.6s ease;
    cursor: pointer;
    width: 100%;
    max-width: 380px;
    min-height: 460px;
    display: flex;
    flex-direction: column;
    background: var(--white);
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
  img.src = activity.image;
  img.alt = lang === 'fa' ? activity.title_fa : activity.title_en;
  img.style.cssText = `
    width: 100%;
    height: 100%;
    display: block;
    border-top-left-radius: var(--radius-xl);
    border-top-right-radius: var(--radius-xl);
    object-fit: cover;
    transition: transform 0.6s ease;
  `;

  const gradientOverlay = document.createElement('div');
  gradientOverlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: var(--radius-xl);
    border-top-right-radius: var(--radius-xl);
    background: linear-gradient(to top, rgba(208, 90, 0, 0.5), transparent 60%);
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
    z-index: 1;
  `;

  const dateLabel = document.createElement('span');
  dateLabel.textContent = lang === 'fa' ? activity.date_fa : activity.date_en;
  dateLabel.style.cssText = `
    position: absolute;
    top: var(--space-3);
    right: var(--space-3);
    background: var(--warning-50);
    color: var(--warning-700);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 2;
    transition: transform 0.4s ease;
    white-space: nowrap;
    height: 26px;
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
    padding: var(--space-5);
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

  const title = document.createElement('h3');
  title.textContent = lang === 'fa' ? activity.title_fa : activity.title_en;
  title.style.cssText = `
    font-size: 1.05rem;
    margin: 0 0 var(--space-3) 0;
    color: var(--text-primary);
    transition: color 0.4s ease;
    font-weight: 600;
    height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
    flex-shrink: 0;
  `;

  const shortText = document.createElement('p');
  shortText.textContent = lang === 'fa' ? activity.text_fa : activity.text_en;
  shortText.style.cssText = `
    color: var(--text-secondary);
    margin: 0 0 var(--space-3) 0;
    white-space: pre-line;
    line-height: 1.6;
    font-size: 0.875rem;
    height: 63px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    flex-shrink: 0;
  `;

  const hr = document.createElement('hr');
  hr.style.cssText = `
    border: none;
    border-top: 1px solid var(--border-light);
    margin: auto 0 var(--space-3) 0;
    flex-shrink: 0;
  `;

  const readMoreBtn = document.createElement('span');
  readMoreBtn.textContent = lang === 'fa' ? 'بیشتر بخوانید ←' : 'Read more →';
  readMoreBtn.style.cssText = `
    color: var(--warning-500);
    font-weight: 600;
    cursor: pointer;
    display: block;
    text-align: center;
    transition: color 0.4s ease;
    font-size: 0.875rem;
    height: 34px;
    line-height: 34px;
    flex-shrink: 0;
  `;

  readMoreBtn.addEventListener('mouseenter', () => {
    readMoreBtn.style.color = 'var(--warning-700)';
  });
  readMoreBtn.addEventListener('mouseleave', () => {
    readMoreBtn.style.color = 'var(--warning-500)';
  });

  readMoreBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    const title = lang === 'fa' ? activity.title_fa : activity.title_en;
    const content = lang === 'fa' ? activity.fullText_fa : activity.fullText_en;
    const date = lang === 'fa' ? activity.date_fa : activity.date_en;
    const image = activity.image;

    const url = `Full-Article.html?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}&date=${encodeURIComponent(date)}&image=${encodeURIComponent(image)}&lang=${lang}`;

    window.open(url, '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes');
  });

  card.addEventListener('mouseenter', () => {
    gradientOverlay.style.opacity = '1';
    card.style.borderColor = 'var(--warning-700)';
    card.style.transform = 'translateY(-12px)';
    card.style.boxShadow = 'var(--shadow-lg)';
    title.style.color = 'var(--warning-700)';
    img.style.transform = 'scale(1.08)';
  });

  card.addEventListener('mouseleave', () => {
    gradientOverlay.style.opacity = '0';
    card.style.borderColor = 'var(--border-light)';
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'var(--shadow-md)';
    title.style.color = 'var(--text-primary)';
    img.style.transform = 'scale(1)';
  });

  contentWrapper.appendChild(title);
  contentWrapper.appendChild(shortText);
  contentWrapper.appendChild(hr);
  contentWrapper.appendChild(readMoreBtn);

  card.appendChild(imageWrapper);
  card.appendChild(contentWrapper);

  return card;
}

/* =========================================================
   RENDER ACTIVITIES PAGE CARDS
========================================================= */
function renderActivities() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  console.log("🔵 renderActivities شروع");
  container.innerHTML = "";
  container.className = "activities-grid-container";

  ACTIVITIES.forEach((activity, index) => {
    console.log(`📝 رندر فعالیت ${index + 1}:`, activity.title_en);
    const card = createActivityCard(activity, currentLangActivities);
    container.appendChild(card);
  });

  console.log("✅ همه فعالیت‌ها رندر شدند");
}

/* =========================================================
   RENDER HOME ACTIVITY CARDS - برای صفحه index.html
========================================================= */
window.renderHomeActivityCards = function () {
  console.log("🔵 renderHomeActivityCards شروع");

  const container = document.getElementById('home-activities-container');
  if (!container) {
    console.error("❌ home-activities-container پیدا نشد!");
    return;
  }

  container.innerHTML = '';
  container.className = "home-cards-grid";

  const lang = localStorage.getItem('lang') || 'en';
  const lastActivities = ACTIVITIES.slice(-3);

  lastActivities.forEach(activity => {
    const card = createActivityCard(activity, lang);
    container.appendChild(card);
  });

  console.log("✅ Home Activities رندر شد - 3 کارت آخر");
};

/* =========================================================
   EVENTS
========================================================= */
window.addEventListener("languageChanged", function (e) {
  currentLangActivities = e.detail.lang;
  updateActivitiesTexts(currentLangActivities);
  renderActivities();

  if (document.getElementById('home-activities-container')) {
    window.renderHomeActivityCards();
  }
});

/* =========================================================
   INITIAL LOAD
========================================================= */
if (document.getElementById('cards-container')) {
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    currentLangActivities = savedLang;
    updateActivitiesTexts(savedLang);
    renderActivities();
  });
}

console.log("✅ activities.js آماده");