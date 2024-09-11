/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 * 
 * The end result should be: 
 *   hello this is a difficult to read sentence
 */

const myString = 'hello,this,is,a,difficult,to,read,sentence';

const myString1 = myString.split(',').join(' ');
console.log("Result of .split() and .join() methods:");
console.log(myString1);

const myString2 = myString.replace(/,/g, ' ');
console.log("Result of .replace() method and regular expression:");
console.log(myString2);

/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(myString1 === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');
console.assert(myString2 === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');