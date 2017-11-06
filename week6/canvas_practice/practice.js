document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 400;
  canvasEl.height = 400;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 400);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
});
