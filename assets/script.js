let body = document.querySelector("body");
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(Chelsea);
  const obj = {
    username: username.value,
    password: password.value,
  };
  window.localStorage.setItem("obj", JSON.stringify(obj));
});
let newObject = window.localStorage.getItem("obj");
let user = JSON.parse(newObject);

if (newObject) {
  username.value = user.username;
  password.value = user.password;
}
