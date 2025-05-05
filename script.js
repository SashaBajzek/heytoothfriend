const pageTitles = {
  'dr-ayanna': 'Meet Dr. Ayanna',
  'academy': 'Flossy Friends Academy',
  'outreach': 'Community Outreach'
};

function showPage(page) {
  // Hide all sections
  document.querySelectorAll('.page').forEach(section => {
    section.classList.add('hidden');
  });

  // Show the target section
  const target = document.getElementById(page);
  if (target) {
    target.classList.remove('hidden');
  }

  // Update active link
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });

  // Update title
  const titleSuffix = pageTitles[page] || 'Friendship Pediatric Dentistry';
  document.title = `Friendship Pediatric Dentistry - ${titleSuffix}`;

  // Close mobile menu
  document.getElementById('nav-menu').classList.remove('show');
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const page = event.target.dataset.page;
    location.hash = page;
  });
});

window.addEventListener('hashchange', () => {
  const page = location.hash.replace('#', '') || 'dr-ayanna';
  showPage(page);
});

window.addEventListener('DOMContentLoaded', () => {
  const initialPage = location.hash.replace('#', '') || 'dr-ayanna';
  showPage(initialPage);
});

// Mobile nav toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('show');
});
