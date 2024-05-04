import { modules, students, mentors, classes } from "./hyf.js";
const getPeopleOfClass = (className) => {
  const classInfo = classes.find((cls) => cls.name === className);
  if (!classInfo) {
    return "Class not found";
  }
  const people = [];
  if (classInfo.students && classInfo.students.length > 0) {
    people.push(
      ...classInfo.students.map((student) => ({
        name: student,
        role: "student",
      }))
    );
  }
  const mentorNames = mentors
    .filter((mentor) => mentor.nowTeaching === classInfo.currentModule)
    .map((mentor) => ({ name: mentor.name, role: "mentor" }));

  people.push(...mentorNames);

  return people;
};
console.log(getPeopleOfClass("class34"));
const getActiveClasses = () => {
  const activeClasses = {};
  classes.forEach((classInfo) => {
    const peopleOfClass = getPeopleOfClass(classInfo.name);
    activeClasses[classInfo.name] = peopleOfClass;
  });
  return activeClasses;
};
console.log(getActiveClasses());