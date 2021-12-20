'use strict';
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ['green', 'orange', 'red'],
  stateIndex: 0,
};

const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
