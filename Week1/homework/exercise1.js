//hyf is the best!!!!!!!

"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight1 = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight1.state;
  console.log("The traffic light is on", currentState);


  if (currentState === "green") {
    trafficLight1.state = "orange";

  } else if (currentState === "orange") {
    trafficLight1.state = "red";
  } else if (currentState === "red") {
    trafficLight1.state = "green";
    rotations++; // Increase rotations by 1 after completing one full cycle
  }
}

/**
 * The output should be:
 *
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 */


/**
 * The output should be:
 *
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 */


//whyyyyy nottt?/?????
// const trafficLight1 = {
//   state: "green",
// };

// let rotations = 0;
// while (rotations < 2) {
//   const currentState = trafficLight1.state;

//   if (currentState === "green") {
//    console.log("The traffic light is on", currentState);
//   } else if (currentState === "green") {
//     trafficLight1.state = "orange";
//    console.log("The traffic light is on", currentState);
//   } else if (currentState === "orange") {
//     trafficLight1.state = "red";
//  console.log("The traffic light is on", currentState);
//   }
// else if (currentState === "red") {
//         trafficLight1.state = "green";
//         rotations++; // Increase rotations by 1 after completing one full cycle
//       }
// }
console.log(2222);

//trafficlight02
"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let count = 0;
while (count < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on with index :", currentState);

  // Logic for changing traffic light state
  if (currentState === "green") {
    trafficLight.stateIndex = 1; // Change state to "orange"
  } else if (currentState === "orange") {
    trafficLight.stateIndex = 2; // Change state to "red"
  } else if (currentState === "red") {
    trafficLight.stateIndex = 0; // Change state to "green"
    count++; // Increase cycles by 1 after completing one full cycle
  }
}
console.log(5555)
/**
 * The output should be:
 *
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 * The traffic light is on green
 * The traffic light is on orange
 * The traffic light is on red
 */
"use strict";

//with index
let round = 0;
do {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  
  // Logic for changing traffic light state
  if (currentState === "green") {
    trafficLight.stateIndex = 1; // Turn green to orange
    console.log("The traffic light is on with do while loop and stateIndex :", currentState);

  } else if (currentState === "orange") {
    trafficLight.stateIndex = 2; // Turn orange to red
    console.log("The traffic light is on with do while loop and stateIndex :", currentState);

  } else if (currentState === "red") {
    trafficLight.stateIndex = 0; // Turn red to green
    console.log("The traffic light is on with do while loop and stateIndex :", currentState);

    round++; // Increment cycle
  }
} while (round < 2);


//again

let cycle03=0;
while(cycle03<2){
const currentState=trafficLight.possibleStates[trafficLight.stateIndex];
console.log(`my practice   the light is : ${currentState}`);
if(currentState==='green'){
    trafficLight.stateIndex=1;
}else if(currentState==='orange'){
    trafficLight.stateIndex=2;
}else if(currentState==='red'){
    trafficLight.stateIndex=0;
    cycle03++;
}
}

// lets do it  awesome

  let cycle = 0;
  while (cycle < 2) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
    
    if (currentState === "green") {
      trafficLight.stateIndex = 1; // Change state to "orange"
      console.log(`heyy the traffic light is now :  ${currentState}`);
    } else if (currentState === "orange") {
      trafficLight.stateIndex = 2; // Change state to "red"
      console.log(`heyy the traffic light is now :  ${currentState}`);
    } else if (currentState === "red") {
      trafficLight.stateIndex = 0; // Change state to "green"
      console.log(`heyy the traffic light is now :  ${currentState}`);
      cycle++; // Increase cycles by 1 after completing one full cycle
    }
  }
  
//lets do it by switch case

"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */

//lets do by switch case
const trafficLightS = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };
// let cycles = 0;
// while (cycles < 2) {
//   const currentState = trafficLightS.possibleStates[trafficLightS.stateIndex];
  
//   switch (currentState) {
//     case "green":
//       trafficLightS.stateIndex = 1; // Switch to orange
//       console.log("The traffic light is on", currentState);
//       break;
//     case "orange":
//       trafficLightS.stateIndex = 2; // Switch to red
//       console.log("The traffic light is on", currentState);
//       break;
//     case "red":
//       trafficLightS.stateIndex = 0; // Switch to green
//       console.log("The traffic light is on", currentState);
//       cycle++; // Increment cycle
//       break;
//     default:
//       console.log("Invalid state");
//   }
// }

console.log(998)


// let rounds=0;
// while(rounds<2){
// const currentState=trafficLight.possibleStates[trafficLight.stateIndex];
// console.log(`exm on the train the traffic light is ${currentState}`);

// if(currentState==='green'){
// trafficLight.stateIndex=1;
// }else if(currentState==='orange'){
// trafficLight.stateIndex=2;
// }else if(currentState==='red'){
//   console.log(`exm on the train the traffic light is ${currentState}`);
// trafficLight.stateIndex=0;

// }
// rounds++;
// }


