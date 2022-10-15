// function selamlama(msg) {
//     console.log(msg);
// }
// selamlama("Selam");
// selamlama("Merhaba");
// selamlama("İyi günler");

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

console.log(yasHesapla(1998));
let yasAhmet = yasHesapla(1968);
let yasAyse = yasHesapla(1968);
console.log(yasAhmet);

function emekliligeKacYilKaldi (dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let kalanYil = 65 - yas;
    if(kalanYil > 0){
        console.log(`${isim} emekli olmanıza ${kalanYil} yılınız kaldı.`)
    }else{
        console.log("Zaten Emeklisiniz.")
    }
}

emekliligeKacYilKaldi(1998, "Ali");
emekliligeKacYilKaldi(1988, "Aylin");

