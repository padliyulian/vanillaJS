// tampilkan pilihan ingin main atau tidak
var main = confirm('ingin main suit jepang ?');

// selama user ingin main
while (main == true) {

  // cek pilihan komputer
  var com = Math.random();
  if (com < 0.33) {
    com = 'batu';
  } else if (com < 0.66){
    com = 'gunting';
  } else {
    com = 'kertas';
  }

  // user input pilihan
  var player = prompt('masukan pilihan anda : batu, gunting, kertas');

  // isi var hasil dengan string kosong
  var hasil = '';

  // bandingkan pilihan
  if (com == player) {
    hasil = 'SERI';
  } else if (player == 'batu'){
    hasil = (com == 'gunting') ? 'MENANG' : 'KALAH';
  } else if (player == 'gunting'){
    hasil = (com == 'kertas') ? 'MENANG' : 'KALAH';
  } else if (player == 'kertas'){
    hasil = (com == 'batu') ? 'MENANG' : 'KALAH';
  } else {
    hasil = 'salah input data';
  }

  // cetak hasil
  alert('anda '+ hasil +', anda pilih = '+ player +' & komputer pilih = '+com);

  //mau main lagi?
  main = confirm('main lagi ?');

}
// jika tidak ingin main
alert('terimakasih');
