function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);
  drawHeatmap();
}
let cellSize = 40




  // <-- paste your boardarray here


// ---------------- DRAW HEATMAP ----------------

function drawHeatmap() {
  let weights = boardarray.map(c => c.weight);
  let maxW = Math.max(...weights);
  let minW = Math.min(...weights);

  for (let cell of boardarray) {
    let norm = (cell.weight - minW) / (maxW - minW + 0.0001);

    // Heatmap color: red → yellow → green
    let r = 255 * (1 - norm);
    let g = 255 * norm;

    fill(r, g, 0);
    stroke(40);

    rect(
      cell.x * cellSize,
      height - (cell.y + 1) * cellSize,
      cellSize,
      cellSize
    );

    // Weight text
    fill(0);
    textSize(cellSize / 4);
    textAlign(CENTER, CENTER);
    text(
      cell.weight.toFixed(2),
      cell.x * cellSize + cellSize / 2,
      height - (cell.y + 0.5) * cellSize
    );
  }
}



