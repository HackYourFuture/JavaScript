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
  let subject,
    student = [],
    mentor = [],
    classOf = [];
  //let's get subject or currentModule of the selected class.

  let currentClass = classes.find(
    (clas) => clas.name === className && clas.active
  );

  //if the currentClass variable is not null, or undefined, then it means className is actually active and we will call the function, activeClass() to get the students and mentors of that class.
  if (!currentClass) {
    console.log(
      "this class is graduated, hence no active students or mentors."
    );
  } else {
    activeClass();
  }
  //below there is a function that will gather students and mentors of the selelcted class and put them in an array.

  function activeClass() {
    subject = currentClass.currentModule;
    student = students.filter((stud) => stud.class === className);

    mentor = mentors.filter((ment) => ment.nowTeaching === subject);

    student.map((cursist) => {
      const { name } = cursist;
      classOf.push({ name, role: "student" });
    });
    mentor.map((teacher) => {
      const { name } = teacher;
      classOf.push({ name, role: "mentor" });
    });
  }
  return classOf;
};
// You can uncomment out this line to try your function
console.log(getPeopleOfClass("class32"));

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
  let currentActiveClasses = {};

  classes.forEach((clas) => {
    if (clas.active) {
      currentActiveClasses[clas.name] = getPeopleOfClass(clas.name);
    }
  });

  return currentActiveClasses;
};

// You can uncomment out this line to try your function
console.log(getActiveClasses());
