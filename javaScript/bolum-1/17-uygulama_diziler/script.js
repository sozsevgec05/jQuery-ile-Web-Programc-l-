// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturnuz.

let meyveler = ["Elma", "Armut", "Muz", "Çilek"];

// 2- Dizi kaç elemanlıdır.
console.log(meyveler.length); 

// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length -1]);

// 4- Elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

// 5- Kiraz elemanını dizini sonuna ekleyiniz.
meyveler[meyveler.length] = "Kiraz";
console.log(meyveler.push("Kiraz"));
console.log(meyveler);

// 6- Dizinin son 2 elemanını siliniz.
console.log(meyveler.pop());
console.log(meyveler.pop());
meyveler.splice(meyveler.length -2, 2);

// 7- Aşağıda ki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını hesaplayınız.

    /*
            Öğrenci 1 : Ali Alioğlu 2010 (70,60,80)
            Öğrenci 2 : Zeynep Çoban 2012 (80,80,90)
            Öğrenci 3 : Hakan Turan 2009 (60,60,70)

    */

let ogr1= [
    "Ali",
    "Alioğlu", 
    2010, 
    [70, 60, 80]
];

let ogr2= [
    "Zeynep",
    "Çoban", 
    2012, 
    [80, 80, 90]
];

let ogr3= [
    "Hakan",
    "Turan", 
    2009, 
    [60, 60, 70]
];

let ogrenciler = [ogr1, ogr2, ogr3];

let aliYas = new Date().getFullYear() - ogrenciler[0][2];
let zeynepYas = new Date().getFullYear() - ogrenciler[1][2];
let hakanYas = new Date().getFullYear() - ogrenciler[2][2];

let aliNotOrtalama = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let zeynepNotOrtalama = (ogrenciler[1][3][0]+ ogrenciler[1][3][1]+ ogrenciler[1][3][2]) / 3;
let hakanNotOrtalama = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;


console.log(aliYas, zeynepYas, hakanYas);
console.log(aliNotOrtalama.toFixed(1), zeynepNotOrtalama.toFixed(1), hakanNotOrtalama.toFixed(1));