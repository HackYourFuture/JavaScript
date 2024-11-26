"use strict";

const trafficlight = { 
    possibleStates : [ "green", "orange", "red"],
    stateIndex :0,
};
let cycle = 0;
function updateTrafficLight() {
    const currentState = trafficlight.possibleStates[trafficlight.stateIndex];
    const trafficLightElement = document.getElementById("traffic-light");
    trafficLightElement.textContent = `The traffic light is on ${currentState}`;
    trafficLightElement.className = "";
    trafficLightElement.classList.add(currentState);

    if (currentState === "green") {
        trafficlight.stateIndex = 1;

    }
  else if(currentState === "orange") {
    trafficlight.stateIndex = 2;

  }
  else if(currentState === "red") {
    trafficlight.stateIndex = 0;
    cycle++;
  }

  if (cycle < 3) {
    setTimeout(updateTrafficLight, 1000);

  }
  else {
    trafficLightElement.textContent = "Traffic light simulation compeleted." ;
  }
}

updateTrafficLight();