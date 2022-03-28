// //Synchronus Javascript
// //---------------------

// // ONE INPUT WAY
// // 1. prompt

// //THREE OUTPUT WAYS
// // 1. alert
// // 2. console
// // 3. document.write

// ////////////////////////////////////////////////// CLASS 1 JS /////////////////////////////////////////////////////

// //Variables

// // var x = 5;
// // var str = "Hello World";

// // Output

// // alert("Hello")

// // document.write("hello")

// // console.log("hello")

// //Input

// // var userInput = prompt("Enter your name","My name is ...")
// // alert("Hello " + userInput);
// // console.log(userInput)

// // var userInput = +prompt("Enter any number..");
// // console.log(userInput);
// // var sum = 2 + userInput;
// // console.log(sum);

// // Inc and Dec Op

// // pre inc
// // var a = 5;
// // alert(++a);

// // post inc
// // var a = 5;
// // alert(a++);
// // alert(a);

// ////////////////////////////////////////////////// CLASS 2 JS /////////////////////////////////////////////////////

// // IF ELSE

// // var x="2";
// // if (x===2) {
// //     alert("X is 2")
// // }
// // else if(x==="2"){
// //     alert("X is 2 but string")
// // }
// // else{
// //     alert("x is not 2")
// // }

// // if(x !== 2){
// //     alert("X is not 2")
// // }

// // || OR
// // && AND
// // ! NOT

// // var y = 5;

// // OR

// // if(y===5 || y===4){
// //     console.log("Yes")
// // }
// // else{
// //     console.log("no")
// // }

// // AND

// // var x =2
// // if (y === 5 && x === 3) {
// //   console.log("Yes");
// // } else {
// //   console.log("no");
// // }

// // NESTED IF
// // var a = "HELLO";
// // var x=2
// // if(a==="HELLO"){
// //     if(x=2){
// //         console.log("A is HELLO and x is 2");
// //     }
// //     else{
// //         console.log("A is HELLO and x is not 2 ")
// //     }
// // }

// // = (Assigment Operator)

// // ARRAYS

// // var myArray = ["Cat","Dog",12,true]
// // console.log(myArray[0])

// // push (add element in the end)
// // pop (remove one element from the end)

// // shift (remove one element from the start)
// // unshift(add one element in the start)

// // splice (add and remove from anywhere)
// // slice (copy element from one array to another)

// // PUSH AND POP

// // var animals = ["Cats", "Dogs" , "Ants" , "Rabbit" , "Tiger"]
// // console.log(animals);

// // animals.push("Rat");
// // console.log(animals);

// // animals.pop();
// // console.log(animals);

// // SHIFT AND UNSHIFT

// // var animals = ["Cats", "Dogs", "Ants", "Rabbit", "Tiger"];
// // console.log(animals);

// // animals.shift();
// // console.log(animals)

// // animals.unshift("Fly")
// // console.log(animals);

// // SPLICE AND SLICE

// // var animals = ["Cats", "Dogs", "Ants", "Rabbit", "Tiger"];
// // console.log(animals);

// // // animals.splice(2,2,"Turtle","Bat")
// // // console.log(animals);

// // var newAnimals = animals.slice(1)
// // console.log(newAnimals);

// // LOOPS , FLAGS AND BOOLEAN

// // var found = false;
// // var cities = ["Karachi","Lahore","Islamabad"]
// // var myCity = "Karachi"
// // for(var i=0;i<=2;i++){
// //     if(myCity===cities[i]){
// //         found = true;
// //     }
// // }

// // hfghgf
// // ufgjgh
// // hfghgf

// // if(found===false){
// //     alert("City not matched")
// // }
// // else{
// //     alert("Matched !")
// // }

// // LENGTH

// // var cities = ["Karachi","Lahore","Islamabad"]
// // console.log(cities.length)

// ////////////////////////////////////////////////// CLASS 3 JS /////////////////////////////////////////////////////

// // var text = "My name is xyz and what is your name ?"

// // console.log(text.toUpperCase())

// // console.log(text.indexOf("name"))

// // console.log(text.charAt(3))

// // text = text.replace(/name/g,"age")
// // console.log(text)

// // var num = Math.random();
// // var diceNum=(num*6)+1
// // console.log(diceNum.toFixed(0))
// // console.log(Math.floor(diceNum))

// // var num = Number(prompt("Enter any number"));
// // num = num.toString();
// // console.log(2+num)

// ////////////////////////////////////////////////// CLASS 4 JS /////////////////////////////////////////////////////

// // DATE AND TIME

// // var currentDate = new Date()

// // console.log(currentDate)

// // console.log(currentDate.getTime())
// // console.log(currentDate.getDay())

// //  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// //  var a = new Date();
// //  var theMonth = a.setMonth(0)
// //  var nameOfToday = dayNames[theDay];
// // console.log(a)

// // FUNCTIONS

// // function myFunction(){
// //     console.log("Hello world !")
// // }

// // myFunction()

// // PASSING AND RECEIVING

// // function birthdayParty(waiter,waiter2){

// //     console.log("Guest khane ka wait kr rhe hen")
// //     console.log("Chlo bhiee khana khul gaya or khane me hai : ", waiter);
// //     console.log("Or meethe m h : ", waiter2)
// //     return("Ye lo pese 5000")

// // }

// // var khana = "Biryani"
// // var meetha = "Kheer"

// // var peseReceiver=birthdayParty(khana,meetha)

// // console.log(peseReceiver)

// // LOCAL AND GLOBAL

// // global declaration
// // var a = 5;

// // function abc() {
// // local declaration
// // var b = 3;
// //   console.log(b);
// // }

// // console.log(a);

// // abc();

// ////////////////////////////////////////////////// CLASS 5 JS /////////////////////////////////////////////////////

// // alert("Login Successful");

// // function myFunc(){
// //   alert("Chl rha h")
// //   console.log("This is console")
// // }

// var myInp = document.getElementById("my-inp");
// var btn = document.getElementById("my-btn")

// function getInput() {
//   console.log(myInp.value)
// }
// function setValue(){
//   myInp.value="Abc"
// }

// function setText(){
// console.log(btn)
// btn.innerHTML="Click Me"
// }

// // function readMore(){
// //   // console.log("read more")
// //   var para = document.getElementById("my-para")
// //   var text = "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug."
// //   para.innerHTML=text;
// // }

// ////////////////////////////////////////////////// CLASS 6 JS /////////////////////////////////////////////////////

// function changeColor(){
//   var myDiv = document.getElementById("my-div")
//   myDiv.className+=" blue"
//   console.log(myDiv)
// }

// var myImg = document.getElementsByTagName("img");
// console.log(myImg[0]);

// function changeImage() {
//   // myImg[0].src = "car.jfif";
//   // class
//   // myImg[0].className="hide"
//   // direct css
//   // myImg[0].style.display = "none";

//   // background-color
//   // backgroundColor
//   console.log(myImg[0]);
// }


var myDiv = document.getElementById('my-div')
console.log(myDiv.childNodes[1].childNodes[3]);