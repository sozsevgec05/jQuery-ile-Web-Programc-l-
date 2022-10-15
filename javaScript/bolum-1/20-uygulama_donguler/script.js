let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- Sayılar listesinde ki her bir elemanın karesini alınız.
// for(let sayi of sayilar){
//     console.log(sayi * sayi);
// }
// 2- Sayılar listesinde ki hangi sayılar 5' in katıdır?
// for (let i = 0; i < sayilar.length; i++){
//     if(sayilar[i] % 5 == 0){
//         console.log(sayilar[i])
//     }
// }
// 3- Sayılar listesinde ki çift sayıların toplamını bulunuz.
// let toplam = 0;
// for (let i in sayilar){
//     if(sayilar[i] % 2 == 0){
//         toplam += sayilar[i]
    
//     }
// }
// console.log(toplam)

let urunler = ["iphone 13", "samsung s22", "iphone 13 pro max", "samsung s23"];

// 4- Ürünler listesinde ki tüm ürünleri büyük harf ile yazdırınız.
// for (let urun of urunler){
//     console.log(urun.toUpperCase());
// }

// 5- Ürünler listesi içinde samsung geçen kaç ürün vardır?
// let adet = 0;
// for (let urun of urunler){
//     if(urun.includes("samsung")) {
//         adet++
//     }
// }
// console.log(adet)
let ogrenciler =[
    {"ad" : "Yiğit", "soyad" : "Bilgiç", "notlar" : [40, 40, 60]},
    {"ad" : "Ahmet", "soyad" : "Aksoy", "notlar" : [80, 70, 80]},
    {"ad" : "Ayşe", "soyad" : "Öz", "notlar" : [70, 70, 60]},
];

// 6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
for(let ogrenci of ogrenciler){
    let notToplam = 0; 
    let ortalama = 0;
    let adet = 0;
    for (let not of ogrenci.notlar){
        notToplam += not;
        adet++
    }
    ortalama = notToplam / adet;

    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması: ${ortalama}.`);
    if (ortalama >= 50) {
        console.log("Başarılı");
    }else{
        console.log("Başarısız");
    }
}
