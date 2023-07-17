// const form = document.querySelector(".sign-up");
// var firstPage = document.getElementById("first-page");
// var secondPage = document.getElementById("second-page");
// var mail = document.querySelector(".email-container");
// var email = mail.value;

const inputEmail = document.querySelector(".email-container");
const dismissBtn = document.querySelector("#dismiss-btn");
const subscribeBtn = document.querySelector("#sub-btn");
const formDiv = document.querySelector("#form-div");
const thanksDiv = document.querySelector("#second-page");
const emailError = document.querySelector(".email-error");

let emailValue = "";

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = inputEmail.value;
  const validEmail = validateEmail(emailValue);
  if (!validEmail) {
    inputEmail.classList.add("email-check");
    emailError.classList.remove("keep-hidden");
    return;
  }
  inputEmail.classList.remove("email-check");
  emailError.classList.add("keep-hidden");
  formDiv.classList.add("keep-hidden");
  thanksDiv.classList.remove("keep-hidden");
  document.querySelector(".user-email").textContent = emailValue;
  inputEmail.value = "";
});

dismissBtn.addEventListener("click", () => {
  thanksDiv.classList.add("keep-hidden");
  formDiv.classList.remove("keep-hidden");
});

function validateEmail(input) {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.match(pattern)) {
    return true;
  } else {
    return false;
  }
}
