var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Ingredients using a while loop:");
var index = 0;
while (index < ingredients.length) {
  console.log(ingredients[index]);
  index++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\nIngredients using a for loop:");
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nIngredients printed backwards using a while loop:");
var i = ingredients.length - 1;
while (i >= 0) {
  console.log(ingredients[i]);
  i--;
}

console.log("\nIngredients printed backwards using a for loop:");
for(i = (ingredients.length - 1); i >= 0; i--) {
  console.log(ingredients[i]);
}
