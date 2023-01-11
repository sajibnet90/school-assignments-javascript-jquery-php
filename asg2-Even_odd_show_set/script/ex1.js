let num1, num2;
num1 = prompt("Number 1:");
num2 = prompt("Number 2:");
const even =[]
if (num1 < num2) {
  for (i = num1; i < num2; i++) {
    if (i % 2 == 0) {
      even.push(i);
    }
  }
} else {
  for (i = num2; i < num1; i++) {
    if (i % 2 == 0) {
      even.push(i)
    }
  }  
}
alert(`Even: ${even}`);