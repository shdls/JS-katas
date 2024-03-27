// Write a JavaScript program to display the current day and time in the following format.  
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

//##Solution-

const weekday=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


const d =new Date();

const currentday = weekday[d.getDay()];

console.log("today is " +  currentday); 




const currentTime = new Date().toLocaleTimeString();
console.log(`Current Time: ${currentTime}`);




//2. Write a JavaScript program to print the current window contents.  





 
