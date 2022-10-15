// age >= 18
// graduation == "high school or university"

let age = 20;
let graduation = "üniversity"

age = 20;

if (age >= 20 && (graduation == "high school" || graduation == "üniversity")){
    console.log("You meet the eligibility criteria to obtain a driver's license")
}else{
    console.log("You do not meet the eligibility criteria to obtain a driver's license")
}


/*
****** and ****** 

true, true => true
true, false => false
*/

/*
****** or ****** 

true, true => true
true, false => true
false, false => false
*/