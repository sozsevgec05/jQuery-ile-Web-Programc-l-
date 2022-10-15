let lastName = "Selahattin"
let surName = "ÖZSEVGEÇ"
let age = 26
let city = "Aksaray"


let message = `My name is ${lastName}, my surname is ${surName}, my age is ${age} and I live in ${city}.I have ${65 - age} years to retirement `;

// ternary operator
let pension = (65 - age > 0) ? "until retirement " + (65 -age) + " years." : "You are already retired.";
let message2 = `My name is ${lastName}, my surname is ${surName}, my age is ${age} and I live in ${city}. ${pension}`;

console.log(message)
console.log(message2)

