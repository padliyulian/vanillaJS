// ingin main tebak angka atau tidak
var main = confirm('ingin main tebak angka?');

// set variabel
var player, com, com2 = 0;

// fungsi player
function angkaPlayer(){
  // input angka tebakan player ke n
  player = prompt('input angka dari 1 s.d 10 : anda punya = '+nyawa+' kali percobaan lagi');
}

// fungsi com
function angkaCom(){
  // cek angka pilihan komputer
  com = Math.random() * 10;
  // bulatkan nilai
  com2 = Math.round(com);
}

// selama ingin main bernilai true
while (main == true){
  // set nyawa 3x
  var nyawa = 3;
  // panggil fungsi angkaPlayer ke1
  angkaPlayer();
  // panggil fungsi angkaCom
  angkaCom();
  // cek tebakan
  if (com2 == player){
    alert('cocok, anda menang');
  } else {
    nyawa--;
    // ke2
    angkaPlayer();
    if (com2 == player){
      alert('cocok, anda menang');
    } else {
      nyawa--;
      // ke3
      angkaPlayer();
      if (com2 == player){
        alert('cocok, anda menang');
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
