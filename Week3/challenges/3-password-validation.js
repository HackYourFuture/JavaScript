
/**
 * Credit to https://adventofcode.com/ for this exercise
 * 
 * Each object in the passwordList gives a password policy and then the password.
 * The times field says the minimal and maximal amount of times the letter should be in the password. So 1-3 means at least 1 time, at most 3 times.
 * The letter field gives which letter should be counted
 * The password field gives the password
 * 
 * In the list 2 passwords are valid, the middle one is not as there is no b in the password.
 * 
 * We expect the output:
 * 
 * 'abcde' is VALID, a is present 1 times and should have been present at least 1 and at most 3 times
 * 'cdefg' is INVALID, b is present 0 times and should have been present at least 1 and at most 3 times
 * 'ccccccccc' is VALID, c is present 9 times and should have been present at least 2 and at most 9 times
 */

const passwordList = [
    { times: '1-3', letter: 'a', password: 'abcde'},
    { times: '1-3', letter: 'b', password: 'cdefg'},
    { times: '2-9', letter: 'c', password: 'ccccccccc'}
];
 passwordList.forEach( item=>{
    const { password, times, letter } = item;  //destructuring
    const minNum=times.charAt(0)
    const maxNum=times.charAt(2)
    const pswLettersAsArray=password.split('').filter( char=> char===letter)
    const amountOfOccurance=pswLettersAsArray.length
    if(amountOfOccurance>=minNum&&amountOfOccurance<=maxNum){
        console.log(`${password} is VALID, ${letter} is present ${amountOfOccurance} times and should have been present at least ${minNum} and at most ${maxNum} times`);

    }else{
        console.log(`${password} is INVALID, ${letter} is present ${amountOfOccurance} times and should have been present at least ${minNum} and at most ${maxNum} times`);

    }
    
 } )

console.log(passwordList[0].password.split(''))//[ 'a', 'b', 'c', 'd', 'e' ]
console.log(passwordList[2].times.charAt(2))//9
console.log(passwordList[0].password.split('').filter(char=> char===passwordList[0].letter))
 /*
let string=psw.password
    char=psw.letter
     let minNum=parseInt(psw.times.charAt(0))
     let maxNum=parseInt(psw.times.charAt(2))
     let count=0;
     for( let i=0; i<string.length;i++){
       let  char=psw.letter
        if(string.charAt(i)===char){
      count++;
        }
     }
 */  
//another practice
passwordList.forEach( item=>{
    const {times,letter,password}=item  //destructuring
    let numOfOccurance=Array.from(password).filter(char=>char==letter).length
    let minOccurance=parseInt(times.charAt(0))
    let maxOccurance=parseInt(times.charAt(2))
    if(numOfOccurance>=minOccurance&&numOfOccurance<=maxOccurance){
        console.log(`${password} is VALID, ${letter} is present ${numOfOccurance} times and should have been present at least ${minOccurance} and at most ${maxOccurance} times`);
    }else{
        console.log(`${password} is VALID, ${letter} is present ${numOfOccurance} times and should have been present at least ${minOccurance} and at most ${maxOccurance} times`);

    }

})
