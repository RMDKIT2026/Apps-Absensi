# AbsensiKu — Panduan Setup & Deployment

## 📦 File yang disertakan
- `index.html` — Aplikasi utama (buka langsung di browser)
- `manifest.json` — Konfigurasi PWA (install di HP)
- `google-apps-script.js` — Script untuk Google Sheets

---

## 🚀 Cara deploy (gratis)

### Opsi A — GitHub Pages (paling mudah)
1. Buat akun GitHub di github.com
2. Buat repository baru, upload ketiga file ini
3. Settings → Pages → Source: main branch
4. Aplikasi bisa diakses di `https://username.github.io/nama-repo`

### Opsi B — Vercel (lebih cepat)
1. Buka vercel.com, login dengan GitHub
2. Import repository Anda
3. Deploy otomatis — URL langsung jadi

---

## 📊 Setup Google Sheets (opsional tapi direkomendasikan)

### Langkah 1 — Buat Google Sheet
1. Buka sheets.google.com, buat spreadsheet baru
2. Beri nama misalnya "Data Absensi 2026"

### Langkah 2 — Buat Apps Script
1. Di spreadsheet, klik Extensions → Apps Script
2. Hapus kode default, paste seluruh isi `google-apps-script.js`
3. Klik Save (ikon floppy disk)

### Langkah 3 — Deploy sebagai Web App
1. Klik Deploy → New deployment
2. Type: Web App
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Klik Deploy, copy URL yang muncul

### Langkah 4 — Hubungkan ke aplikasi
1. Buka AbsensiKu → tab Profil
2. Klik Google Sheets → paste URL dari langkah 3
3. Simpan

Setelah ini, setiap clock in/out akan otomatis tercatat di Google Sheets!

---

## 📱 Install di HP (PWA)

### Android (Chrome)
1. Buka URL aplikasi di Chrome
2. Tap menu (⋮) → "Add to Home screen"
3. Aplikasi muncul seperti app biasa di layar utama

### iPhone (Safari)
1. Buka URL di Safari
2. Tap ikon Share → "Add to Home Screen"
3. Selesai

---

## 🔐 Catatan keamanan

Aplikasi ini menggunakan simulasi login Google untuk demo.
Untuk produksi dengan keamanan penuh, gunakan:
- **Google Identity Services** (GIS) untuk OAuth nyata
- **Supabase Auth** jika ingin backend database

---

## 📋 Fitur yang tersedia

| Fitur | Status |
|-------|--------|
| Clock In dengan foto + GPS | ✅ |
| Clock Out dengan foto + GPS | ✅ |
| Live maps (Leaflet + OpenStreetMap) | ✅ |
| Riwayat absensi per bulan | ✅ |
| Statistik hadir/absen/telat | ✅ |
| Export ke Google Sheets | ✅ |
| Install sebagai PWA | ✅ |
| Mode gelap otomatis | ✅ |
| Data tersimpan lokal (offline) | ✅ |
| Panel laporan admin | ✅ |

---

## 💡 Pengembangan selanjutnya

- Notifikasi pengingat absensi (Push Notification)
- Geofencing (hanya bisa absen di radius kantor)
- Approval/izin cuti
- Dashboard admin di web terpisah
- Integrasi WhatsApp notifikasi via Fonnte/WA Gateway
