/* 
    1- İki öğrencinin aşağıda ki bilgilerini değişkenler içersinde saklayınız.

        Öğrenci 1:
            ad            = Ada
            soyad         = Bilgi
            doğum tarihi  = 2012
            mat notları   =70, 70, 80

        Öğrenci 2:
            ad            = Yiğit
            soyad         = Bilgi
            doğum tarihi  = 2010
            mat notları   =40, 40, 50
            
    

    2- Öğrencilerin yaş bilgilerini değişkende tutunuz.
    3- Öğrenilerin matematik ortalamalarını değişken de saklayınız.
    4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişken de saklayınız.
*/

// 1. SORU

let ogr1Ad = "Ada";
let ogr1Soyad = "Bilgi";
let ogr1dogumTarihi = 2012
let ogr1MatNotları = [70, 70, 80]; 
console.log(`Benim adım ${ogr1Ad}, soyadım ${ogr1Soyad}, ${ogr1dogumTarihi} yılında doğdum. Ve matematik notlarım ${ogr1MatNotları}.`)

let ogr2Ad = "Yiğit";
let ogr2Soyad = "Bilgi";
let ogr2dogumTarihi = 2010
let ogr2MatNotları = [40, 40, 50]; 
console.log(`Benim adım ${ogr2Ad}, soyadım ${ogr2Soyad}, ${ogr2dogumTarihi} yılında doğdum. Ve matematik notlarım ${ogr2MatNotları}.`)

// 2. SORU

let güncelYil = new Date().getFullYear();

let ogr1Yas = güncelYil - parseInt(ogr1dogumTarihi);
console.log(ogr1Yas);

let ogr2Yas = güncelYil - parseInt(ogr2dogumTarihi);
console.log(ogr2Yas);


// 3. SORU 
let ogr1Ortalama = (ogr1MatNotları[0] + ogr1MatNotları[1] + ogr1MatNotları[2]) / 3;
console.log(ogr1Ortalama);

let ogr2Ortalama = (ogr2MatNotları[0] + ogr2MatNotları[1] + ogr2MatNotları[2] ) / 3;
console.log(parseFloat(ogr2Ortalama));

