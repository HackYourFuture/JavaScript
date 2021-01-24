const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const removeLemons = (fruitList) => {
    const fruitListWithoutLemons = fruitList.filter(fruit => fruit !== 'Lemon');

    return `My mom bought me a fruit basket, container ${fruitListWithoutLemons.join(', ')}!`;
}

console.log(removeLemons(fruitBasket));
