let simdi = new Date();

sonuc = simdi;

// Get Methods
sonuc = simdi.getDate();
sonuc = simdi.getDay();  // 0: pazar 1: pazartesi ... 6: cumartesi
sonuc = simdi.getFullYear();
sonuc = simdi.getHours();
sonuc = simdi.getTime();

// Set Methods
// simdi.setFullYear(2025);
simdi.setMonth(7); // 0: Ocak 1: Şubat 2: Mart ... 11: Aralık
simdi.setDate(15);

sonuc = simdi;

let dogumTarihi = new Date(1998, 4, 25);
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000; 
let dakika = saniye / 60; 
let saat = dakika / 60; 
let gun = saat / 24;

// sonuc = saniye;
// sonuc = dakika;
// sonuc = saat;
sonuc = gun;


console.log(sonuc)
console.log(typeof sonuc)
