// DOM selection

// // getElementById('id') -> elemen
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
//
// // getElementsByTagName('tagName') -> HTMLcolection
// const paragraf = document.getElementsByTagName('p');
// for (let i = 0; i < paragraf.length; i++){
//   paragraf[i].style.backgroundColor = 'grey';
// }
//
// // getElementsByClassName('className') -> HTMLcolection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ubah teks lewat DOM';

// // querySelector('query') -> elemen
// const p4 = document.querySelector('section#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '35px';
//
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';
//
//
// // querySelectorAll('query') -> nodeList
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++){
//   p[i].style.backgroundColor = 'grey';
// }

// // manipulasi node root
// const sectionB = document.getElementById('b');
// const p = sectionB.getElementsByTagName('p')[0];
// p.style.backgroundColor = 'red';

// ----------------------------------------
// DOM manipulations
// innerHTML
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = '<a href="https://youtube.com">youtube</a>';

// // style.property
// const judul = document.getElementById('judul');
// judul.style.color = 'red';

// setAttribute, getAttribute, removeAttribute
// const link = document.querySelector('section#a a');
// const x = link.getAttribute('href');
// console.log(x);

// const p4 = document.querySelector('section#b p');
// p4.setAttribute('id', 'paragraf4');
// console.log(p4);

// const judul = document.getElementById('judul');
// judul.removeAttribute('id');
// console.log(judul);

// // classList
// const judul = document.getElementById('judul');
// // tambah class
// judul.classList.add('tes1', 'tes2');
// // haspus class
// judul.classList.remove('tes2');
// // klw ada di hapus, klw ngk di tambah
// judul.classList.toggle('tes3');
// // tanya apa  class tes1 ada true/false
// console.log(judul.classList.contains('tes1'));
// // replace
// judul.classList.replace('tes3', 'tes33');
// // item / menampilkan kelass index ke 1
// console.log(judul.classList.item(0));
const sectionB = document.getElementById('b');
const p = sectionB.getElementsByTagName('p')[0];
