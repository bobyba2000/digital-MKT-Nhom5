const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('is-open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
  });
}

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 40) {
    header.style.background = 'rgba(0, 0, 0, 0.68)';
  } else {
    header.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))';
  }
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  revealElements.forEach((item) => observer.observe(item));
} else {
  revealElements.forEach((item) => item.classList.add('in-view'));
}

const form = document.querySelector('.newsletter-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    if (!button) return;

    button.disabled = true;
    button.textContent = 'Subscribed';
    setTimeout(() => {
      button.disabled = false;
      button.textContent = 'Subscribe';
      form.reset();
    }, 1400);
  });
}
