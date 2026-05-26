# 📄 PRD — Landing Page Baby Massage & Spa
> Versi: 1.1 (Revisi untuk eksekusi model AI)
> Status: Ready to Build
> Tujuan: Satu halaman statis, konversi 100% via WhatsApp

---

## 1. Konteks Proyek

**Apa yang dibangun:** Single-page website (landing page) untuk layanan pijat bayi dan baby spa homecare.  
**Satu-satunya aksi pengguna:** Klik tombol → diarahkan ke WhatsApp Bisnis. Tidak ada form, tidak ada database, tidak ada login.  
**Target pengguna website:** Ibu muda di area Yogyakarta, membuka lewat HP (mobile-first).

---

## 2. Stack Teknologi

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | React + Vite | Build cepat, ekosistem luas |
| Styling | Tailwind CSS v3 | Utility-first, tidak perlu CSS kustom |
| Animasi | Framer Motion (dibatasi, lihat §6) | Scroll reveal sederhana |
| Routing | Tidak ada | Anchor link biasa `<a href="#layanan">` |
| Hosting | Vercel (gratis) | Deploy otomatis dari GitHub |
| Domain | `.my.id` ±Rp 12.000/tahun | Opsional, vercel.app gratis |

**Tidak perlu:** React Router, Redux, database, backend, API eksternal apapun.

---

## 3. Design Tokens (Warna & Font — HARUS DIPAKAI KONSISTEN)

### 3.1 Palet Warna

```css
/* Tempelkan di index.css, GUNAKAN VARIABEL INI di semua komponen */
:root {
  --color-bg:        #FDF8F3;   /* krem hangat — background utama */
  --color-surface:   #FFF5EB;   /* peach sangat muda — surface card */
  --color-primary:   #C68642;   /* coklat kayu — accent utama */
  --color-primary-hover: #A86D2F;
  --color-cta:       #25D366;   /* hijau WhatsApp — HANYA untuk tombol CTA */
  --color-cta-hover: #1DA851;
  --color-text:      #3D2B1F;   /* coklat tua — teks utama */
  --color-text-muted:#7A6054;   /* abu coklat — teks sekunder */
  --color-border:    rgba(61,43,31,0.10); /* border halus */
}
```

**Aturan warna:**
- `--color-cta` (hijau) **hanya** untuk tombol WhatsApp. Jangan dipakai di elemen lain.
- `--color-primary` (coklat) untuk accent, border aktif, ikon highlight.
- Semua teks memakai `--color-text` atau `--color-text-muted`. Tidak ada teks berwarna-warni.

### 3.2 Font

```html
<!-- Di index.html <head> -->
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&f[]=zodiak@400,700&display=swap" rel="stylesheet">
```

```css
--font-display: 'Zodiak', Georgia, serif;      /* heading besar saja (h1, hero) */
--font-body:    'Cabinet Grotesk', sans-serif; /* semua teks lainnya */
```

### 3.3 Border Radius & Shadow

```css
--radius-card: 1.25rem;   /* 20px — card dan gambar */
--radius-btn:  9999px;    /* pill — semua tombol */
--shadow-card: 0 2px 12px rgba(61,43,31,0.08);
--shadow-hover: 0 8px 24px rgba(61,43,31,0.14);
```

---

## 4. Data Dummy (ISI DENGAN DATA ASLI NANTI)

### 4.1 `src/data/servicesData.js`

```js
export const services = [
  {
    id: 1,
    title: "Pijat Bayi Sehat",
    duration: "45 menit",
    priceFrom: "Rp 85.000",
    description: "Pijat stimulasi tumbuh kembang untuk bayi 0–12 bulan. Membantu tidur lebih nyenyak dan meningkatkan nafsu makan.",
    icon: "baby",
    waText: "Halo,%20saya%20ingin%20pesan%20Pijat%20Bayi%20Sehat"
  },
  {
    id: 2,
    title: "Baby Spa & Terapi Bapil",
    duration: "60 menit",
    priceFrom: "Rp 110.000",
    description: "Hydrotherapy + pijat ringan untuk relaksasi bayi. Cocok untuk bayi yang rewel atau sedang tidak nyaman.",
    icon: "sparkles",
    waText: "Halo,%20saya%20ingin%20pesan%20Baby%20Spa"
  },
  {
    id: 3,
    title: "Pijat Laktasi / Mom Care",
    duration: "60 menit",
    priceFrom: "Rp 95.000",
    description: "Pijat khusus ibu menyusui untuk melancarkan ASI dan mengurangi pegal pasca melahirkan.",
    icon: "heart",
    waText: "Halo,%20saya%20ingin%20pesan%20Mom%20Care"
  }
];
```

### 4.2 `src/data/testimonialsData.js`

```js
export const testimonials = [
  {
    id: 1,
    name: "Bunda Sari",
    city: "Sleman",
    rating: 5,
    text: "Terapisnya sabar banget sama bayi saya yang baru 2 bulan. Habis dipijat langsung tidur pulas!"
  },
  {
    id: 2,
    name: "Bunda Rina",
    city: "Bantul",
    rating: 5,
    text: "Baby spa-nya bikin baby saya seneng banget main air. Recommended untuk mama-mama di Jogja!"
  },
  {
    id: 3,
    name: "Bunda Dita",
    city: "Yogyakarta",
    rating: 5,
    text: "Pijat laktasinya ampuh banget, ASI langsung deras. Sudah 3x pakai dan puas terus."
  },
  {
    id: 4,
    name: "Bunda Mega",
    city: "Depok, Sleman",
    rating: 5,
    text: "Terapis datang tepat waktu, peralatan bersih, baby langsung happy. Harganya juga terjangkau!"
  }
];
```

### 4.3 Nomor WhatsApp

```js
// src/data/config.js
export const WA_NUMBER = "6281234567890"; // GANTI dengan nomor asli
export const WA_DEFAULT_TEXT = "Halo,%20saya%20ingin%20tanya%20jadwal%20layanan%20pijat%20bayi";
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_DEFAULT_TEXT}`;
```

**Cara pakai di komponen:**
```jsx
import { WA_URL } from '../data/config';
<a href={WA_URL} target="_blank" rel="noopener noreferrer">Tanya Jadwal</a>
```

---

## 5. Struktur Komponen & Spesifikasi UI

### Struktur File

```
src/
├── assets/          → foto & logo (simpan di sini, import di komponen)
├── data/
│   ├── config.js         → nomor WA, nama brand
│   ├── servicesData.js   → daftar layanan
│   └── testimonialsData.js → daftar testimoni
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Services.jsx
│   ├── Testimonials.jsx
│   ├── Footer.jsx
│   └── FloatingWA.jsx
├── App.jsx          → import & susun semua komponen, tambahkan id anchor
├── index.css        → design tokens + Tailwind base
└── main.jsx
```

---

### 5.1 Navbar.jsx

**Layout:** Logo kiri, nav link kanan, sticky di atas saat scroll.

**Spesifikasi:**
- Background: `white/80` + `backdrop-blur-md` (glassmorphism ringan)
- Link: `[Layanan]` `[Tentang]` `[Testimoni]` → anchor scroll (`href="#layanan"`)
- Tombol kanan: `[Chat WA →]` dengan warna `--color-cta`, pill shape
- Mobile: sembunyikan link nav, tampilkan hanya tombol WA + hamburger toggle
- Tinggi navbar: `h-16` (64px)

```jsx
// Contoh struktur JSX yang diharapkan:
<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[var(--color-border)]">
  <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
    <Logo />
    <NavLinks />   {/* hidden di mobile */}
    <WAButton />
  </div>
</nav>
```

---

### 5.2 Hero.jsx

**Tujuan:** Buat pengunjung langsung paham "ini layanan apa" dan "apa yang harus dilakukan sekarang."

**Spesifikasi:**
- Layout: dua kolom di desktop (teks kiri, foto kanan), satu kolom di mobile (teks atas, foto bawah)
- Headline: font `--font-display`, ukuran `text-4xl md:text-5xl lg:text-6xl`
- Sub-teks: `--font-body`, `text-lg`, warna `--color-text-muted`
- CTA utama: tombol besar hijau `--color-cta` + teks "Tanya Jadwal via WhatsApp 💬"
- CTA sekunder: link teks "Lihat Layanan ↓" scroll ke `#layanan`
- Foto: sudut `rounded-[var(--radius-card)]`, shadow `--shadow-card`, ukuran `400x500px`
- Badge kecil di foto: `"✓ Homecare Jogja"` → posisi absolute bawah-kiri foto

**Konten teks:**
```
Headline: "Sentuhan Lembut untuk Tumbuh Kembang Si Kecil"
Sub-teks: "Layanan pijat bayi & baby spa profesional, langsung ke rumah Anda di Yogyakarta."
```

---

### 5.3 Features.jsx

**Tujuan:** Bangun kepercayaan dengan 3 poin keunggulan. **Jangan pakai ikon dalam lingkaran berwarna** (terlihat seperti template AI).

**Spesifikasi:**
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-6`
- Setiap item: ikon kecil (24px, warna `--color-primary`) + judul bold + 1 kalimat penjelasan
- Background section: `--color-surface` (peach muda), bukan putih
- **TIDAK** ada border warna, **TIDAK** ada ikon dalam kotak berwarna

**Konten 3 keunggulan:**
```
1. Terapis Bersertifikat
   "Semua terapis telah mengikuti pelatihan khusus pijat bayi dan baby spa."

2. Datang ke Rumah Anda
   "Tidak perlu keluar rumah. Kami yang datang, lengkap dengan peralatan."

3. Bahan 100% Aman Bayi
   "Menggunakan minyak telon dan bahan alami yang telah diuji keamanannya."
```

---

### 5.4 Services.jsx

**Tujuan:** Tampilkan 3 layanan dengan harga, dan tombol order masing-masing.

**Spesifikasi:**
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-6`
- Setiap card: background `white`, border `--color-border`, radius `--radius-card`, shadow `--shadow-card`
- Struktur card (dari atas ke bawah):
  1. Nama layanan (bold, `text-xl`)
  2. Durasi (kecil, muted)
  3. Deskripsi (2 kalimat, `text-sm`)
  4. Harga mulai dari `Rp XXX` (warna `--color-primary`, bold)
  5. Tombol `"Pesan Layanan Ini"` → WA link dengan teks pre-filled per layanan
- Data diambil dari `servicesData.js` dengan `.map()`
- **TIDAK** ada efek hover yang berlebihan — cukup `shadow` naik sedikit

---

### 5.5 Testimonials.jsx

**Tujuan:** Tampilkan bukti sosial yang terasa organik, bukan seperti template.

**Spesifikasi:**
- Layout: **Static grid 2x2** (BUKAN carousel — carousel rawan bug)
- Setiap card: desain menyerupai bubble chat WhatsApp
  - Background: `white`, border radius besar (`rounded-2xl`), shadow tipis
  - Teks review di dalam bubble
  - Nama + kota di bawah, kecil, muted
  - Bintang bintang ⭐ (5 bintang, warna kuning)
- Data dari `testimonialsData.js`
- Mobile: grid `grid-cols-1 sm:grid-cols-2`

---

### 5.6 Footer.jsx

**Konten:**
```
Nama Brand
Melayani area Yogyakarta dan sekitarnya

Jam Operasional: Senin – Sabtu, 08.00 – 17.00 WIB
📍 Yogyakarta, DIY

[Instagram] [WhatsApp]   ← ikon + link

© 2025 [Nama Brand]. All rights reserved.
```

---

### 5.7 FloatingWA.jsx

**Spesifikasi:**
- Posisi: `fixed bottom-5 right-5 z-50`
- Bentuk: tombol bulat (`rounded-full`), background `--color-cta` (hijau), ikon WhatsApp putih (24px)
- Selalu terlihat saat scroll
- Klik → buka WA dengan teks default dari `config.js`
- TIDAK ada animasi bounce terus-menerus (mengganggu) — cukup pulse sekali saat pertama muncul

```jsx
<a
  href={WA_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#1DA851] transition-all"
  aria-label="Chat WhatsApp"
>
  <WhatsAppIcon size={24} />
</a>
```

---

### 5.8 App.jsx

```jsx
// Urutan komponen — JANGAN diubah
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="keunggulan"><Features /></section>
        <section id="layanan"><Services /></section>
        <section id="testimoni"><Testimonials /></section>
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
```

---

## 6. Animasi — Framer Motion (SCOPE TERBATAS)

**Yang BOLEH dianimasikan:**
```jsx
// Fade-in saat elemen masuk viewport — HANYA ini yang dipakai
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Cara pakai di section heading atau card:
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* konten */}
</motion.div>
```

**Yang TIDAK BOLEH:**
- ❌ Animasi loop terus-menerus (bounce, rotate, pulse)
- ❌ Page transition
- ❌ Drag & drop
- ❌ Animasi kompleks dengan spring physics
- ❌ AnimatePresence kecuali untuk mobile menu toggle

---

## 7. Panduan Agar Tidak Terlihat "Buatan AI"

Model yang membuat website ini HARUS mengikuti aturan berikut:

### ❌ JANGAN lakukan ini:
1. **Ikon dalam lingkaran berwarna** — jangan bungkus ikon dengan `bg-primary/10 rounded-full`. Tampilkan ikon polos.
2. **Teks rata tengah di semua section** — hanya hero yang center. Section lain left-align.
3. **3 kolom identik persis** — jika ada fitur/keunggulan 3 kolom, buat satu item lebih besar atau beri emphasis berbeda.
4. **Gradient button** — tombol CTA harus warna solid (`bg-[#25D366]`), bukan gradient.
5. **Background gradient blob/orbs** — latar belakang harus warna datar dari design tokens, bukan gradient ungu-biru atau abstract shapes.
6. **Heading generik** — jangan tulis "Welcome to Our Service" atau "Unlock the Power of...".
7. **Border kiri berwarna pada card** — jangan pakai `border-l-4 border-primary`. Gunakan shadow atau background berbeda.
8. **Spacing identik setiap section** — variasikan padding: hero `py-24`, features `py-16`, services `py-20`.

### ✅ LAKUKAN ini:
1. **Teks left-align** sebagai default, center hanya untuk hero headline.
2. **Whitespace generous** — beri ruang antara elemen, jangan padat.
3. **Foto asli** (atau placeholder `picsum.photos`) dengan `rounded-[var(--radius-card)]`.
4. **Warna netral dominan** — mayoritas halaman harus krem/putih, warna hanya untuk tombol dan accent.
5. **Variasi layout antar section** — hero 2 kolom, features 3 kolom, services 3 kolom card, testimoni 2x2 grid.

---

## 8. Responsive Breakpoints

| Breakpoint | Target Device | Penyesuaian |
|---|---|---|
| Default (< 640px) | HP Android/iPhone | 1 kolom, font lebih kecil, tombol full-width |
| `sm` (640px+) | HP besar / tablet kecil | Grid 2 kolom untuk testimoni |
| `md` (768px+) | Tablet | Grid 3 kolom untuk layanan & fitur |
| `lg` (1024px+) | Laptop | Hero 2 kolom, max-width `960px` |

**Catatan penting mobile:**
- Semua tombol di mobile: `w-full` (lebar penuh)
- Touch target minimum: `min-h-[44px]`
- Font body minimum: `text-base` (16px) — jangan lebih kecil

---

## 9. Checklist Sebelum Deploy

- [ ] Nomor WA di `config.js` sudah diganti dengan nomor asli
- [ ] Nama brand sudah diisi di semua komponen
- [ ] Harga layanan sudah dikonfirmasi
- [ ] Foto asli sudah dimasukkan ke `/assets` dan diimport
- [ ] Test di Chrome mobile (375px) — semua tombol bisa diklik
- [ ] Test link WA — klik tombol memang membuka WhatsApp dengan teks yang benar
- [ ] Tidak ada teks placeholder "Lorem ipsum" yang tertinggal
- [ ] Build production: `npm run build` tidak ada error

---

## 10. Biaya Operasional

| Item | Biaya | Keterangan |
|---|---|---|
| Hosting (Vercel) | Rp 0 | Gratis selamanya untuk traffic rendah |
| SSL/HTTPS | Rp 0 | Otomatis dari Vercel |
| Domain `.my.id` | Rp 12.000–15.000/tahun | Opsi hemat |
| Domain `.id` | Rp 200.000–250.000/tahun | Opsi profesional |
| Font & Ikon | Rp 0 | Fontshare + Lucide Icons |
| **Total tahun pertama** | **Mulai Rp 15.000** | Hanya beli domain |

