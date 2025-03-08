"use strict";

function getCurrentState(trafficLight) {
  return trafficLight.possibleStates[trafficLight.stateIndex];
}

function getNextStateIndex(trafficLight) {
 const colorState = trafficLight.possibleStates[trafficLight.stateIndex];
  if (colorState === 'green') {return 1;}
  if (colorState === 'orange') {return 2;}
  if (colorState === 'red') {return 0;}

  /* This is also another solution I found:
   if (trafficLight.stateIndex === 2) {
    return 0;
  }
  else {
    return trafficLight.stateIndex + 1;
  }
  */

}


function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
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

    waitSync(1);
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();
