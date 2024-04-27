# Prep exercise - Traffic light

In the previous week we started with our traffic light. Now that we also know what a function is we have one last look at the workings of a traffic light in a different way. Take a look at the `traffic-light.js` file and implement the same requirements as last week again, but then with another different way of organising.

## Things to think about

- This time the loop was changed to a for loop that will run the code 6 times. Why was that needed?
  - The logic has changed: now the cycle is a number of traffic light changes
- Why was the trafficLight added to the `main` function and not left at the top of the file?
  - Now we use the local scope. It minimizes the risk of interaction with other parts of the program.
  - Usually we want the code to be as predictable as possible. Less unwanted interactions == more predictability.
  - This way main function is more reusable. 
- What do you think is the advantage of having the `getCurrentTrafficLightState` and `getNextStateIndex` functions?
  - Since they are simple, it's easy to reuse them in other functions.
  - The reason why we haven't declared them in main() could be that we want to reuse them elsewhere 
  - The functions are clear - it would be easier for others to understand what's happenign in the code
