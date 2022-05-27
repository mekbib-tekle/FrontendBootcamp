
let names = ["tom", "jerry", "cat"];
let prices = [1, 4, 6, 3, 8];

names[1]
prices[0]

let items = [
  {
    name: "bread",
    completed: true,
  }, 
  {
    name: "coffee",
    completed: false,
  }, 
  {
    name: "bacon",
    completed: false,
  }
];



function addNewItem(newItem) {
  if (newItem) {

  }

  items.add(newItem);

  return items;
}

function addToList(item) {
  // loop through the items
  // i find the item passed here as a param
  // i will mark it as to-buy
}

function markAsPurchased(item) {

}

function editItem(item) {

}

function removeItem(item) {

}

function clearList() {

}

function getPurchasedItems() {
  // let purchasedItems = ...;
  //......
  return purchasedItems;
}

function clearCompletedItems(items) {
  if (items.length === 0) {
    return [];
  }
  
  const newArray = [];
  for (i = 0; i < items.length - 1; i++) {
    if (!items[i].completed) {
      newArray.push(items[i]);
    }
  }
  return newArray;
}