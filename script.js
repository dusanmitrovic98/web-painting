const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 5;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [
    e.clientX - canvas.offsetLeft,
    e.clientY - canvas.offsetTop,
  ];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

function draw(e) {
  if (!isDrawing) return;
  context.strokeStyle = document.getElementById("colorPicker").value;
  context.lineWidth = document.getElementById("brushSize").value;

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  context.stroke();

  [lastX, lastY] = [
    e.clientX - canvas.offsetLeft,
    e.clientY - canvas.offsetTop,
  ];
}

document.getElementById("clearButton").addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById("bgColorPicker").addEventListener("input", (e) => {
  canvas.style.backgroundColor = e.target.value;
});

undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
