// const firstName = "Mary Beth";
// const lastName = "Hunter";
const favoriteFood = "oatmeal";
// let favoriteNumber = 4;
// const likesToRead = true;

// favoriteNumber += 3;
// favoriteNumber = favoriteNumber + 3;

// console.log(typeof favoriteFood);
// console.log(typeof favoriteNumber);

const whatFoodDoILike = () => {
  if (favoriteFood === "hot dogs" || favoriteFood.toUpperCase() === "OATMEAL") {
    console.log("You like hot dogs!");
  } else {
    console.log("You like something else!");
  }
}

whatFoodDoILike();

const myFunction = (num) => {
  console.log(`Your argument was: ${num + 1}`);
}

myFunction(7);
