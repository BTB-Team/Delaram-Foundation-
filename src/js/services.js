

// داده‌ها به دو زبان
const translations = {
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
        image: "./src/assets/images/1776498854234-427495685.webp",
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
        image: "./src/assets/images/1776497223256-383512761.webp",
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
    readMore: "بیشتر بخوانید ▼",
  readLess: "کمتر بخوانید ▲",
    cards: [
      {
        image: "./src/assets/images/1776498176771-428887401.webp",
        title: "فعالیت‌های اجتماعی",
        text: "فعالیت‌های اجتماعی مردم را به هم نزدیک می‌سازد، \nو پیوندها و تجربه‌های مشترک ایجاد می‌کند.",
        fullText: `فعالیت‌های اجتماعی باعث نزدیکی و اتحاد مردم می‌شود.
آن‌ها همکاری و کار گروهی را تقویت می‌کنند.
این فعالیت‌ها شامل رویدادهای فرهنگی و پروژه‌های گروهی است.
مهارت‌های ارتباطی و رهبری افراد را رشد می‌دهد.
شرکت در این فعالیت‌ها آگاهی اجتماعی را افزایش می‌دهد.
در نهایت، اتحاد و رشد جمعی را تقویت می‌کند.`,
        date: "۱۸ اپریل ۲۰۲۶",
        
      },
      {
        image: "./src/assets/images/1776498854234-427495685.webp",
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
        image: "./src/assets/images/1776497223256-383512761.webp",
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


// تابع ساخت کارت‌ها با همان استایل اصلی
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
readMoreBtn.textContent = translations[lang].readMore; // مقدار اولیه بر اساس زبان
readMoreBtn.style.color = "#c08a02";
readMoreBtn.style.fontWeight = "600";
readMoreBtn.style.cursor = "pointer";
readMoreBtn.style.display = "block";
readMoreBtn.style.margin = "1.55rem auto"; // وسط چین
readMoreBtn.style.textAlign = "center";



    let expanded = false;
readMoreBtn.addEventListener("click", () => {
  expanded = !expanded;
  extraText.style.display = expanded ? "block" : "none";
  readMoreBtn.textContent = expanded
    ? translations[lang].readLess
    : translations[lang].readMore;
});

    // افکت hover کارت
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

  // CTA
  document.querySelector(".cta-section h2").textContent = data.ctaTitle;
  document.querySelector(".cta-section p").textContent = data.ctaText;
  document.querySelector(".cta-buttons a.btn").textContent = data.ctaBtn1;
  document.querySelector(".cta-buttons a.btn-alt").textContent = data.ctaBtn2;
  // Read more buttons
document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.textContent = translations[lang].readMore;
});


  // Cards
  renderCards(lang);
}

// دکمه‌های تغییر زبان
document.getElementById("btn-en").addEventListener("click", () => switchLanguage("en"));
document.getElementById("btn-fa").addEventListener("click", () => switchLanguage("fa"));

// بارگذاری پیش‌فرض انگلیسی
switchLanguage("en");


// این ساختار باتون است 
const btn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
