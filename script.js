const mail = document.querySelector(".email-container");
const form = document.querySelector(".sign-up");

form.addEventListener("submit", (e) => {
  console.log("working");
  e.preventDefault();
  mail.value = "";

  validateEmail();
});

const pattern = /^[a-zA-Z0-9][\w]{0,15}@[a-zA-Z]{4,12}\.[a-zA-Z]{3}$/;
const validateEmail = () => {
  const emailVal = mail.value;

  if (emailVal === "") {
    setErrorMsg(mail, "Email address cannot be empty");
  } else if (emailVal.match(pattern)) {
    setErrorMsg(mail, "Thanks to subscribing to our newsletter");
  } else {
    setErrorMsg(mail, "Please provide a valid email address");
  }
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const msg = document.getElementById("error-msg");
  formControl.className = "form-control error";
  msg.textContent = errormsgs;
}
