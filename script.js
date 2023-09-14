const formField = document.querySelector(".form-field");
const emailInput = document.forms["form-field"]["email"];
const nameInput = document.forms["form-field"]["fullName"];
const massageInput = document.forms["form-field"]["massage"];

function nameValidation(name) {
  let nameRegex = /^[a-zA-Z\u0590-\u05FF\u200f\u200e ]+$/;
  return name.match(nameRegex);
}
function emailValidation(email) {
  let emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return email.match(emailRegex);
}
function massageValidation(massage) {
  let massageRegex = /^[a-zA-Z\u0590-\u05FF\u200f\u200e ]{10,60}$/;
  return massage.match(massageRegex);
}

function formValidation(e) {
  const name = document.forms["form-field"]["fullName"].value;
  const email = document.forms["form-field"]["email"].value;
  const massage = document.forms["form-field"]["massage"].value;
  e.preventDefault();

  if (!nameValidation(name)) {
    nameInput.style.borderColor = "red";
    return;
  } else {
    nameInput.style.borderColor = "#FDBD03";
  }
  if (!emailValidation(email)) {
    emailInput.style.borderColor = "red";
    return;
  } else {
    emailInput.style.borderColor = "#FDBD03";
  }
  if ((massage.length = 0 || !massageValidation(massage))) {
    massageInput.style.borderColor = "red";
    return;
  } else {
    massageInput.style.borderColor = "#FDBD03";
  }
  document.querySelector(".confirmation-message").style.display = "block";
  nameInput.value = "";
  emailInput.value = "";
  massageInput.value = "";
}

formField.addEventListener("click", formValidation);
