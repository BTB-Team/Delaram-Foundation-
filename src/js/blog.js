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





const ARTICLES = [
  {
    id:'1',
    emoji:'🏔️',
    tag_en:'Travel',
    tag_fa:'سفر',
    title_en:'Exploring Band-e-Amir',
    title_fa:'کشف بند امیر',
    desc_en:'Discover the beauty of Band-e-Amir national park.',
    desc_fa:'زیبایی پارک ملی بند امیر را کشف کنید.',
    date:'2025-01-15'
  },
   {
    id:'2',
    emoji:'🍲',
    tag_en:'Food',
    tag_fa:'غذا',
    title_en:'The secret Behind perfect Afghan Mantu',
    title_fa:'راز پشت مانتو کامل افغان',
    desc_en:'Learn the traditional recipe and techniques passed down through generations for making the beloved Afghan dumpling dish.',
    desc_fa:'طرز العمل و تخنیک های سنتی که از نسل ها به نسل ها انتقال یافته برای تهیه غذای محبوب کوفته افغانی را بیاموزید.',
    date:'2025-01-15'
  },
  {
    id:'3',
    emoji:'💻',
    tag_en:'Technology',
    tag_fa:'تکنالوژی',
    title_en:'Tech Startups in Kabul',
    title_fa:'استارتاپ‌های کابل',
    desc_en:'Young Afghan entrepreneurs are building startups.',
    desc_fa:'کارآفرینان جوان افغان استارتاپ می‌سازند.',
    date:'2025-02-08'
  },
  {
    id:'4',
    emoji:'🏔️',
    tag_en:'Travel',
    tag_fa:'سفر',
    title_en:'Band-e-Amir',
    title_fa:'کشف بند امیر',
    desc_en:'Discover the beauty of Band-e-Amir national park.',
    desc_fa:'زیبایی پارک ملی بند امیر را کشف کنید.',
    date:'2025-01-15'
  },
   {
    id:'5',
    emoji:'🍲',
    tag_en:'Food',
    tag_fa:'غذا',
    title_en:' Afghan Mantu',
    title_fa:'راز پشت مانتو کامل افغان',
    desc_en:'Learn the traditional recipe and techniques passed down through generations for making the beloved Afghan dumpling dish.',
    desc_fa:'طرز العمل و تخنیک های سنتی که از نسل ها به نسل ها انتقال یافته برای تهیه غذای محبوب کوفته افغانی را بیاموزید.',
    date:'2025-01-15'
  },
  {
    id:'6',
    emoji:'💻',
    tag_en:'Technology',
    tag_fa:'تکنالوژی',
    title_en:' Kabul',
    title_fa:'استارتاپ‌های کابل',
    desc_en:'Young Afghan entrepreneurs are building startups.',
    desc_fa:'کارآفرینان جوان افغان استارتاپ می‌سازند.',
    date:'2025-02-08'
  }
];

let currentLang = localStorage.getItem('lang') || 'en';

function switchLang(lang){
  currentLang = lang;

  // تنظیم زبان و جهت صفحه
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

  // ذخیره زبان
  localStorage.setItem('lang', lang);

  // آپدیت دکمه ها
  updateLangButtons();

  // رندر مقاله ها
  renderArticles();

  // آپدیت متن‌های عمومی صفحه
  updatePageLang();
}

function updateLangButtons(){
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.classList.remove('active');
  });

  if(currentLang === 'fa'){
    const faBtn = document.querySelector('.fa-btn');
    if(faBtn) faBtn.classList.add('active');
  }else{
    const enBtn = document.querySelector('.en-btn');
    if(enBtn) enBtn.classList.add('active');
  }
}

function updatePageLang(){
  // نمایش/مخفی کردن متن‌ها بر اساس زبان
  document.querySelectorAll('.en-only').forEach(el=>{
    el.style.display = currentLang === 'en' ? 'inline' : 'none';
  });
  document.querySelectorAll('.fa-only').forEach(el=>{
    el.style.display = currentLang === 'fa' ? 'inline' : 'none';
  });
}

function renderArticles(){
  const grid = document.getElementById('articlesGrid');
  if(!grid) return;

  grid.innerHTML = '';

  ARTICLES.forEach(article=>{
    const card = document.createElement('article');
    card.className = 'article-card';

    card.innerHTML = `
      <div class="card-img">
        <img src="https://picsum.photos/400/300">
      </div>
      <div class="card-body">
        <span class="card-tag">
          ${currentLang === 'fa' ? article.tag_fa : article.tag_en}
        </span>
        <h2 class="card-title">
          ${currentLang === 'fa' ? article.title_fa : article.title_en}
        </h2>
        <p class="card-desc">
          ${currentLang === 'fa' ? article.desc_fa : article.desc_en}
        </p>
        <div class="card-meta">
          <button class="like-btn" onclick="toggleLike(this)">❤️ <span>0</span></button>
          <button class="comments-toggle" onclick="toggleComments(this)">💬 
            ${currentLang === 'fa' ? 'نظرها' : 'Comments'}
          </button>
        </div>
        <div class="comments-section">
          <div class="comments-list"></div>
          <form class="comment-form" onsubmit="submitComment(event,this)">
            <input type="text" placeholder="${currentLang === 'fa'? 'نظر خود را بنویسید': 'Write your comment'}" required>
            <button type="submit">
              ${ currentLang === 'fa' ? 'ارسال' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  if(typeof lucide !== 'undefined'){
    lucide.createIcons();
  }
}

function toggleLike(btn){
  btn.classList.toggle('liked');
  const count = btn.querySelector('span');
  let num = parseInt(count.textContent);
  if(btn.classList.contains('liked')){
    num++;
  }else{
    num--;
  }
  count.textContent = num;
}

function toggleComments(btn){
  const section = btn.closest('.card-body').querySelector('.comments-section');
  section.classList.toggle('open');
}

function submitComment(event, form){
  event.preventDefault();
  const input = form.querySelector('input');
  const text = input.value.trim();
  if(!text) return;
  const list = form.parentElement.querySelector('.comments-list');
  const item = document.createElement('div');
  item.className = 'comment-item';
  item.innerHTML = `
    <span class="comment-author">
      ${currentLang === 'fa' ? 'کاربر:' : 'User:'}
    </span>
    ${text}
  `;
  list.prepend(item);
  input.value = '';
  showToast(currentLang === 'fa' ? 'نظر اضافه شد' : 'Comment added!');
}

function showToast(msg){
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>{
    toast.classList.remove('show');
  },2000);
}

// اجرای اولیه
document.addEventListener('DOMContentLoaded', ()=>{
  switchLang(currentLang);
});




function renderHomePostCards() {
  console.log("🔵 renderHomePostCards فراخوانی شد");
  
  const container = document.getElementById('home-posts-container');
  if (!container) {
    console.error("❌ home-posts-container پیدا نشد!");
    return;
  }
  
  console.log("✅ home-posts-container پیدا شد");
  container.innerHTML = '';
  
  const lang = localStorage.getItem('lang') || 'en';
  const lastPosts = ARTICLES.slice(-3); // 3 پست آخر
  
  console.log("📦 تعداد پست‌ها:", lastPosts.length);
  
  lastPosts.forEach((post, index) => {
    console.log(`📝 در حال رندر پست ${index + 1}:`, post.title_en);
    
    const card = document.createElement('div');
    card.className = 'home-post-card';
    card.onclick = () => {
      window.location.href = `single-blog.html?id=${post.id}`;
    };
    
    card.innerHTML = `
      <div class="home-card-img">
        <img src="https://picsum.photos/400/300?random=${post.id}" alt="${lang === 'fa' ? post.title_fa : post.title_en}" />
      </div>
      <div class="home-card-body">
        <span class="home-card-tag">
          ${post.emoji} ${lang === 'fa' ? post.tag_fa : post.tag_en}
        </span>
        <h3 class="home-card-title">
          ${lang === 'fa' ? post.title_fa : post.title_en}
        </h3>
        <p class="home-card-desc">
          ${lang === 'fa' ? post.desc_fa : post.desc_en}
        </p>
        <button class="read-more-btn">
          ${lang === 'fa' ? 'ادامه مطلب' : 'Read More'} 
          <span class="material-icons">arrow_forward</span>
        </button>
      </div>
    `;
    
    container.appendChild(card);
  });
  
  console.log("✅ همه کارت‌ها رندر شدند!");
}

console.log("✅ blog.js بارگذاری شد - renderHomePostCards آماده است");