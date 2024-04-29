console.log(1111)
function createLocalScope() {
    const localVariable = 'this variable can only be accessed within this function';
    console.log(localVariable);
  
    const localOnlyHere = 'This variable can only be accessed here, nowhere else';
  }
  
  function createAnotherLocalScope() {
    const localVariable =
      "Even though this variable has the same name, it has nothing to do with the other localVariable, because it doesn't exist outside of that function";
    console.log(localVariable);
    //console.log(localOnlyHere);
  }
  
  createLocalScope();
  createAnotherLocalScope();
  const nameee = 'Rana';
const grade = 8;

console.log(
  `Hi ${nameee}, you have ${grade >= 6 ? 'passed' : 'failed'} your test`
);
//arrow function
// ES5 Function
function addNumm(num1, num2) {
    return num1 + num2;
  }
  
  // Arrow Function (stored in variable)
  const addNum = (num1, num2) => {
    return num1 + num2;
  };

  function sum(a, b) {
    return a + b
  }
  const getSum=(a,b)=>{
    return a+b;
  }
  console.log(getSum(2,6));

  //single parameter arrow function
  const isPositive = number => {   //it returns true or false //number is the parameter not the name of the function 
   return number>=0;
  }
  console.log(isPositive(1))// it returns false

  //randoim number by an arrow function
  const getRandomNumber=()=> Math.random()*10; //an arrow function with NO parameter so put one parameter when u call it
  console.log(getRandomNumber());

  //real power of arrow function is its scope
  class Person {
    constructor(name) {
      this.name = name
    }
  
   printNameArrow() {  //it can acces the name 
      setTimeout(() => {
        console.log(`Arrow: ${this.name}`)
      }, 200)
    }
    printNameFunction() {     //it can not access the name
        setTimeout(function () {
          console.log(`Function: ${this.name}`)
        }, 100)
      }
}

const person = new Person("Kyle")
person.printNameArrow()     // Arrow: Kyle
person.printNameFunction()  // Function:


//some exercise of creating arroe function
let getSumNumbers= (a,b)=>a+b;
console.log(getSumNumbers(8,7));

//
let generateRandomNumber=()=>Math.random();

console.log(generateRandomNumber());
//more ex on arrow function
const sayHello=()=>'hellooooo';

console.log(sayHello());
console.log(123456);

const sayHelloName=(name)=>`hello hoi my name is :${name}`;
console.log(sayHelloName("ali"))

const sayHelloNameNoRuturn=name=> `hello hoi my name is :${name}`;
console.log(sayHelloNameNoRuturn("angelica"));

const sayHelloFullName=(firstName,lastName)=>`hello hoi my full name is :${firstName} ${lastName}`;
console.log(sayHelloFullName('Emke','Esmee'));
//callback funcitons are functions which u pass into another function as a parameter
setTimeout(()=>console.log('hi bergen'),1500);

let numbers=[1,2,3,4,5];
let doubled=numbers.map( n=> n*2 );
console.log(`dobled ${doubled}`)
//object creation
let human ={
   name:'Ryan',
   hobbies:['Robots','Tenis','gym'],
   showHobbies:function(){
    this.hobbies.forEach(hobby=>{
console.log(`${this.name}  likes ${hobby}`)
    }  )
   }
}
human.showHobbies();

//
const feedCat=(cat)=>{
    if(cat==='hungary'){
        return 'Feed the cat';
    }else{
        return 'Do not feed the cat'
    }
}
console.log(feedCat("hungary"))  //Feed the cat

// define a function
const myFunction = () => {
    console.log(this);
  };
  console.log(55555)
  // call it
  myFunction();
//
const myObject = {
    myArrowFunction: null,
    myMethod: function () {
      this.myArrowFunction = () => { console.log(this) };
    }
  };
  myObject.myMethod() // this === myObject

myObject.myArrowFunction() // this === myObject

const myArrowFunction = myObject.myArrowFunction;
myArrowFunction() // this === myObject
//
const video={
    title:'aliii',
tags:['a','b','c'],
showTags(){
    this.tags.forEach(function(tag){
        console.log(this.title,tag)
    },this)
}
}

video.showTags();
// Spread Operator
const integers=[10,20,30];
const findSumOfInt=(a,b,c)=>{
    console.log(a+b+c);
}
console.log(1981)
findSumOfInt(...integers);
//
console.log(1982)
const integerss=[10,20,30,40,50,60,70];
const findIntSum=(arr)=>{
    return arr.reduce((total,current)=> total+current,0);
};
const totalSum=findIntSum([...integerss])//we need to pass an array as a parameter
console.log(totalSum);
//















// let namesNew=[...names]
// console.log(`new names are :  ${namesNew}`)
//
const numberss = [1, 2, 3];
const string = ['fruit', 'vegetable'];

const combined = [...numberss, ...string];
console.log(combined); // Will be [1, 2, 3, 'fruit', 'vegetable']
//
const sendCongratulationsMessage = (name) => {
    console.log(`Congratulations ${name}, you passed the test.  Well done!`);
  };
  
  const sendConsolidationMessage = (name) => {
    console.log(
      `Sorry ${name}, unfortunately you did not pass your test. Let's see what we can do to get you back on track`
    );
  };
 
  
  const sendResultMessage = (grade, ...rest) => {
    if (grade < 6) {
      sendConsolidationMessage(...rest);
    } else {
      sendCongratulationsMessage(...rest);
    }
  };
  
  sendResultMessage(5, 'John');
  sendResultMessage(9, 'Deedee');

  //default parameter values
  const greeting = (name, greeting = 'Hello') => {
    console.log(`${greeting} ${name}, welcome aboard!`);
  };
  
  greeting('Burak');
  greeting('Veronika', 'Привет');

  //destructuring
  const studentResult = {
    namee: 'Mahmood',
    subject: 'React',
    gradee: 9,
  };
  
  const showResult = (name, subject, grade) => {
    console.log(
      `Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`
    );
  };
  
  // ES5 | We add the ES5 on the variables to keep the code runnable, do not use bad names like that!
//   const nameES5 = studentResult.namee;
//   const subjectES5 = studentResult.subject;
//   const gradeES5 = studentResult.gradee;
  
//   showResult(nameES5, subjectES5, gradeES5);
  
  // ES6
  const { namee, subject, gradee } = studentResult;
  
  showResult(namee, subject, gradee);

  //another destructuring example
  let languages=['java','c#','js','paython'];
  let [lang1,lang2,lang3,lang4]=languages;
  console.log(lang1);//java
  //
  const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
//
const vehicless = ['mustang', 'f-150', 'expedition'];

const [carr,, suvv] = vehicless;
// Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  console.log(add);//11
console.log(666666666666677)
const shoppingCart = ['bananas', 'milk'];
console.log("🚀 ~ shoppingCart:", shoppingCart)

function addToShoppingCart(/* parameters go here */item) {
  // TODO complete this function
  if (item !== undefined) {
    shoppingCart.push(item); // Add the grocery item to the shopping cart
    if (shoppingCart.length > 3) {
      shoppingCart.shift(); // Remove the first item if the number of items exceeds three
    }
  }
  return `You bought ${shoppingCart.join(', ')} `;
}
console.log("🚀 ~ addToShoppingCart:", addToShoppingCart("ayran"));

const cartForParty = {
  // TODO complete this object
  beers: 1.75,
  chips: 0.99,
  soda: 2.5,
  pizza: 8.99,
  cake: 12.49
};

function calculateTotalPrice(/* TODO parameter(s) go here */cart) {
  // TODO replace this comment with your code
  let totalPrice=Object.values(cart).reduce(  (accumulate,current)=>accumulate+current,0)

return `Total: €${totalPrice.toFixed(2)}`; // Return the total price as a string
}
console.log(cartForParty.beers)  //1.75
console.log("🚀 ~  calculateTotalPrice(cartForParty):",  calculateTotalPrice(cartForParty))//Total: €26.72
console.log(cartForParty)//
//
const employeeRecords = [
{
  name: 'John',
  occupation: 'developer',
  gender: 'M',
  email: 'john.doe@somewhere.net',
  salary: 50000,
},
{
  name: 'Jane',
  occupation: 'manager',
  gender: 'F',
  email: 'jane.eyre@somewhere.net',
  salary: 60000,
},
];

function filterPrivateData(array) {
// Use map() to create a new array with modified employee records
return array.map(({ name, occupation, email }) => ({   //array.map() is used to iterate over each item in the array.
  name,
  occupation,
  email,
})
);
}

console.log(filterPrivateData(employeeRecords))//

const {name,email}=employeeRecords[0]
console.log(name)