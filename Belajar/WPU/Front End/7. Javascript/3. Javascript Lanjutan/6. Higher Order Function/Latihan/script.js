// Latihan Filter, Map & Reduce





// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang javascript lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// Ambil durasi masing-masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(':').map(parts => parseFloat(parts));
        return parts[0] * 60 + parts[1]
    })

// Jumlahkan semua detiknya
    .reduce((total, detik) => total + detik);

// Ubah formatnya menjadi jam menit detik
let jam = Math.floor(jsLanjut/3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlhVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlhVideo = document.querySelector('.jumlah-video');
pJmlhVideo.textContent = `${jmlhVideo} Video.`
