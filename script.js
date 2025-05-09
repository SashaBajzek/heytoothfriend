const pageTitles = {
  'dr-ayanna': 'Meet Dr. Ayanna',
  'academy': 'Flossy Friends Academy',
  'outreach': 'Community Outreach'
};

function showPage(page) {
  document.querySelectorAll('.page').forEach(section => {
    section.classList.add('hidden');
  });

  const target = document.getElementById(page);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  document.title = `Hey Tooth Friend - ${pageTitles[page] || ''}`;
}

// Hash change
window.addEventListener('hashchange', () => {
  const page = location.hash.replace('#', '') || 'dr-ayanna';
  showPage(page);
});

// Initial load
window.addEventListener('DOMContentLoaded', () => {
  const page = location.hash.replace('#', '') || 'dr-ayanna';
  showPage(page);
});

// Link click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    location.hash = page;

    // Close mobile nav if open
    const dialog = document.getElementById('mobile-nav');
    if (dialog.open) dialog.close();
  });
});

// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
  mobileNav.showModal();
});

closeMenu.addEventListener('click', () => {
  mobileNav.close();
});

// Trap focus inside dialog for accessibility
mobileNav.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const focusable = [...mobileNav.querySelectorAll('a, button')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  } else if (e.key === 'Escape') {
    mobileNav.close();
  }
});
