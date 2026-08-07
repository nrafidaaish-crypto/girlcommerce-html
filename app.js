let currentUser = null;
let selectedRole = 'customer';
let historyStack = [];

let products = [
  {
    id: 1,
    name: "Classic Stiletto Leather Pumps 9cm",
    price: 285000,
    stock: 50,
    rating: 4.9,
    sold: 184,
    colors: ["PINK", "HITAM", "PUTIH", "NUDE"],
    colorMap: {
      "PINK": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80",
      "HITAM": "https://images.unsplash.com/photo-1596147250788-bf8ce2338072?auto=format&fit=crop&w=500&q=80",
      "PUTIH": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80",
      "NUDE": "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80",
    desc: "Classic Stiletto Leather Pumps dengan ketinggian 9cm dirancang khusus untuk memberikan tampilan jenjang, anggun, dan penuh percaya diri.",
    reviews: [
      { name: "Seraphine Azellie", rating: 5, date: "02 Ags 2026", variant: "Warna: PINK", comment: "Bagus banget heelsnya! Sol dalamnya empuk dan gak bikin kaki lecet ❤️❤️" },
      { name: "Rylee Karlanna", rating: 5, date: "28 Jul 2026", variant: "Warna: NUDE", comment: "Sangat elegan untuk dipakai ke kantor dan acara formal." }
    ]
  },
  {
    id: 2,
    name: "Glamour Crystal Strap Party Heels",
    price: 325000,
    stock: 35,
    rating: 5.0,
    sold: 142,
    colors: ["PINK", "PUTIH", "HITAM"],
    colorMap: {
      "PINK": "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=500&q=80",
      "PUTIH": "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=500&q=80",
      "HITAM": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=500&q=80",
    desc: "Glamour Crystal Strap Heels dihiasi tali berkilau kristal mewah. Cocok untuk acara pernikahan maupun gala dinner.",
    reviews: [
      { name: "Vathea Anasya", rating: 5, date: "03 Ags 2026", variant: "Warna: PINK", comment: "Sumpah kilau kristalnya mewah bangettt, bikin kaki kelihatan cantik!" }
    ]
  },
  {
    id: 3,
    name: "Korean Ankle Strap Block Heels 5cm",
    price: 195000,
    stock: 60,
    rating: 4.8,
    sold: 230,
    colors: ["NUDE", "HITAM", "PINK"],
    colorMap: {
      "NUDE": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80",
      "HITAM": "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=500&q=80",
      "PINK": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80",
    desc: "Korean Ankle Strap Block Heels dengan hak tahu 5cm yang sangat stabil dan nyaman dipakai seharian tanpa pegal.",
    reviews: [
      { name: "Yesava Maureen", rating: 5, date: "04 Ags 2026", variant: "Warna: NUDE", comment: "Tingginya pas banget buat dipake kerja seharian, ga bikin capek." }
    ]
  },
  {
    id: 4,
    name: "Velvet Pointed Toe Mule Heels",
    price: 245000,
    stock: 28,
    rating: 4.7,
    sold: 95,
    colors: ["GREEN", "HITAM", "PINK"],
    colorMap: {
      "GREEN": "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=500&q=80",
      "HITAM": "https://images.unsplash.com/photo-1596147250788-bf8ce2338072?auto=format&fit=crop&w=500&q=80",
      "PINK": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=500&q=80",
    desc: "Mule heels berbahan beledu lembut dengan ujung lancip khas gaya berbusana chic dan berkelas.",
    reviews: [
      { name: "Clarissa Devi", rating: 5, date: "01 Ags 2026", variant: "Warna: GREEN", comment: "Bahan velvetnya terasa sangat halus dan mewah!" }
    ]
  },
  {
    id: 5,
    name: "Nude Slingback Office Heels 7cm",
    price: 260000,
    stock: 40,
    rating: 4.9,
    sold: 160,
    colors: ["NUDE", "HITAM"],
    colorMap: {
      "NUDE": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80",
      "HITAM": "https://images.unsplash.com/photo-1596147250788-bf8ce2338072?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80",
    desc: "Pilihan paling fleksibel untuk keperluan bisnis dan pertemuan resmi. Desain slingback yang menahan tumit dengan pas.",
    reviews: [
      { name: "Audrey Tampi", rating: 5, date: "29 Jul 2026", variant: "Warna: NUDE", comment: "Nyaman sekali, tidak terasa capek saat presentasi berjam-jam." }
    ]
  },
  {
    id: 6,
    name: "Elegant Pearl Bridal High Heels",
    price: 380000,
    stock: 20,
    rating: 5.0,
    sold: 88,
    colors: ["PUTIH", "PINK"],
    colorMap: {
      "PUTIH": "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=500&q=80",
      "PINK": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=500&q=80",
    desc: "Koleksi khusus pesta Pernikahan dengan aksen mutiara asli yang dirangkai cermat.",
    reviews: [
      { name: "Nadia Vanessa", rating: 5, date: "25 Jul 2026", variant: "Warna: PUTIH", comment: "Sempurna untuk gaun pengantin saya! Terima kasih Pretty Heels." }
    ]
  },
  {
    id: 7,
    name: "Satin Ribbon Bow Slingback Heels 8cm",
    price: 310000,
    stock: 30,
    rating: 4.9,
    sold: 76,
    colors: ["PINK", "PUTIH"],
    colorMap: {
      "PINK": "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?auto=format&fit=crop&w=500&q=80",
      "PUTIH": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?auto=format&fit=crop&w=500&q=80",
    desc: "Heels pita bahan satin sutra yang elegan, menciptakan kesan manis dan feminim secara instan.",
    reviews: [
      { name: "Gisca Amelia", rating: 5, date: "05 Ags 2026", variant: "Warna: PINK", comment: "Pitanya manis banget! Bikin penampilan makin standout." }
    ]
  },
  {
    id: 8,
    name: "Glitter Sequin Prom High Heels 10cm",
    price: 350000,
    stock: 22,
    rating: 4.8,
    sold: 110,
    colors: ["GOLD", "SILVER"],
    colorMap: {
      "GOLD": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80",
      "SILVER": "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80",
    desc: "Dibalut lapisan glitter mengkilap yang berkilau indah saat terkena pencahayaan pesta.",
    reviews: [
      { name: "Lianna Felicia", rating: 5, date: "04 Ags 2026", variant: "Warna: GOLD", comment: "Sangat bersinar saat dipakai malam hari di party venue!" }
    ]
  },
  {
    id: 9,
    name: "Minimalist Clear Strap Mule Heels 6cm",
    price: 225000,
    stock: 45,
    rating: 4.7,
    sold: 198,
    colors: ["CLEAR", "NUDE"],
    colorMap: {
      "CLEAR": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=500&q=80",
      "NUDE": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=500&q=80",
    desc: "Tren bening transparan dengan tali mika premium lentur yang tidak menimbulkan bekas di kulit.",
    reviews: [
      { name: "Shafira Aris", rating: 5, date: "06 Ags 2026", variant: "Warna: CLEAR", comment: "Tali beningnya lentur, gak sakit sama sekali pas dipakai jalan." }
    ]
  },
  {
    id: 10,
    name: "Suede Cross-Strap Chunky Heels 7cm",
    price: 275000,
    stock: 38,
    rating: 4.9,
    sold: 140,
    colors: ["BLACK", "BROWN"],
    colorMap: {
      "BLACK": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=500&q=80",
      "BROWN": "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=500&q=80",
    desc: "Desain tali silang bergaya vintage berbahan suede premium dengan ketahanan ekstra.",
    reviews: [
      { name: "Aurelia Cinta", rating: 5, date: "03 Ags 2026", variant: "Warna: BLACK", comment: "Suka banget sama model tali silangnya, terkesan ramping di kaki." }
    ]
  },
  {
    id: 11,
    name: "Lace Embroidery Wedding Pumps 9cm",
    price: 395000,
    stock: 18,
    rating: 5.0,
    sold: 64,
    colors: ["WHITE", "CREAM"],
    colorMap: {
      "WHITE": "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=500&q=80",
      "CREAM": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80"
    },
    img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=500&q=80",
    desc: "Kombinasi brokat renda eksklusif bertabur payet halus buatan tangan untuk momen istimewa.",
    reviews: [
      { name: "Kania Putri", rating: 5, date: "01 Ags 2026", variant: "Warna: WHITE", comment: "Detail rendanya sangat halus dan rapi, pengerjaan jempolan!" }
    ]
  }
];

let orders = [
  {
    id: 'PHS-882910',
    date: '07 Ags 2026',
    category: 'harian',
    customer: 'Seraphine Azellie',
    items: [{ product: products[0], color: 'PINK', qty: 2 }],
    total: 570000,
    payment: 'Transfer Bank (BCA)',
    status: 'Diproses'
  },
  {
    id: 'PHS-882911',
    date: '07 Ags 2026',
    category: 'harian',
    customer: 'Rylee Karlanna',
    items: [{ product: products[1], color: 'PUTIH', qty: 1 }],
    total: 325000,
    payment: 'E-Wallet (Gopay)',
    status: 'Selesai'
  },
  {
    id: 'PHS-882890',
    date: '02 Ags 2026',
    category: 'bulanan',
    customer: 'Vathea Anasya',
    items: [{ product: products[2], color: 'NUDE', qty: 2 }],
    total: 390000,
    payment: 'Transfer Bank (Mandiri)',
    status: 'Selesai'
  },
  {
    id: 'PHS-882855',
    date: '28 Jul 2026',
    category: 'bulanan',
    customer: 'Clarissa Devi',
    items: [{ product: products[3], color: 'GREEN', qty: 1 }],
    total: 245000,
    payment: 'COD (Bayar di Tempat)',
    status: 'Selesai'
  },
  {
    id: 'PHS-881200',
    date: '15 Mei 2026',
    category: 'tahunan',
    customer: 'Audrey Tampi',
    items: [{ product: products[4], color: 'NUDE', qty: 3 }],
    total: 780000,
    payment: 'E-Wallet (ShopeePay)',
    status: 'Selesai'
  },
  {
    id: 'PHS-880512',
    date: '10 Jan 2026',
    category: 'tahunan',
    customer: 'Nadia Vanessa',
    items: [{ product: products[5], color: 'PUTIH', qty: 1 }],
    total: 380000,
    payment: 'Transfer Bank (BCA)',
    status: 'Selesai'
  }
];

let cart = [];
let selectedDetailProduct = null;
let selectedColor = '';
let selectedQuantity = 1;
let sheetTargetIndex = null;
let sheetActionMode = 'buy_now';

function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-text').innerText = message;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

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
      renderCustomerProducts();
      break;
    case 'product-detail-page':
      pageTitleEl.innerText = "Detail Heels";
      break;
    case 'cart-page':
      pageTitleEl.innerText = "Keranjang Belanja";
      renderCart();
      break;
    case 'checkout-page':
      pageTitleEl.innerText = "Checkout Pesanan";
      renderCheckout();
      break;
    case 'customer-orders-page':
      pageTitleEl.innerText = "Riwayat Pesanan Saya";
      renderCustomerOrders();
      break;
    case 'customer-profile-page':
      pageTitleEl.innerText = "Profil Pelanggan";
      break;
    case 'admin-dashboard-page':
      pageTitleEl.innerText = "Admin Dashboard";
      renderAdminDashboard();
      break;
    case 'admin-input-page':
      pageTitleEl.innerText = document.getElementById('input-prod-id').value ? "Edit Heels" : "Input Heels Baru";
      break;
    case 'admin-products-page':
      pageTitleEl.innerText = "Kelola Produk Heels";
      renderAdminProducts();
      break;
    case 'admin-reports-page':
      pageTitleEl.innerText = "Laporan Penjualan";
      switchReportTab('harian');
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
    const phoneEl = document.getElementById('profile-display-phone');
    if (nameEl) nameEl.innerText = currentUser.name;
    if (emailEl) emailEl.innerText = currentUser.email;
    if (phoneEl) phoneEl.innerText = currentUser.phone;
  } else {
    cartBtn.style.display = 'none';
    nav.innerHTML = `
      <button class="nav-item" onclick="navigateTo('admin-dashboard-page')"><i class="fa-solid fa-chart-pie"></i>Dashboard</button>
      <button class="nav-item" onclick="resetForm(); navigateTo('admin-input-page')"><i class="fa-solid fa-plus-circle"></i>Input</button>
      <button class="nav-item" onclick="navigateTo('admin-products-page')"><i class="fa-solid fa-boxes-stacked"></i>Produk</button>
      <button class="nav-item" onclick="navigateTo('admin-reports-page')"><i class="fa-solid fa-file-invoice"></i>Laporan</button>
      <button class="nav-item" onclick="navigateTo('admin-profile-page')"><i class="fa-solid fa-user-gear"></i>Profil Admin</button>
    `;
    const nameAdmin = document.getElementById('admin-profile-name');
    const emailAdmin = document.getElementById('admin-profile-email');
    const phoneAdmin = document.getElementById('admin-profile-phone');
    if (nameAdmin) nameAdmin.innerText = currentUser.name;
    if (emailAdmin) emailAdmin.innerText = currentUser.email;
    if (phoneAdmin) phoneAdmin.innerText = currentUser.phone;
  }
}

function chooseRole(role) {
  selectedRole = role;
  const roleTitle = document.getElementById('login-role-title');
  const roleSubtitle = document.getElementById('login-role-subtitle');
  const userLabel = document.getElementById('login-user-label');
  
  const userInput = document.getElementById('login-username');
  const emailInput = document.getElementById('login-email');
  const phoneInput = document.getElementById('login-phone');
  const passInput = document.getElementById('login-password');

  userInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  passInput.value = "";

  if (role === 'admin') {
    roleTitle.innerText = "Login Admin (Penjual)";
    roleSubtitle.innerText = "Silakan masukkan kredensial Admin Pretty Heels";
    userLabel.innerText = "Username Admin";
  } else {
    roleTitle.innerText = "Login Pelanggan";
    roleSubtitle.innerText = "Silakan masukkan data akun Anda";
    userLabel.innerText = "Username Pelanggan";
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('login-page').classList.add('active');
}

function goToRoleSelection() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('role-selection-page').classList.add('active');
}

function handleLogin(e) {
  e.preventDefault();
  const u = document.getElementById('login-username').value.trim();
  const email = document.getElementById('login-email').value.trim();
  const phone = document.getElementById('login-phone').value.trim();
  const p = document.getElementById('login-password').value.trim();

  if (selectedRole === 'admin') {
    if (u === 'Hiraya Georgienne' && p === 'prettyheelsSt' && email === 'hirayagienne@gmail.com' && phone === '082839103746') {
      currentUser = { 
        role: 'admin', 
        name: 'Hiraya Georgienne',
        email: 'hirayagienne@gmail.com',
        phone: '082839103746'
      };
      showWelcomeScreen();
    } else {
      showToast("Kredensial Admin Salah! Periksa kembali data Anda.");
    }
  } else {
    currentUser = { 
      role: 'customer', 
      name: u || 'Seraphine Azellie',
      email: email || 'seraphineazellie@gmail.com',
      phone: phone || '08123456789'
    };
    showWelcomeScreen();
  }
}

function showWelcomeScreen() {
  historyStack = [];
  const heading = document.getElementById('welcome-heading');
  const subtext = document.getElementById('welcome-subtext');

  if (currentUser.role === 'admin') {
    heading.innerText = "Selamat Datang, Admin!";
    subtext.innerHTML = `Selamat bertugas di Pretty Heels Store, <br><strong style="font-size:18px; color:var(--primary);">${currentUser.name}</strong>`;
  } else {
    heading.innerText = "Selamat Datang!";
    subtext.innerHTML = `Selamat datang di Pretty Heels Store, <br><strong style="font-size:18px; color:var(--primary);">${currentUser.name}</strong>`;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('welcome-page').classList.add('active');
  document.getElementById('main-header').style.display = 'none';
  document.getElementById('main-nav').style.display = 'none';
}

function proceedToMainApp() {
  const toast = document.getElementById('toast');
  if (toast) toast.classList.remove('show');

  if (currentUser.role === 'admin') {
    completeLogin('admin-dashboard-page', "Selamat bertugas Admin!");
  } else {
    completeLogin('customer-home', `Selamat berbelanja, ${currentUser.name}!`);
  }
}

function completeLogin(targetPage, message) {
  historyStack = [];
  setupLayoutForUser();
  showToast(message);
  navigateTo(targetPage);
}

function handleLogout() {
  currentUser = null;
  document.getElementById('main-header').style.display = 'none';
  document.getElementById('main-nav').style.display = 'none';
  
  goToRoleSelection();
  historyStack = [];
  showToast("Anda telah keluar dari akun");
}

function renderCustomerProducts() {
  const grid = document.getElementById('customer-product-list');
  if (!grid) return;
  grid.innerHTML = products.map(p => `
    <div class="product-card" onclick="openProductDetail(${p.id})">
      <img src="${p.img}" class="product-img" alt="${p.name}">
      <div class="product-info">
        <span class="badge-store">Pretty Heels</span>
        <div class="product-title">${p.name}</div>
        <div class="product-price">Rp ${p.price.toLocaleString('id-ID')}</div>
        <div class="product-meta">
          <span><i class="fa-solid fa-star" style="color:#FFB800;"></i> ${p.rating}</span>
          <span>${p.sold} Terjual</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openProductDetail(id) {
  selectedDetailProduct = products.find(p => p.id === id);
  if (!selectedDetailProduct) return;

  selectedColor = selectedDetailProduct.colors[0];
  selectedQuantity = 1;

  const initialImg = selectedDetailProduct.colorMap?.[selectedColor] || selectedDetailProduct.img;

  const container = document.getElementById('detail-content');
  container.innerHTML = `
    <img src="${initialImg}" id="main-detail-img" class="detail-img" alt="${selectedDetailProduct.name}">
    <div class="detail-container">
      <span class="badge-store">Pretty Heels Store • Jakarta Selatan</span>
      <h2 style="font-size:17px; margin:4px 0 8px; color:var(--text-dark);">${selectedDetailProduct.name}</h2>
      <div style="font-size:20px; font-weight:700; color:var(--primary); margin-bottom:4px;">
        Rp ${selectedDetailProduct.price.toLocaleString('id-ID')}
      </div>
      <div style="font-size:11px; color:var(--text-muted); margin-bottom:16px;">
        <span>Stok Tersedia: ${selectedDetailProduct.stock} pair</span> | 
        <span><i class="fa-solid fa-truck-fast" style="color: #27ae60;"></i> Pengiriman 2-3 Hari</span>
      </div>

      <hr style="border:none; border-top:1px solid var(--border-light); margin:12px 0;">

      <h4 style="font-size:13px; margin-bottom:6px; color:var(--text-dark);">Deskripsi Lengkap Heels</h4>
      <p style="font-size:12px; color:#555; line-height:1.6; margin-bottom:20px;">${selectedDetailProduct.desc}</p>

      <hr style="border:none; border-top:1px solid var(--border-light); margin:12px 0;">

      <div class="flex-between" style="margin-bottom:10px;">
        <h4 style="font-size:14px; font-weight:700; color:var(--text-dark);">
          ${selectedDetailProduct.rating} <i class="fa-solid fa-star" style="color:#FFB800;"></i> Penilaian Pembeli (${selectedDetailProduct.reviews ? selectedDetailProduct.reviews.length : 0})
        </h4>
      </div>

      <div id="reviews-list">
        ${renderReviews(selectedDetailProduct.reviews)}
      </div>

      <div style="display:flex; gap:10px; margin-top:24px;">
        <button class="btn btn-outline" onclick="openVariantSheetForCart()"><i class="fa-solid fa-cart-plus"></i> + Keranjang</button>
        <button class="btn btn-primary" onclick="openVariantSheetForBuy()">Beli Sekarang</button>
      </div>
    </div>
  `;
  navigateTo('product-detail-page');
}

function renderReviews(reviews) {
  if (!reviews || reviews.length === 0) {
    return `<p style="font-size:12px; color:var(--text-muted);">Belum ada ulasan untuk produk ini.</p>`;
  }
  return reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <span class="review-user">${r.name}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div style="color:#FFB800; font-size:10px; margin-bottom:2px;">
        ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
      </div>
      <div class="review-variant">${r.variant || 'Variasi: Standard'}</div>
      <p class="review-comment">${r.comment}</p>
    </div>
  `).join('');
}

function updateCartBadge() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cart-badge-count').innerText = totalQty;
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center" style="padding:40px 0; color:var(--primary-dark);">
        <i class="fa-solid fa-shoe-prints" style="font-size:48px; color:var(--color-rose); margin-bottom:12px;"></i>
        <p style="font-weight:600;">Keranjang belanjaan heels-mu masih kosong</p>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map((item, index) => {
    total += item.product.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${item.selectedImg || item.product.img}" class="cart-img" alt="${item.product.name}">
        <div class="cart-details">
          <div style="font-weight:600; font-size:13px;">${item.product.name}</div>
          <div style="font-size:11px; color:var(--text-muted);">Warna: <strong>${item.color}</strong></div>
          <div style="font-weight:700; color:var(--primary); font-size:13px; margin-top:2px;">Rp ${item.product.price.toLocaleString('id-ID')}</div>
          <div class="flex-between" style="margin-top:6px;">
            <span style="font-size:12px;">Jumlah: <strong>${item.qty} pair</strong></span>
            <div style="display:flex; gap:6px;">
              <button onclick="openVariantSheetFromCart(${index})" class="btn btn-secondary" style="padding:4px 8px; font-size:10px;"><i class="fa-solid fa-pen"></i> Ubah Opsi</button>
              <button onclick="removeFromCart(${index})" style="border:none; background:none; color:#FF3B30; font-size:11px; cursor:pointer;"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cart-total-price').innerText = `Rp ${total.toLocaleString('id-ID')}`;
  footer.style.display = 'block';
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartBadge();
  renderCart();
  showToast("Produk dihapus dari keranjang");
}

function renderCheckout() {
  const container = document.getElementById('checkout-items');
  const nameEl = document.getElementById('checkout-cust-name');
  const phoneEl = document.getElementById('checkout-cust-phone');
  
  if (nameEl) nameEl.innerText = currentUser ? currentUser.name : 'Seraphine Azellie';
  if (phoneEl) phoneEl.innerText = currentUser ? currentUser.phone : '08123456789';

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    subtotal += item.product.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${item.selectedImg || item.product.img}" class="cart-img" alt="${item.product.name}">
        <div class="cart-details">
          <div style="font-weight:600; font-size:13px;">${item.product.name}</div>
          <div style="font-size:11px; color:var(--text-muted);">Warna Terpilih: <strong>${item.color}</strong></div>
          <div class="flex-between" style="margin-top:6px;">
            <span style="font-weight:700; color:var(--primary); font-size:12px;">Rp ${item.product.price.toLocaleString('id-ID')}</span>
            <span style="font-size:12px;">x${item.qty} pair</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const shipping = 15000;
  document.getElementById('checkout-subtotal').innerText = `Rp ${subtotal.toLocaleString('id-ID')}`;
  document.getElementById('checkout-total').innerText = `Rp ${(subtotal + shipping).toLocaleString('id-ID')}`;
}

function openVariantSheetForCart() {
  sheetTargetIndex = null;
  sheetActionMode = 'add_to_cart';
  openSheetGeneric(selectedDetailProduct, selectedColor, selectedQuantity, "Masukkan ke Keranjang");
}

function openVariantSheetForBuy() {
  sheetTargetIndex = null;
  sheetActionMode = 'buy_now';
  openSheetGeneric(selectedDetailProduct, selectedColor, selectedQuantity, "Lanjut ke Checkout");
}

function openVariantSheetFromCart(index) {
  sheetTargetIndex = index;
  sheetActionMode = 'edit_cart';
  const item = cart[index];
  openSheetGeneric(item.product, item.color, item.qty, "Simpan Perubahan");
}

function openSheetGeneric(productObj, currentColor, currentQty, buttonLabel) {
  selectedDetailProduct = productObj;
  selectedColor = currentColor || productObj.colors[0];
  selectedQuantity = currentQty || 1;

  document.getElementById('sheet-prod-img').src = selectedDetailProduct.colorMap?.[selectedColor] || selectedDetailProduct.img;
  document.getElementById('sheet-prod-price').innerText = `Rp ${selectedDetailProduct.price.toLocaleString('id-ID')}`;
  document.getElementById('sheet-prod-stock').innerText = `Stok: ${selectedDetailProduct.stock}`;
  document.getElementById('sheet-qty-val').innerText = selectedQuantity;
  document.getElementById('sheet-action-btn').innerText = buttonLabel;

  const optsContainer = document.getElementById('sheet-variant-options');
  optsContainer.innerHTML = selectedDetailProduct.colors.map((c) => {
    const thumbImg = selectedDetailProduct.colorMap?.[c] || selectedDetailProduct.img;
    const isActive = c === selectedColor ? 'active' : '';
    return `
      <div class="variant-card-btn ${isActive}" onclick="selectSheetColor('${c}', this, '${thumbImg}')">
        <img src="${thumbImg}" alt="${c}">
        <span>${c.toUpperCase()}</span>
      </div>
    `;
  }).join('');

  document.getElementById('variant-sheet-modal').classList.add('active');
}

function closeVariantSheet() {
  document.getElementById('variant-sheet-modal').classList.remove('active');
}

function selectSheetColor(color, el, imgUrl) {
  selectedColor = color;
  document.querySelectorAll('#sheet-variant-options .variant-card-btn').forEach(btn => btn.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('sheet-prod-img').src = imgUrl;
}

function updateSheetQty(change) {
  selectedQuantity += change;
  if (selectedQuantity < 1) selectedQuantity = 1;
  if (selectedQuantity > selectedDetailProduct.stock) selectedQuantity = selectedDetailProduct.stock;
  document.getElementById('sheet-qty-val').innerText = selectedQuantity;
}

function confirmSheetAction() {
  const activeImg = selectedDetailProduct.colorMap?.[selectedColor] || selectedDetailProduct.img;

  if (sheetActionMode === 'add_to_cart') {
    const existing = cart.find(item => item.product.id === selectedDetailProduct.id && item.color === selectedColor);
    if (existing) {
      existing.qty += selectedQuantity;
    } else {
      cart.push({ product: selectedDetailProduct, color: selectedColor, selectedImg: activeImg, qty: selectedQuantity });
    }
    updateCartBadge();
    showToast("Heels berhasil ditambahkan ke keranjang!");
  } else if (sheetActionMode === 'buy_now') {
    cart = [{ product: selectedDetailProduct, color: selectedColor, selectedImg: activeImg, qty: selectedQuantity }];
    updateCartBadge();
    navigateTo('checkout-page');
  } else if (sheetActionMode === 'edit_cart' && sheetTargetIndex !== null) {
    cart[sheetTargetIndex].color = selectedColor;
    cart[sheetTargetIndex].selectedImg = activeImg;
    cart[sheetTargetIndex].qty = selectedQuantity;
    renderCart();
    updateCartBadge();
    showToast("Rincian keranjang diperbarui!");
  }

  closeVariantSheet();
}

function processOrder() {
  if (cart.length === 0) return;
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.qty), 0);

  orders.unshift({
    id: 'PHS-' + Math.floor(100000 + Math.random() * 900000),
    date: '07 Ags 2026',
    category: 'harian',
    customer: currentUser ? currentUser.name : 'Seraphine Azellie',
    items: [...cart],
    total: subtotal + 15000,
    payment: document.getElementById('payment-method').value,
    status: 'Diproses'
  });

  cart = [];
  updateCartBadge();
  showToast("Pesanan Heels Berhasil Dibuat!");
  navigateTo('customer-orders-page');
}

function renderCustomerOrders() {
  const container = document.getElementById('customer-order-list');
  if (orders.length === 0) {
    container.innerHTML = `<p class="text-center" style="color:var(--primary-dark); padding:30px;">Belum ada riwayat pesanan.</p>`;
    return;
  }

  container.innerHTML = orders.map(order => `
    <div class="order-card" style="flex-direction:column;">
      <div class="flex-between" style="border-bottom:1px solid var(--border-light); padding-bottom:6px; font-size:12px;">
        <strong>${order.id}</strong>
        <span style="color:var(--primary); font-weight:600;">${order.status}</span>
      </div>
      ${order.items.map(i => `<div style="font-size:12px; margin:4px 0;">• ${i.product.name} (${i.color || 'Standard'}) x${i.qty} pair</div>`).join('')}
      <div class="flex-between" style="border-top:1px dashed var(--border-light); padding-top:6px; margin-top:6px; font-size:12px;">
        <span>Total Pembayaran:</span>
        <strong style="color:var(--primary);">Rp ${order.total.toLocaleString('id-ID')}</strong>
      </div>
    </div>
  `).join('');
}

function renderAdminDashboard() {
  document.getElementById('stat-products').innerText = products.length;
  document.getElementById('stat-orders').innerText = orders.length;
  
  const totalSales = orders.reduce((sum, o) => sum + o.total, 0);
  document.getElementById('stat-sales').innerText = `Rp ${totalSales.toLocaleString('id-ID')}`;

  const recentContainer = document.getElementById('admin-dashboard-recent-orders');
  if (!recentContainer) return;

  if (orders.length === 0) {
    recentContainer.innerHTML = `<p style="font-size:12px; color:var(--text-muted);">Belum ada pesanan masuk.</p>`;
    return;
  }

  recentContainer.innerHTML = orders.map(order => `
    <div class="order-card" style="flex-direction:column;">
      <div class="flex-between" style="font-size:12px; font-weight:600;">
        <span>Pembeli: ${order.customer}</span>
        <span style="color:var(--primary);">${order.id}</span>
      </div>
      <div style="font-size:11px; color:var(--text-muted); margin:4px 0;">
        ${order.items.map(i => `${i.product.name} x${i.qty}`).join(', ')}
      </div>
      <div class="flex-between" style="font-size:12px;">
        <span>Total: Rp ${order.total.toLocaleString('id-ID')}</span>
        <span class="badge-store">${order.status}</span>
      </div>
    </div>
  `).join('');
}

function renderAdminProducts() {
  const container = document.getElementById('admin-product-list');
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="cart-item">
      <img src="${p.img}" class="cart-img" alt="${p.name}">
      <div class="cart-details">
        <div style="font-weight:600; font-size:13px;">${p.name}</div>
        <div style="font-size:11px; color:var(--text-muted);">Stok: ${p.stock} | Terjual: ${p.sold}</div>
        <div style="font-weight:700; color:var(--primary); font-size:13px; margin-top:2px;">Rp ${p.price.toLocaleString('id-ID')}</div>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button onclick="editProduct(${p.id})" class="btn btn-secondary" style="padding:4px 8px; font-size:11px;"><i class="fa-solid fa-pen"></i> Edit</button>
          <button onclick="deleteProduct(${p.id})" class="btn btn-outline" style="padding:4px 8px; font-size:11px; border-color:#FF3B30; color:#FF3B30;"><i class="fa-solid fa-trash"></i> Hapus</button>
        </div>
      </div>
    </div>
  `).join('');
}

function resetForm() {
  document.getElementById('product-form').reset();
  document.getElementById('input-prod-id').value = '';
}

function saveProduct(e) {
  e.preventDefault();
  const id = document.getElementById('input-prod-id').value;
  const name = document.getElementById('input-prod-name').value;
  const colors = document.getElementById('input-prod-colors').value.split(',').map(c=>c.trim());
  const price = parseInt(document.getElementById('input-prod-price').value);
  const stock = parseInt(document.getElementById('input-prod-stock').value);
  const img = document.getElementById('input-prod-img').value;
  const desc = document.getElementById('input-prod-desc').value;

  if (id) {
    const prod = products.find(p => p.id == id);
    if (prod) {
      Object.assign(prod, { name, colors, price, stock, img, desc });
      if (!prod.colorMap) prod.colorMap = {};
      colors.forEach(c => {
        if (!prod.colorMap[c]) prod.colorMap[c] = img;
      });
      showToast("Data Heels berhasil diperbarui!");
    }
  } else {
    const newProd = {
      id: Date.now(),
      name, colors, price, stock, img, desc,
      rating: 5.0, sold: 0, reviews: [],
      colorMap: {}
    };
    colors.forEach(c => { newProd.colorMap[c] = img; });
    products.unshift(newProd);
    showToast("Heels baru berhasil ditambahkan!");
  }

  renderCustomerProducts();
  renderAdminProducts();
  renderAdminDashboard();

  resetForm();
  navigateTo('admin-products-page');
}

function editProduct(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  document.getElementById('input-prod-id').value = prod.id;
  document.getElementById('input-prod-name').value = prod.name;
  document.getElementById('input-prod-colors').value = prod.colors.join(', ');
  document.getElementById('input-prod-price').value = prod.price;
  document.getElementById('input-prod-stock').value = prod.stock;
  document.getElementById('input-prod-img').value = prod.img;
  document.getElementById('input-prod-desc').value = prod.desc;

  navigateTo('admin-input-page');
}

function deleteProduct(id) {
  if (confirm("Apakah Anda yakin ingin menghapus Heels ini?")) {
    products = products.filter(p => p.id !== id);
    
    renderAdminProducts();
    renderCustomerProducts();
    renderAdminDashboard();
    
    showToast("Heels berhasil dihapus!");
  }
}

function switchReportTab(type, element) {
  if (element) {
    element.parentElement.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
  }

  let activeOrders = [];
  let titleText = "";
  let periodeText = "";

  if (type === 'harian') {
    activeOrders = orders.filter(o => o.category === 'harian');
    titleText = "Ringkasan Laporan Harian";
    periodeText = "Periode Laporan: Hari Ini (07 Ags 2026)";
  } else if (type === 'bulanan') {
    activeOrders = orders.filter(o => o.category === 'harian' || o.category === 'bulanan');
    titleText = "Ringkasan Laporan Bulanan";
    periodeText = "Periode Laporan: Agustus 2026";
  } else if (type === 'tahunan') {
    activeOrders = orders;
    titleText = "Ringkasan Laporan Tahunan";
    periodeText = "Periode Laporan: Tahun 2026";
  }

  document.getElementById('report-title').innerText = titleText;
  document.getElementById('report-periode-text').innerText = periodeText;

  let totalGross = activeOrders.reduce((sum, o) => sum + o.total, 0);
  let totalItems = activeOrders.reduce((sum, o) => sum + o.items.reduce((iSum, i) => iSum + i.qty, 0), 0);
  const adminFee = Math.round(totalGross * 0.03);

  document.getElementById('report-count').innerText = `${activeOrders.length} Pesanan`;
  document.getElementById('report-items-sold').innerText = `${totalItems} Pair`;
  document.getElementById('report-gross').innerText = `Rp ${totalGross.toLocaleString('id-ID')}`;
  document.getElementById('report-fee').innerText = `- Rp ${adminFee.toLocaleString('id-ID')}`;
  document.getElementById('report-revenue').innerText = `Rp ${(totalGross - adminFee).toLocaleString('id-ID')}`;

  const listEl = document.getElementById('report-transaction-list');
  listEl.innerHTML = activeOrders.map(o => `
    <div style="background:rgba(255, 255, 255, 0.94); padding:12px; border-radius:var(--radius); margin-bottom:10px; font-size:12px; border:1px solid var(--border-light);">
      <div class="flex-between" style="border-bottom:1px dashed var(--border-light); padding-bottom:6px; margin-bottom:6px;">
        <strong style="color:var(--primary);">${o.id}</strong>
        <span style="color:var(--text-muted); font-size:11px;">${o.date}</span>
      </div>
      <div>Pembeli: ${o.customer}</div>
      <div class="flex-between" style="font-size:11px; background:var(--color-cream); padding:6px 8px; border-radius:6px; margin-top:6px;">
        <span>Omset: Rp ${o.total.toLocaleString('id-ID')}</span>
        <span style="color:#27ae60; font-weight:700;">Bersih: Rp ${(o.total - Math.round(o.total * 0.03)).toLocaleString('id-ID')}</span>
      </div>
    </div>
  `).join('');
}
