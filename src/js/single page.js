const ARTICLES = [
  {
    id: '1',
    title_en: 'Exploring Band-e-Amir',
    title_fa: 'کشف بند امیر',
    desc_en: 'Discover the beauty of Band-e-Amir national park.',
    desc_fa: 'زیبایی پارک ملی بند امیر را کشف کنید.',
  },
  {
    id: '2',
    title_en: 'Historical Herat',
    title_fa: 'تاریخی هرات',
    desc_en: 'Explore the ancient city of Herat.',
    desc_fa: 'از شهر باستانی هرات دیدن کنید.',
  },
];

// تنظیم زبان (fa یا en)
let currentLang = 'fa';

// loadSinglePost در فایل single-blog.js
function loadSinglePost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');

  const post = ARTICLES.find(p => p.id === postId);
  if (!post) {
    document.querySelector('.single-post-title').innerText = 'Post Not Found';
    return;
  }

  document.querySelector('.single-post-title').innerText = currentLang === 'fa' ? post.title_fa : post.title_en;
  document.querySelector('.single-post-img').src = "https://picsum.photos/800/400"; // تصویر مرتبط
  document.querySelector('.single-post-full-content').innerText = currentLang === 'fa' ? post.desc_fa : post.desc_en;
}

// هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', () => {
  switchLang(currentLang);
  loadSinglePost();
});