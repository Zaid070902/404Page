let body = document.querySelector("body");

window.addEventListener("load", () => {
  let hole = document.createElement("div");
  hole.classList.add("hole");
  body.appendChild(hole);

  setTimeout(() => {
    let hole1 = document.createElement("div");
    hole1.classList.add("hole1");
    body.appendChild(hole1);
  }, 1000);

  setTimeout(() => {
    let hole2 = document.createElement("div");
    hole2.classList.add("hole2");
    body.appendChild(hole2);
  }, 1500);

  setTimeout(() => {
    let particle1 = document.createElement("div");
    particle1.classList.add("particle1");
    body.appendChild(particle1);
  }, 2000);

  setTimeout(() => {
    let particle2 = document.createElement("div");
    particle2.classList.add("particle2");
    body.appendChild(particle2);
  }, 2000);

  setTimeout(() => {
    let particle3 = document.createElement("div");
    particle3.classList.add("particle3");
    body.appendChild(particle3);
  }, 2500);

  setTimeout(() => {
    let particle4 = document.createElement("div");
    particle4.classList.add("particle4");
    body.appendChild(particle4);
  }, 2500);

  setTimeout(() => {
    let head = document.createElement("h1");
    head.classList.add("h1");
    head.innerText = "404";
    body.appendChild(head);
  }, 3000);
});

let iris1 = document.querySelector(".iris1");
let iris2 = document.querySelector(".iris2");
let positions = ["20%", "-20%", "0%"];

setInterval(() => {
  let p1 = positions[Math.floor(Math.random() * positions.length)];
  let p2 = positions[Math.floor(Math.random() * positions.length)];

  iris1.style.transition = "1s";
  iris1.style.transform = `translate(${p1},${p2})`;
}, 3000);

setTimeout(() => {
  setInterval(() => {
    let p1 = positions[Math.floor(Math.random() * positions.length)];
    let p2 = positions[Math.floor(Math.random() * positions.length)];

    iris2.style.transition = "1s";
    iris2.style.transform = `translate(${p2},${p1})`;
  }, 3000);
}, 1500);
