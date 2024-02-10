"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  // TODO
  // Write a for loop that iterates `sampleSize` times (sampleSize is a number).
  // In each loop iteration:
  //
  // 1. Generate a random integer between 1 and 6 (as if throwing a six-sided die).
  // 2. Add `1` to the element of the `valueCount` that corresponds to the random
  //    value from the previous step. Use the first element of `valueCounts`
  //    for keeping a count how many times the value 1 is thrown, the second
  //    element for value 2, etc.

  for (let i = 0; i < sampleSize; i++) {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    valueCounts[randomValue - 1]++; 
  }




  const results = [];

  // TODO
  // Write a for..of loop for the `valueCounts` array created in the previous
  // loop. In each loop iteration:
  // 1. For each possible value of the die (1-6), compute the percentage of how
  //    many times that value was thrown. Remember that the first value of
  //    `valueCounts` represent the die value of 1, etc.
  // 2. Convert the computed percentage to a number string with a precision of
  //    two decimals, e.g. '14.60'.
  // 3. Then push that string onto the `results` array.


  for (const count of valueCounts) {
    const percentage = (count / sampleSize * 100).toFixed(2);
    results.push(percentage);
  }

  

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];


  // TODO
  // Write a for..of loop that calls the `runExperiment()` function for each
  // value of the `sampleSizes` array.
  // Log the results of each experiment as well as the experiment size to the
  // console.
  // The expected output could look like this:
  //
  // [ '26.00', '17.00', '10.00', '19.00', '16.00', '12.00' ] 100
  // [ '14.60', '17.10', '19.30', '15.50', '16.70', '16.80' ] 1000
  // [ '16.71', '16.68', '16.69', '16.66', '16.67', '16.59' ] 1000000

  for (const size of sampleSizes) {
    const experimentResults = runExperiment(size);
    console.log(experimentResults, size);
  }


}

main();
