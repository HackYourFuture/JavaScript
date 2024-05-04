import { modules, students, mentors, classes } from "./hyf.js";


const whoCanTeach = mentors.filter(function(mentor){
    return mentor.canTeach && mentor.canTeach.length !== 0;
}).map(function(mentor){
  return mentor.name;
})
  

// Call the function to display mentors who can teach at least one course
console.log (whoCanTeach);

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  // TODO complete this function
  let mentorsPossible = mentors.filter((n) => n.canTeach.includes(moduleName));
  let randomIndex = Math.round(Math.random() * mentorsPossible.length);
  return mentorsPossible[randomIndex].name;
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
};
// You can uncomment out this line to try your function
 console.log(possibleMentorsForModule);
