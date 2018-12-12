var bintang = '';

for (x = 10; x > 0; x--){9
  for (z = 10; z > x; z--){9
    bintang += 'a';
  }
  for (y = 0; y < x; y++){1
    bintang += '*';
  }
  bintang += '\n';
}

// for (x = 9; x > 0; x--) {
//   for (y = 0; y < x; y++) {
//     bintang += '*';
//   }
//   bintang += '\n';
// }

console.log(bintang);
