function openModal(id) {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('is-open'));
  const el = document.getElementById(id);
  if (el) el.classList.add('is-open');
}
 
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('is-open');
}
 
function closeAll() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('is-open'));
}
 
document.getElementById('exploreBtn').addEventListener('click', e => {
  e.stopPropagation();
  const overlay = document.getElementById('exploreOverlay');
  if (overlay.classList.contains('is-open')) closeAll();
  else openModal('exploreOverlay');
});
 
document.getElementById('searchBtn').addEventListener('click', e => {
  e.stopPropagation();
  openModal('searchOverlay');
  setTimeout(() => {
    const inp = document.querySelector('.search-modal__input');
    if (inp) inp.focus();
  }, 50);
});
 
document.getElementById('loginBtn').addEventListener('click', e => {
  e.stopPropagation();
  openModal('loginOverlay');
});
 
document.getElementById('signupBtn').addEventListener('click', e => {
  e.stopPropagation();
  openModal('signupOverlay');
});
 
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const id = btn.dataset.close;
    closeModal(id);
  });
});
 
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeAll();
  });
});
 
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAll();
});
 
document.querySelectorAll('.explore-sidebar-item[data-tab]').forEach(item => {
  item.addEventListener('click', () => {
    const tab = item.dataset.tab;

    item.closest('.explore-sidebar-list').querySelectorAll('.explore-sidebar-item').forEach(i => i.classList.remove('explore-sidebar-item--active'));
    item.classList.add('explore-sidebar-item--active');

    document.querySelectorAll('#exploreOverlay .explore-tab').forEach(t => t.classList.remove('explore-tab--active'));
    const target = document.getElementById('tab-' + tab);
    if (target) target.classList.add('explore-tab--active');
  });
});
 

document.querySelectorAll('.explore-sidebar-item[data-stab]').forEach(item => {
  item.addEventListener('click', () => {
    const tab = item.dataset.stab;
    item.closest('.explore-sidebar-list').querySelectorAll('.explore-sidebar-item').forEach(i => i.classList.remove('explore-sidebar-item--active'));
    item.classList.add('explore-sidebar-item--active');
    document.querySelectorAll('#searchOverlay .explore-tab').forEach(t => t.classList.remove('explore-tab--active'));
    const target = document.getElementById('stab-' + tab);
    if (target) target.classList.add('explore-tab--active');
  });
});
 
document.getElementById('switchToSignup').addEventListener('click', e => {
  e.preventDefault();
  closeModal('loginOverlay');
  openModal('signupOverlay');
});
 
document.getElementById('switchToLogin').addEventListener('click', e => {
  e.preventDefault();
  closeModal('signupOverlay');
  openModal('loginOverlay');
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

  const image = card.querySelector("img");

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x / rect.width - 0.5) * 10;
    const moveY = (y / rect.height - 0.5) * 10;

    image.style.transform =
      `scale(1.05) translate(${moveX}px, ${moveY}px)`;

  });

  card.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });

});

const cta = document.querySelector('.cta-link');

cta.addEventListener('mouseenter', () => {
  cta.style.transform = 'translateX(5px)';
});

cta.addEventListener('mouseleave', () => {
  cta.style.transform = 'translateX(0)';
});
const movingLine = document.querySelector(".moving-line");

movingLine.addEventListener("mousemove", (e) => {

  const card = movingLine.querySelector(".hover-card");
  const rect = movingLine.getBoundingClientRect();

  let x = e.clientX - rect.left - 95;

  if(x < 0) x = 0;
  if(x > rect.width - 190) x = rect.width - 190;

  card.style.left = `${x}px`;
});

const openButtons = {
  exploreBtn: "exploreOverlay",
  searchBtn: "searchOverlay",
  loginBtn: "loginOverlay",
  signupBtn: "signupOverlay"
};

// OPEN MODALS
Object.keys(openButtons).forEach(id => {
  const btn = document.getElementById(id);
  const modalId = openButtons[id];

  if (btn) {
    btn.addEventListener("click", () => {
      document.getElementById(modalId).classList.add("active");
    });
  }
});

// CLOSE MODALS
document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-close");
    document.getElementById(id).classList.remove("active");
  });
});

// CLOSE ON BACKDROP CLICK
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
});