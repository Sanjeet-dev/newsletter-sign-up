const mail = document.querySelector(".email-container");
const form = document.querySelector(".sign-up");

form.addEventListener("submit", (e) => {
  console.log("working");
  e.preventDefault();

  validateEmail();
});

const pattern = /^[a-zA-Z0-9][\w]{0,15}@[a-zA-Z]{4,12}\.[a-zA-Z]{3}$/;
const emailVal = mail.value;
const validateEmail = () => {
  if (emailVal === "") {
    setErrorMsg(mail, "Email address cannot be empty");
  }
  // } else if (emailVal.match(pattern)) {
  //   setErrorMsg(mail);

  // }
  else {
    setErrorMsg(mail, "Please provide a valid email address");
  }
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const msg = document.getElementById("error-msg");
  formControl.className = "form-control error";
  msg.textContent = errormsgs;
}

const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const btn = document.querySelector(".btn");

btn.addEventListener("submit", (e) => {
  e.preventDefault.default();

  if (mail.value.match(pattern)) {
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
  }
});
