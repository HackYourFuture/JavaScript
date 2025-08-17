/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

const recipe = {};

recipe.name = "Omelette";
recipe.serves = 2;
recipe.ingredients = ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"];

for (let i in recipe){

    // good but more difficult code below
    /*let value = Array.isArray(recipe[i]) ? recipe[i].join(", ") : recipe[i];*/

    let value;                              // create a variable to store the property value
    if (Array.isArray(recipe[i])) {         // check if the value is an array
        value = recipe[i].join(", ");     // if it's an array, join all elements with a comma
    } 
    else {                                  // if it's not an array, just keep the value as it is
        value = recipe[i];
    }

    //optional head letter ///// .charAt(0) -  RETURNS JUST ONE SIGN
    let head = i.charAt(0).toUpperCase() + i.slice(1);
    
    console.log(head + ": " + value);
} 
