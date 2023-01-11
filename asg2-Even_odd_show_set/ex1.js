
num1 = prompt("Number 1:");
num2 = prompt("Number 2:");
const even_ls =[];

function even(num1,num2){
if (num1 < num2) {
  for (i = num1; i < num2; i++) {
    if (i % 2 == 0) {
      even_ls.push(i);
    }
  }
} else {
  for (i = num2; i < num1; i++) {
    if (i % 2 == 0) {
      even_ls.push(i)
    }
  }  
}
return(`Even: ${even_ls}`);
}

alert(even(num1,num2));