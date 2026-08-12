/* Renders the page from content.js. You shouldn't need to edit this file. */

document.title = SITE.pageTitle;
document.getElementById('brandLink').textContent =
  SITE.name.split(' ').map(w => w[0]).join('').toUpperCase();

// Hero
document.getElementById('heroGreeting').textContent = SITE.hero.greeting;
document.getElementById('heroPhoto').src = SITE.hero.photo;
document.getElementById('heroPhoto').alt = SITE.name;
document.getElementById('heroBio').innerHTML =
  SITE.hero.bio.map(p => `<p>${p}</p>`).join('');

// Experience
document.getElementById('experienceHeading').textContent = SITE.experience.heading;
document.getElementById('experienceBody').innerHTML =
  SITE.experience.paragraphs.map(p => `<p>${p}</p>`).join('');

// Portfolio
document.getElementById('portfolioHeading').textContent = SITE.portfolioHeading;

const CATEGORY_LABEL = { crypto: 'Crypto ⛓️', education: 'Education 📚', b2b: 'B2B ⚙️' };

function initials(name){
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function renderCompanies(filter){
  const grid = document.getElementById('companyGrid');
  const list = SITE.companies.filter(c => {
    if (filter === 'all') return true;
    if (filter === 'featured') return !!c.featured;
    return c.category === filter;
  });

  grid.innerHTML = list.map(c => `
    <article class="company-card">
      <div class="company-card-head">
        <div class="company-badge ${c.category}">${initials(c.name)}</div>
        <div>
          <p class="company-name">${c.name}</p>
          <div class="company-tags">
            ${c.featured ? '<span class="tag">Featured ⭐</span>' : ''}
            <span class="tag">${CATEGORY_LABEL[c.category] || c.category}</span>
          </div>
        </div>
      </div>
      <p class="company-desc">${c.description}</p>
      <a class="company-link" href="${c.url}" target="_blank" rel="noopener">Visit site →</a>
    </article>
  `).join('');
}

renderCompanies('all');

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCompanies(btn.dataset.filter);
  });
});

// Contact
const socialLinks = document.getElementById('socialLinks');
const ICONS = {
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H22l-7.6 8.7L23.3 21H16l-5.2-6.6L4.7 21H1.6l8.1-9.3L1 3h7.4l4.7 6.1L18.9 3zm-1.2 16h1.7L7.4 5H5.6l12.1 14z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 5.5A17.6 17.6 0 0 0 15.6 4l-.3.6a13 13 0 0 1 3.8 1.5A13.7 13.7 0 0 0 12 4.6a13.7 13.7 0 0 0-7.1 1.5A13 13 0 0 1 8.7 4.6L8.4 4A17.6 17.6 0 0 0 4 5.5C1.7 9 1 12.4 1.3 15.7A17.7 17.7 0 0 0 6.7 18l.7-1.1a11.4 11.4 0 0 1-1.8-.9l.4-.3a12.7 12.7 0 0 0 10 0l.4.3c-.6.3-1.2.6-1.8.9l.7 1.1a17.7 17.7 0 0 0 5.4-2.3c.4-3.8-.6-7.1-2.7-10.2zM8.7 13.6c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.7 1.5-1.7.9 0 1.5.8 1.5 1.7 0 1-.6 1.7-1.5 1.7zm6.6 0c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.7 1.5-1.7.9 0 1.5.8 1.5 1.7 0 1-.6 1.7-1.5 1.7z"/></svg>'
};

const links = [
  { key: 'email', href: `mailto:${SITE.contact.email}` },
  { key: 'twitter', href: SITE.contact.twitter },
  { key: 'linkedin', href: SITE.contact.linkedin },
  { key: 'discord', href: SITE.contact.discord }
];

socialLinks.innerHTML = links
  .filter(l => l.href)
  .map(l => `<a href="${l.href}" target="_blank" rel="noopener" aria-label="${l.key}">${ICONS[l.key]}</a>`)
  .join('');
