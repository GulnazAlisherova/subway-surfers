function moveLeft() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left -= 100;
  character.style.left = left + "px";
}
function moveRight() {
  let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  left += 100;
  character.style.left = left + "px";
}
document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") { moveLeft(); }
  if (event.key === "ArrowRight") { moveRight(); }
});