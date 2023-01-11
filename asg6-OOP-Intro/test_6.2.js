
const students= [];
let student = {

    initValues: function (name,id,project,examPoints) {
      this.name = name;
      this.id = id;
      this.project=project;
      this.examPoints = examPoints;
    },

    projectWork(){
        if(!this.project)
            return "Not Done";
        else
            return "Done";
    },

    getGrade() {
      let points = parseFloat(this.examPoints);
      let grade = 0;
              if(points<40){
                  grade=0
              }
              else if(points >=40 && points<50){
                  grade=1
              }
              else if(points >=50 && points<60){
                  grade=2
              }
              else if(points >=60 && points<70){
                  grade=3
              }
              else if(points >=70 && points<85){
                  grade=4
              }
              else if(points>=85){
                  grade=5
              }
          
          return grade;
      },
    getInfo(){
        return ` Name is: ${student.name}\n ID is: ${student.id}\n Project work: ${student.projectWork()}\n Exam points: ${student.examPoints} \n Grade is: ${student.getGrade()}`;} 
  };
  
  //taking values from user
   let studentCount = prompt("How many student?");
   for(let i=0; i<parseInt(studentCount);i++ ){
    let input_name = prompt(`Enter student name:`);
    let id = prompt("Enter student id");
    let project = confirm("Is project work done?");
    let examPoints = prompt("Enter student exam points");

    student.initValues(input_name,id,project,examPoints);
    students.push(student.getInfo()); //putting strings from getInfo() method one by one to students array as string but not object
   };
   //alert(students[0]);


   //students = [{student[0].getInfo},{student[1].getInfo},]

  
    for (let i = 0; i < parseInt(studentCount); i++) {
      alert(students[i])
    };
  
  