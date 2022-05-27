
function phCalculator(ph) { 
  let result;

  if (ph >= 0 && ph < 7) {
    result = "acidic";
  } else if (ph > 7 && ph <= 14) {
    result = "basic";
  } else if (ph === 7) {
    result = "neutral";
  } else {
    result = "invalid";
  }

  return result;
}

function isDrinkable(phValue) {
  const solutionType = phCalculator(phValue);

  if ( solutionType === "neutral") {
    return "Drinkable"
  }
  
  return "Poisonous";
}

const someSolution = 7;
isDrinkable(someSolution)



