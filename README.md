# Yotoro Hills — Adventures & Outdoors

Website resmi Yotoro Hills, destinasi wisata alam Bukit Yotoro di Kampung Kwadeware, Distrik Waibu, Kabupaten Jayapura, Papua.

🌐 https://yotorohills.github.io

## Fitur Utama

- **Beranda minimalis**: slider foto layar penuh dengan efek zoom.
- **Paket wisata**: tiga kategori (Trekking, Tour Waibu, Bermalam) dengan lima tingkat paket. Setiap paket punya tombol **Pesan via WhatsApp** dengan pesan yang sudah terisi otomatis.
- **Galeri**: foto dengan tampilan perbesar (lightbox).
- **Testimoni**: ulasan Google dan QR code untuk memberi ulasan.
- **Liputan media**: kartu artikel dari media yang bisa diklik.
- **Aturan & tata tertib**: ketentuan pengunjung dan nilai Sapta Pesona.
- **Donasi**: rincian kebutuhan pembangunan glamping dan nomor rekening yang bisa disalin dengan satu klik.
- **Kontak & lokasi**: formulir yang dikirim ke WhatsApp, serta peta Google Maps.
- **Navigasi mobile ala aplikasi**: bottom bar dengan tombol WhatsApp di tengah.

## Halaman

| File | Halaman |
|---|---|
| `index.html` | Beranda |
| `paket.html` | Paket & harga |
| `galeri.html` | Galeri |
| `testimoni.html` | Testimoni |
| `liputan.html` | Liputan media |
| `aturan.html` | Aturan & tata tertib |
| `donasi.html` | Donasi |
| `kontak.html` | Kontak & lokasi |

## Spesifikasi

| Aspek | Detail |
|---|---|
| Jenis | Website statis multi-halaman (HTML) |
| Hosting | GitHub Pages |
| Styling | Tailwind CSS 3.4 (sudah di-compile ke `assets/css/app.css`) |
| Interaksi | Alpine.js 3.14 (CDN) |
| Ikon & font | Font Awesome 6.6, Google Fonts (Playfair Display, Inter) |
| Bahasa | Indonesia (`lang="id"`) |
| Responsif | Mobile-first dengan bottom navigation di HP |
| SEO | Title & meta description unik per halaman, canonical, Open Graph/Twitter Card, data terstruktur JSON-LD (TouristAttraction, Offer, Review, BreadcrumbList), `sitemap.xml`, `robots.txt` |
| Performa | CSS ter-compile (±24 KB), thumbnail galeri, gambar dimuat saat discroll (lazy-load), ikon dimuat tanpa menahan tampilan halaman |
| Pemesanan | Lewat WhatsApp (+62 813-4429-6053), tanpa backend |

## Struktur Folder

```
├── *.html                 # halaman website
├── assets/
│   ├── css/input.css      # sumber CSS (Tailwind + gaya kustom)
│   ├── css/app.css        # hasil compile (jangan diedit langsung)
│   └── js/main.js         # slider, form WhatsApp, salin rekening, back to top
├── images/
│   └── gallery/thumb/     # thumbnail galeri
├── sitemap.xml
├── robots.txt
└── tailwind.config.js
```

## Pengembangan

Jalankan secara lokal dengan server statis apa pun, misalnya VS Code Live Server atau:

```bash
npx http-server .
```

Setelah menambah atau mengubah kelas Tailwind di HTML, atau mengedit `assets/css/input.css`, compile ulang CSS:

```bash
npx tailwindcss@3.4.17 -i assets/css/input.css -o assets/css/app.css --minify
```

Jika menambah halaman baru, daftarkan juga di `sitemap.xml`.

---

Bagian dari POKDARWIS Kampung Adat Kwadeware, Distrik Waibu. Dikembangkan oleh [Nokensoft](https://nokensoft.com).
