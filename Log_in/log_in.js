let username = document.getElementById("username");
let password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loginValidation();
});

function loginValidation() {
  let usernameValue = username.value.trim();
  let passwordValue = password.value;

  if (usernameValue === "") {
    document.getElementById("username-required").style.display = "block";
  } else {
    document.getElementById("username-required").style.display = "none";
  }

  if (passwordValue === "") {
    document.getElementById("password-required").style.display = "block";
  } else {
    document.getElementById("password-required").style.display = "none";
  }
}
