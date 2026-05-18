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
