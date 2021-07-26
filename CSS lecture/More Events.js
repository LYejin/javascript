const h1 = document.querySelector(".hello h1:first-child"); //가능
console.dir(h1);

function handleTitleClick() {
  console.log("title was clicked");
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("All good WIFI");
}

h1.addEventListener("click", handleTitleClick); // 괄호는 안 넣어도 된다.
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
// html heading element = js 관점에서의 html
//title.onclick -> 사용가능 추천 안함

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
