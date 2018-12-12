// tangkap elemen dengan kelas container isi ke var container
const container = document.querySelector('.container');
// tangkap elemen dengan kelas jumbo isi ke var jumbo
const jumbo = document.querySelector('.jumbo');
// tangkap elemen dengan kelas thumb isi ke var thumbs
const thumbs = document.querySelectorAll('.thumb');

// tambahkan addEventListener saat di klik ke var container
container.addEventListener('click', function(e){
  // jika target kelas yg di klik thumb
  if (e.target.className == 'thumb'){
    // set src var jumbo isi dengan src target event
    jumbo.src = e.target.src;
    // tambahkan kelas fade
    jumbo.classList.add('fade');
    // hapus kelas fade setelah 1/2 detik
    setTimeout(function(){
      jumbo.classList.remove('fade');
    }, 500);
    // looping masing2 elemen thumbs
    thumbs.forEach(function(e){
      // set kelas elemen yg di klik ke thumb
      e.className = 'thumb';
    });
    // tambahkan kelas active ke target yg di klik
    e.target.classList.add('active');
  }
});
