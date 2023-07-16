const form = document.querySelector(".sign-up");
var firstPage = document.getElementById("first-page");
var secondPage = document.getElementById("second-page");
var mail = document.querySelector(".email-container");
var email = mail.value;

form.addEventListener("submit", (e) => {
  console.log("working");
  e.preventDefault();

  //validate - email
  if (validateEmail(email)) {
    firstPage.style.visibility = "hidden";
    secondPage.style.display = "visible";
  } else {
    setErrorMsg("valid email required");
  }
});

function validateEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function setErrorMsg(errormsgs) {
  const msg = document.getElementById("error-msg");
  msg.textContent = errormsgs;
}

function handleDismiss() {
  console.log("dismiss button working");
  secondPage.style.visibility = "hidden";
  firstPage.style.visiblity = "visible";
}
