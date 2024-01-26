/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 *
 * The end result should be:
 *   hello this is a difficult to read sentence
 */

let myString = "hello,this,is,a,difficult,to,read,sentence";
myString = removeComma(myString);
function removeComma(str) {
  return str.split(",").join(" ");
}
console.log(myString);

/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(
  myString === "hello this is a difficult to read sentence",
  "There is something wrong with your solution"
);
