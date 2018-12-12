const waktuTujuan = new Date('Aug 17, 2018 14:41:00').getTime();

const hitungMundur = setInterval(function(){
  const waktuSekarang = new Date().getTime();
  const selisih = waktuTujuan - waktuSekarang;

  const sHari = Math.floor(selisih / (1000*60*60*24));
  const sJam = Math.floor(selisih % (1000*60*60*24) / (1000*60*60));
  const sMenit = Math.floor(selisih % (1000*60*60) / (1000*60));
  const sDetik = Math.floor(selisih % (1000*60) / (1000));

  const news = document.getElementById('news');
  news.innerHTML = 'Sisa Waktu '+sHari+' Hari,'+sJam+' Jam,'+sMenit+' Menit,'+sDetik+' Detik';
  
  if (selisih < 0) {
    clearInterval(hitungMundur);
    news.innerHTML = 'waktu habis';
  }
}, 1000);
