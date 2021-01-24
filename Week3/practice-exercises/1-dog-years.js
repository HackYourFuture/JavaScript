/**
 * You know how old your dog is in human years, but what about dog years? Let's calculate it!
 * 
 * Write a function named calculateDogAge.
 *   It takes 1 argument: your (fictional) puppy's age (number).
 *   Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
 *   Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
 *   Call the function three times with different sets of values.
 * 
 * Expected output:
 *   calculateDogAge(1); // Returns "Your doggie is 7 years old in dog years!"
 *   calculateDogAge(2); // Returns "Your doggie is 14 years old in dog years!"
 *   calculateDogAge(3); // Returns "Your doggie is 21 years old in dog years!"
 */




/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(calculateDogAge(1) === "Your doggie is 7 years old in human years!", 'The solution does not work for calculateDogAge(1)');
console.assert(calculateDogAge(2) === "Your doggie is 14 years old in human years!", 'The solution does not work for calculateDogAge(2)');
console.assert(calculateDogAge(3) === "Your doggie is 21 years old in human years!", 'The solution does not work for calculateDogAge(3)');