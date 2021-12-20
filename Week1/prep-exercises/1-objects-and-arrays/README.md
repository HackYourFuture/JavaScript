# Prep exercise - Objects and Arrays

Objects and Arrays form the basis of pretty much all data structures in JavaScript and allow us to represent the state of the world to be manipulated. This exercise is all about how to represent objects in the real world in an 'IT' way. By thinking about the data structure you can make it easier to implement certain functionality which will help code stay simple and readable!

## Traffic light

In the `traffic-light-1.js` and `traffic-light-2.js` files we give two different ways of representing a traffic light. Have a look at the files and think about the following:

- In the first version we create an object with a state property. Why do you think we do this? Why not just a variable?
- In the second version we add extra information (the `possibleStates` property). What do you think the advantage is of that?
- In the second version the `stateIndex` property is a number, why do you think that is?

## HackYourFuture program

In the `hyf.js` file we have a more complex representation of the hyf program. We have divided the hyf world into 4 what we call `entities`: `modules`, `classes`, `students`, `mentors`. The `export` statements are for week 4, you can ignore those for now! Have a look and think about the following:

- Why do you think we have a `name` and `displayName` property for the `modules`?
- Do you think `active` and `start`/`graduationDate` are both needed in the `classes` array? Why or why not?

## Things to think about

Next to the questions specific to each representation, also have a think about the following:

- In all of the examples, you will see that objects and arrays are mostly defined using a `const` statement rather than a `let` even if we change the value of the object or array, why do you think this is the case?
