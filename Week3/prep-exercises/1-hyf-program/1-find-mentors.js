import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
  return mentors
    .filter((mentor) => mentor.canTeach.includes(moduleName))
    .map((mentor) => mentor.name);
    
};

 console.log(possibleMentorsForModule('using-apis'));




const findMentorForModule = (moduleName) => {
  const possibleMentors = possibleMentorsForModule(moduleName);
  return possibleMentors[Math.floor(Math.random() * possibleMentors.length)];
};

console.log(findMentorForModule('javascript'));
