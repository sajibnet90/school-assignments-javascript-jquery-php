let firstName = prompt("Enter first name");
const onValidName = (firstName) => {
    const nameRegex = /^[a-zA-Z- ]*$/;
    return nameRegex.test(firstName)
  }
  while (!onValidName(firstName)){
    firstName = prompt("Enter a valid firstName");
  }
   alert(onValidName(firstName));
  
let lastName = prompt("Enter last name"); 
const onValidLastName = (lastName) => {
    const nameRegex = /^[a-zA-Z- ]*$/;
    return nameRegex.test(lastName)
  }
  while (!onValidLastName(lastName)){
    lastName = prompt("Enter a valid lastName");
  }
alert(onValidLastName(lastName));

let email = prompt("Enter your email");
const onValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z-_@.  ]*$/;
    return emailRegex.test(email)
}  
while (!onValidEmail(email)){
    email = prompt("Enter a valid email");
}
alert(onValidEmail(email));
alert(`Registration data:\nName: ${firstName}\nSurname: ${lastName}\nEmail: ${email}`)








