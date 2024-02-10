import { modules, students, mentors, classes } from "./hyf.js";



  const getPeopleOfClass = (className) => {
    const classInfo = classes.find((cls) => cls.name === className);
     
    const classStudents = students
      .filter((student) => student.class === className)
      .map((student) => ({ name: student.name, role: 'student' }));
  
    const classMentors = mentors
      .filter((mentor) => {
        if (!mentor.nowTeaching) return false;
        const mentorTeachingModule = mentor.nowTeaching;
        return mentor.canTeach.includes(classInfo.currentModule);
      })
      .map((mentor) => ({ name: mentor.name, role: 'mentor' }));
  
    return [...classStudents, ...classMentors];
  };
 console.log(getPeopleOfClass('class34'));

 console.log(classes);
console.log(students);
console.log(mentors);

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

  const activeClasses = classes.filter((cls) => cls.active);
      const activeClassesInfo = {};
    
      activeClasses.forEach((cls) => {
        const peopleOfClass = getPeopleOfClass(cls.name);
        activeClassesInfo[cls.name] = peopleOfClass;
      });
    
      return activeClassesInfo;
    };
    
    const peopleOfClass34 = getPeopleOfClass('class34');
    const studentNames = peopleOfClass34.map((person) => person.name).join(', ');
    const studentID = `${studentNames} role: student`;
    console.log(studentID);
    
    const activeClasses = getActiveClasses();
    console.log(activeClasses);


console.log(getActiveClasses());
