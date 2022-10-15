/*
    1- Sipariş bilgilerini object içerinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (KDV = %18)
    3- Tüm siparişlerin kdv dahil toplam ücretini hesaplayınız.

    sipariş id = 101 
    siparişi tarihi : 07.09.2022
    ödeme şekli : kredi kartı 
    kargo adresi : Yahya Kaptan mahallesi, Kocaeli İzmit 
    Satın alınan ürünler:
        ürün id : 5 
        ürün başlığı : IPhone 13 pro 
        ürün url : http://abc.com/iphone-13-pro
        ürün fiyatı : 22000

        ürün id : 6
        ürün adı : IPhone 13 pro Max
        ürün url : http://abc.com/iphone-13-pro-max
        ürün fiyatı : 25000

    müşteri: 
        müşteri id: 12

    satıcı: 
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id = 102
    siparişi tarihi : 08.09.2022
    ödeme şekli : kredi kartı 
    kargo adresi : Yahya Kaptan mahallesi, Kocaeli İzmit 
    Satın alınan ürünler:
        ürün id : 6
        ürün adı : IPhone 13 pro Max
        ürün url : http://abc.com/iphone-13-pro-max
        ürün fiyatı : 25000

    müşteri: 
        müşteri id: 12

    satıcı: 
        firma id: 34
        firma adı: Apple Türkiye
*/

let siparis1 = {
    "siparisİd" : 101,
    "siparisTarihi" : "07.09.2022",
    "odemeSekli" : "krediKartı",
    "kargoAdresi" : {
        "mahalle" : "Yahya Kaptan",
        "il" : "Kocaeli",
        "ilçe" : "İzmit"
    },
    "urunler" : [
    {
        "urunİd" : 5,
        "urunAdi" : "IPhone 13 Pro",
        "urunUrl" : "http://abc.com/iphone-13-pro",
        "urunFiyat" : 22000
    },

    {
        "urunİd" : 6,
        "urunAdi" : "IPhone 13 Pro MAx",
        "urunUrl" : "http://abc.com/iphone-13-pro-max",
        "urunFiyat" : 25000
    }
    ]
};

let siparis2 = {
    "siparisİd" : 102,
    "siparisTarihi" : "08.09.2022",
    "odemeSekli" : "krediKartı",
    "kargoAdresi" : {
        "mahalle" : "Yahya Kaptan",
        "il" : "Kocaeli",
        "ilçe" : "İzmit"
    },
    "urunler" : [
    {
        "urunİd" : 6,
        "urunAdi" : "IPhone 13 Pro MAx",
        "urunUrl" : "http://abc.com/iphone-13-pro-max",
        "urunFiyat" : 25000
    }
    ]
};

let siparis1Toplam = (siparis1.urunler[0].urunFiyat + siparis1.urunler[1].urunFiyat) * 1.18;
let siparis2Toplam = (siparis1.urunler[0].urunFiyat) * 1.18;

let toplamSiparis = siparis1Toplam + siparis2Toplam;
console.log("sipariş 1: " + siparis1Toplam);
console.log("sipariş 2: " + siparis2Toplam);

console.log("Toplam ödenen miktar: " , toplamSiparis);

let siparisler = [siparis1, siparis2];
