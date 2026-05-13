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
 
// ===== NAVBAR BUTTONS =====
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
 
// ===== CLOSE BUTTONS =====
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const id = btn.dataset.close;
    closeModal(id);
  });
});
 
// ===== CLICK OUTSIDE TO CLOSE =====
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeAll();
  });
});
 
// ===== ESC KEY =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAll();
});
 
// ===== EXPLORE SIDEBAR TABS =====
document.querySelectorAll('.explore-sidebar-item[data-tab]').forEach(item => {
  item.addEventListener('click', () => {
    const tab = item.dataset.tab;
    // Update active sidebar
    item.closest('.explore-sidebar-list').querySelectorAll('.explore-sidebar-item').forEach(i => i.classList.remove('explore-sidebar-item--active'));
    item.classList.add('explore-sidebar-item--active');
    // Show correct tab
    document.querySelectorAll('#exploreOverlay .explore-tab').forEach(t => t.classList.remove('explore-tab--active'));
    const target = document.getElementById('tab-' + tab);
    if (target) target.classList.add('explore-tab--active');
  });
});
 
// ===== SEARCH SIDEBAR TABS =====
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
 
// ===== SWITCH BETWEEN LOGIN / SIGNUP =====
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