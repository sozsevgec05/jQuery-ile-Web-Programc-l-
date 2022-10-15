
let number = 21;
// 1- Make an app that checks if a number is between 10 and 50.
if ((number >= 10) && (number <= 50 )){
    console.log("The number is between 10 and 50.")
}else{
    console.log("The number is not between 10 and 50.")
}

// 2- Make an application that checks if a number is a positive odd number.
if ((number > 0) && (number % 2 == 1)){
    console.log("Number is a positive odd number.")

}else{
    console.log("Number is not a positive odd number.")
}

// 3- Make an application that checks the magnitude comparison of x, y, and z numbers.

let x = 15, y = 15 ,z = 15;

if ((x > y) && (x > y)){
    console.log("Biggest number x.")
}
else if ((y > x) && (y > z)){
    console.log("Biggest number y.")
}
else if ((z > x) && (z > y)){
    console.log("Biggest number z.")
}else{
    console.log("Numbers are equal")
}


// 4- For the average calculated over 2 midterm exams (40%) and 1 final grade (60%):
//      
//      c- If 70 is taken from the final exam, the course is considered successful even if the average is below 50.

//      a- Submit an application that reads “Successful” if the average is 50 and above, and "Unsuccessful" if below 50.
let midtermExam1 = 0;
let midtermExam2 = 0;
let final = 70;
let average = ((midtermExam1 + midtermExam2) /2 * 0.4)  + final * 0.6;

// if (average >= 50){
//     console.log(`Your average ${average}, Succesfful.`)
// }else{
//     console.log(`Your average ${average}, Unsuccesful.`)
// }

//      b- To be considered successful, the final grade must be at least 50, even if the average is 50.

if ((average >= 50) && (final >= 50) || (final > 70)){
    console.log(`Your average ${average}, successful.`)

}
else if (average >= 50 && average >= 50){
    console.log(`Your average ${average}, but you fail because your final grade is not 50.` )
}
else if (final >= 70){
    console.log(`You passed the course directly because your final grade was above 70.`)
}
else {
    console.log(`You failed the course because your average was below 50 and your final grade was below 70. `)
}
