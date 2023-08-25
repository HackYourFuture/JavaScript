"use strict";

function getCurrentState(trafficLight) {
  if (trafficLight.stateIndex == 0) {
    return "green";
  } else if (trafficLight.stateIndex == 1) {
    return "orange";
  } else {
    return "red";
  }
}

function getNextStateIndex(trafficLight) {
  if (trafficLight.stateIndex < 2) {
    trafficLight.stateIndex++;
  } else {
    trafficLight.stateIndex = 0;
  }
  return trafficLight.stateIndex;
}
function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
    // nothing do to here
  }
}
function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };
  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1); // Wait a second before going to the next state
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}
main();

//  the output is:
// 0 The traffic light is now green
// 1 The traffic light is now orange
// 2 The traffic light is now red
// 3 The traffic light is now green
// 4 The traffic light is now orange
// 5 The traffic light is now red
