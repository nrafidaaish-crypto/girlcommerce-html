/* STATE GLOBAL */
let currentUser = null;
let selectedRole = 'customer';
let historyStack = [];

/* NOTIFIKASI TOAST */
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-text').innerText = message;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

/* ROUTING & NAVIGASI */
function navigateTo(pageId, pushToHistory = true) {
  if (pushToHistory && historyStack[historyStack.length - 1] !== pageId) {
    historyStack.push(pageId);
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const activePage = document.getElementById(pageId);
  if (activePage) activePage.classList.add('active');

  const pageTitleEl = document.getElementById('page-title');
  const backBtn = document.getElementById('back-btn');

  if (historyStack.length > 1 && pageId !== 'customer-home' && pageId !== 'admin-dashboard-page' && pageId !== 'welcome-page') {
    backBtn.style.display = 'block';
  } else {
    backBtn.style.display = 'none';
  }

  switch(pageId) {
    case 'customer-home':
      pageTitleEl.innerText = "Pretty Heels Store";
      if (typeof renderCustomerProducts === 'function') renderCustomerProducts();
      break;
    case 'product-detail-page':
      pageTitleEl.innerText = "Detail Heels";
      break;
    case 'cart-page':
      pageTitleEl.innerText = "Keranjang Belanja";
      if (typeof renderCart === 'function') renderCart();
      break;
    case 'checkout-page':
      pageTitleEl.innerText = "Checkout Pesanan";
      if (typeof renderCheckout === 'function') renderCheckout();
      break;
    case 'customer-orders-page':
      pageTitleEl.innerText = "Riwayat Pesanan Saya";
      if (typeof renderCustomerOrders === 'function') renderCustomerOrders();
      break;
    case 'customer-profile-page':
      pageTitleEl.innerText = "Profil Pelanggan";
      break;
    case 'admin-dashboard-page':
      pageTitleEl.innerText = "Admin Dashboard";
      if (typeof renderAdminDashboard === 'function') renderAdminDashboard();
      break;
    case 'admin-input-page':
      pageTitleEl.innerText = document.getElementById('input-prod-id').value ? "Edit Heels" : "Input Heels Baru";
      break;
    case 'admin-products-page':
      pageTitleEl.innerText = "Kelola Produk Heels";
      if (typeof renderAdminProducts === 'function') renderAdminProducts();
      break;
    case 'admin-reports-page':
      pageTitleEl.innerText = "Laporan Penjualan";
      if (typeof switchReportTab === 'function') switchReportTab('harian');
      break;
    case 'admin-profile-page':
      pageTitleEl.innerText = "Profil Admin & Store Manager";
      break;
  }

  updateNavActiveState(pageId);
  window.scrollTo(0,0);
}

function goBack() {
  if (historyStack.length > 1) {
    historyStack.pop();
    const prevPage = historyStack[historyStack.length - 1];
    navigateTo(prevPage, false);
  }
}

function updateNavActiveState(pageId) {
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
  const navs = document.querySelectorAll('.nav-item');
  if (currentUser?.role === 'customer') {
    if (pageId === 'customer-home') navs[0]?.classList.add('active');
    if (pageId === 'customer-orders-page') navs[1]?.classList.add('active');
    if (pageId === 'customer-profile-page') navs[2]?.classList.add('active');
  } else if (currentUser?.role === 'admin') {
    if (pageId === 'admin-dashboard-page') navs[0]?.classList.add('active');
    if (pageId === 'admin-input-page') navs[1]?.classList.add('active');
    if (pageId === 'admin-products-page') navs[2]?.classList.add('active');
    if (pageId === 'admin-reports-page') navs[3]?.classList.add('active');
    if (pageId === 'admin-profile-page') navs[4]?.classList.add('active');
  }
}

function setupLayoutForUser() {
  document.getElementById('main-header').style.display = 'flex';
  const nav = document.getElementById('main-nav');
  nav.style.display = 'flex';
  const cartBtn = document.getElementById('header-actions');

  if (currentUser.role === 'customer') {
    cartBtn.style.display = 'block';
    nav.innerHTML = `
      <button class="nav-item" onclick="navigateTo('customer-home')"><i class="fa-solid fa-shoe-prints"></i>Marketplace</button>
      <button class="nav-item" onclick="navigateTo('customer-orders-page')"><i class="fa-solid fa-receipt"></i>Pesanan Saya</button>
      <button class="nav-item" onclick="navigateTo('customer-profile-page')"><i class="fa-solid fa-user"></i>Profil</button>
    `;
    const nameEl = document.getElementById('profile-display-name');
    const emailEl = document.getElementById('profile-display-email');
    if (nameEl) nameEl.innerText = currentUser.name;
    if (emailEl) emailEl.innerText = `${currentUser.name.toLowerCase().replace(/\s+/g, '')}@gmail.com`;
  } else {
    cartBtn.style.display = 'none';
    nav.innerHTML = `
      <button class="nav-item" onclick="navigateTo('admin-dashboard-page')"><i class="fa-solid fa-chart-pie"></i>Dashboard</button>
      <button class="nav-item" onclick="resetForm(); navigateTo('admin-input-page')"><i class="fa-solid fa-plus-circle"></i>Input</button>
      <button class="nav-item" onclick="navigateTo('admin-products-page')"><i class="fa-solid fa-boxes-stacked"></i>Produk</button>
      <button class="nav-item" onclick="navigateTo('admin-reports-page')"><i class="fa-solid fa-file-invoice"></i>Laporan</button>
      <button class="nav-item" onclick="navigateTo('admin-profile-page')"><i class="fa-solid fa-user-gear"></i>Profil Admin</button>
    `;
  }
}
