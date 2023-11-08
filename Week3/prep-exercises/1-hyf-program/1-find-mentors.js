import { modules, students, mentors, classes } from './hyf.js';

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  const mentorList = [];
  mentors.forEach((mentor) => {
    if (mentor.canTeach.includes(moduleName)) {
      mentorList.push(mentor.name);
    }
  });
  return mentorList;
};
// You can uncomment out this line to try your function
console.log(`${possibleMentorsForModule('using-apis')} can teach API module`);

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const mentorList = [];
  let randomNum;
  mentors.forEach((mentor) => {
    if (mentor.canTeach.includes(moduleName)) {
      mentorList.push(mentor.name);
    }
  });
  randomNum = Math.floor(Math.random() * (mentorList.length - 1 - 0 + 1)) + 0;
  return mentorList[randomNum];
};
// You can uncomment out this line to try your function
console.log(
  `${findMentorForModule('javascript')} is going to teach Javascript`
);
