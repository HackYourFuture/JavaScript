import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  // return mentors rather than line 12 and 15
  const mentorCanTeach = mentors
    .filter((mentor) => mentor.canTeach.includes(moduleName))
    .map((mentor) => mentor.name);
  return mentorCanTeach;
};

console.log(possibleMentorsForModule("using-apis"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const mentorRandom = Math.floor(Math.random() * mentors.length); // error no change: try `-1` to equal the index `(mentors.length - 1)`
  return possibleMentorsForModule(moduleName)[mentorRandom];
};

console.log(findMentorForModule("javascript"));

/* 

 * * Terminal ERROR:
 * some round I got `undefined`

 kumait@Kumaits-MBP prep-exercises % node 1-hyf-program/1-find-mentors.js  
 [ 'Stas', 'Andrej', 'Yash', 'Collin' ]
 Rohan
 kumait@Kumaits-MBP prep-exercises % node 1-hyf-program/1-find-mentors.js  
 [ 'Stas', 'Andrej', 'Yash', 'Collin' ]
 undefined
 kumait@Kumaits-MBP prep-exercises % node 1-hyf-program/1-find-mentors.js  
 [ 'Stas', 'Andrej', 'Yash', 'Collin' ]
 Yash
 kumait@Kumaits-MBP prep-exercises % node 1-hyf-program/1-find-mentors.js  
 [ 'Stas', 'Andrej', 'Yash', 'Collin' ]
 Stas
 */
