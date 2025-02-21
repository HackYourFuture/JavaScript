"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < sampleSize; i++) {
    const roll = Math.floor(Math.random() * 6);
  
   valueCounts[roll]++;
  }
  const results = [];

  for (const count of valueCounts) {
    const percentage = ((count / sampleSize) * 100).toFixed(2);
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
}

main();
