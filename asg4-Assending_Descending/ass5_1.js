
//-----taking user input----------------
let question = prompt("Please type 'a' for Assending order and 'd' for Desending order")
function total_element() {
  let myarr = [];
  let total = prompt(`Give total number of elements`);
  for (let i = 0; i < total;i++) {
    let num = prompt(`Enter number ${i + 1}`);
    myarr.push(parseFloat(num));
  }
  return myarr;  
}

//--------printing final output------------?????


// take inputs and perform action using callback function
function sorting_question(question,sortin_a_or_d){ //'check_sorted' takes 2 parameter a string & a func expression 
    return sortin_a_or_d(question);            //'sorting' as action which is called callback function
}
// -------sorting the myarr based on question----------
let sorting_a_or_d =(question)=>{ 
      if (question === 'a'){
        return asending(total_element());
          }
      else if(question === 'd'){
        return desending(total_element());
          }
      }
//--------calling final output------------
alert(sorting_question(question,sorting_a_or_d)); // function expression  sorting 




// -----------------assending and desending function-----------
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
  