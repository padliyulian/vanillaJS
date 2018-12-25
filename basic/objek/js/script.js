// 3 macam cara pembuatan objek (literal, fungsi ekspresi, konstruksi)
// // literal
// var mhs1 = {
//   nama : 'julian',
//   npm  : '0807051061',
//   jurusan : 'D3 Manajemen Informatika'
// }
//
// // fungsi deklarasi
// function tambahMhs(nama, npm, jurusan){
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.npm = npm;
//   mhs.jurusan = jurusan;
//   return mhs;
// }
// var mhs2 = tambahMhs('tukul','1234','ti');
//
// // konstruktor
// function Mhs(nama, npm, jurusan){
//   this.nama = nama;
//   this.npm = npm;
//   this.jurusan = jurusan;
// }
// var mhs3 = new Mhs('raisa','65243','si');

//
// // konstruktor fungsi angkot
// function Angkot(supir, trayek, penumpang, kas){
//   // properti this.super set dengan nilai parameter supir
//   this.supir = supir;
//   this.trayek = trayek;
//   this.penumpang = penumpang;
//   this.kas = kas;
//   // set properti penumpang naik sebagai fungsi
//   this.penumpangNaik = function(namaPenumpang){
//     // looping elemen array penumpang
//     for (var i = 0; i < this.penumpang.length; i++){
//       // jika ada elemen yg undefined
//       if (this.penumpang[i] == undefined){
//         // isi dengan namaPenumpang
//         this.penumpang[i] = namaPenumpang;
//         // kembalikan nilai
//         return this.penumpang;
//       }
//     }
//     // jika tidak ada elemen yg undefined, tambah penumpang di akhir array
//     this.penumpang.push(namaPenumpang);
//     // kembalikan nilai
//     return this.penumpang;
//   }
//
//   // set properti penumpang turun sebagai fungsi
//   this.penumpangTurun = function(namaPenumpang, bayar){
//     // jika penumpang kosong
//     if (this.penumpang.length === 0){
//       // tampikan pesan
//       alert('angkot msh kosong');
//       // kembalikan nilai
//       return this.penumpang;
//     }
//     // looping elemen array penumpang
//     for (var i = 0; i < this.penumpang.length; i++){
//       // jika namaPenumpang ada
//       if (this.penumpang[i] == namaPenumpang){
//         // turunkan, set undefined
//         this.penumpang[i] = undefined;
//         // tambahkan bayak ke kas
//         this.kas += bayar;
//         // kembalikan nilai
//         return this.penumpang;
//       // jika tidak, jika di cek sampai akhir elemen ngk ketemu
//       } else if (i == this.penumpang.length - 1){
//         // tampikan pesan
//         alert('penumpang tidak ada');
//         // kembalikan nilai
//         return this.penumpang;
//       }
//     }
//   }
// }
// // buat objek baru angkot1
// var angkot1 = new Angkot('julian', ['natar','rajabasa'], [], 0);

// skop this
// fungsi deklarasi
// function hallo(){
//   console.log(this);
//   console.log('halo');
// }
// hallo();

// objek literal
// var obj = {};
// obj.hallo = function(){
//   console.log(this);
//   console.log('hallo');
// }
// obj.hallo();

// constructor
// function Hallo(){
//   console.log(this);
//   console.log('hallo');
// }
// new Hallo();

(function hello() {
  console.log('hello world');
});
