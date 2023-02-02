/*console.log("Hello from Js file");
console.log("khalid");

 variable 

addition 
var a = 10; 
 var b = 10;
 console.log(a+b);
 subtaction
 var c = 5;
 var d = 10;
 console.log(c-d);

multiplication
 var e = 5;
 var f = 10;
 console.log(e*f); 

 division
 var g = 50;
 var h = 5;
 console.log(g/h);

func_addition
 const num= function add(a,b){
    return a+b;
 }
 console.log(num(4,6)); 


const num1 = (a,b) =>{
    return a+b;
}
console.log(num1(50,200));


 func_sub
 const myNum = function sub(c,d){
    return c-d;
 }
 console.log(myNum(50,20));

  using arrow function

 const myNum1 = (c,d) =>{
    return c-d;
 }
 console.log(myNum1(500,200));

 mult
 const sum = function mul(e,f){
return e*f;
 }
 console.log(sum(20,20));

 const mul = (e,f) =>{
    return e*f;
 }
 console.log(mul(500,100));
 division
 const div = (g,h) =>{
    return g/h;
 }
 console.log(div(100,5));

 const myArray =["webskitters",9,"khalid"];
 console.log(myArray);

myArray.push("sector");
 console.log(myArray);

myArray.push("Amazon");
 console.log(myArray);

myArray.push(20);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(10);
console.log(myArray);

myArray.shift();
console.log(myArray);

const myArray_1 = ["Google","Amazon","Microsoft","TCS",10];
console.log(myArray_1);

myArray_1.push("Wipro");
console.log(myArray_1);

myArray_1.shift(150);
console.log(myArray_1);


const newArray = [100,500,400,300,"usa"];
console.log(newArray);

let employee = {
   name: "khalid",
   age: 23,
   place: "kolkata",
}
   console.log(employee); 

   const myArray2 = ["kolkata","delhi","mumbai","punjab"];
   console.log(myArray2);

   myArray2.push("bangalore");
   console.log(myArray2);

   myArray2.pop();
   console.log(myArray2);

   myArray2.shift();
   console.log(myArray2);

   myArray2.unshift("chennai");
   console.log(myArray2);

   console.log(myArray2.length);

   console.log('javasrcipt arrow function');

  const func = ()=>({name: "khalid"});   

 console.log(func());

  const greet = (name,ending)=> "Good Morning" + name + ending;

 console.log(greet('khalid','hello'));

Object javasrcipt
 const myObj = {
   name :"khalid",
   add : "kolkata"
 };
  console.log(myObj.name);

  const newObj = {
   name : "virat",
   age : 20,
   add : "delhi",
   country : "india",
   proffession :"cricketer",
  }

  console.log(newObj.country);
  console.log(newObj.proffession);
  newObj.name = "virat kohli";
  console.log(newObj['name']);
  newObj.age = 33;
  console.log(newObj.age);

let { name,age,country}=newObj;
console.log(`${name},${country}`);


  const sumObj = {
   propName : "khalid"
  };
  function greet(a) {
   const s = "prop";
   return s + a
  }
  const k = greet("Name");
console.log(sumObj[k]);

//array destructure
function sum(){
   return [1,2,3];
}
// let [x,y,z] = sum();
// console.log(x,y,z);
// console.log(y);
// console.log(z);
swipe
let a = 10,
b = 20;
[a,b] = [b,a]
console.log(a);
console.log(b);
destructure
function great(a,b){
   return [a+b,(a+b)/2,a-b];

}
let [add,avg,sub] = great(20,10)
console.log(add);
console.log(sub);
console.log(avg);

[] for array distructure nested array distructure
function hello(){
   return ["khalid","shakil",["red","orange","green"]];
}
let [fName,lName,[color1,color2,color3]] = hello();
console.log(color1,color2,color3);

function sum(){
   return [1,2,3,4,5,6];
}
let [x,y,z,...arg] = sum();
console.log(x);
console.log(arg);

var firstName = "Hello";
console.log(firstName);

firstName = "Hey";
console.log(firstName);

let firstName = "Kohli";
 firstName = "virat";
console.log(firstName);

let firstName = "jncjnsnscnwjkbccbdckjchciwhccji";
console.log(firstName.length);
console.log(firstName[firstName.length-4]);

//trim()
//toUpperCase()
//toLoweCase()
//Slice

let myName = "        Rahul        ";
console.log(myName.length);
 newString = myName.trim();
console.log(newString);
console.log(newString.length);

let yourName = "bengaluru";
console.log(yourName);
console.log(yourName.toUpperCase());

let firstName = "khalid"
let newString = firstName.slice(1,3);
console.log(newString);

let age = 22;
let firstName = "khalid";
console.log(typeof age);
console.log(typeof firstName);

//string concatenation
let fullName1 = "khalid";
let fullName2 = "shakil";
let fullName = fullName1 + " " + fullName2;
console.log(fullName);

//template string
let age = 23;
let firstName = " khalid ";
//" my name is khalid and my age is 23 "
//let aboutMe = "my name is" + firstName + "and my age is " + age ;
let aboutMe = `my name is ${firstName} and my age is ${age}`
console.log(aboutMe);

//booleans & comparision operator
//booleans 
//true , false

let num1 = "1";
let num2 = 10;

console.log( num1 === num2); 

//ternary operrator / conditional operator

let age  = 12;
let drink;

if(age>=5){
   drink = "juice"
}
else{
   drink = "alcohol";
}
console.log(drink);

let age1 = 10;
let drink1 = age>=5 ? "coffee" : "milk";

console.log(drink1); 

//nested if else

let winningNumber = 18;
let userGuess = parseInt(prompt("Guess a number"));
if(userGuess === winningNumber)
   console.log("you are right");
else{
   console.log("you are wrong");


let tempInDegree = 16;
let useInput = parseInt(prompt("Enter a temperature"));

if(tempInDegree <= 0){
console.log("exremely cold outside");
}else if (tempInDegree <=12){
   console.log("its cold outside");
}else if (tempInDegree >=20){
   console.log("pleasent weather");
}else if(tempInDegree > 22){
   console.log("lets go for a walk");
}else if(tempInDegree <=42){
   console.log("turn on air conditioner");
}else{
   console.log("too hot!!");*/

//ternary operator / conditional operator

// let age = 2;
// let userInput = parseInt(prompt("enter age"));
// let drink = age >= 6 ? "juice" : "coffee";
// console.log(drink);

//if else statement
// let day = 0;
// if(day === 0){
//    console.log("Sunday");
// }else if(day === 1){
//    console.log("Monaday");
// }else if(day === 2){
//    console.log("Tuesday");
// }else if(day === 3){
//    console.log("Wednesday");
// }else if(day === 4){
//    console.log("Thurday");
// }else if(day === 5){
//    console.log("Friday");
// }else if(day === 6){
//    console.log("Saturday");
// }else {
//    console.log("Incvalid Day");
// }

//Switch statement



   //Array in js
   // let subject = ['C','C++','HTML','CSS','JAVASCRIPT'];
   // subject.push('Data Structure');
   // subject.pop();
   // subject.unshift('java');
   // subject.shift();
   // console.log(subject);

   //Object in js
//    const details = {
//       fname : "virat",
//       lname : 'kohli',
//       country : 'india',
//       age : 30,
//       proffession : 'cricketer',
//       gameSchedule : ["Australia","South Africa","New Zealand"],
// }
// console.log(details.lname.length);
// console.log(details);

//Map function
// const  array = [1,2,3]
// const newArray = array.map((x) => {
//    return x*2});
// console.log(newArray);

// let person=[
//    {
//       fname:"virat",
//       lname:"kohli",
//       age:30,

//    },
   
//    {
//       fname:"sachin",
//       lname:"tendulkar",
//       age:45
//    },
   
//    {
//       fname:"ms",
//       lname:"dhoni",
//       age:38
//    },
// ];

// const hello = person.filter((data) => {
//    return data.age>40}).map((data) =>{
//       return `${data.fname} ${data.lname}`
//    });
// console.log(hello);
// let sum = person.map((data) =>{
// return `${data.fname} ${data.lname} ${data.age}`
// });
// console.log(sum);

// const myArray = [5,10,15]
// const yourArray = myArray.map((x) =>{
//    return x*5});
//    console.log(yourArray);

//    const person =["arun","khalid","sohail"];
//    const mePerson = person.filter((word) => word.length>5);
//    console.log(mePerson);

// let person1 = [
//  {
//    fname: "salman",
//    lname: "kham",
//    proffession: "actor",
//    age:55
// },
// {
//    fname: "akshay",
//    lname: "kumar",
//    proffession: "actor",
//    age: 53
// },
// {
//    fname: "john",
//    lname: "abraham",
//    proffession: "actor",
//    age: 42  
// },
// ];

// let human = person1.map((info) =>{
// return info.fname});
// console.log(human);

//forEach()
//filter()
//MAP()
//Reduce()

//forEach function

// const employees =[
   
//       {name: "Rahul", company: "google", work: "SDE", Place: "usa"},
//       {name: "Rohan", company: "Amazon", work: "DA", Place: "Bangalore"},
//       {name: "Khalid", company: "MindTree", work: "SD", Place: "Canada"},
//       {name: "Virat", company: "Wipro", work: "Devops", Place: "Germany"},
//       {name: "Salman", company: "Microsoft", work: "QA", Place: "Hyderabad"},

// ];
// employees.forEach((employees) =>{
// console.log(employees.length)});


// let array = [1,2,3,4,5];
// let array1 = [];
// for(let i = 0; i < array.length; i++){
// array1[i] = array[i]*2;
// }
// console.log(array1);


// let myArray = [2,4,6,8,10];
// let newArray = [];
// for(let i=0; i<myArray.length; i++){
//    newArray[i] = myArray[i]*2;
// }
// console.log(newArray);

// //Map  Synonymus function

// const hey = [1,2,3,4,5,6];
// const hello = hey.map(function(val){
//    return val*2;
// })
// console.log(hello);

//Map Arrow Function

// const Array = [5,10,15,20];
// const newArray  = Array.map((value)=>{
//    return value*2;
// });
// console.log(newArray);

// const k = [3,5,6,7];
// const s = k.map((x) =>{
//    return x+3;
// })
// console.log(s);

//Arrow + Filter() togather

// const pName = [
//    {
//       fname: "virat",
//       lname: "kohli",
//       age: 33,
//   },
//   {
//    fname: "MS",
//    lname: "dhoni",
//    age: 38,

//   },
//   {
//    fname: "rohit",
//    lname: "sharma",
//    age: 34,
//   },
//   {
//    fname: "sachin",
//    lname: "tendulkar",
//    age: 43,
//   },
// ]; 
// const playerName = pName.filter((info) =>{
//    return info.age>40}).map((info) =>{
//       return `${info.fname} ${info.lname}`
//    });
// console.log(playerName);



///const hello = person.filter((data) => {
   //    return data.age>40}).map((data) =>{
    //       return `${data.fname} ${data.lname}`

// const India =[
//    {
//     city1: "Kolkata",
//     city2: "Mumbai",
//     city3: "Delhi",
//     city4: "Bangalore",
//    },
//    {
//       city5: "Hyderabad",
//       city6: "Chennai",
//       city7: "Goa",
//       city8: "Himachal",
//    },
// ];
// const place = India.map((x) =>{
//    return `${x.city1} ${x.city3}`
// })
// console.log(place);

//Reduce()
// const numberArray = [1,2,3,4];

// const newArray= numberArray.reduce((acc,curr) =>{
//    console.log("This is accumulator number: " + acc);
//    console.log("This is current number: " +curr);
//    return acc+curr;
// })
// console.log(newArray);

// const myArray = [2,4,-5,8,-4];
// const newArray = myArray.filter((x) =>{
//    return x >0;
// }).reduce((acc,curr) =>{
//    return acc+curr;
// })
// console.log(newArray);

// const Array = [2,2,2,-2,-1,8];
// const ArrNew = Array.filter((val)=>{
//    return val <0;
// }).reduce((acc,curr)=>{
//    return acc+curr;
// })
// console.log(ArrNew);

// const array = [2,5,7,6,8,10];
// const nArray = array.find((find)=>{
//    return find >5;
// })
// console.log(nArray);
//
// const array1 = [1,2,3,4,5];
// const nArray2 = array1.findIndex((find)=>{
//    return find >2;
// })
// console.log(nArray2);

// const numArray = [1,2,3,4,5,6];
// let sum = 0;
// for(let x of numArray){
//    sum +=x;
// }
// console.log(sum);

// const num1 = [1,2,3.4,5,6,7,8];
// const num2 = num1.filter((val) =>{
//    return val <6;
// })
// console.log(num2);

// const sum = [10,20,30,40,50];
// const val = sum.reduce((acc,curr) =>{
//    console.log("This is accumulator: " + acc);
//    console.log("This is current :" + curr);
//    return acc+curr;
// })
// console.log(val);


// let array = [1,2,3,4,-2,6,-8];
// let newArray = array.filter((val) =>{
//    return val >0;
// }).reduce((acc,curr) =>{
//    console.log("This is acumulator: " + acc);
//    console.log("This is current: " + acc);
//    return acc+curr;
// })
// console.log(newArray);


//map()
// const sys = [
//    {
//       sub1: "c lang",
//       sub2: "c++",
//       sub3: "java",
//       sub4: "data structure",
      
//    },
//    {
//       sub5: "html",
//       sub6: "css",
//       sub7: "nosql",
//       sub8: "javaScript",

//    },
// ];
// const newSys = sys.filter((output) =>{
//    return output;
//    //(`${output.sub1},${output.sub2},${output.sub3},${output.sub4}${output.sub5}${output.sub6}`);
// });
// console.log(newSys);

// const myArray = [5,2,-5,10,-7,5];
// const newArray = myArray.filter((value) =>{
//    return value >0;
// }).reduce((acc,cur) =>{
//    return acc+cur;
// })
// console.log(newArray);

//update
// const myArrya = ["khalid","sajid","sohail"];
// myArrya[1]="pintu";
// delete myArrya[0,1];
// console.log(myArrya);

// //loop

// let i=1;
// while(i<10){
//    console.log("Hello World");
//    i++;
// }

// let a =1
// do{
//    console.log("Hello World!")
//    a++;
// }while(a<10)

//While loop first initialize then condition check then print loop
// let k = 1;
// while(k<10){
//    console.log("Hello Everyone !");
//    k++;
// }

 // Do While loop first initialize then print then condition
// let s = 0;
// do{
//    console.log("Kolkata");
//    s++;
// }while(s<10)

 //update string
// const heyArray = ["kolkata","delhi","mumbai","bangalore"];
// heyArray[2] = "chennai"
// console.log(heyArray);

 //delete string
// const helloArray = ["kolkata","delhi","mumbai","bangalore"];
// delete helloArray[2];
// console.log(helloArray);


 //odd and even array store seperately
// const array = [1,3,5,7,8,10,12,14];
// const evenArray = [];
// const oddArray = [];
// for(let data of array){
//    if(data % 2 === 0){
//       evenArray.push(data)
//    }else{
//       oddArray.push(data)
//    }
// }
// console.log(evenArray,oddArray);

// const nArray = [1,2,3,4,5];
// let sum=0;  //empty space to store val data
// for(let val of nArray){
//      sum += val;
// }
// console.log(sum);


// const myArray = [10,20,30,40,50];
// let num = 0;
// for(let data of myArray){
//    num += data;
// }
// console.log(num);


//reduce function
// const kArray = [5,10,15,20,25];
// const mArray = kArray.reduce((acc,cur) =>{
//    return acc+cur;
// })
// console.log(mArray);


 //Array object
// const vArray = [
//    {
//      fname: "virat",
//      lname: "kohli",
//      age: 32 
//    },
//    {
//       fname: "ms",
//       lname: "dhoni",
//       age: 25 
//    },
//    {
//      fname: "rohit",
//      lname: "sharma",
//      age: 15
//    },
// ];
// const zArray = vArray.filter((info) =>{
//    return (info.age <30)
// }).map((info) =>{
//    return (`${info.fname},${info.lname},${info.age}`);
// })
// console.log(zArray);


// const pArray = [2,5,1,-5,-8];
// const cArray = pArray.filter((z) =>{
//    return (z >0);
// }).reduce((acc,cur) =>{
//    return acc+cur;
// })
// console.log(cArray);

//addition using for
// const sys = [20,5,20,5,20,25];
// let value = 0;
//    for(let data of sys){
//       value += data;
//    }
//    console.log(value);

//addition using for
// const array = [100,200,300,400,500,600,700,800,900,1000];
// sum = 0;
// for(let data of array){
//    sum += data;
// }
// console.log(sum);

// const myArray = [10,10,10,10,10];
// let sys = 0;
// for(let data of myArray){
//    sys += data;
// }
// console.log(sys);

 //update string
// const newVar = ["India","Dubai","China","USA","Canada"]; //string decleare
// newVar[2] = "Australia";
// console.log(newVar);

 //delete
// const myVar = ["delhi","kolkata","mumbai","bangalore"];
// delete myVar[3];
// console.log(myVar);

 //push
// const char = ["India","Dubai","China","USA","Canada"];
// console.log(char);
// char.push("Sweden");
// console.log(char); //push to add new element at last

 //pop
// const hey = ["India","Dubai","China","USA","Canada"];
//  console.log(hey);
// hey.pop(); //pop it delete an last element
// console.log(hey);

 //shift
// const hello = ["delhi","kolkata","mumbai","bangalore"];
// console.log(hello);
// hello.shift(); // shift it delete an element from first
// console.log(hello);

 //unshift
// const sam = ["google","amazon","microsoft","apple"];
// console.log(sam);
// sam.unshift("accenture"); //unshift add an element from first
// console.log(sam);

// //slice
// const number = [2,4,6,8,10];
// const newNumber = number.slice(2,4);
// console.log(newNumber);

 //seperating odd and even in seperate array
// const myNumber = [1,2,3,4,5,6,7,8,9];
//  const evenArray = [];
//  const oddArray = [];
//  for(let data of myNumber){
//    if(data % 2 === 0){
//       evenArray.push(data)
//    }else{
//       oddArray.push(data)
//    }
//  }
//  console.log(evenArray,oddArray);
 
//object decleare
// const player = [
//    {
//       fname: "virat",
//       lname: "kohli",
//       age: 29,
//    },
//    {
//       fname: "rohit",
//       lname: "sharma",
//       age: 35,
// },

//    {
//       fname: "sachin",
//       lname: "tendulkar",
//       age: 45,
// },
// {
//    fname: "rahul",
//    lname: "dravid",
//    age: 52, 
// },
// ];
// const pName = player.filter((x) =>{
//    return (x.age >40);
// }).map((x) =>{
//    return (`${x.fname},${x.lname},${x.age}`) 
// })
// console.log(pName);

// //for of data 
// const varray = [1,2,3,4,5,6,7,8,9];
//  const odd_Array = [];
// const even_Array = [];
//   for(let data of varray){
//    if(data % 2 === 0){
//       odd_Array.push(data);
//    }else{ 
//       even_Array.push(data);
//      }
//   }
//    console.log(even_Array,odd_Array);


//    const num = ["delhi","bangalore","kolkata","chennai"];
//    console.log(num);
//    num [4] = "kerala";
//    console.log(num);


   // const stu = [
   //    {
   //       name: "Khalid",
   //       marks: 80
   //    },
   //    {
   //      name: "Srijit",
   //      marks: 94 
   //    },
   //    {
   //       name: "Rahul",
   //       marks: 85

   //    },
   // ]
   // const newStu = stu.filter((val)=>{
   //    return val;
   // }).map((val)=>{
   //    return(`${val.marks}`);
   // })
   // console.log(newStu);
   

   // const nStu = [
   //    {
   //       name: "Khalid",
   //       marks: 80
   //    },
   //    {
   //      name: "Srijit",
   //      marks: 94 
   //    },
   //    {
   //       name: "Rahul",
   //       marks: 85

   //    },
   // ]
   // const Stu = nStu.map((x) =>{
   //    return x.marks;

   // }).reduce((acc,cur) =>{
   //    return acc+cur;

   // })
   // console.log(Stu);

   // const nStu = [
   //    {
   //       name: "Khalid",
   //       marks: 80
   //    },
   //    {
   //      name: "Srijit",
   //      marks: 94 
   //    },
   //    {
   //       name: "Rahul",
   //       marks: 85

   //    },
   // ]
   // const Stu = nStu.filter((x) =>{
   //    return x.marks >90;
   // })
   // console.log(Stu);

   // const nStu = [
   //    {
   //       name: "Khalid",
   //       marks: 80
   //    },
   //    {
   //      name: "Srijit",
   //      marks: 94 
   //    },
   //    {
   //       name: "Rahul",
   //       marks: 85

   //    },
   // ]
   // const Stu = nStu.filter((x) =>{
   //    return x.marks >90;
   // }).map((x) =>{
   //    return (`${x.name}`);
   // })
   // console.log(Stu);


       //Show name age less than 30
//    let employee = [
//       {
//         firstName: "Abhishek",
//         lastName: "Das",
//         address: "Asansol",
//         designation: "Application Developer [Node]",
//         age: 64,
//       },
//       {
//         firstName: "Anirban",
//         lastName: "Chatterjee",
//         address: "Durgapur",
//         designation: "Application Developer [React]",
//         age: 34,
//       },
//       {
//         firstName: "Reeva",
//         lastName: "Roy",
//         address: "Durgapur",
//         designation: "Application Developer [React]",
//         age: 24,
//       }
//       {
//         firstName: "Bidisha",
//         lastName: "Bhattacherjee",
//         address: "Asansol",
//         designation: "Application Developer [Angular]",
//         age: 27,
//       },
//       {
//         firstName: "Animesh",
//         lastName: "Das Gupta",
//         address: "Burdwan",
//         designation: "Application Developer [Node]",
//         age: 27,
//       },
//     ];
//     const newEmployee = employee.filter((x)=>{
//       return x.age<30;
//     }).map((x)=>{
//       return(`${x.firstName}`)
//     })
//     console.log(newEmployee);
    
   

    
// //Show name and total marks, who score more than 200
//     let myStudents = [
//       {
//         id: 101,
//         name: "Rishav Chatterjee",
//         math: 96,
//         computerSc: 98,
//         bengali: 95,
//       },
//       {
//         id: 102,
//         name: "Abhishikta Mukherjee",
//         math: 92,
//         computerSc: 91,
//         bengali: 67,
//       },
//       {
//         id: 103,
//         name: "Aishani Sarkar",
//         math: 99,
//         computerSc: 50,
//         bengali: 10,
//       },
//     ];
//     const newStudents =  myStudents.filter((data) =>{
//       total = data.math + data.computerSc + data.bengali;
//       return total>200;
//     }).reduce((acc,curr) =>{
//       acc[curr.name] = curr.math + curr.computerSc + curr.bengali;
//       return acc;
//     },{})
//     console.log(newStudents);



//     let Students = [
//       {
//         id: 101,
//         name: "Rishav Chatterjee",
//         math: 96,
//         computerSc: 98,
//         bengali: 95,
//       },
//       {
//         id: 102,
//         name: "Abhishikta Mukherjee",
//         math: 92,
//         computerSc: 91,
//         bengali: 67,
//       },
//       {
//         id: 103,
//         name: "Aishani Sarkar",
//         math: 99,
//         computerSc: 50,
//         bengali: 10,
//       },
//     ];
//     const nStudents =  Students.filter((data) =>{
//       total = data.math + data.computerSc + data.bengali;
//       return total>200;
//     }).reduce((acc,curr) =>{
//       acc[curr.name] = curr.math + curr.computerSc + curr.bengali;
//       return acc;
//     },{})
//     console.log(newStudents);


//     //stirng concinatation it add two string
   //  const name = "virat";
   //  const name2 = "kohli";
   //  let val ;
   //  sum = name +' '+name2;
   //  console.log(sum);


// OOP STARTED

// class myClass2 {
//    hello() //method
// {
// console.log("hii");
// }
// hello1(){
//    console.log("msg");

// }
// }


// let myObj = new myClass2(); //object create
// myObj.hello();
// myObj.hello1();


// class myClass{
//    constructor(myName,age,place){
//     this.name=myName;
//     this.myAge=age
//     this.myPlace=place
//       console.log("Hello World !");
//    }
//    method(){
//       console.log(`My name is ${this.name} and my age is ${this.myAge}, place is ${this.myPlace}`);
         
//    }
// }

// let myObj = new myClass("Khalid", 20, "kolkata") 
// myObj.method()


// let myUser = {
//    userName: "khalid@78",
//    password: "khalid.123.Asnf#@!",
//    login: function (uName,uPassword) {
//       if (uName === this.userName && uPassword === this.password){
//          console.log("Login successfully :");
// }else{
//    console.log("Wrong password :");

// }
//    },
// };
// myUser.login("khalid@78", "khalid.123.Asnf#@!");
// myUser.login("khalid 123", "KHALID.123.Asnf#@! ");



//CLASS AND METHOD CALL
// class hey{ //class name
//    hello(){  // method
//       console.log("Hello World !");
//    }
// }
// const a = new hey(); //new variable decleare
// a.hello();  //method call


// class myClass{
//    vehicle(){
//       console.log("Toyota Fortuner 2700");
//    }
//    vehicle2(){
//       console.log("Mahindra Thar");
//    }
// }
// let c = new myClass();
// c.vehicle();
// c.vehicle2();

// class myClass1{
//    college(){
//       console.log("Brainware University");
//    }
// }
// const x = new myClass1();
//       x.college();


//CONSTRUCTOR NO NEED TO CALL METHOD
// class student{
//    constructor(){
//       let apologise;
//      console.log("contructor function"); 
//      console.log("Hello Contructor");
//    }
//    hello(){
//       console.log("Sorry " + this.apologise);
//    }
// }
// let k = new student (); //class name

// k.apologise = "Everyone";
// k.hello();


// class myClass4{
//    constructor(name,college,hobby){
//       this.myname = name;
//       this.mycollege = college;
//       this.myhobby = hobby;
//             console.log("HEY");
//    }
 //Method decleare
//    detail(){
//       console.log(`My name is ${this.myname} and my college name is ${this.mycollege} and i like ${this.myhobby}`);
//    }

// }
// let z = new myClass4("khalid","brainware university","travelling" );
// z.detail();


// class department{
//    constructor(Btech,BCA,MCA){
//    this.myBtech = Btech;
//    this.myBCA = BCA;
//    this.myMCA = MCA;
//      console.log("Lets Code");
//    }
//       method(){
//          console.log(`${this.myBtech} ${this.myBCA}`);
//     }
//       }
//    let x = new department("Bachelor of Technology", "Bachelor of Application");
//    x.method();


//Static Method
   // class student{
   //    constructor(name,age) {
   //       this.studentname = name; //constructor 
   //       this.studentAge = age;
   //       console.log("Hello Kolkata !");
   //    }
   //    hello(){ //Method
   //       console.log(`Hello ${this.studentname} your age is ${this.studentAge}`);
   //    }
   //       static mr(){ //Static Method
            //console.log("Hello world !");
   //       }
   // }
   //    let p = new student("Khalid", 22);
   //    let q = new student("srijit", 30);

   //    p.hello();
   //    q.hello();
   //     student.mr();



      //  class fruit{
      //    constructor(name){
      //       this.fruitname = name;
      //       console.log("Apple" + name);
      //    }
      //    hello(){  //Method Name
      //     console.log("Fruit Name" + this.fruitname);
      //    }
      //  }
      //  class vegetable extends fruit {}
      //  let m = new vegetable(" Mango ");
      //  m.hello();
   
   //extend means inheritance fruit properties gone in vegetable


   //    class colors {
   //       myColors = ["Red","Blue","Green"];
   //       colorPrint() {
   //          console.log(myColors);

   //       }
   //    }
   //    class Movies extends colors {
   //       myMovies = ["Hello", "Hey", "Sorry"];
   //       movieprint(){
   //          console.log(myMovies);
   //       }
   //    }
   // class Me extends Movies {
   //    myName = "Khalid";
   //    mrPrint(){
   //       console.log(this.myName, this.myColors, this.myMovies);
   //    }
   // }
   // const myObj = new Me();
   // myObj.mrPrint();


   // class city{
   //    myCities = ("KOLKATA" , "MUMBAI");
   //    method(){
   //       console.log(myCities);
   //    }
   // }
   // class heyCities extends city{
   //    cityPlace =("SALTLAKE","NOIDA");
   //    method1(){
   //       console.log(cityPlace);
   //    }
   // }
   // const hello = new heyCities();



  // let day = 0;
   // if(day === 0){
   //    console.log("Sunday");
   // }else if(day === 1){
   //    console.log("Monaday");
   // }else if(day === 2){
   //    console.log("Tuesday");
   // }else if(day === 3){
   //    console.log("Wednesday");
   // }else if(day === 4){
   //    console.log("Thurday");
   // }else if(day === 5){
   //    console.log("Friday");
   // }else if(day === 6){
   //    console.log("Saturday");
   // }else {
   //    console.log("Incvalid Day");
   // }
   
  

   
                  
// const number = prompt ("Enter a number");
// if(number >80 && number<100){
//    alert("Grade A")
//  }else if(number >= 60 && number<= 80){
//    alert("Grade B")
//    }else if(number >=30 && number <= 60 ){
//       alert("Grade C")
//    }else if(number < 30){
//       alert("Failed")
//    }else
//    alert("Enter a valid marks");

//CONFIRM
//    const khalid = confirm("Do you like our website");
//    if(khalid){
//    alert("Thank you for visit")
//    }else{
//       alert("Sorry")
   
//  }

//Concat +
   // const num = ["Amazon" , "Google"];
   // const num1 = ["Hyderabad" , "California"];
   // const num2 = ["Kolkata" , "Delhi"]
   // const num3 = num.concat(num,num1)
   // console.log(num3);


   //Store number in array using for loop
//    const x = [];
//    for(let i=1;i<=5;i++){
//    x.push(i);
// }
// console.log(x);
   


//
// 

// const sum = [2,4,6,8];
// let val = [];
// for (let data of sum){
//    val.push(data*2)   
// }
// console.log(val);



//
// const number = [2,4,6,8];
// const pNumber = number.map((x)=>{
//    return x*2;
// })
// console.log(pNumber);


// const hey = [1,2,3,4,5,6,7,8,9];
// const even = [];
// const odd = [];
// for(let data of hey){
//    if(data % 2 === 0){
//       even.push(data);
//    }else{
//       odd.push(data);
//    }
// }
// console.log(even,odd); 


//   
//  class A {
//    a = 50;
//    b = 100;
//    sum;
//  } 
//  class B extends A{
//    add(){
//       return this.a + this.b;
//    }
//  }
//  class C extends B {
//    multiplication(){
//       this.sum = this.add();
//       console.log(this.sum);
//       console.log(this.a * this.b);
//    }
//  }
//  const obj = new C();
//  obj.multiplication();


//Find Index
//  const ages = [3, 10, 18, 20];
// const index = ages.indexOf(18)
// console.log(index);


//Ternary operator
// var num6 = '12'
// var b = num6 == 12? 'true':'false'
// console.log(b);

//ELSE IF STATEMENT
// const number = prompt("Enter a number");
// if(number >=80 && number <=100){
//    alert("Grade A")
// }else if(number >=60 && number <=80){
//    alert("Grade B")
// }else if(number >=40 && number <=60){
//    alert("Grade C")
// }else if(number >=36 && number <=39){
//    alert("Grade D")
// }else if(number <=35){
//    alert("You are Failed")
// }else
// alert("Enter a valid marks")
            
               
//CONCAT PROGRAM ADDITION OF ARRAY
// const area = ["Dlehi","Bombay","Gujarat"];
// const area1 = ["Kolkata","Bangalore"];
// const num0 = area.concat(area1);
// console.log(num0);
      

//EVEN ODD SEPERATION 
// const sum = [1,5,8,3,4,6,2];
// const even = [];
// const odd = [];
// for(let val of sum){
//    if(val % 2 === 0){
//       even.push(val)
//    }else{
//       odd.push(val);
//    }
// }
// console.log(even,odd);


//Inheritence Properties
// class one{
//  a = 10000;
//  b = 20000;
//  sum;
// }
// class two extends one{
//    add(){
//       return this.a + this.b;
//    }
// }
// class three extends two{
//    multiplication(){
//    this.sum = this.add();
//    console.log(this.sum);
//    console.log(this.a * this.b);
//    }
// }
// const hello = new three();
// hello.multiplication();


//ODD EVEN SEPARATION
// const sys = [1,2,3,4,5,6,7,8,5,54,64,25,85,21];
// const even =[];
// const odd = [];
// for(let data of sys){
//    if(data % 2 === 0){
//       even.push(data);
//    }else{
//       odd.push(data);
//    }
// }
// console.log(even,odd);


 //Concat
// const lenovo = ["Ideapad s340","LenovoS60"];
// const Asus = ["Asus s11","Asus notebook pro"];
// const Add = lenovo.concat(Asus);
// console.log(Add);


//CLASS IN JS
// class Person{
//    constructor(name,age,job){
//       this.name = name;
//       this.age = age;
//       this.job = job;
   
//    }
//    greet(){
//      console.log(`Good Night ${this.name} sleep fast you have to wake up early in the morning`); 
//    }
//    getName(){
//       return this.name;
//    }
//    getAge(){
//       return this.age;
//    }
//    setJob(job){
//     this.job = job;
//    }
//    function(){
//       console.log(this.name, this.age, this.job);
//    }
//    method(){
//       console.log("kolkata");
//    }
      
   
// }
// const khalid = new Person("Khalid" , 23 , "Developer" , "kolkata");
// console.log(khalid);
// khalid.function();
// khalid.method();
// console.log(khalid.getName());
// console.log(khalid.getAge());
// khalid.setJob("Full Stack Web Developer");
// console.log(khalid);
// khalid.greet();



//ASYNC AND WAIT

// async function data (){
//    console.log('2nd');
//    await console.log('3rd');
//    console.log('4th');
//    console.log('10th');
// }
// console.log('1st');
// data();
// console.log('5th');

//
// function value (){
//    console.log("Hello world !");
// }
// setTimeout(value, 5000);
//    console.log("Engineer");


// function greet(){
//    console.log('Hello world');
// }
// setTimeout(greet,2000);
// console.log('this message is shown first');

// function hello(name,lastname) {
//    console.log("Hello"  + " " +name + " " + lastname);
// }
// setTimeout(hello,5000,"john","doe");

//PROMISE

// let promise = new Promise(function(resolve,reject){
//    setTimeout(function (){
//       resolve("Promise resolved");
//    },4000);
// });
// async function asyncFunc(){
//    let result = await promise;
//    console.log(result);
//    console.log("hello");
// }
// asyncFunc();

//
// let countValue = new Promise(function(resolve,reject){
//    resolve("Promise resolved");
// });
// countValue.then(function succesValue(result){
//    console.log(result);
// })
// .then(function succesValue1(){
//    console.log("You can call multiple function this way:");
// });
// async function asyncFunc(){
//    try{
//       let result = await countValue;
//       console.log(result);
//    }catch (error) {
//       console.log(error);
//    }
// }
// asyncFunc();

//Type Conversion
//let result = "4" - 2

// let res = Number('324')
// console.log(typeof res);

// let res1 = "6"-true; 
// console.log(res1);

//1st
// const count = true;
// let countValue1 = new Promise(function (resolve,reject){
//    if(count){
//       resolve("There is a count value:");
//    }else{
//       reject("There is no count value:");
//    }
// });
// console.log(countValue1);

//2nd
// let countValue = new Promise(function (resolve,reject){
//    reject("Promise rejected");
// });
// countValue.then(function successvalue(result){
//    console.log(result);
// })
// .catch(function errorvalue(result){
// console.log(result);
// });

//3rd
// function greet(name,callback){
//    console.log("Hii" + " " + name);
//    callback();
// }
// function callMe(){
//    console.log("I am callback function");
// }
// greet("Peter", callMe);

//4rth
// function greet(){
//    console.log("Hello world");
// }
// function sayName(name){
//    console.log("Hello" + " " + name);
// }
// setTimeout(greet,2000);
// sayName("John");

//5th
// let promise = new Promise(function(resolve,reject){
//    setTimeout(function(){
//       resolve("promise resolved");
//    },4000);
// });
// async function asyncFunc(){
//    try{
//       let result = await promise;
//       console.log(result);
//    }catch(error){
//       console.log(error);
//    }
// }
// asyncFunc();

 //While loop 
// let count = 0
// while(count <=5){
//    console.log(count);
//    count++
// }

//Do While
// let count2 = 0
// do{
//    console.log(count2)
//    count2++
// }
//while(count2 <=5)


//Switch case:
// const sum = parseInt(prompt("Enter a number 1 to 7"))
// switch (sum){
// case 1:
//    console.log("sunday");
//    break;
//    case 2:
//       console.log("monday");
//       break;
//       case 3:
//    console.log("tuesday");
//    break;
//    case 4:
//    console.log("wednesday");
//    break;
//    case 5:/
//    console.log("thursday");
//    break;
//    case 6:
//    console.log("friday");
//    break;
//    case 7:
//    console.log("saturday");
//    break;
//    default:
//       console.log("Enter a valid number");

//}

//

// import {add} from "./app"
// console.log(add,(4,6));


// const number = [1,2,3,4,5,6,7,8,9,10];
// const even = [];
// const odd  = [];
// for(let data of number){
//    if(data % 2 === 0){
//    even.push(data);
//    }else{
//       odd.push(data);
//    }
// }
// console.log(even,odd);

// //
// const details = [
//    {
//       fname: "virat",
//       lname: "kohli",
//       proffession: "cricketer",
//       age: 35,
//    },
//    {
//       fname: "rohit",
//       lname: "sharma",
//       proffession: "cricketer",
//       age: 42,
//    },
//    {
//       fname: "rohit",
//       lname: "sharma",
//       proffession: "cricketer",
//       age: 42,
//    },
//    {
//       fname: "ms",
//       lname: "dhoni",
//       proffession: "cricketer",
//       age: 46,
//    },
// ]
// const newDetails = details.filter((x)=>{
//    return(x.age>40);
// }).map((x)=>{
//    return (`${x.age}`);
// })
// console.log(newDetails);



//
// function system(virat,kohli){
// console.log("Hii" + " " + virat);
// callback1();
// }
// function callMe2(){
// console.log("I am callback1 function");
// }
// system("virat kohli",callMe2);



   // function num1(callback){
  // console.log(str);
   //    callback(5,15);
   // }
   // function num2(a,b){
   // console.log(a+b);
   // }
   // num1(num2)



   // Prototype Inheritence
   // const obj = {
   //    name: "khalid",
   //    getName: function(){
   //       return this.name;
   //    }, 
   //    getRoll: function(){
   //       return this.roll;
   //    },
   // };
   // console.log(obj);
   // const obj2 = {
   //    roll: 10,
   //    __proto__: obj,

   // };
   // console.log(obj2.getName());

   //For each loop
   // const students = ["John","Sara","Jack"];
   
   // students.forEach((element)=>{
   //    console.log(element);
   // });

   // const arrayItems = ["item1","item2","item3"];
   // const copyItems = [];

   // arrayItems.forEach((item)=>{
   //    copyItems.push(item);
   // });
   // console.log(copyItems);


   //
   // let myArray= [1,2,3,4];
   // let object = new Set(myArray);

   // object.add(5);
   // object.delete(2);

   // let object1 = {
   //    name: "khalid",
   // };

   // object.add(object1);
   // console.log(object);

   // console.log(object.has(5));


   //
//    const array = [1,2,3,4,5];
//    let myArray = array.reduce((acc,curr) =>{
//       return acc+curr;
//    })   
//    console.log(myArray);
   
//   rest parameter
//   function sum(...args){
  // console.log(args);
//    let add=0
//    for(let data of args){
//    add += data;
//    }
//    console.log(add);
//   }
//   sum(1,2,3,4)

//   
// const details = ["khalid" , " 20" , " student"];
// const myDetails = details.reduce((acc,curr)=>{
// return acc+curr;
// })
// console.log(myDetails);

// 
// const num = [1,2,3,4,5,6,7,8,9];
// let evenArray = [];
// let oddArray = [];


//    for(let data of num){
//    if(data % 2 === 0){
//     evenArray.push(data)
//       }else{
//          oddArray.push(data)
//       }
// }
// console.log(evenArray);

// 
// const val = [10,"khalid" , "rahul" ,20];
// const info = val.filter((x)=>{
//    return typeof x === "number";
// }).reduce((acc,curr) =>{
//    return acc+curr;
// })
// console.log(info);

// 
// function sys(...args){
//    return args
//    .filter(function(e){
//       return typeof e === "number";
//    }).reduce(function(acc,curr){
//       return acc+curr;
//    });

// }
// let result = sys(10, "Hii", null, undefined,20 );
// console.log(result);

// export let myName="Khalid"
// export function hello(a,b){
//    return a+b;
// }
  
//Add a number in array
// let arr = [1,2,3,4,5,6,7,8,9]
// let a = prompt("Enter a number");
// a = Number.parseInt(a);
// arr.push(a)
// console.log(arr);

//FOR EACH LOOP
// const number = [1,2,3,4,8,5]
// number.forEach((Element)=>{
//    console.log(Element*Element);
// })


// const no = [5,5,7,5,1,5,4]
// for(let data of no){
//    console.log(data);
// }

//  const player = [
//    {
//       fname: 'virat',
//       lname: 'kohli',
//       age: 33,
//    },
//    {
//       fname: 'rohit',
//       lname: 'sharma',
//       age: 42,
//    },
//    {
//       fname: 'ms',
//       lname: 'dhoni',
//       age: 45
//    }
//  ];
//  let newPlayer = player.filter((x)=>{
//    return x.age>40;
//  }).map((x)=>{
//    return(`${x.age}`)
//  })
//  console.log(newPlayer);

 //
//  const input = [1,2,-5,-7,5,-7,2,7]
//  const newInput = input.filter((x)=>{
//    return x>0;
//  }).reduce((acc,curr)=>{
//    return acc+curr;
//  })
//  console.log(newInput);

 
//Reduce
//  const player = [
//    {
//       fname: 'virat',
//       lname: 'kohli',
//       salary: 60000,
//    },
//    {
//       fname: 'rohit',
//       lname: 'sharma',
//       salary: 80000,
//    },
//    {
//       fname: 'ms',
//       lname: 'dhoni',
//       salary: 120000
//    }
//  ];
//  let newPlayer = player.filter((x)=>{
//    return x.salary;
//  }).map((x)=>{
//    return(`${x.salary}`)
//  })
//  console.log(newPlayer);


 //
//  const employee = [
//    {
//       id: 10,
//       name: "Rahul",
//       years: 7,
//    },
//    {  
//    id: 12,
//    name: "Khalid",
//    years: 22, 
//    },
//    {
//       id: 13,
//       name: "Srijit",
//       years: 25,
//    },
//    {
//       id: 14,
//       name: "Nilima",
//       years: 23,
//    },
//  ]
//  const newEmployee = employee.reduce((acc,curr)=>{
//    return acc+curr.years;
//  },0);
//  console.log(newEmployee);

//
// const number = [1,2,3,4,5,6,7,8,9]
// let obj = new Set(number)
// obj.add(10)
// obj.add(11)
// obj.delete(5)

// console.log(obj.has(10));
// console.log(obj);

//Map
// let myMap = new Map([["a1","khalid"],["a2","rahul"]])
// console.log(myMap);
// myMap.set("a2","rahul")
// for(const [key,value]of myMap)
// console.log(`keys:${key}, values:${value}`);

 //split method
// const name = "Mahendra Singh Dhoni"
// const newName = name.split(' ').map((x)=> x[0]).join(" , ")
// console.log(newName);

// let str='Khalid'`
// console.log(str[0]);
//Count Duplicate
// let array = ["khalid","rahul","khalid","khalid"]
// let count = array.reduce((acc,curr)=>{
//    console.log(acc);
//    if(acc[curr]=acc[curr]){
//       acc[curr] +=1
//    }else{
//       acc[curr]=1
//    }
//    return acc
// },{})
// console.log(count);

//Flat
// let array1 = ["khalid","rahul","khalid","khalid"]
// let count1 = array.flat().reduce((acc,curr)=>{
//    console.log(acc);
//    if(acc[curr]=acc[curr]){
//       acc[curr] +=1
//    }else{
//       acc[curr]=1
//    }
//    return acc
// },{})
// console.log(count);

//Split 
//  const val = "Md Khalid Shakil"
//  const newVal = val.split(" ").map((x)=> x[0])
//  console.log(newVal);

 //SET
//  const nmbr = [1,2,3,4,5,6,7,8,9]
//  let sys = new Set(nmbr);
//  sys.add(15)
//  sys.delete(3)
//  console.log(sys.has(18));
//  console.log(sys);


// const myMap1 = new Map([["a1","bca"],["a2","btech"]])
// console.log(myMap1);
// myMap1.set("a2","btech")
// for(const [hello,value] of myMap1)
// console.log(`hello:${hello}, values:${value}`);




// let myname = "khalid";
// console.log(myname);
//  myname = "shakil";
//  console.log(myname);

// const myName = "Md";
 // console.log(myName);
 // const 


 //

//  function myFun(){
//    console.log("Hello");// .=> 2nd execute
//  }
//  console.log("First"); // .=> 1st execute
//  myFun();
//  console.log("last"); //  .=> last execute

 // A sychronous sequentially execution
//  console.log("Start");
//  const roll = [1,2,3,4,5,6,7,8,9]
//  roll.forEach((x)=>{
//    console.log(x);
//  })
//  console.log("End");

 //Callback
//  console.log("Hello");
//  function getName(name, callback){
//    setTimeout(()=>{
//       console.log("World");
//       return name;
//    },3000)
//  }
// const x = getName("Khalid", (x) => {console.log(x)})

// console.log("End");

//Array destructuring
// let user = ['harry','20','kolkata'];
// let [name, age, city] = user;
// console.log(name);
//  console.log(age);
//  console.log(city);

//Rest operator
// function sum(name,...args){
//    console.log(arguments);
//    console.log(`Hello ${name} :`);
//    let sum = 0;
//    for(let i in args){
//       sum += args[i];
//    }
//    console.log(sum);
// }
//sum("John" , "Jack" , 10,20,30);

//spread operator
   // const num1 = [10,20,30];
   // const num2 = [40,50,60];
   // const numtog = [...num1,...num2]
   // console.log(numtog);

   // //
   // function hello(){
   //    console.log(arguments);
   //    console.log(`Hello ${name,...}`);
   // }



 

