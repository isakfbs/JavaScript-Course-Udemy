'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(...otherIngredients);
  },
};

const arr = [2, 3, 4];
//array destructuring
const [x, y, z] = arr;
console.log(x, y, z);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive to return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Destructuring nested arrays

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Destructuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, categories, openingHours);

//Choose diferent names for the variables from properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables trick
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects destructuring
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});

//The Spread Operator
const arr2 = [7, 8, 9];
const badNewArr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join multiple arrays

const joinedArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(joinedArray);

//iterables: arrays, strings, maps, sets. Not Objects

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

//Real world example
// const ingredients = [
//   prompt(`let's make pasta! Ingredients 1?`),
//   prompt(`let's make pasta! Ingredients 2?`),
//   prompt(`let's make pasta! Ingredients 3?`),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);

//106. Rest Pattern and Parameters

const [e, w, ...others] = [1, 2, 3, 4, 5];
console.log(e, w, others);

//real life example
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

const xarr = [2, 3, 5];
add(...xarr);

restaurant.orderPizza('Mushrooms', 'Mozzarela', 'Olives');

//Short circuiting (&& and ||)
console.log('----- Or -----');

console.log(3 || 'Jonas');

restaurant.numGuests = 20;
const guests = restaurant.numGuests || 10;
console.log(guests);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log('hello' && 23 && null && true);

//Pratical example
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
