// manipulasi node

// tangkap id dengan elemen a
const sectionA = document.getElementById('a');
// tangkap tag a ke 1 yg ada di elemen dengan id a
const link = sectionA.getElementsByTagName('a')[0];
// hapus var link
sectionA.removeChild(link);

// buat elemen baru p
const pBaru = document.createElement('p');
// buat text baru
const tBaru = document.createTextNode('paragraf baru');
// tambahkan teks ke elemen baru
pBaru.appendChild(tBaru);
// tambahkan elemen baru ke section dengan id a
sectionA.appendChild(pBaru);

// tangkap elemen dengan id b
const sectionB = document.getElementById('b');
// tangkap elemen dengan tag ul ke 1 yg ada di section b
const ul = sectionB.getElementsByTagName('ul') [0];
// tangkap elemen dengan tag p ke 1 yg ada di section b
const jLama = sectionB.getElementsByTagName('p')[0];

// buat elemen baru
const judul = document.createElement('h1');
// buat teks baru
const tJudul = document.createTextNode('Judul baru');
// tambahkan teks ke elemen
judul.appendChild(tJudul);
// ganti elemen ke section b
sectionB.replaceChild(judul, jLama);

// buat elemen baru
const iBaru = document.createElement('li');
// buat teks baru
const tiBaru = document.createTextNode('item baru');
// tambahkan teks ke elemen
iBaru.appendChild(tiBaru);
// tangkap li terakhir di section b
const tempat = sectionB.querySelector('li:last-child');
// tempatkan elemen baru di section b sebelum li terakhir
ul.insertBefore(iBaru, tempat);
