let name = prompt("What is your name:");
let height = prompt("Height:", "cm");
let weight = prompt("Weight:", "kg");
let bmi = ((weight * 10000) / height ** 2).toFixed(2);
let bodyshape = "";

if (bmi < 19) {
  bodyshape = "Underweight";
} else if (bmi <26) {
  bodyshape = "Normal Range";
} else if (bmi < 31) {
  bodyshape = "Overweight";
} else{
  bodyshape = "obese";
}

alert(`Your BMI: ${bmi} and \n You are ${bodyshape}`);
