/**
 * Report whether a number is odd/even!
 *
 *  Create a for loop, that iterates from 0 to 20.
 *  Create a conditional statement that checks if the value of the counter variable is odd or even.
 *  If it's odd, log to the console The number [PUT_NUMBER_HERE] is odd!.
 *  If it's even, log to the console The number [PUT_NUMBER_HERE] is even!.
 */

function oddCheck(counter) {
    let resultOfCheck = counter % 2 === 0? 'even' : 'odd';
     console.log(`The number ${counter} is ${resultOfCheck}`)
}


oddCheck(2);
oddCheck(5);
oddCheck(0);