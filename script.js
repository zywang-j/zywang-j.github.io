// Navigation is progressively enhanced; content and disclosures work without JavaScript.
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  document.documentElement.classList.add('js-nav');
  menuButton.hidden = false;
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    menuButton.querySelector('span').textContent = '+';
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    menuButton.querySelector('span').textContent = open ? '−' : '+';
  });
  nav.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu();
    // Keep keyboard focus on visible content after the mobile menu closes.
    const section = document.getElementById(link.hash.slice(1));
    if (section) {
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  const sections = [...nav.querySelectorAll('a[href^="#"]')]
    .map(link => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter(item => item.section);
  const updateActiveSection = () => {
    if (!sections.length) return;
    const header = document.querySelector('.site-header');
    const offset = (header ? header.getBoundingClientRect().bottom : 0) + 32;
    let active = sections[0];
    for (const item of sections) {
      if (item.section.getBoundingClientRect().top <= offset) active = item;
    }
    // Short final sections cannot always reach the top of the viewport.
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      active = sections[sections.length - 1];
    }
    sections.forEach(item => {
      if (item === active) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    });
  };
  let framePending = false;
  const scheduleUpdate = () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(() => {
      updateActiveSection();
      framePending = false;
    });
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', scheduleUpdate));
  updateActiveSection();
}
