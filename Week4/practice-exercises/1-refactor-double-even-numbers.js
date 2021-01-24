/**
 * Consider this function. Let's refactor it so that it uses the 'map' and 'filter' functions that array gives us.
 * 
 * The output should be the same, but the function should be easier to read
 */

function doubleEvenNumbers(numbers) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            newNumbers.push(numbers[i] * 2);
        }
    }
    return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

/* --- Code that will test your solution, do NOT change. Write above this line --- */

console.assert(doubleEvenNumbers(myNumbers)[0] === 4);
console.assert(doubleEvenNumbers(myNumbers)[1] === 8);