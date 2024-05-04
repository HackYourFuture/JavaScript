import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  // TODO complete this function

  const mentorsForModule= mentors.filter(mentor=> mentor.canTeach.includes(moduleName))// its an array
    const namesOfMentors=mentorsForModule.map(mentor=>mentor.name)

return namesOfMentors
};
// You can uncomment out this line to try your function
 console.log(possibleMentorsForModule('using-apis'));
   
/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  // TODO complete this function

      const mentorsForModule=possibleMentorsForModule(moduleName)
     const randomIndex= Math.floor(Math.random()*mentorsForModule.length)
   return mentorsForModule[randomIndex]

};
// You can uncomment out this line to try your function
 console.log(findMentorForModule('javascript'));

//console.log(possibleMentorsForModule('JavaScript'))

