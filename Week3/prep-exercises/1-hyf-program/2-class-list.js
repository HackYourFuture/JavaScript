import { modules, students, mentors, classes } from "./hyf.js";

/**
 * We would like to have a list of everyone that is currently participating in a class.
 * This means the students, but also the mentors that are currently teaching the class.
 * The students should be self explanatory, but to find the mentors you will need to follow these steps:
 * - Check what the `currentModule` of the class is
 * - Find the mentor(s) that are `nowTeaching` that module
 *
 * Should return the list of names and their roles. So something like:
 *
 *  [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }]
 */
const getPeopleOfClass = (className) => {
  const classInfo = classes.find(cls => cls.name === className);
  if (!classInfo) {
    console.error(`Class ${className} not found.`);
    return [];
  }
  const studentsOfClass = students.filter(students => students.class === className)
  .map(students => ({ name: students.name, role:'student' }));

  const mentorsOfClass = mentors.filter(mentors => mentors.nowTeaching === classInfo.currentModule)
  .map(mentors => ({ name: mentors.name, role:'mentor' }));

  return [...studentsOfClass,...mentorsOfClass];
};
// You can uncomment out this line to try your function
// console.log(getPeopleOfClass('class34'));

/**
 * We would like to have a complete overview of the current active classes.
 * First find the active classes, then for each get the people of that class.
 *
 * Should return an object with the class names as properties.
 * Each class name property contains an array identical to the return from `getPeopleFromClass`. So something like:
 *
 *  {
 *    class34: [{ name: 'John', role: 'student' }, { name: 'Mary', role: 'mentor' }],
 *    class35: [{ name: 'Jane', role: 'student' }, { name: 'Steve', role: 'mentor' }]
 *  }
 */
const getActiveClasses = () => {
  const activeClasses = classes.filter(cls => cls.active);

  const result = {};
  activeClasses.forEach(activeClasses => {
    result[activeClasses.name] = getPeopleOfClass(activeClasses.name);
  });
  return result;
};
// You can uncomment out this line to try your function
// console.log(getActiveClasses());
