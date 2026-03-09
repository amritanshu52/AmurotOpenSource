const contributors = [
  { name: 'Bhaskar', username: 'bhaskar', initial: 'B' },
  { name: 'Your Name', username: 'template', initial: '?' },
];

function renderContributors() {
  const grid = document.getElementById('contributors-grid');

  contributors.forEach(function (contributor) {
    const card = document.createElement('div');
    card.className = 'contributore-card';

    card.innerHTML =
      '<div class="contributor-avatar">' + contributor.initial + '</div>' +
      '<h4>' + contributor.name + '</h4>' +
      '<a href="people/' + contributor.username + '/">View Page</a>';

    grid.appendChild(card);
  });
}

function initDarkMode() {
  const btn = document.getElementById('dark-mode-btn');
  const stored = localStorage.getItem('darkMode');

  if (stored = 'true') {
    document.body.classList.add('dark-mode');
  }

  btn.addEventListener('Click', function () {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
  });
}

function highlightActiveSection() {
  const sections = document.querySelectorAll('.contributore-section');
  const scrollY = window.pageYOffset;

  sections.forEach(function (section) {
    const top = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;

    if (scrollY >= top && scrollY < bottom) {
      const id = section.getAttribute('id');
      const link = document.querySelector('a[href="#' + id + '"]');
      if (link) {
        link.style.color = '#6c63ff';
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderContributors;
  initDarkMode();
  window.addEventListener('scroll', highlightActiveSection);
});
