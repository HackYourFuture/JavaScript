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
  const currentCla = classes
    .filter((currentClass) => currentClass.active)
    .find((currentClass) => currentClass.name === className);

  const mentoring = mentors
    .filter((mentor) => mentor.nowTeaching === currentCla.currentModule) // the big problem was using find() terminal report `not function`
    .map((mentor) => ({
      name: mentor.name,
      role: "mentor",
    }));

  const currentStudents = students
    .filter((student) => student.class === className)
    .map((student) => ({
      name: student.name,
      role: "student",
    }));

  return [...currentStudents, ...mentoring];
};
console.log(getPeopleOfClass("class34"));

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
  const populate = {};

  classes
    .filter((cla) => cla.active)
    .forEach((cla) => {
      populate[cla.name] = getPeopleOfClass(cla.name);
    });

  return populate;
};
console.log(getActiveClasses());

const againGetActiveClasses = () => {
  const populate = {};

  for (const cla of classes) {
    if (cla.active) {
      populate[cla.name] = getPeopleOfClass(cla.name);
    }
  }

  return populate;
};

console.log(againGetActiveClasses());

// works not
// const getActiveClassesAgain = () => {
//   return[ classes
//     .filter((cla) => cla.active)
//     .map((cla) => ({
//       className: cla.name,
//       people: getPeopleOfClass(cla.name),
//     }))
//   ]
// };

// console.log(getActiveClassesAgain());

const getActiveClassesAgain = () => {
  return classes
    .filter((cla) => cla.active)
    .reduce((acr, cla) => {
      acr[cla.name] = getPeopleOfClass(cla.name);
      return acr;
    }, {});
};

console.log(getActiveClassesAgain());
