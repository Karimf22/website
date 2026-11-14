// Navigation remains fully functional without JavaScript.
const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
if ('IntersectionObserver' in window && navigationLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-12% 0px -58% 0px', threshold: 0 });
  for (const link of navigationLinks) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
