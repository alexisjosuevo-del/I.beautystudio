const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (e) => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    const figure = img.closest('.carousel-shot, .frame, .editorial-card');
    if (figure) {
      figure.style.background = 'linear-gradient(180deg, rgba(219,192,170,.18), rgba(255,255,255,.03))';
      figure.style.minHeight = figure.style.minHeight || '220px';
    }
    img.style.opacity = '0';
  });
});
