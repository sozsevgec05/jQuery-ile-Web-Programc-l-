// let toplam = 0; 

// for (let i = 0; i <= 10; i++ ){
//     toplam += i;
// };

// console.log(toplam);

let sayilar = [1, 4, 5, 8, 4, 3, 12, 5, 7, 78];
// console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5] + sayilar[6] + sayilar[7]);

let toplam = 0;
// for(let i = 0; i < sayilar.length; i++ ){
//     toplam += sayilar[i];
// }

// for (let i in sayilar ) {
//     toplam += sayilar[i];
// }

for (let sayi of sayilar) {
    toplam += sayi;
}

console.log(toplam);

let user = {
    "name" : "Ahmet Turan",
    "username" : "ahmetturan",
    "password" : "123456",
    "email" : "info@ahmetturan.com"
}

for (let key in user){
    console.log(key);
    console.log(user[key]);
}