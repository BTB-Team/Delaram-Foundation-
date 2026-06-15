
// ===== داده‌های بلاگ =====
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
    desc_en:'Learn the traditional recipe and techniques passed down through generations.',
    desc_fa:'طرز العمل و تخنیک های سنتی که از نسل ها به نسل ها انتقال یافته را بیاموزید.',
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
    title_en:'Band-e-Amir National Park',
    title_fa:'پارک ملی بند امیر',
    desc_en:'Discover the stunning beauty of Afghanistan first national park.',
    desc_fa:'زیبایی خیره‌کننده اولین پارک ملی افغانستان را کشف کنید.',
    date:'2025-01-20'
  },
  {
    id:'5',
    emoji:'🍲',
    tag_en:'Food',
    tag_fa:'غذا',
    title_en:'Afghan Mantu Recipe',
    title_fa:'دستور پخت منتوی افغانی',
    desc_en:'Learn the traditional recipe and cooking techniques.',
    desc_fa:'دستور پخت سنتی و تکنیک‌های آشپزی را بیاموزید.',
    date:'2025-02-01'
  },
  {
    id:'6',
    emoji:'💻',
    tag_en:'Technology',
    tag_fa:'تکنالوژی',
    title_en:'Kabul Tech Startups',
    title_fa:'استارتاپ‌های تکنولوژی کابل',
    desc_en:'Young Afghan entrepreneurs are building innovative startups.',
    desc_fa:'کارآفرینان جوان افغان استارتاپ‌های نوآورانه می‌سازند.',
    date:'2025-02-10'
  }
];

console.log("📦 ARTICLES:", ARTICLES.length, "پست");

// ===== تابع باز کردن Pop-up =====
function openPostPopup(postId) {
  console.log("🔵 باز کردن popup برای پست:", postId);
  
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9998;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const popup = document.createElement('div');
  popup.style.cssText = `
    position: relative;
    width: 90%;
    max-width: 900px;
    height: 85vh;
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  `;
  
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '✕';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border: none;
    background: white;
    color: #0f172a;
    font-size: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  `;
  closeBtn.onclick = function() {
    document.body.removeChild(overlay);
    document.body.style.overflow = 'auto';
  };
  
  const iframe = document.createElement('iframe');
  iframe.src = `./single page.html?id=${postId}`;
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
  `;
  
  popup.appendChild(closeBtn);
  popup.appendChild(iframe);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
  
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
      document.body.style.overflow = 'auto';
    }
  });
}

// ===== ساخت کارت با سایزهای ثابت =====
function createBlogCard(post, lang, showComments) {
  const card = document.createElement('div');
  card.className = 'blog-card';
  card.style.cssText = `
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    overflow: visible;
    transition: all 0.6s ease;
    width: 100%;
    max-width: 380px;
    min-height: 520px;
    display: flex;
    flex-direction: column;
    position: relative;
  `;
  
  // ⭐ تصویر - سایز ثابت
  const imageWrapper = document.createElement('div');
  imageWrapper.style.cssText = `
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 220px;
    flex-shrink: 0;
  `;
  
  const img = document.createElement('img');
  img.src = `https://picsum.photos/400/300?random=${post.id}`;
  img.alt = lang === 'fa' ? post.title_fa : post.title_en;
  img.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  `;
  
  // ⭐ تگ - سایز ثابت
  const tagLabel = document.createElement('span');
  tagLabel.textContent = `${post.emoji} ${lang === 'fa' ? post.tag_fa : post.tag_en}`;
  tagLabel.style.cssText = `
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(255,255,255,0.95);
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    white-space: nowrap;
    height: 28px;
    display: flex;
    align-items: center;
  `;
  
  imageWrapper.appendChild(img);
  imageWrapper.appendChild(tagLabel);
  
  // ⭐ محتوا - فاصله‌های کم
  const contentWrapper = document.createElement('div');
  contentWrapper.style.cssText = `
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  `;
  
  // ⭐ عنوان - سایز ثابت
  const title = document.createElement('h3');
  title.textContent = lang === 'fa' ? post.title_fa : post.title_en;
  title.style.cssText = `
    margin: 0 0 0.5rem 0;
    font-size: 1.15rem;
    color: #0f172a;
    font-weight: 600;
    transition: color 0.4s ease;
    height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
    flex-shrink: 0;
  `;
  
  // ⭐ توضیحات - سایز ثابت
  const desc = document.createElement('p');
  desc.textContent = lang === 'fa' ? post.desc_fa : post.desc_en;
  desc.style.cssText = `
    color: #64748b;
    line-height: 1.5;
    margin: 0 0 0.75rem 0;
    font-size: 0.9rem;
    height: 68px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    flex-shrink: 0;
  `;
  
  contentWrapper.appendChild(title);
  contentWrapper.appendChild(desc);
  
  if (showComments) {
    // ⭐ دکمه‌های لایک و کامنت - سایز ثابت
    const metaWrapper = document.createElement('div');
    metaWrapper.style.cssText = `
      display: flex;
      gap: 1rem;
      margin-bottom: 0.75rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid #e2e8f0;
      height: 36px;
      align-items: center;
      flex-shrink: 0;
    `;
    
    const likeBtn = document.createElement('button');
    likeBtn.innerHTML = `❤️ <span>0</span>`;
    likeBtn.style.cssText = `
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
      color: #64748b;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0;
      height: 28px;
    `;
    likeBtn.onclick = function(e) {
      e.stopPropagation();
      this.classList.toggle('liked');
      const count = this.querySelector('span');
      let num = parseInt(count.textContent);
      if (this.classList.contains('liked')) {
        num++;
        this.style.color = '#e74c3c';
      } else {
        num--;
        this.style.color = '#64748b';
      }
      count.textContent = num;
    };
    
    const commentBtn = document.createElement('button');
    commentBtn.textContent = `💬 ${lang === 'fa' ? 'نظرها' : 'Comments'}`;
    commentBtn.style.cssText = `
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
      color: #64748b;
      transition: all 0.3s ease;
      padding: 0;
      height: 28px;
    `;
    
    metaWrapper.appendChild(likeBtn);
    metaWrapper.appendChild(commentBtn);
    
    // ⭐ بخش کامنت‌ها - با ارتفاع دینامیک
    const commentsSection = document.createElement('div');
    commentsSection.className = 'comments-section';
    commentsSection.style.cssText = `
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      margin-top: 0.75rem;
      background: #f8fafc;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    `;
    
    const commentsList = document.createElement('div');
    commentsList.className = 'comments-list';
    commentsList.style.cssText = `
      margin-bottom: 0.75rem;
      max-height: 150px;
      overflow-y: auto;
    `;
    
    const commentForm = document.createElement('form');
    commentForm.style.cssText = 'display: flex; gap: 0.5rem;';
    commentForm.onsubmit = function(e) {
      e.preventDefault();
      const input = this.querySelector('input');
      const text = input.value.trim();
      if (!text) return;
      
      const item = document.createElement('div');
      item.style.cssText = `
        background: white;
        padding: 0.6rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.85rem;
        border: 1px solid #e2e8f0;
      `;
      item.innerHTML = `<strong>${lang === 'fa' ? 'کاربر:' : 'User:'}</strong> ${text}`;
      commentsList.prepend(item);
      input.value = '';
    };
    
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = lang === 'fa' ? 'نظر خود را بنویسید' : 'Write your comment';
    commentInput.required = true;
    commentInput.style.cssText = `
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      font-size: 0.85rem;
      height: 36px;
    `;
    
    const commentSubmit = document.createElement('button');
    commentSubmit.type = 'submit';
    commentSubmit.textContent = lang === 'fa' ? 'ارسال' : 'Send';
    commentSubmit.style.cssText = `
      background: #2b8bc7;
      color: white;
      border: none;
      padding: 0 1rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
      height: 36px;
      white-space: nowrap;
    `;
    commentSubmit.onmouseenter = function() {
      this.style.background = '#1e6a9e';
    };
    commentSubmit.onmouseleave = function() {
      this.style.background = '#2b8bc7';
    };
    
    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentSubmit);
    commentsSection.appendChild(commentsList);
    commentsSection.appendChild(commentForm);
    
    // ⭐ Event listener برای دکمه کامنت - اصلاح شده
    commentBtn.onclick = function(e) {
      e.stopPropagation();
      console.log("💬 کلیک روی دکمه کامنت");
      
      if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
        // باز کردن
        commentsSection.style.display = 'block';
        setTimeout(() => {
          commentsSection.style.opacity = '1';
        }, 10);
        card.style.minHeight = 'auto';
        console.log("✅ کامنت‌ها باز شد");
      } else {
        // بستن
        commentsSection.style.opacity = '0';
        setTimeout(() => {
          commentsSection.style.display = 'none';
          card.style.minHeight = '520px';
        }, 300);
        console.log("✅ کامنت‌ها بسته شد");
      }
    };
    
    contentWrapper.appendChild(metaWrapper);
    contentWrapper.appendChild(commentsSection);
  }
  
  // ⭐ خط جداکننده - فاصله کم
  const hr = document.createElement('hr');
  hr.style.cssText = `
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: auto 0 0.75rem 0;
    flex-shrink: 0;
  `;
  
  // ⭐ دکمه Read More - سایز ثابت
  const readMoreBtn = document.createElement('button');
  readMoreBtn.textContent = lang === 'fa' ? 'بیشتر بخوانید' : 'Read More';
  readMoreBtn.style.cssText = `
    background: transparent;
    color: #2b8bc7;
    border: 2px solid #2b8bc7;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    display: block;
    margin: 0 auto;
    transition: all 0.4s ease;
    height: 38px;
    white-space: nowrap;
    flex-shrink: 0;
  `;
  readMoreBtn.onmouseenter = function() {
    this.style.background = '#2b8bc7';
    this.style.color = 'white';
  };
  readMoreBtn.onmouseleave = function() {
    this.style.background = 'transparent';
    this.style.color = '#2b8bc7';
  };
  readMoreBtn.onclick = function(e) {
    e.stopPropagation();
    openPostPopup(post.id);
  };
  
  contentWrapper.appendChild(hr);
  contentWrapper.appendChild(readMoreBtn);
  
  card.appendChild(imageWrapper);
  card.appendChild(contentWrapper);
  
  // Hover effects
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 12px 24px rgba(43, 139, 199, 0.2)';
    title.style.color = '#2b8bc7';
    img.style.transform = 'scale(1.1)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    title.style.color = '#0f172a';
    img.style.transform = 'scale(1)';
  });
  
  return card;
}

// ===== رندر برای Home =====
window.renderHomePostCards = function() {
  console.log("🔵 renderHomePostCards شروع");
  
  const container = document.getElementById('home-posts-container');
  if (!container) {
    console.error("❌ home-posts-container پیدا نشد!");
    return;
  }
  
  container.innerHTML = '';
  container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
    justify-items: center;
  `;
  
  const lang = localStorage.getItem('lang') || 'en';
  const lastPosts = ARTICLES.slice(-3);
  
  lastPosts.forEach(post => {
    const card = createBlogCard(post, lang, true);
    container.appendChild(card);
  });
  
  console.log("✅ Home: رندر شد");
};

// ===== رندر برای Blog =====
window.renderArticles = function() {
  console.log("🔵 renderArticles شروع");
  
  const grid = document.getElementById('articlesGrid');
  if (!grid) {
    console.log("⚠️ articlesGrid پیدا نشد");
    return;
  }
  
  grid.innerHTML = '';
  grid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
    justify-items: center;
  `;
  
  const lang = localStorage.getItem('lang') || 'en';
  
  ARTICLES.forEach(post => {
    const card = createBlogCard(post, lang, true);
    grid.appendChild(card);
  });
  
  console.log("✅ Blog: رندر شد");
};

// ===== اجرا =====
window.addEventListener('DOMContentLoaded', () => {
  console.log("🟢 DOM آماده - blog.js");
  
  if (document.getElementById('articlesGrid')) {
    renderArticles();
  }
});

console.log("✅ blog.js آماده");