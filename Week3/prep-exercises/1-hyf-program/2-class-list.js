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
  const allPeople = [];
  const currentModule = classes.find((el) => el.name === className ) ?.currentModule ;

students.forEach((student)=>{
  if(student.class == className && student.graduated == false){
    
    allPeople.push({name:student.name, role: 'student'})
  }
});

mentors.forEach((mentor)=>{
  if(mentor.nowTeaching === currentModule){
    allPeople.push({name:mentor.name, role:'mentor'})
   
  }
})
return allPeople
};


// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));

const getActiveClasses = () => {
  
  const activeClasses = classes.filter((el) => el.active === true);

  const activePeople = {};
  activeClasses.forEach((el) => {
    activePeople[el.name] = getPeopleOfClass(el.name);
  });

  return activePeople;
}

// You can uncomment out this line to try your function
// console.log(getActiveClasses());
