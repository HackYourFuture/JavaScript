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
  // about filtering classes if we have true active class
  let filterActiveClass = classes.filter((n) => n.active).map((m) => m.name);

  // get the filtering student and push in the filtering class and say the name of student and role and the name of class
  let filterAbleStudent = students
    .filter((n) => filterActiveClass.includes(n.class))
    .map((m) => ({ name: m.name, role: " student", class: m.class }));


    // get the declare one variable which student can attend the class
  let canAttend = 0;
  // put class in the c and name of the class and true in the active push in the class name 
  for (let c of classes) {
    if (c.name === className && c.active) {
      // if we push all of the available class push all of them in the attend class
      canAttend = c.currentModule;
    }
  }
// declare oe array empty because we need list of name for mentors available now for teaching
  let filterAbleMentor = [];
  if (canAttend) {
    filterAbleMentor = mentors
      .filter((n) => n.nowTeaching === canAttend)
      .map((m) => ({
        name: m.name,
        role: "mentor",
        nowTeaching: m.nowTeaching
      }));
  }

  let add = filterAbleStudent.concat(filterAbleMentor);
  return add;
};
// You can uncomment out this line to try your function
console.log(getPeopleOfClass("class34"));
// console.log(getPeopleOfClass("class35"));
// console.log(getPeopleOfClass("class36"));


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
  let overview ={};
for(let i = 0 ; i < classes.length ; i++){
    if(classes[i].active){
        let addEnd = getPeopleOfClass(classes[i].name);
        overview[classes[i].name] = addEnd;
    }
}
return overview;
};
// You can uncomment out this line to try your function
console.log(getActiveClasses());

