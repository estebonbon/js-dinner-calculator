// Write your JavaScript below this line
var mealCost = Number(prompt("Cost of meal is $$$ ex ($25.99)"));

var tip = Number(prompt("Input a decimal value for the tip i.e (0.15 is 15%)"));

var tipAmount = mealCost * tip;

var total = mealCost + tipAmount;

var numOfPeople = Number(
  prompt("Input the number of people, the minimum is 1")
);

console.log(
  `Your meal cost is $${mealCost}, and with the tip it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);
