let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let name_ch = " -";

//taking the valid first name
var input_FirstName = prompt("First name: ");
while (!validFnam()) {
  input_FirstName = prompt("Enter valid First Name:");
}
alert(validFnam());

//Validating the First name
function validFnam() {
  let first_name = "";
  for (var ch of input_FirstName) {
    if (letters.includes(ch) || name_ch.includes(ch)) {
      first_name += ch;
    }
  }
  if (input_FirstName === first_name) {
    return true;
  }
}

//taking the valid last name
var input_LastName = prompt("Last name: ");
while (!validLnam()) {
  input_LastName = prompt("Enter valid Last Name:");
}
alert(validLnam());

//Validating the Last name
function validLnam() {
  let last_name = "";
  for (let ch of input_LastName) {
    if (letters.includes(ch) || name_ch.includes(ch)) {
      last_name += ch;
    }
  }
  if (input_LastName === last_name) {
    return true;
  }
}

//taking the valid email
let email = prompt("Enter your email");

while (!ValidEmail(email)) {
  email = prompt("Enter a valid email");
}
alert(ValidEmail(email));

//Validating the Email
function ValidEmail(email) {
  const emailRegex = /^[a-zA-Z-_@.]*$/;
  let result = emailRegex.test(email);
  if ((result = true && email.includes("@"))) {
    return true;
  }
}

//Final output
alert(
  `Registration data:>\nName : ${input_FirstName}\nSurname : ${input_LastName} \nEmail: ${email}`
);
