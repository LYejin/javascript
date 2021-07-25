// user에게 이름 받기
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button"); //문자로 검색?

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); // evemt의 기본  행동 등을 발생되지 않도록 막는다.
  console.log(loginInput.value); // 즉 새로고침을 막고 있다.
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("please write your name");
//   } else if (username.length < 15) {
//     alert("your name is too long.");
//   }
// }

//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
