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
  // TODO complete this function

  //filtering students whic has the provided class name
  const studentArray=students.filter(student=>student.class===className)
   //finding claass object with the provided classname
   const wantedClassObject= classes.find(classItem=>classItem.name===className)
   //filtering mentors who are able to teach the module as same as the module of given class
  const wantedMentors = mentors.filter(mentor=>mentor.nowTeaching===wantedClassObject.currentModule)
  const peopleOfClass=[]
  //iteration over each element of stutdentArray   in this case there is just one student match with the provided classname    
  studentArray.forEach(student =>{
        peopleOfClass.push({ name: student.name, role: "student" }) //storing an object of student info
      })
   wantedMentors.forEach(mentor=>{
    peopleOfClass.push({ name: mentor.name, role: "mentor" })//storing mentor info
   })
   
   

return peopleOfClass


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

  //filtering active claaases by filter() array function
  const activeClasses = classes.filter(classItem => classItem.active == true);

  // Use reduce() function to  to accumulate the result
  const activeClassesWithPeople = activeClasses.reduce((accumulatedResult, classItem) => {
    // Get people of the current class
    const activePeople = getPeopleOfClass(classItem.name);
    
    // Add people to the accumulatedResult object with class name as key
    accumulatedResult[classItem.name] = activePeople;

    return accumulatedResult;
  }, {});

  // Return the object with active classes and people
  return activeClassesWithPeople;
};
// You can uncomment out this line to try your function

 console.log(getActiveClasses());

