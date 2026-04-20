
let boardarray =  [{ x: 0, y: 0, weight: 0.0875 },
  { x: 0, y: 1, weight: 0.13 },
  { x: 0, y: 2, weight: 0.14250000000000002 },
  { x: 0, y: 3, weight: 0.14250000000000002 },
  { x: 0, y: 4, weight: 0.145 },
  { x: 0, y: 5, weight: 0.145 },
  { x: 0, y: 6, weight: 0.145 },
  { x: 0, y: 7, weight: 0.145 },
  { x: 0, y: 8, weight: 0.145 },
  { x: 0, y: 9, weight: 0.1325 },
  { x: 0, y: 10, weight: 0.0875 },
  { x: 1, y: 0, weight: 0.125625 },
  { x: 1, y: 1, weight: 0.185 },
  { x: 1, y: 2, weight: 0.1975 },
  { x: 1, y: 3, weight: 0.20500000000000002 },
  { x: 1, y: 4, weight: 0.21750000000000003 },
  { x: 1, y: 5, weight: 0.225 },
  { x: 1, y: 6, weight: 0.225 },
  { x: 1, y: 7, weight: 0.225 },
  { x: 1, y: 8, weight: 0.2225 },
  { x: 1, y: 9, weight: 0.205 },
  { x: 1, y: 10, weight: 0.1325 },
  { x: 2, y: 0, weight: 0.11374999999999999 },
  { x: 2, y: 1, weight: 0.135625 },
  { x: 2, y: 2, weight: 0.145 },
  { x: 2, y: 3, weight: 0.1575 },
  { x: 2, y: 4, weight: 0.215 },
  { x: 2, y: 5, weight: 0.24 },
  { x: 2, y: 6, weight: 0.2475 },
  { x: 2, y: 7, weight: 0.2475 },
  { x: 2, y: 8, weight: 0.24500000000000002 },
  { x: 2, y: 9, weight: 0.22249999999999998 },
  { x: 2, y: 10, weight: 0.143125 },
  { x: 3, y: 0, weight: 0.1190625 },
  { x: 3, y: 1, weight: 0 },
  { x: 3, y: 2, weight: 0 },
  { x: 3, y: 3, weight: 0 },
  { x: 3, y: 4, weight: 0.175 },
  { x: 3, y: 5, weight: 0.23500000000000001 },
  { x: 3, y: 6, weight: 0.2475 },
  { x: 3, y: 7, weight: 0.25 },
  { x: 3, y: 8, weight: 0.24500000000000002 },
  { x: 3, y: 9, weight: 0.21687499999999998 },
  { x: 3, y: 10, weight: 0.13374999999999998 },
  { x: 4, y: 0, weight: 0.38984375000000004 },
  { x: 4, y: 1, weight: 0.18031250000000001 },
  { x: 4, y: 2, weight: 0.1475 },
  { x: 4, y: 3, weight: 0.15999999999999998 },
  { x: 4, y: 4, weight: 0.21749999999999997 },
  { x: 4, y: 5, weight: 0.3175 },
  { x: 4, y: 6, weight: 0.25 },
  { x: 4, y: 7, weight: 0.2425 },
  { x: 4, y: 8, weight: 0.221875 },
  { x: 4, y: 9, weight: 0.18249999999999997 },
  { x: 4, y: 10, weight: 0.095 },
  { x: 5, y: 0, weight: 0.1803125 },
  { x: 5, y: 1, weight: 0.20500000000000002 },
  { x: 5, y: 2, weight: 0.2225 },
  { x: 5, y: 3, weight: 0.22999999999999998 },
  { x: 5, y: 4, weight: 0.3175 },
  { x: 5, y: 5, weight: 0.8125 },
  { x: 5, y: 6, weight: 0.3175 },
  { x: 5, y: 7, weight: 0.215625 },
  { x: 5, y: 8, weight: 0.14875 },
  { x: 5, y: 9, weight: 0.0975 },
  { x: 5, y: 10, weight: 0 },
  { x: 6, y: 0, weight: 0.14500000000000002 },
  { x: 6, y: 1, weight: 0.2225 },
  { x: 6, y: 2, weight: 0.24500000000000002 },
  { x: 6, y: 3, weight: 0.2475 },
  { x: 6, y: 4, weight: 0.25 },
  { x: 6, y: 5, weight: 0.3225 },
  { x: 6, y: 6, weight: 0.23500000000000001 },
  { x: 6, y: 7, weight: 0.175 },
  { x: 6, y: 8, weight: 0 },
  { x: 6, y: 9, weight: 0 },
  { x: 6, y: 10, weight: 0 },
  { x: 7, y: 0, weight: 0.14500000000000002 },
  { x: 7, y: 1, weight: 0.225 },
  { x: 7, y: 2, weight: 0.2475 },
  { x: 7, y: 3, weight: 0.25 },
  { x: 7, y: 4, weight: 0.25 },
  { x: 7, y: 5, weight: 0.25 },
  { x: 7, y: 6, weight: 0.2425 },
  { x: 7, y: 7, weight: 0.21749999999999997 },
  { x: 7, y: 8, weight: 0.15812500000000002 },
  { x: 7, y: 9, weight: 0.13125 },
  { x: 7, y: 10, weight: 0.081875 },
  { x: 8, y: 0, weight: 0.14500000000000002 },
  { x: 8, y: 1, weight: 0.2225 },
  { x: 8, y: 2, weight: 0.24500000000000002 },
  { x: 8, y: 3, weight: 0.2475 },
  { x: 8, y: 4, weight: 0.2475 },
  { x: 8, y: 5, weight: 0.2475 },
  { x: 8, y: 6, weight: 0.2475 },
  { x: 8, y: 7, weight: 0.24 },
  { x: 8, y: 8, weight: 0.225 },
  { x: 8, y: 9, weight: 0.19875000000000004 },
  { x: 8, y: 10, weight: 0.12875 },
  { x: 9, y: 0, weight: 0.1325 }]; 
  
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



