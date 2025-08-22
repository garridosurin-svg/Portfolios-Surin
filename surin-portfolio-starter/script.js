// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links){
  toggle.addEventListener('click', ()=>{
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Set year
const yearEl = document.getElementById('year');
if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

// Simple client-side form handler
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name');
    alert(`Thanks, ${name}! Your message has been recorded locally.`);
    form.reset();
  });
  
  const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

}
