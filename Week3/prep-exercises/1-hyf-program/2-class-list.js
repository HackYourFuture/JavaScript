import { modules, students, mentors, classes } from './hyf.js';

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
  let everyone = [];
  let currentModule;

  classes.forEach((eachClass) => {
    if (eachClass.name == className) currentModule = eachClass.currentModule;
  });

  students.forEach((stud) => {
    if (stud.class == className) {
      everyone.push({ name: stud.name, role: 'student' });
    }
  });

  mentors.forEach((mentor) => {
    if (mentor.nowTeaching == currentModule)
      everyone.push({ name: mentor.name, role: 'mentor' });
  });

  return everyone;
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
  // TODO complete this function

  const activeClasses = classes
    .map((eachClass) => {
      if (eachClass.active) return eachClass.name;
    })
    .filter((eachClass) => eachClass !== undefined);

  const activeStudent = students
    .map((student) => {
      if (student.graduated == false)
        return { name: student.name, class: student.class, role: 'student' };
    })
    .filter((student) => student !== undefined);

  const activeModule = classes
    .filter((eachClass) => eachClass.active)
    .map((eachClass) => eachClass.currentModule);

  const activeMentor = mentors
    .map((mentor) => {
      if (activeModule.includes(mentor.nowTeaching)) {
        const mentorName = mentor.name;
        const className = classes
          .filter((eachClass) => eachClass.currentModule == mentor.nowTeaching)
          .map((eachClass) => eachClass.name)
          .pop();
        return { name: mentorName, class: className, role: 'mentor' };
      }
    })
    .filter((mentor) => mentor !== undefined);

  const activeClassObj = activeClasses.map((eachClass) => {
    const studentList = activeStudent.filter(
      (student) => student.class == eachClass
    );
    const mentorList = activeMentor.filter(
      (mentor) => mentor.class == eachClass
    );
    return { [eachClass]: [...studentList, ...mentorList] };
  });

  return JSON.stringify(activeClassObj, null, 2);
};
// You can uncomment out this line to try your function
console.log('active classes:');
console.log(getActiveClasses());
