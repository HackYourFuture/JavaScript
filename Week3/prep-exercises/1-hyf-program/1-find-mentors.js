import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  // 1 - can find the mentor
  // 2 - can filter available mentor
  // 3- can put in other place
  // 4- can write th name of the mentors
  for (let i = 0; i < mentors.length; i++) {// get the read list of mentors

    let listMentor = []; // if i put mentors can teach push here

    for (let i = 0; i < mentors.length; i++) {
      if (mentors[i].canTeach.includes(moduleName)) {
        // separate mentors can teach and push in the list mentor array
        listMentor.push(mentors[i].name);
      }
    }
    return listMentor;
  }
  // way 2
  // let listOfMentor = mentors.filter(n => n.canTeach.includes(moduleName)).map(n => n.name);
  // return listOfMentor;
};
possibleMentorsForModule();

console.log(`javascript : { ${possibleMentorsForModule("javascript").join(" , ")} }`);
console.log(`node : {${possibleMentorsForModule("node").join(" , ")}}`);
console.log(`react : {${possibleMentorsForModule("react").join(" , ")}}`);
console.log(`using-apis:{${possibleMentorsForModule("using-apis").join(" , ")}}`);
console.log(`browsers :{ ${possibleMentorsForModule("browsers").join(" , ")}}`);

// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {

  let findMentor = mentors.filter((n) => n.canTeach.includes(moduleName));// get the filter mentors and push in the module name 

  if (findMentor.length === 0) {// if find mentor equal 0 is thats means we don't have mentor in the list 
    return "we don't have a mentors sorry";
  }
  let random = Math.round(Math.random() * findMentor.length); // and can randomly say mentor available
  return findMentor[random].name; // say thats name
};
console.log("random available teacher");
// console.log(` node  : { ${findMentorForModule('node')}  }`);
// console.log(` react  : { ${findMentorForModule('react')}  }`);
// console.log(` javascript  : { ${findMentorForModule('javascript')}  }`);
// console.log(` browsers  : { ${findMentorForModule('browsers')}  }`);
// console.log(` using-apis  : { ${findMentorForModule('using-apis')}  }`);
// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));
