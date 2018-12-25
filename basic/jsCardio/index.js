function evenOddSums(arr) {
  let even = 0;
  let odd = 0;

  arr.map(val => {
    if (val % 2 === 0) {
      even += val;
    } else {
      odd += val;
    }
  });

  return [even, odd];
}

console.log(evenOddSums([10, 20, 10, 11, 21, 11, 10]));
