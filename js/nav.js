// nav.js
// 获取当前页面的 URL
const currentPage = window.location.href;

// 获取所有导航链接
const navLinks = document.querySelectorAll('.nav a');

// 遍历导航链接
navLinks.forEach(link => {
  // 如果链接的 href 与当前页面 URL 匹配，则添加 active 类
  if (link.href === currentPage) {
    link.classList.add('active');
  }
});