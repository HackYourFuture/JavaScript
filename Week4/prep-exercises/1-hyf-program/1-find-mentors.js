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
  const mentorsList = [];
  mentors.forEach((mentor) => {
    const subjects = mentor.canTeach;
    if (subjects.includes(moduleName)) {
      mentorsList.push(mentor.name);
    }
  });
  return mentorsList;
};
// You can uncomment out this line to try your function
console.log(possibleMentorsForModule("using-apis"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  // TODO complete this function
  const mentorsList = [];
  mentors.forEach((mentor) => {
    const subjects = mentor.canTeach;
    if (subjects.includes(moduleName)) {
      mentorsList.push(mentor.name);
    }
  });
  const randomNumber = Math.floor(Math.random() * mentorsList.length);
  return mentorsList[randomNumber];
};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));
