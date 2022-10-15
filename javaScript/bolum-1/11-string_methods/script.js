let courseName = "    Complete hands-on web development course.   ";

let result ;

result =  courseName.toLocaleLowerCase();
result = courseName.toLocaleUpperCase();

result = courseName.length;
result = courseName[0];

result = courseName.slice(0, 9);
result = courseName.slice(10);
result = courseName.slice(-10);
result = courseName.slice(-20, -5);
result = courseName.substring(0, 6);
result = courseName.substring(10);

result = courseName.replace("web" , "WEB");

result = courseName.trim();
result = courseName.trimEnd();
result = courseName.trimStart();

result = courseName.indexOf("Complete");
result = courseName.split(" ");
result = courseName.split(" ")[0];
result = courseName.split(" ")[6];








console.log(result);