"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4*a*c;
  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    arr.push(x1, x2);
  } else if (discriminant == 0) {
    let x = -b / (2*a);
    arr.push(x);
  } else {
    let arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  percent = percent / 100;
  const monthlyInterestRate = percent / 12;
  const creditBody = amount - contribution;
  const payment = creditBody * (monthlyInterestRate + monthlyInterestRate / ((Math.pow((1 + monthlyInterestRate), countMonths)) - 1));
  const totalAmount = Number((payment * countMonths).toFixed(2));
  return totalAmount;
}

  console.log(calculateTotalMortgage(10, 0, 50000, 12).toFixed(2)); // 52749.53
  console.log(calculateTotalMortgage(10, 1000, 50000, 12).toFixed(2)); // 51694.54
  console.log(calculateTotalMortgage(10, 20000, 20000, 24).toFixed(2)); // 0
  console.log(calculateTotalMortgage(10, 0, 10000, 36).toFixed(2)); // 11616.19
  console.log(calculateTotalMortgage(15, 0, 10000, 36).toFixed(2)); // 12479.52