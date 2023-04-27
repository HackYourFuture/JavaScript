const myRecipe = {
    title: 'Omelette',
    servings: 2,
    ingredients: ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper'],
};

for (let item in myRecipe) {
    if (item == 'title') {
        console.log(`Meal name: ${myRecipe[item]}`);
    } else if (item == 'servings') {
        console.log(`Serves: ${myRecipe[item]}`);
    } else {
        const ingredientList = myRecipe[item];

        console.log(`Ingedients: ${ingredientList.join(', ')}`);
    }
} 