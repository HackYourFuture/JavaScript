"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
   for(let i=0;i<sampleSize;i++){
    const randomNumber = Math.floor(Math.random() * 6)+1;
    valueCounts[randomNumber-1]++;
   }
  const results = [];
  let total=0;
  for(let value of valueCounts){
    total=total+value;
  }
  for (let i = 0; i < valueCounts.length; i++) {
    results[i] = `${((valueCounts[i] / total) * 100).toFixed(2)}`;
  }
  return results;
}
function main() {
  const sampleSizes = [100, 1000, 1000000];
 for (let element of sampleSizes) {
   console.log(runExperiment(element));
 }
}
main();
// my output:
// [ '20.00', '11.00', '16.00', '14.00', '17.00', '22.00' ]
// [ '17.30', '18.60', '16.60', '16.70', '15.70', '15.10' ]
// [ '16.61', '16.66', '16.68', '16.75', '16.62', '16.68' ]