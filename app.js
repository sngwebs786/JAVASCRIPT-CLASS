//Synchronus Javascript
//---------------------


// ONE INPUT WAY
// 1. prompt

//THREE OUTPUT WAYS
// 1. alert
// 2. console
// 3. document.write


////////////////////////////////////////////////// CLASS 1 JS /////////////////////////////////////////////////////

//Variables

// var x = 5; 
// var str = "Hello World";


// Output

// alert("Hello")

// document.write("hello")

// console.log("hello")

//Input

// var userInput = prompt("Enter your name","My name is ...")
// alert("Hello " + userInput);
// console.log(userInput)


// var userInput = +prompt("Enter any number..");
// console.log(userInput);
// var sum = 2 + userInput;
// console.log(sum);


// Inc and Dec Op

// pre inc
// var a = 5;
// alert(++a);


// post inc
// var a = 5;
// alert(a++);
// alert(a);


////////////////////////////////////////////////// CLASS 2 JS /////////////////////////////////////////////////////


// IF ELSE 

// var x="2";
// if (x===2) {
//     alert("X is 2")
// }
// else if(x==="2"){
//     alert("X is 2 but string")
// }
// else{
//     alert("x is not 2")
// }

// if(x !== 2){
//     alert("X is not 2")
// }


// || OR
// && AND
// ! NOT

// var y = 5;

// OR

// if(y===5 || y===4){
//     console.log("Yes")
// }
// else{
//     console.log("no")
// }

// AND

// var x =2
// if (y === 5 && x === 3) {
//   console.log("Yes");
// } else {
//   console.log("no");
// }

// NESTED IF 
// var a = "HELLO";
// var x=2
// if(a==="HELLO"){
//     if(x=2){
//         console.log("A is HELLO and x is 2");
//     }
//     else{
//         console.log("A is HELLO and x is not 2 ")
//     }
// }

// = (Assigment Operator)



// ARRAYS

// var myArray = ["Cat","Dog",12,true]
// console.log(myArray[0])


// push (add element in the end)
// pop (remove one element from the end)

// shift (remove one element from the start)
// unshift(add one element in the start)

// splice (add and remove from anywhere)
// slice (copy element from one array to another)


// PUSH AND POP 

// var animals = ["Cats", "Dogs" , "Ants" , "Rabbit" , "Tiger"]
// console.log(animals);

// animals.push("Rat");
// console.log(animals);

// animals.pop();
// console.log(animals);

// SHIFT AND UNSHIFT

// var animals = ["Cats", "Dogs", "Ants", "Rabbit", "Tiger"];
// console.log(animals);

// animals.shift();
// console.log(animals)

// animals.unshift("Fly")
// console.log(animals);


// SPLICE AND SLICE 

// var animals = ["Cats", "Dogs", "Ants", "Rabbit", "Tiger"];
// console.log(animals);

// // animals.splice(2,2,"Turtle","Bat")
// // console.log(animals);

// var newAnimals = animals.slice(1)
// console.log(newAnimals);



// LOOPS , FLAGS AND BOOLEAN

// var found = false;
// var cities = ["Karachi","Lahore","Islamabad"]
// var myCity = "Karachi"
// for(var i=0;i<=2;i++){
//     if(myCity===cities[i]){
//         found = true; 
//     }
// }

// hfghgf
// ufgjgh
// hfghgf



// if(found===false){
//     alert("City not matched")
// }
// else{
//     alert("Matched !")
// }

// LENGTH 

// var cities = ["Karachi","Lahore","Islamabad"]
// console.log(cities.length)


////////////////////////////////////////////////// CLASS 3 JS /////////////////////////////////////////////////////


var text = "My name is xyz and what is your name ?"

// console.log(text.toUpperCase())

// console.log(text.indexOf("name"))

// console.log(text.charAt(3))

// text = text.replace(/name/g,"age")
// console.log(text)

var num = Math.random();
var diceNum=(num*6)+1
console.log(diceNum.toFixed(0))
// console.log(Math.floor(diceNum))

// var num = Number(prompt("Enter any number"));
// num = num.toString();
// console.log(2+num)
