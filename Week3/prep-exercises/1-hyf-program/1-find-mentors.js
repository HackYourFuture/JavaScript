import { modules, students, mentors, classes } from "./hyf.js";
const possibleMentorsForModule = (moduleName) => {
  return mentors.reduce((mentorsForModule, mentor) => {
    if (mentor && mentor.modules && mentor.modules.includes(moduleName)) {
      mentorsForModule.push(mentor.name);
    }
    return mentorsForModule;
  }, []);
};


const findMentorForModule = (moduleName) => {
  const mentorsForModule = possibleMentorsForModule(moduleName);
  if (mentorsForModule.length === 0) {
    return "No mentor available for this module";
  }
  const randomIndex = Math.floor(Math.random() * mentorsForModule.length);
  return mentorsForModule[randomIndex];
};



console.log(possibleMentorsForModule('using-apis'));

console.log(findMentorForModule('javascript'));

  