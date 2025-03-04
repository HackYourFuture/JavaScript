"use strict";

const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);

  if (currentState === "green")
     {  trafficLight.stateIndex = 1; 
      } else if (currentState === "orange") 
        {  trafficLight.stateIndex = 2 ;

        } else if (currentState === "red") { 
         trafficLight.stateIndex = 0; 
         
         cycle++;
         } 
        }