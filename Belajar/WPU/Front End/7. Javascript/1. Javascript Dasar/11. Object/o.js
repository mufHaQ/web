// Object

// Membuat Object dengan cara Literal
var objL = {
    sekolah: {
        namaSekolah: 'SMK Raden Umar Said',
        jurusan: 'Rekayasa Perangkat Lunak',
        kelas: '11 RPL 2',
    },
    profil: {
        email: 'masbrowmess33@gmail.com',
        telp: '089652390173',
        nama: "Dliyaulhaq Mufliansyah",
        umur: 16 + ' Tahun',
        alamat: {
            jalan: 'Jl. Kudus-Purwodadi',
            kota: 'Kudus',
            kecamatan: 'Undaan',
            desa: 'Undaan Tengah',
            gang: 'Gg. 15',
            rt: 'Rt5',
            rw: 'Rw3',
        }
    }   
};


// Membuat Object dengan cara Function Declaration
function objProfilSiswa(nama, email, telp, umur, alamat, sekolah, jurusan) {
    var siswa = {};

    siswa.nama = nama;
    siswa.email = email;
    siswa.telp = telp;
    siswa.umur = umur;
    siswa.sekolah = sekolah;
    siswa.alamat = alamat;
    siswa.jurusan = jurusan;
    return siswa;
}

var profilSiswa = objProfilSiswa('Dliyaulhaq Mufliansyah', 'masbrowmess33@gmail.com', '089652390173', '16 Tahun', 'Kudus', 'SMK Raden Umar Said', 'Rekayasa Perangkat Lunak')


// Membuat Object dengan cara Constructor
function siswa(nama, umur, telp, email, alamat, jurusan){
    this.nama = nama;
    this.umur = umur;
    this.telp = telp;
    this.email = email;
    this.alamat = alamat;
    this.jurusan = jurusan;
}

var siswa = new siswa('Dliyaulhaq Mufliansyah', '16 Tahun', '089652390173', 'masbrowmess33@gmail.com', 'Undaan Tengah gg15 Rt5/Rw3, Undaan, Kudus, 59372', 'Rekayasa Perangkat Lunak')