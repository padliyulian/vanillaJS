// DOM button -------------------------
// tangkap button ke1
const tUbah = document.getElementsByTagName('button')[0];
// saat di klik jalankan fungsi
tUbah.onclick = function(){
  // tambahkan kelas jika belum ada & hapus kelas jika sudah ada
  document.body.classList.toggle('biru-muda');
}

// buat button baru
const tBaru = document.createElement('button');
// buat teks baru
const teks = document.createTextNode('acakWarna');
// isi elemen dengan teks
tBaru.appendChild(teks);
// tambahkan attribut
tBaru.setAttribute('type', 'button');
// tempatkan setelah button ubahWarna
tUbah.after(tBaru);

// tambahkan fungsi saat button acakWarna di klik
tBaru.addEventListener('click', function(){
  // set nilai rgb acak 0-255
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);
  // set backgroundColor body
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
// ----------------------------

// DOM range --------------------
// tangkap elemen range RGB
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
// buat fungsi acakWarna
const acakWarna = function(){
  // tangkap nilai
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  // set ke backgroundColor
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}
// panggil fungsi saat range bergeser
sMerah.addEventListener('input', acakWarna);
sHijau.addEventListener('input', acakWarna);
sBiru.addEventListener('input', acakWarna);
// --------------------------------

// DOM mousemove--------------------
// tangkap pergerakan mouse pada body & panggil fungsi
document.body.addEventListener('mousemove', function(event){
  // tentukan nilai RGB
  const r = Math.round((event.clientX / window.innerWidth) * 255);
  const g = Math.round((event.clientY / window.innerHeight) * 255);
  const b = Math.round(Math.random() * 255 + 1);
  // set ke backgroundColor
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});
