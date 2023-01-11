let user_name = prompt("type user name:")
let password = prompt("type password:")


function accountLogin(name,password,action){ //callback func  checkAccount inside 'action'
  //???alert(action);
  return action(name,password);
}


//------checking for account credientials-----
let checkAccount = (user_name,password)=>{ //arrow function, normal defination would be, function checkAccount(user_name,password){}
  if (user_name === "Ahsan" && password == 12345){
    correct_ans();
  }else{
    wrong_ans();
  }
}

//------correct answer's output-----
let correct_ans = ()=> {
    let today = new Date(); 
    alert(`Welcome! Today is ${today}`) 

}
//------wrong answer's output-----
let wrong_ans = ()=>{
    alert("Please type the correct username or password");
  }

//--------calling final output-----------
accountLogin(user_name,password,checkAccount);
// why i must call this function at the end??? it doesn't work otherwise solution: because 'checkAccount' function expression , and we save it inside the variable and variable can not be called before it is declared (compare with function)  

