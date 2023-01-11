
//get user input total number and the elemnts
function total_element() {
  let total = prompt(`Give total number of elements`);
  let num_list = [];
  for (let i = 0; i < total;i++) {
    let num = prompt(`Enter number ${i + 1}`);
    num_list.push(parseFloat(num)); //'parseFloat' return the number to the array,
                                  // otherwise javascpt confused with string or number 
  }
  return num_list;
}


// take 'a' or 'd' as an argument
let alphabet = () => { // used arrow function
    alp_input = prompt("Type 'a' or 'd'");
    return alp_input; 
}

// sort the given array according to 'a' or 'd' 
function sorted_order(myarr, letter = "a") {
  if (letter === "a") {
    return asending(myarr);
  } else if (letter === "d") {
    return desending(myarr);
  }
  //return myarr;
}


// sort in asending order
function asending(arry) {
  let temp = 0;
  for (let i = 0; i < arry.length; i++) {
    for (let j = i + 1; j < arry.length; j++) {
      if (arry[i] > arry[j]) {
        temp = arry[i];
        arry[i] = arry[j];
        arry[j] = temp;
      }
    }
  }
  return `Sorted asending List: ${arry}`;
}

// sort in desending order

function desending(arry) {
  var temp = 0;
  for (let i = 0; i < arry.length; i++) {
    for (let j = i + 1; j < arry.length; j++) {
      if (arry[i] < arry[j]) {
        temp = arry[j];
        arry[j] = arry[i];
        arry[i] = temp;
      }
    }
  }
  return `Sorted desending List: ${arry}`;
}
//call the function with argument list and 
alert(sorted_order(total_element(),alphabet()));
