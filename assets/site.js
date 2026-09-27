// メニュー開閉（スマホ）
(() => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.gnav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
})();
