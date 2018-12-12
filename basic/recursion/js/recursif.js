// looping cetak 5-1
for (var x = 5; x > 0; x--){
  console.log(x);
}

// fungsi recursif cetak 5-1
function tampil(n){
  if (n === 0) return;
  console.log(n);
  tampil(n-1);
}

tampil(5);

// faktorial looping
var hasil = 1;
for (var x2 = 5; x2 > 0; x2--){
  hasil *= x2;
}

console.log(hasil);

// fungsi faktorial recursif
function faktorial(n2){
  if (n2 === 0) return 1;
  return n2 * faktorial(n2-1);
}

console.log(faktorial(5));
