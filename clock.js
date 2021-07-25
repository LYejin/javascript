const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = string(date.getHours()).padStart(2, "0");
  const minutes = string(date.getMinutes()).padStart(2, "0");
  const seconds = string(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);
//padStart, padEnd
