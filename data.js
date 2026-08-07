// VARIABEL STATE GLOBAL
let currentUser = null;
let selectedRole = 'customer';
let historyStack = [];

// DATA PRODUK DUMMY
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

// DATA PESANAN DUMMY
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

// VARIABEL KERANJANG & MODAL VARIASI
let cart = [];
let selectedDetailProduct = null;
let selectedColor = '';
let selectedQuantity = 1;
let sheetTargetIndex = null;
let sheetActionMode = 'buy_now';
