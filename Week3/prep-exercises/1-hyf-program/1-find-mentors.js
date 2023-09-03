import { modules, students, mentors, classes } from "./hyf.js";

/** Fill in this function that finds all the mentors that can teach the given module.
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  // return mentors rather than line 12 and 15
  const mentorCanTeach = mentors
    .filter((mentor) => mentor.canTeach.includes(moduleName)) //`===` but `includes()`: searching an array
    .map((mentor) => mentor.name);
  return mentorCanTeach;
};

console.log(possibleMentorsForModule("using-apis"));

/** Fill in this function that chooses a random mentor to teach the given module.
 * It should return a single name.*/
const findMentorForModule = (moduleName) => {
  const possibleMentor = possibleMentorsForModule(moduleName);
  const mentorRandom = Math.floor(Math.random() * possibleMentor.length); // replace  `mentors` by `possibleMentor` to fixe undefined
  return possibleMentor[mentorRandom];
};
console.log(findMentorForModule("javascript"));
