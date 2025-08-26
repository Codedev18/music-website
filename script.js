let box = document.getElementById("box");
let pos = 0;

function animateBox() {
  if (pos >= 300) return;
  pos++;
  box.style.left = pos + "px";
  requestAnimationFrame(animateBox);
}

box.addEventListener("click", animateBox);
