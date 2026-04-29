//new move logic using the weighted squares as the logic to determine the best move to make.


export default function move(gameState){
    let moveSafety = {
        up: true,
        down: true,
        left: true,
        right: true
    };

let board = gameState.board
let boardarray = []
function createboardarray(){
    for(let x=0; x<board.width;x++){
        for(let y=0; y<board.height;y++){
            boardarray.push({x:x,y:y,weight:1})
        }
     }
     
}
    
function borderWeight(){
    for(let segment of boardarray){
        
        if(segment.x == 0 || segment.x == board.width-1 || segment.y == 0 || segment.y == board.height-1){
            segment.weight *= .6

    }
}
}

function hazardWeight(){
    let hazards = gameState.board.hazards
    for(let hazard of hazards){
        for(let cell of boardarray){
            if(cell.x == hazard.x && cell.y == hazard.y){
                cell.weight *= .5
            }
        }
    }
        
}




function snakeWeight(){
   let snakes = gameState.board.snakes
    let allSnakes = gameState.board.snakes
    for(let j =0; j<allSnakes.length;j++){
 
        let snake = allSnakes[j].body
         for(let cell of boardarray){

            
                   


        for (let segment of snake) {
            if(allSnakes[j].name != gameState.you.name){if(cell.x == segment.x+1 && cell.y == segment.y){
                    cell.weight *= .4
                }
                if(cell.x == segment.x-1 && cell.y == segment.y){
                    cell.weight *= .4
                }
                if(cell.x == segment.x && cell.y == segment.y+1){
                    cell.weight *= .4
                }
                if(cell.x == segment.x && cell.y == segment.y-1){
                    cell.weight *= .4
                }

                if(cell.x == segment.x && cell.y == segment.y){
                    cell.weight =0
                }}
            if(allSnakes[j].name == gameState.you.name){
                    if(cell.x == segment.x-1 && cell.y == segment.y){
                    cell.weight *= .75
                }
                if(cell.x == segment.x && cell.y == segment.y+1){
                    cell.weight *= .75
                }
                if(cell.x == segment.x && cell.y == segment.y-1){
                    cell.weight *= .75
                }

                if(cell.x == segment.x && cell.y == segment.y){
                    cell.weight =0
                }}
           
            }

            if(
                    (cell.x==snake[0].x+1 && cell.y==snake[0].y 
                    || cell.x== snake[0].x-1 && cell.y==snake[0].y 
                    || cell.x== snake[0].x && cell.y==snake[0].y-1 
                    || cell.x== snake[0].x && cell.y==snake[0].y+1)
                    && (allSnakes[j].name != gameState.you.name)){

                         if(gameState.you.length-2 > allSnakes[j].length){
                        cell.weight *= 3
                        
                        
                    } else{
                        cell.weight *= 0.001
                    }



                    }

        }


    }
}

function foodWeight(){
    let myhead = gameState.you.body[0]
    let hazards = gameState.board.hazards
    let foods = gameState.board.food
    let multiplier =2
    if(gameState.you.health <= 50){
        multiplier +=1
    }
    if(gameState.turn >100){
        multiplier/=2
    }
    for(let hazard of hazards){
        if(myhead.x == hazard.x && myhead.y == hazard.y){
            multiplier *= 2
            
        }
    }
    
    for(let food of foods){
        for(let cell of boardarray){
            if(cell.x == food.x && cell.y == food.y){
                cell.weight *= multiplier
            }
        }
    }
}

function floodFill(startX, startY) {
    let visited = new Set();
    let stack = [{ x: startX, y: startY }];
    let count = 0;

    function key(x, y) {
        return `${x},${y}`;
    }

    function isBlocked(x, y) {
        // Out of bounds
        if (x < 0 || y < 0 || x >= board.width || y >= board.height) {
            return true;
        }

        // Check snakes
        for (let snake of gameState.board.snakes) {
            for (let segment of snake.body) {
                if(segment.x===snake.body[snake.length-1].x && segment.y===snake.body[snake.length-1].y){
                    if(snake.body[snake.length-1].x===x && snake.body[snake.length-1].y===y){
                        return false
                    }
                }
                
                if (segment.x === x && segment.y === y) {
                    return true;
                }
                
            }
            
        }

        return false;
    }
    function neighbors(x, y) {
        return [
            { x: x + 1, y: y },
            { x: x - 1, y: y },
            { x: x, y: y + 1 },
            { x: x, y: y - 1 }
        ];
    }

    while (stack.length > 0) {
        let { x, y } = stack.pop();
        let k = key(x, y);

        if (visited.has(k)|| isBlocked(x, y)) continue;

        visited.add(k);
        count++;
        let openNeighbors =0
        let exits =0    


        for(let n of neighbors(x, y)){
            if(!isBlocked(n.x, n.y) && !visited.has(key(n.x, n.y))){
                stack.push(n);
                openNeighbors++
            }
        }

            if (openNeighbors <= 2) {
            exits++;
        }

       
    }

    return count;
}

function AstarPathfinding(targetX, targetY) {
    let myHead = gameState.you.body[0];

    let neighbors = [
        { x: myHead.x + 1, y: myHead.y },
        { x: myHead.x - 1, y: myHead.y },
        { x: myHead.x, y: myHead.y + 1 },
        { x: myHead.x, y: myHead.y - 1 }
    ];
    function heuristic(x, y) {
            return Math.abs(x - targetX) + Math.abs(y - targetY);
        }



    for (let neighbor of neighbors) {
       
        neighbor.h=heuristic(neighbor.x, neighbor.y)
        neighbor.f = floodFill(neighbor.x, neighbor.y)

        neighbor.finalScore= neighbor.h - neighbor.f

    }
    
let best = neighbors.reduce((bestSoFar, current) => {
    if (current.finalScore < bestSoFar.finalScore) {
        return current;
    } else {
        return bestSoFar;
    }
});
        



};




function averageWeight(){
    let newWeights = [];
    for(let cell of boardarray){
        let rightcell = boardarray.find(c => c.x == cell.x+1 && c.y == cell.y)
        let leftcell = boardarray.find(c => c.x == cell.x-1 && c.y == cell.y)
        let upcell = boardarray.find(c => c.x == cell.x && c.y == cell.y+1)
        let downcell = boardarray.find(c => c.x == cell.x && c.y == cell.y-1)

          let rightweight = 0
        let leftweight = 0
        let upweight = 0
        let downweight = 0

        if(rightcell != undefined){
            rightweight = rightcell.weight
        }
        if(leftcell != undefined){
            leftweight = leftcell.weight
        }
        if(upcell != undefined){
            upweight = upcell.weight
        }
        if(downcell != undefined){
            downweight = downcell.weight
        }
       if(cell.weight==0){
        newWeights.push(0)
            continue
        }
        
        

    newWeights.push((cell.weight + rightweight + leftweight + upweight + downweight)/5)

    }

    for (let i = 0; i < boardarray.length; i++) {
    if (boardarray[i].weight !== 0) {
        boardarray[i].weight = newWeights[i]
    }
}


}



function chooseMove(){


    let myHead = gameState.you.body[0]
    let rightsqaure = boardarray.find(cell => cell.x == myHead.x+1 && cell.y == myHead.y)
    let leftsqaure = boardarray.find(cell => cell.x == myHead.x-1 && cell.y == myHead.y)
    let upsqaure = boardarray.find(cell => cell.x == myHead.x && cell.y == myHead.y+1)
    let downsqaure = boardarray.find(cell => cell.x == myHead.x && cell.y == myHead.y-1)

    if(rightsqaure == undefined){
        rightsqaure = {weight:-100}
    }
    if(leftsqaure == undefined){
        leftsqaure = {weight:-100}
    }
    if(upsqaure == undefined){
        upsqaure = {weight:-100}
    }
    if(downsqaure == undefined){
        downsqaure = {weight:-100}
    }

   let downFlood = floodFill(downsqaure.x,downsqaure.y)/100
   let upFlood = floodFill(upsqaure.x,upsqaure.y)/100
   let rightFlood = floodFill(rightsqaure.x,rightsqaure.y)/100
   let leftFlood = floodFill(leftsqaure.x,leftsqaure.y)/100
    let direction

   if(gameState.turn <100)   {
     direction = AstarPathfinding(gameState.board.food[0].x,gameState.board.food[0].y)
   } else if(gameState.turn >=100 && gameState.you.health < 40){
    direction = AstarPathfinding(gameState.board.food[0].x,gameState.board.food[0].y)
   } else if(gameState.turn >=100 && gameState.you.health >= 40){
    direction = AstarPathfinding(gameState.you.body[gameState.you.body.length-1].x,gameState.you.body[gameState.you.body.length-1].y)
   }
   



   
    if(direction == "right"){
        rightsqaure.weight *= 1.5
    }
    if(direction == "left"){
        leftsqaure.weight *= 1.5
    }
    if(direction == "up"){
        upsqaure.weight *= 1.5
    }
    if(direction == "down"){
        downsqaure.weight *= 1.5
    }



   rightsqaure.weight*=rightFlood
   downsqaure.weight*=downFlood
   upsqaure.weight*=upFlood
   leftsqaure.weight*=leftFlood

 


    let maxWeight = Math.max(rightsqaure.weight,leftsqaure.weight,upsqaure.weight,downsqaure.weight)
    logHeatmap()

console.log("turn " + gameState.turn + " max weight" + maxWeight)

    if(rightsqaure.weight == maxWeight && moveSafety.right ){
        
        return {move:"right"}
    }
    else if(leftsqaure.weight == maxWeight && moveSafety.left ){
        
        return {move:"left"}
    }
    else if(upsqaure.weight == maxWeight && moveSafety.up ){
        
        return {move:"up"}
    }
    else if(downsqaure.weight == maxWeight && moveSafety.down ){
        
        return {move:"down"}
    }
}

function logHeatmap() {
    console.log("------------------------------------------");
    const maxExpected = 1.2; 

   for (let y = board.height - 1; y >= 0; y--) {
    let rowStr = "";
    for (let x = 0; x < board.width; x++) {
        let cell = boardarray.find(c => c.x === x && c.y === y);
        let val = cell ? cell.weight : 0;
        let intensity = Math.min(Math.max(val, 0), maxExpected) / maxExpected;

        let r, g, b;

        if (intensity < 0.5) {
            // Red (255,0,0) to Yellow (255,255,0)
            let t = intensity * 2;
            r = 255;
            g = Math.floor(t * 255);
            b = 0;
        } else {
            // Yellow (255,255,0) to Green (0,255,0)
            let t = (intensity - 0.5) * 2;
            r = Math.floor(255 * (1 - t));
            g = 255;
            b = 0;
        }

        // Use ANSI TrueColor escape code: \x1b[38;2;R;G;Bm
        let color = `\x1b[38;2;${r};${g};${b}m`;
        rowStr += color + val.toFixed(3).padStart(6) + "\x1b[0m ";
    }
    console.log(rowStr);
}
    
}//AI this for debugging purposes



createboardarray()
hazardWeight()
snakeWeight()
borderWeight()
averageWeight()
foodWeight()






return chooseMove()



}


