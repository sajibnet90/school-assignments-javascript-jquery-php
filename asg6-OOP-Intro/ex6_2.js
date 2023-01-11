
const students= [];
let student = {

    initValues: function (name,id,project,examPoints) {
      this.name = name;
      this.id = id;
      this.project=project;
      this.examPoints = examPoints;
    },

    projectWork: function(){
        if(!this.project)
            return `Not Done and ${this.name} failed the course...`;
        else
            return "Done";
    },

    getGrade: function() {
      let points = parseFloat(this.examPoints);
      let grade = 0;
              if(points<40){
                  grade=0
                  return `${grade} and ${this.name} failed the course..`;
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
    getInfo: function(){
        return ` Name: ${student.name}\n ID: ${student.id}\n Project work: ${student.projectWork()}\n Exam points: ${student.examPoints} \n Grade is: ${student.getGrade()}`;}
  };
  
  //taking values from user
   let studentCount = prompt("How many student?");
   for(let i=0; i<parseInt(studentCount);i++ ){
    let input_name = prompt(`Enter student name:`);
    let id = prompt("Enter student id:");
    let project = confirm("Is project work done?");
    let examPoints = prompt("Enter student exam points","0-100");
    
    student.initValues(input_name,id,project,examPoints);
    students.push(student);
    alert(i+1 + ". Student's course info : "+ "\n" + students[i].getInfo());
   };



   //console.log(students)

    // student.initValues(input_name,id,project,examPoints);
    // students.push(student.getInfo());  // pushing the getInfo()..(its a long string).. of the 'student' to the students[] array
    // alert(i+1 + ". Student's course info : "+ "\n" + students[i]);}; // printing students[index] which have student.getInfo() as string in that index eg:student[0]. there is no object stored inside students[] array

    //--------------see the difference-----------//

    // student.initValues(id,name,exam,project);
    // students.push(student);                                   // pushing "student" object to array "students" eg: student[0],
                                                                //student[1].....so students[] has list of all student objects
    
    // alert(i+1 + ". Student's course info : " + students[i].getInfo()); // printing "students[index]" and calling "getInfo() at that index
  