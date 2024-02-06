import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
  return mentors.filter((mentor) => mentor.canTeach.includes(moduleName));
};

console.log(possibleMentorsForModule("using-apis"));

const findMentorForModule = (moduleName) => {
  const availableTeachers = possibleMentorsForModule(moduleName);
  return availableTeachers[
    Math.floor(Math.random() * availableTeachers.length)
  ];
};

console.log(findMentorForModule("javascript"));
