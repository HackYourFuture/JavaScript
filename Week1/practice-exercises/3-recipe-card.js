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

let meal = {
    title: "Omelette",
    servings: 2,
    ingredients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"]
}

for(let recipe in meal){
    if(recipe == "title"){
        console.log(`Meal name: ${meal[recipe]}`);
    }else if(recipe == "servings"){
        console.log(`Serves: ${meal[recipe]}`);
    }else if(recipe == "ingredients"){
        console.log(`Ingredients: ${meal[recipe].join(", ")}`);
    }
}