
// GROCERIES = name, file (filename without .png), x, y, w, h, co2

const GROCERY_DATA = [
  // Fruit & veg
  { name: "Apple",      file: "apple",      x: 750, y: 300, w: 60,  h: 60,  co2: 0.61 },
  { name: "Banana",     file: "banana",     x: 550, y: 386, w: 80,  h: 60,  co2: 1.02 },
  { name: "Avocado",    file: "avocado",    x: 610, y: 310, w: 70,  h: 50,  co2: 0.73 },
  { name: "Cucumber",   file: "cucumber",   x: 440, y: 310, w: 120, h: 50,  co2: 0.14 },
  { name: "Carrot",     file: "carrot",     x: 340, y: 380, w: 120, h: 90,  co2: 0.27 },
  { name: "Watermelon", file: "watermelon", x: 722, y: 400, w: 90,  h: 90,  co2: 1.20 },
  // Dry goods
  { name: "Toast",      file: "toast",      x: 540, y: 173, w: 60,  h: 70,  co2: 0.81 },
  { name: "Ryebread",   file: "rugbr",      x: 425, y: 177, w: 98,  h: 50,  co2: 1.02 },
  { name: "Chips",      file: "chips",      x: 850, y: 250, w: 57,  h: 60,  co2: 0.74 },
  { name: "Cookies",    file: "cookie",     x: 610, y: 255, w: 95,  h: 45,  co2: 0.73 },
  { name: "Baguette",   file: "baguette",   x: 225, y: 350, w: 60,  h: 160, co2: 0.81 },
  { name: "Nutella",    file: "nutella",    x: 732, y: 250, w: 50,  h: 60,  co2: 1.57 },
  { name: "Oreo",       file: "oreo",       x: 420, y: 260, w: 83,  h: 34,  co2: 4.70 },
  { name: "Ramen",      file: "ramen",      x: 850, y: 180, w: 53,  h: 53,  co2: 0.65 },
  { name: "Cornflakes", file: "cornflakes", x: 680, y: 173, w: 63,  h: 73,  co2: 1.74 },
  // Refrigerated
  { name: "Chicken",    file: "chicken",    x: 185, y: 240, w: 55,  h: 65,  co2: 4.91 },
  { name: "Cheese",     file: "cheese",     x: 150, y: 317, w: 60,  h: 60,  co2: 1.08 },
  { name: "Oatmilk",    file: "oatmilk",   x: 168, y: 168, w: 35,  h: 59,  co2: 0.40 },
  { name: "Milk",       file: "milk",       x: 102, y: 170, w: 33,  h: 55,  co2: 0.50 },
  { name: "Eggs",       file: "eggs",       x: 150, y: 370, w: 55,  h: 55,  co2: 0.58 },
  // Drinks
  { name: "Wine",       file: "wine",       x: 330, y: 60,  w: 32,  h: 100, co2: 1.24 },
  { name: "Soda",       file: "soda",       x: 130, y: 97,  w: 40,  h: 70,  co2: 0.88 },
  { name: "Beer",       file: "beer",       x: 180, y: 100, w: 40,  h: 65,  co2: 0.22 },
  { name: "Water",      file: "water",      x: 77,  y: 99,  w: 30,  h: 70,  co2: 0.28 },
  // Other
  { name: "Flowers",    file: "flowers",    x: 690, y: 82,  w: 110, h: 70,  co2: 10.4 },
];


// PLANTS = id, x, y, w, h
const PLANT_DATA = [
  { id: "plant1", x: 440, y: 50, w: 100, h: 120 },
  { id: "plant2", x: 515, y: 45, w: 110, h: 130 },
  { id: "plant3", x: 790, y: 35, w: 100, h: 150 },
  { id: "plant4", x: 870, y: 75, w: 110, h: 110 },
];