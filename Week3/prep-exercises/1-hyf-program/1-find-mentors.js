//Week3/prep-exercises/1-hyf-program/1-find-mentors.js
import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
    return mentors.reduce((newArray, mentor) => {
        if (mentor.canTeach.includes(moduleName)) {
            newArray.push(mentor.name);
        }
        return newArray; // returns array on each reduce iteration
    }, []); // has an array output
};
// You can uncomment out this line to try your function
console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */

/** Helper function `getRandomIndex` to generate a random integer between 0 and specified max value
 *
 * @param {number} max - an upper limit for random number generation, exclusive
 * @returns {number} random integer between 1 and `max-1`
 */
const getRandomIndex = max => (Math.floor(Math.random() * max));

const findMentorForModule = (moduleName) => {
    const possibleMentors = possibleMentorsForModule(moduleName);
    if (possibleMentors.length === 0) {
        return `No mentors available for the module ${moduleName}`
    }
    const randomIndex = getRandomIndex(possibleMentors.length)
    return possibleMentors[randomIndex]
};
// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));
