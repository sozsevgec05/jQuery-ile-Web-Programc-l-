let kullaniciA = {
    "ad" : "Ahmet",
    "soyad" : "Bilgiç",
    "yas" : 24,
    "adres" : {
        "sehir" : "Kocaeli",
        "ilce" : "izmit"
    },
    "hobiler" : ["sinema", "spor"]
}

let kullaniciB = {
    "ad" : "Ayşe",
    "soyad" : "Çınar",
    "yas" : 19,
    "adres" : {
        "sehir" : "Aksaray",
        "ilce" : "Merkez"
    },
    "hobiler" : ["sinema", "spor"]
}


let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA.yas;
sonuc = kullaniciA["yas"]
sonuc = kullaniciA.adres;
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];


let kullanicilar = [
    kullaniciA,
    kullaniciB
];

sonuc = kullanicilar[1].ad;
sonuc = kullanicilar[1].soyad;
sonuc = kullanicilar[1].yas;
sonuc = kullanicilar[1].adres;

let urunler = [
    {
        "urunAdi" : "İphone 13",
        "urunFiyat" : "25000"
    },
    {
        "urunAdi" : "İphone 14",
        "urunFiyat" : "40000"
    },
]

sonuc = urunler[0].urunAdi;


console.log(sonuc)