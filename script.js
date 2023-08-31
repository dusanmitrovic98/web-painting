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
