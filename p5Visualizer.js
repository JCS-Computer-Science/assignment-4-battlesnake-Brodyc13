
let boardarray = [{ x: 0, y: 0, weight: 0.75 },
  { x: 0, y: 1, weight: 0.75 },
  { x: 0, y: 2, weight: 0.75 },
  { x: 0, y: 3, weight: 0.875 },
  { x: 0, y: 4, weight: 0 },
  { x: 0, y: 5, weight: 0 },
  { x: 0, y: 6, weight: 0 },
  { x: 0, y: 7, weight: 0 },
  { x: 0, y: 8, weight: 0 },
  { x: 0, y: 9, weight: 0 },
  { x: 0, y: 10, weight: 0 },
  { x: 1, y: 0, weight: 0.75 },
  { x: 1, y: 1, weight: 0.852 },
  { x: 1, y: 2, weight: 0.873 },
  { x: 1, y: 3, weight: 0.8351200000000001 },
  { x: 1, y: 4, weight: 0.5 },
  { x: 1, y: 5, weight: 0.5 },
  { x: 1, y: 6, weight: 0.25 },
  { x: 1, y: 7, weight: 0 },
  { x: 1, y: 8, weight: 0 },
  { x: 1, y: 9, weight: 0 },
  { x: 1, y: 10, weight: 0 },
  { x: 2, y: 0, weight: 0.75 },
  { x: 2, y: 1, weight: 0.8879999999999999 },
  { x: 2, y: 2, weight: 0.95624 },
  { x: 2, y: 3, weight: 1.016184 },
  { x: 2, y: 4, weight: 0.919352 },
  { x: 2, y: 5, weight: 0.74709344 },
  { x: 2, y: 6, weight: 0.5 },
  { x: 2, y: 7, weight: 0 },
  { x: 2, y: 8, weight: 0 },
  { x: 2, y: 9, weight: 0 },
  { x: 2, y: 10, weight: 0 },
  { x: 3, y: 0, weight: 0.75 },
  { x: 3, y: 1, weight: 0.8985599999999998 },
  { x: 3, y: 2, weight: 0.9859600000000001 },
  { x: 3, y: 3, weight: 1.0550112000000003 },
  { x: 3, y: 4, weight: 1.0290121600000002 },
  { x: 3, y: 5, weight: 0.9046936320000001 },
  { x: 3, y: 6, weight: 0.6508332288 },
  { x: 3, y: 7, weight: 0.25 },
  { x: 3, y: 8, weight: 0 },
  { x: 3, y: 9, weight: 0 },
  { x: 3, y: 10, weight: 0.1875 },
  { x: 4, y: 0, weight: 0.75 },
  { x: 4, y: 1, weight: 0.9013919999999999 },
  { x: 4, y: 2, weight: 0.9748064 },
  { x: 4, y: 3, weight: 1.0163472000000002 },
  { x: 4, y: 4, weight: 1.0179765120000002 },
  { x: 4, y: 5, weight: 0.9562094592000001 },
  { x: 4, y: 6, weight: 0.7656912332800001 },
  { x: 4, y: 7, weight: 0.5 },
  { x: 4, y: 8, weight: 0 },
  { x: 4, y: 9, weight: 0.25 },
  { x: 4, y: 10, weight: 0.75 },
  { x: 5, y: 0, weight: 0.75 },
  { x: 5, y: 1, weight: 0.902112 },
  { x: 5, y: 2, weight: 0.9892175999999999 },
  { x: 5, y: 3, weight: 1.00595648 },
  { x: 5, y: 4, weight: 1.0075362304 },
  { x: 5, y: 5, weight: 0.9676341504 },
  { x: 5, y: 6, weight: 0.795673370112 },
  { x: 5, y: 7, weight: 0.5 },
  { x: 5, y: 8, weight: 0 },
  { x: 5, y: 9, weight: 0.5 },
  { x: 5, y: 10, weight: 0.75 },
  { x: 6, y: 0, weight: 0.75 },
  { x: 6, y: 1, weight: 0.9422886399999999 },
  { x: 6, y: 2, weight: 1.03144128 },
  { x: 6, y: 3, weight: 1.0174762624 },
  { x: 6, y: 4, weight: 1.00755176704 },
  { x: 6, y: 5, weight: 0.9705240396799999 },
  { x: 6, y: 6, weight: 0.7731621014528 },
  { x: 6, y: 7, weight: 0.5 },
  { x: 6, y: 8, weight: 0 },
  { x: 6, y: 9, weight: 0.5 },
  { x: 6, y: 10, weight: 0.75 },
  { x: 7, y: 0, weight: 0.75 },
  { x: 7, y: 1, weight: 0.96233088 },
  { x: 7, y: 2, weight: 1.0325570687999999 },
  { x: 7, y: 3, weight: 1.0187665356800002 },
  { x: 7, y: 4, weight: 1.007525488128 },
  { x: 7, y: 5, weight: 0.9211596423168 },
  { x: 7, y: 6, weight: 0.63390491615232 },
  { x: 7, y: 7, weight: 0.25 },
  { x: 7, y: 8, weight: 0 },
  { x: 7, y: 9, weight: 1 },
  { x: 7, y: 10, weight: 0.75 },
  { x: 8, y: 0, weight: 0.75 },
  { x: 8, y: 1, weight: 0.9155407872000001 },
  { x: 8, y: 2, weight: 0.9809950208 },
  { x: 8, y: 3, weight: 0.989979375104 },
  { x: 8, y: 4, weight: 0.9679587509248002 },
  { x: 8, y: 5, weight: 0.8215793912832001 },
  { x: 8, y: 6, weight: 0.5 },
  { x: 8, y: 7, weight: 0 },
  { x: 8, y: 8, weight: 0 },
  { x: 8, y: 9, weight: 0.5 },
  { x: 8, y: 10, weight: 0.75 },
  { x: 9, y: 0, weight: 0.75 },];   // <-- paste your boardarray here
let gameState = {
    game: {
    id: '285565ef-cd4f-46d4-962a-7b043392d646',
    ruleset: { name: 'standard', version: 'v1.2.3', settings: [Object] },
    map: 'standard',
    timeout: 500,
    source: 'custom'
  },
  turn: 108,
  board: {
    height: 11,
    width: 11,
    snakes: [ [Object], [Object] ],
    food: [ [Object], [Object], [Object], [Object], [Object] ],
    hazards: []
  },
  you: {
    id: 'gs_tyDbPvyQhM9QpDBWmwPWjt37',
    name: 'ratsnake',
    latency: '304',
    health: 94,
    body: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    head: { x: 1, y: 9 },
    length: 9,
    shout: '',
    squad: '',
    customizations: { color: '#1c1fc9', head: 'silly', tail: 'curled' }}

}//paste yyour gamestate here

let cellSize;

function setup() {
  createCanvas(600, 600);

  if (!gameState.board) {
    console.error("Paste gameState + boardarray at the top");
    noLoop();
    return;
  }

  cellSize = width / gameState.board.width;
}

function draw() {
  background(20);
  drawHeatmap();
  drawSnakes();
  drawFood();
}

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

// ---------------- DRAW SNAKES ----------------

function drawSnakes() {
  fill(0);

  for (let snake of gameState.board.snakes) {
    for (let seg of snake.body) {
      rect(
        seg.x * cellSize,
        height - (seg.y + 1) * cellSize,
        cellSize,
        cellSize
      );
    }
  }

  // highlight YOUR head
  let head = gameState.you.body[0];
  fill(255);
  rect(
    head.x * cellSize,
    height - (head.y + 1) * cellSize,
    cellSize,
    cellSize
  );
}

// ---------------- DRAW FOOD ----------------

function drawFood() {
  fill(0, 150, 255);

  for (let food of gameState.board.food) {
    ellipse(
      food.x * cellSize + cellSize / 2,
      height - (food.y + 0.5) * cellSize,
      cellSize * 0.5
    );
  }
}