/* Yotoro Hills - script bersama untuk semua halaman */
var NOMOR_WA = '6281344296053';

/* ===== FORM KONTAK -> WhatsApp ===== */
function sendToWhatsApp(event) {
    event.preventDefault();

    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var paket = document.getElementById('paket-pilihan').value;
    var pesan = document.getElementById('pesan').value;

    var teks = [
        'Halo Admin Yotoro Hills, saya tertarik untuk memesan tiket/layanan.',
        '',
        '*Detail Pelanggan:*',
        '• Nama: ' + nama,
        '• Email: ' + email,
        '',
        '*Paket yang Dipilih:*',
        '👉 *' + paket + '*',
        '',
        '*Catatan/Pesan:*',
        '"' + pesan + '"'
    ].join('\n');

    window.open('https://wa.me/' + NOMOR_WA + '?text=' + encodeURIComponent(teks), '_blank');
}

/* ===== SALIN NOMOR REKENING DONASI ke clipboard ===== */
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    }
    // Fallback untuk browser lama / konteks non-secure
    return new Promise(function (resolve, reject) {
        try {
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

/* ===== HERO BACKGROUND SLIDESHOW (hanya di beranda) ===== */
(function initHeroSlideshow() {
    var slideshow = document.getElementById('hero-slideshow');
    if (!slideshow) return;

    var heroImages = (slideshow.getAttribute('data-images') || '').split(',').filter(Boolean);
    var slides = heroImages.map(function (src) {
        var slide = document.createElement('div');
        slide.className = 'hero-slide';
        slide.style.backgroundImage = "url('" + src.trim() + "')";
        slideshow.appendChild(slide);
        return slide;
    });
    if (!slides.length) return;

    var current = 0;
    var INTERVAL = 6000; // lama tiap gambar tampil (ms)

    function activate(index) {
        slides.forEach(function (s) { s.classList.remove('is-active'); });
        var slide = slides[index];
        slide.classList.add('is-active');
        // restart animasi zoom, arah selang-seling (in / out)
        slide.classList.remove('zoom-in', 'zoom-out');
        void slide.offsetWidth;
        slide.classList.add(index % 2 === 0 ? 'zoom-in' : 'zoom-out');
    }

    activate(0);
    if (slides.length > 1) {
        setInterval(function () {
            current = (current + 1) % slides.length;
            activate(current);
        }, INTERVAL);
    }
})();

/* ===== TOMBOL BACK TO TOP ===== */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

(function initBackToTop() {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
    function toggle() {
        btn.classList.toggle('is-visible', window.scrollY > 400);
    }
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
})();
