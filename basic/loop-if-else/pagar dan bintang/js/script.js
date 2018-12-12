bintang = '';

for (var x = 0; x < 5; x++){

  for (var i = 5; i > x; i--){
    bintang += ' ';
  }

  for (var y = 0; y < x; y++){
    bintang += '*';
  }

  for (var z = 0; z < x; z++){
    bintang += '*';
  }

  bintang += '* \n';

}

console.log(bintang);

var cetak = '';

for (var baris = 10; baris > 0; baris--){
  if (baris % 2 === 0){
    cetak += ' # # # # #';
  } else {
    cetak += '# # # # # ';
  }
  cetak += '\n';
}

console.log(cetak);
