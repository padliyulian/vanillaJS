// ingin main tebak angka atau tidak
var main = confirm('ingin main tebak angka?');

// selama ingin main bernilai true
while (main == true){
  // set nyawa 3x
  var nyawa = 3;
  // input angka tebakan player ke1
  var player = prompt('input angka dari 1 s.d 10 : nyawa = '+nyawa);
  // cek angka pilihan komputer
  var com = Math.random() * 10;
  // bulatkan nilai
  var com2 = Math.round(com);
  // set var hasil = string kosong
  var hasil = '';
  // cek tebakan
  if (com2 == player){
    alert('cocok');
  } else {
    nyawa--;
    // ke2
    player = prompt('tidak cocok, input lagi : nyawa = '+nyawa);
    if (com2 == player){
      alert('cocok');
    } else {
      nyawa--;
      // ke3
      player = prompt('tidak cocok, input lagi : nyawa = '+nyawa);
      if (com2 == player){
        alert('cocok');
      } else {
        alert('nyawa habis, angka yg dicari adalah '+ com2);
      }
    }
  }
  // ingin main lagi?
  main = confirm('main lagi?');
}
// jika tidak ingin main
alert('terimakasih');
