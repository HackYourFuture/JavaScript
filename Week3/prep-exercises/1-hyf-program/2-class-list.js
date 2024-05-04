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
    //Check if the class exists in classes object
    const classInfo = classes.find(c => c.name === className);
    if (!classInfo) {
        return [];
    }

    //Get the students info
    const classStudents = students
        .filter(student => student.class ===className)
        .map(student => ({name: student.name, role: 'student'}));

    //Get the mentors info
    const currentModule = classInfo.currentModule;
    const classMentors = mentors
        .filter(mentor => mentor.nowTeaching ===currentModule)
        .map(mentor => ({name: mentor.name, role: 'mentor'}));

    return [...classStudents, ...classMentors];
};
// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));

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
  return classes.reduce((classObj, c) => {
        if (c.active) {
            classObj[c.name] = getPeopleOfClass(c.name);
        }
        return classObj;
  }, {})
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());
