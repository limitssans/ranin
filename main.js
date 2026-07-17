document.addEventListener('DOMContentLoaded', function() {
    const menuBook = document.getElementById("menuBook");
    
    // Inisialisasi efek buku lipat (PageFlip)
    const pageFlip = new St.PageFlip(menuBook, {
        width: 450,          // Lebar satu halaman (piksel)
        height: 650,         // Tinggi satu halaman (piksel)
        size: "stretch",     // Responsif menyesuaikan layar
        minWidth: 300,
        maxWidth: 1000,
        minHeight: 433,
        maxHeight: 1444,
        drawShadow: true,    // Efek bayangan realistis saat halaman dibalik
        showCover: true,     // Halaman pertama dihitung sebagai cover tunggal
        usePortrait: true,   // Mendukung mode portrait tunggal di HP / layar kecil
        mobileScrollSupport: false // Hindari konflik scroll di HP saat swipe menu
    });

    // Load halaman dari elemen HTML yang memiliki class .page-content
    pageFlip.loadFromHTML(document.querySelectorAll(".page-content"));

    // Tombol Navigasi Manual
    document.getElementById("prevBtn").addEventListener("click", () => {
        pageFlip.flipPrev();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        pageFlip.flipNext();
    });
});