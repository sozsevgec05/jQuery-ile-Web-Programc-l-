// 1- Kendisine gönderilen kelimeyi belirtilen kez ekrana yazan fonksiyonu yazınız.
function kelimeYazdir(kelime, adet){
    for (let i=0; i < adet; i++){
        console.log(kelime)
    }
}
// kelimeYazdir("Selam", 8);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function alanVeCevreHesapla(kisa, uzun){
    let alan = kisa * uzun;
    let cevre = kisa + uzun;

    return `Alan: ${alan}, Çevre: ${cevre}`;
}

let sonuc = alanVeCevreHesapla(5,10);
sonuc = alanVeCevreHesapla(3,25);
// console.log(sonuc);

// 3- Yazı tura uygulamaını fonksiyon kullanarak yazınız.
function yaziTura () {
    let random = Math.random(); // 0-1

    if(random < 0.5){
        console.log("Tura");
    }else{
        console.log("Yazı");
    }
    console.log(random);
}
// yaziTura();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
function tamBolen(sayi) {
    let sayilar = [];

    for (let i=2; i < sayi; i++){
        if (sayi % i == 0){
            sayilar.push(i);
        }
    } 

    return sayilar;
}
// console.log(tamBolen(10));
// console.log(tamBolen(16568235));


// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyonu tanımlayınız.

function toplam() {
    let sonuc = 0;

    for(let i = 0; i < arguments.length; i++){
        sonuc += arguments[i];
    }
    return sonuc;
}

console.log(toplam(2,7));
console.log(toplam(2,7,9));
