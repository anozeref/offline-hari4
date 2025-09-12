
var suara=[];
var iqbal=[];
var dede=[];
var deden=[];
for (var i = 0; i < 16; i++) {
var pilih = prompt("Masukan Pilihan Anda? (Iqbal/Dede/Deden)");
if (pilih === 'Iqbal') {
    iqbal.push(pilih);
    suara.push(pilih);
  } else if (pilih === 'Dede') {
    dede.push(pilih);
    suara.push(pilih);
  } else if (pilih === 'Deden') {
    deden.push(pilih);
    suara.push(pilih);
  } else {
    alert('Calon Tidak terdaftar');
    i--;
  }
}
alert('Semua Orang Telah Memilih');
console.log('Perolehan Suara Iqbal = '+iqbal.length);
console.log('Perolehan Suara Dede = '+dede.length);
console.log('Perolehan Suara Deden = '+deden.length);

