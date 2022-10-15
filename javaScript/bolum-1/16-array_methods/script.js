let ogrenciler = ["Ali", "Ayşe", "Mehmet"];

sonuc= ogrenciler.length;

//Array to String
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" ");
sonuc = ogrenciler.join("-");


// Eleman silme 
// sonuc = ogrenciler.pop(); // Son eleman silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift();// İlk eleman silinir ve silinen eleman geri döndürülür.

// Eleman ekleme

sonuc = ogrenciler.push("Sema"); // Dizinin sonuna eleman ekler.
sonuc = ogrenciler.unshift("Yunus");// Dizinin başına eleman ekler.

let markalar1 = ["Opel", "Renault"];
let markalar2 = ["Mercedes"];
let markalar3 = ["Mazda", "Audi"];

// sonuc = markalar1.concat(markalar2);
// sonuc = markalar1.concat(markalar2, markalar3);

sonuc = markalar1.splice(0, 1, "Bmw", "Hyundai"); // 0. indexten başla 1 eleman sil sonrasında ise Bmw ve Hyundai elemanlarını ekle.


console.log(sonuc);
console.log(markalar1);

// console.log(ogrenciler);
