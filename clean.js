// Using Var instead of const as a variable
// const would have been a better option istead of var in this case.
var budget = [
  { value: 250, description: "Sold old TV 📺", user: "david" },
  { value: -45, description: "Groceries 🥑", user: "david" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "david" },
  { value: 300, description: "Freelancing 👩‍💻", user: "david" },
  { value: -1100, description: "New iPhone 📱", user: "david" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "david" },
];

// Use explanatory variables (Bad Example Here)
// I could change the variable name to a more descriptive one so the code is easier to read.
var limits = {
  david: 1500,
  matilda: 100,
};

var add = function (value, description, user) {
  if (!user) user = "david";
  user = user.toLowerCase();

  // Using deafault parameters instead of short circuiting or conditionals.
  // A ternary operator can be use here instead of these if and else statements.
  var lim;
  if (limits[user]) {
    lim = limits[user];
  } else {
    lim = 0;
  }

  // Unnecesarry repetition here
  // The code will still work thesame without repetition with help of the enhance object literal syntax because the property name is thesame as the variable name.
  if (value <= lim) {
    budget.push({ value: -value, description: description, user: user });
  }
};

add(10, "Pizza 🍕");
add(100, "Going to movies 🍿", "Matilda");
add(200, "Stuff", "Jay");
console.log(budget);

// Function name should say what they do

// Could have used a better name here for the function.
// A ternary operator can be use here instead of these if and else statements.

var check = function () {
  for (var entry of budget) {
    var lim;
    if (limits[entry.user]) {
      lim = limits[entry.user];
    } else {
      lim = 0;
    }

    if (entry.value < -lim) {
      entry.flag = "limit";
    }
  }
};
check();

// Remove duplicated code
// could have removed duplicated code by creating a user function.
console.log(budget);

var bigExpenses = function (limit) {
  var output = "";
  for (var entry of budget) {
    if (entry.value <= -limit) {
      output += el.description.slice(-2) + " / ";
    }
  }
  output = output.slice(0, -2);
  console.log(output);
};
