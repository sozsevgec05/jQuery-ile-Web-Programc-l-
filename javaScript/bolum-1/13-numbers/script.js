let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");
sonuc = parseFloat("10.6");
sonuc = isNaN("10a");
sonuc = isNaN("10");

let sayi = 15.123456;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);
sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.4);
sonuc = Math.floor(2.4);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,4);
sonuc = Math.abs(-10);
sonuc = Math.min(1, 2, 3, 4, 5, 6);
sonuc = Math.max(1, 2, 3, 4, 5, 6);
sonuc = Math.random();
sonuc = Math.random() * 10;
sonuc = Math.floor(Math.random() * 10);
sonuc = Math.floor(Math.random() * 10) + 1;
sonuc = Math.floor(Math.random() * 100) + 50;


console.log(typeof sonuc)
console.log(sonuc)