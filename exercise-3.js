function getRecipes() {
  return [{
    name: "salmon soup",
    vegan: false,
    ingredients: [{
        name: "salmon",
        quantity: 1,
      }, {
        name: "cream",
        quantity: 2,
      }, {
        name: "milk",
        quantity: 1,
      }
    ]
  }, {
    name: "carbonara",
    vegan: false,
    ingredients: [{
        name: "pasta",
        quantity: 1,
      }, {
        name: "cheese",
        quantity: 5,
      }, {
        name: "milk",
        quantity: 1,
      }
    ]
  }, {
    name: "rice bowl",
    vegan: false,
    ingredients: [{
        name: "rice",
        quantity: 2,
      }, {
        name: "water",
        quantity: 1,
      }
    ]
  }];
}

// 1. Add a new recipe

// 2. delete a recipe that matches a given name

// 3. add an ingredient to a recipe

// 4. delete an ingredient from a recipe

// 5. get the names of the ingredients of a recipe

// 6. get only vegan recipes

// 7. add a recipe to favorites

// 8. remove a recipe from favorites

// 9. get the list of names of the items in favorites

// 10. edit a recipe - change the name

// 11. edit a recipe - make it vegan / make it non-vegan

// 12. edit a recipe - change the quantity of an ingredient

// 13. search by ingredient name - return all recipes that contain a given ingredient name

// 14. get one recipe by name - return the recipe that matches the exact name of the recipe

// 15. Execute the functions you implemented above as required below
const main = () => {
  const recipes = getRecipes();
  
  const favorites = [];

  // Task: 15.1
  // Add the following recipes to the recipes array using the function from Task-1
  //    Lentil Bolognese, vegan, & Ingredients: 1 lentil; 3 tomatoes; 1 pasta; 1 onion
  //    Ozzo Chicken, non-vegan, & Ingredients: 1 spinach; 1 chicken; 1 sour cream

  // Task: 15.2
  // Delete the recipe named "carbonara" using the function from Task-2

  // Task: 15.3
  // Add ingredient "garlic with quantity: 3" to the recipe "salmon soup"
  // Add ingredient "lentil with quantity: 1" to the recipe "rice bowl"

  // Task: 15.4
  // Delete ingredient named "water" from the recipe "rice bowl"

  // Task: 15.5
  // Get the recipe by the name "Ozzo Chicken" and Add it to favorites
  // Get the recipe by the name "salmon soup" and Add it to favorites
  // Get the recipe by the name "Lentil Bolognese" and Add it to favorites
  
  // Task: 15.6
  // Delete the recipe "Lentil Bolognese" from the favorites

  // Task: 15.7
  // Change the name of the recipe "rice bowl" to "Japanese Rice Bowl"

  // Task: 15.8
  // change "rice bowl" to be vegan

  // Task: 15.9
  // change the quantity of the Ingredient lentil to be 2, in  Lentil Bolognese

  // Task: 15.10
  // call the function you implemented on task-5 to get the list of ingredients of "salmon soup"
  // console.log these Ingredients
  // TEST 1: it should print these ingredients: salmon, cream, milk, garlic

  // Task: 15.11
  // console.log all the vegan recipes
  // TEST 2: It should print the recipe Japanese Rice Bowl

  // Task: 15.12
  // console.log all the recipes that contain the ingredient "lentil"
  // TEST 3: It should print the recipes Japanese Rice Bowl and Lentil Bolognese

  // Task: 15.12
  // console.log the favorites array
  // TEST 4: It should print the recipes "salmon soup" & "Ozzo Chicken"

  // Task: 15.13
  // console.log the recipes array
  // TEST 5: It should print 4 recipes
}


main();


// after executing main(), the recipes array should look like this..
const expectedRecipesArray = [
  {
    name: "salmon soup",
    vegan: false,
    ingredients: [{
        name: "salmon",
        quantity: 1,
      }, {
        name: "cream",
        quantity: 2,
      }, {
        name: "milk",
        quantity: 1,
      }, { // 1. verify ingredient garlic is added
        name: "garlic",
        quantity: 3,
      }]
  }, {
    name: "Japanese Rice Bowl", // 2. verify name change from rice bowl
    vegan: true, // 3. verify that this recipe is vegan
    ingredients: [{
        name: "rice",
        quantity: 2,
      }, {
        name: "lentil", // 4. verify ingredient lentil is added
        quantity: 1,
      }] // 5. verify ingredient water is deleted from rice bowl
  }, { 
    name: "Lentil Bolognese", // 6. verify the recipe lentil bolognese is added
    vegan: true,
    ingredients: [{
        name: "lentil",
        quantity: 2, // 7. verify the quantity of lentil is changed from 1 to 2
      },{
        name: "tomatoes",
        quantity: 3,
      },{
        name: "pasta",
        quantity: 1,
      },{
        name: "onion",
        quantity: 1,
      }
    ]
  }, { // 8. verify the recipe ozzo chicken is added
    name: "Ozzo Chicken",
    vegan: false,
    ingredients: [{
        name: "spinach",
        quantity: 1,
      },{
        name: "chicken",
        quantity: 1,
      },{
        name: "sour cream",
        quantity: 1,
      }
    ]
  }]; // 9. verify that recipe named carbonara is deleted
