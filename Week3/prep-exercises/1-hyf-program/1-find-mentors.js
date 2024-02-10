import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */


const possibleMentorsForModule = (moduleName) => {
  const module = modules.find((mod) => mod.name === moduleName);
  
  const mentorsForModule = mentors.filter((mentor) =>
    mentor.canTeach.includes(moduleName)
  );

  return mentorsForModule.map((mentor) => mentor.name);

};

console.log(possibleMentorsForModule('javascript'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const findMentorForModule = (moduleName) => {
  const module = modules.find((mod) => mod.name === moduleName);
  
  const mentorsForModule = mentors.filter((mentor) =>
    mentor.canTeach.includes(moduleName)
  );

  const listOfMentorsForGivenModule = mentorsForModule.map((mentor) => mentor.name);


  const shuffledMentors = shuffleArray(listOfMentorsForGivenModule);

  return shuffledMentors[1];

 }
console.log(findMentorForModule('javascript')); 
