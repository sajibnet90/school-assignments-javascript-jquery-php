let name = prompt("What is your name:");
let project = confirm("Is project work done?");//confirm is used to get true or false
if (!project){
    alert("You have failed");
}
else {
    var examPoints = prompt("What is your point?");
    grade ='';
    if (examPoints<0 || examPoints>100){
        alert("Data is not valid");}
    else if(examPoints<40){
        grade=0
    }
    else if(examPoints<50){
        grade=1
    }
    else if(examPoints<60){
        grade=2
    }
    else if(examPoints<70){
        grade=3
    }
    else if(examPoints<85){
        grade=4
    }
    else if(examPoints>85){
        grade=5
    }
    alert(`Final garde will be ${grade}`)
}
