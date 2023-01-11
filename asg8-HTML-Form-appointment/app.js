

// -------------showing the error messages if empty----------
//------for appointment--------
function errorMsg(){
    let errAppointment = document.getElementById("errAppointment")
    if (document.getElementById('appointment').value == ''){
        errAppointment.textContent = " Please enter a appointment title!"
        errAppointment.style.color = "red"
    }else{
        errAppointment = document.getElementById("errAppointment");
        errAppointment.style.display='none';        
    }
//---------for location---------
    let errLocation = document.getElementById("errLocation")
    if (document.getElementById('location').value == ''){
        errLocation.textContent = " Please enter a location!"
        errLocation.style.color = "red"
    }else{
        errLocation = document.getElementById("errLocation");
        errLocation.style.display='none';        
    }
//---------for Date-----------
    let errDate = document.getElementById("errDate")
    if (document.getElementById('date').value == ''){
        errDate.textContent = " Please enter a date!"
        errDate.style.color = "red"
    }else{
        errDate = document.getElementById("errDate");
        errDate.style.display='none';        
    }
//---------for participant---------
    let errParticipant = document.getElementById("errParticipant")
    if (document.getElementById('participant').value == ''){
        errParticipant.textContent = " Please enter a participant name!"
        errParticipant.style.color = "red"
    }else{
        errParticipant = document.getElementById("errParticipant");
        errParticipant.style.display='none';        
    }
}
// -------------clearing the table content---------------
function clearData(){
    document.getElementById("summary").innerHTML= "";
}

//--------- function to loop through form values ---------
function displayData() {
   const form = document.forms["reg_form"];
   //console.log(Array.from(form)); //to check array
    let formData = "<tr>";
     for (let i = 0; i <form.length - 3;i++)// -1 to -3 is accepted coz last 3 is button
     {
       formData += "<td style='text-align:left;'>" + form.elements[i].value + "</td>";
    }
    formData+="</tr>";
    document.getElementById("summary").innerHTML+=formData;
    //console.log(formData)
  
    }