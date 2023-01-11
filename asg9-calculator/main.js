function runCode(event){
    event.preventDefault()
    }

function addData(){
    let num1=0, num2=0;
    // num1=document.forms["add_form"].elements["num1"].value;????
    // num2=document.forms["add_form"].elements["num2"].value;????
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let value=parseFloat(num1) + parseFloat(num2);
    document.getElementById("result1").value=value;
    }

function subData(){
    let num3=0, num4=0;
    num3 = document.getElementById("num3").value;
    num4 = document.getElementById("num4").value;
    let value=parseFloat(num3) - parseFloat(num4);
    document.getElementById("result2").value=value;
    }
function multiData(){
    let num5=0, num6=0;
    num5 = document.getElementById("num5").value;
    num6 = document.getElementById("num6").value;
    let value=parseFloat(num5) * parseFloat(num6);
    document.getElementById("result3").value=value;
    }
        
function divideData(){
    let num7=0, num8=0;
    num7 = document.getElementById("num7").value;
    num8 = document.getElementById("num8").value;
    let value=parseFloat(num7) / parseFloat(num8);
    document.getElementById("result4").value=value;
    }
function moduloData(){
    let num9=0, num10=0;
    num9 = document.getElementById("num9").value;
    num10 = document.getElementById("num10").value;
    let value=parseFloat(num9) % parseFloat(num10);
    document.getElementById("result5").value=value;
    }