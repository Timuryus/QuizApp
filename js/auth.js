const $email = document.querySelector(".email");
const $password = document.querySelector(".password");
const $SignIn = document.querySelector(".SignIn");

window.addEventListener("load", () => {
  if (!localStorage.getItem("auth")) {
    localStorage.setItem("auth", "false");
    window.location.reload();
  } else if (localStorage.getItem("auth") === "true") {
    window.open("./index.html", "_self");
  }
});

$SignIn.addEventListener("click", (e) => {
  e.preventDefault();

  if ($email.value === "admin" && $password.value === "admin") {
    localStorage.setItem("auth", "true");
  } else {
    $email.setAttribute("style", "border: 2px solid red");
    $password.setAttribute("style", "border: 2px solid red");
    $email.setAttribute("style", "background-color: red");
    $password.setAttribute("style", "background-color: red");
    $email.setAttribute("placeholder", "Неверный логин");
    $password.setAttribute("placeholder", "Неверный пароль");
    setInterval(window.location.reload(), 1);
  }
});
