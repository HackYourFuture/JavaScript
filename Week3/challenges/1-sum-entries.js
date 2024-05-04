/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;
 
  
// Write your code here
//alternatively by find() function
        //    const a=list.find((num,index)=>{//find iterates over each element of the array.
        //               const complement=2020-num;
        //               if(list.slice(index+1).includes(complement)){
        //                   result=num*complement
        //                    return result
        //               }          
        //                   } );   
                          
                          list.forEach( (num,index)=>{
                            const complement=2020-num
                            if(list.slice(index+1).includes(complement)){
                                result=num*complement
                                return result;
                            }
                          } )

// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);
console.log(result)