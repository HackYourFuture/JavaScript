"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < sampleSize; i++) {
    valueCounts[Math.ceil(Math.random() * 6) - 1]++;
  }

  const results = [];
  for (let number of valueCounts) {
    results.push(((number / sampleSize) * 100).toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];
  for (let sampleSize of sampleSizes) {
    console.log(runExperiment(sampleSize), sampleSize);
  }
}

main();
