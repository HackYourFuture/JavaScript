/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;
    
// Write your code here
  list.forEach((num,index)=>{
    for(let i=index+1;i<list.length; i++){
        for(let j=i+1;j<list.length; j++){
              if(num+list[i]+list[j]===2020){
                result = num * list[i] * list[j];
              }
        }
    }
  })

// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);
console.log(result)
console.log(11111111111)