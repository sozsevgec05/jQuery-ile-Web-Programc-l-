let url =  "https://www.javascript.com/";
let courseName = "Complete web development course"

let result;

// 1- How many characters does the url information defined above have?

result = url.length;

// 2- How many words does the coursename consist of?
result = courseName.split(" ").length;

// 3- Does the <url> information start with https?
result = url.startsWith("https")

// 4- Is there the word <education> in courseName ?
if (courseName.indexOf("Education") > -1){
    console.log("Yes!!!")
}else{
    console.log("No!!!")
}

// 5- Create the following string information using the url and courseName variables.
//      https://www.javascript.com/complete-web-development-course

courseName = courseName.toLocaleLowerCase();
courseName = courseName.replaceAll(" ", "-");


result = `${url}${courseName}`;

console.log(result);
