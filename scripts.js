// initialize AOS
if (typeof AOS !== 'undefined') {
  AOS.init({ once: true, duration: 800 });
}

// DOMContentLoaded events
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.main-nav');
  const menuBtn = document.getElementById('menuBtn');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 900) nav.classList.remove('show');
    });
  });

  const currentPage = document.documentElement.getAttribute('data-page');
  document.querySelectorAll('.main-nav a').forEach(link => {
    if (link.dataset.link === currentPage) link.classList.add('active');
  });

  const onScroll = () => {
    if (window.scrollY > 30) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
});

function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if (!name || !email || !msg) {
    formMsg.textContent = 'Please fill all fields.';
    formMsg.style.color = 'var(--accent)';
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMsg.textContent = 'Please enter a valid email.';
    formMsg.style.color = 'var(--accent)';
    return false;
  }

  formMsg.textContent = `Thanks ${name}! Your message was sent (demo).`;
  formMsg.style.color = 'var(--accent-2)';
  document.getElementById('contactForm').reset();
}
