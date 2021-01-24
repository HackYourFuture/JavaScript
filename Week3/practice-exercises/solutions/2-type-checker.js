/**
 * Create a function that fulfills the following requirements:
 * 
 *  Takes in 2 arguments
 *  Check the data type of each
 *  Compares each data type
 *  Logs to the console the message 'SAME TYPE' if they are the same type. If they are different types log 'Not the same....'
 */

const compareTypes = (parameter1, parameter2) => {
    if (typeof parameter1 == typeof parameter2) {
        console.log('SAME TYPE');
    } else {
        console.log('Not the same...');
    }
}