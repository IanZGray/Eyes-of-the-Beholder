const beholder = document.getElementsByClassName("container");
const balls = document.getElementsByClassName("ball");
const mouseTracking = document.onmousemove = () => {
  let a = (event.clientX * 4) / window.innerWidth + "%";
  let b = (event.clientY * 4) / window.innerHeight + "%";
  beholder[0].style.left = a;
  beholder[0].style.top = b;

  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 8; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
  }
};