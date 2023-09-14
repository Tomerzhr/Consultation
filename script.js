const formField = document.querySelector(".form-field");
const emailInput = document.forms["form-field"]["email"];
const nameInput = document.forms["form-field"]["fullName"];
const massageInput = document.forms["form-field"]["massage"];
const formBtn = document.querySelector(".formBtn");

formBtn.disabled = true;

nameInput.addEventListener("input", formValidation);
emailInput.addEventListener("input", formValidation);
massageInput.addEventListener("input", formValidation);

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".confirmation-message").style.display = "block";
  nameInput.value = "";
  emailInput.value = "";
});

function nameValidation(name) {
  let nameRegex = /^[a-zA-Zֿֿֿֿ\s]+$/;
  if (nameRegex.test(name.value) === false || name.value === "" || name.value == null || name.value.length < 5) {
    nameInput.style.borderColor = "red";
  } else {
    nameInput.style.borderColor = "#fdbd03";
    return true;
  }
}

function emailValidation(email) {
  let emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (emailRegex.test(email.value) === false || email.value === "" || email.value == null) {
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "#fdbd03";
    return true;
  }
}

function massageValidation(massage) {
  let massageRegex = /^[a-zA-Zֿֿֿֿ\s]+$/;
  if (massageRegex.test(massage.value) === false || massage.value === "" || massage.value == null || massage.value.length < 10) {
    massageInput.style.borderColor = "red";
  } else {
    massageInput.style.borderColor = "#fdbd03";
    return true;
  }
}

function formValidation() {
  if (nameValidation(nameInput) && emailValidation(emailInput) && massageValidation(massageInput)) {
    formBtn.disabled = false;
  }
}
