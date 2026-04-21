//new move logic using the weighted squares as the logic to determine the best move to make.


let p5boardarray = []


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
            segment.weight *= .75

    }
}
}

function snakeWeight(){
    let allSnakes = gameState.board.snakes
    for(let j =0; j<allSnakes.length;j++){
 
        let snake = allSnakes[j].body
         for(let cell of boardarray){

            if(
                    (cell.x==snake[0].x+1 && cell.y==snake[0].y 
                    || cell.x== snake[0].x-1 && cell.y==snake[0].y 
                    || cell.x== snake[0].x && cell.y==snake[0].y-1 
                    || cell.x== snake[0].x && cell.y==snake[0].y+1)
                    && (allSnakes[j].name != gameState.you.name)){
                        
                    }
                    if(gameState.you.length-2 > allSnakes[j].length){
                        cell.weight *= 1.5
                    } else{
                        cell.weight *=.25
                    }



        for (let segment of snake) {
           
                if(cell.x == segment.x+1 && cell.y == segment.y){
                    cell.weight *= .75
                }
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
                }
               
            }
        }


    }
}

function foodWeight(){
    let foods = gameState.board.food
    let multiplier =2.5
    if(gameState.you.health <= 50){
        multiplier +=1
    }
    if(gameState.turn >100){
        multiplier/=2
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

    while (stack.length > 0) {
        let { x, y } = stack.pop();
        let k = key(x, y);

        if (visited.has(k)) continue;
        if (isBlocked(x, y)) continue;

        visited.add(k);
        count++;

        stack.push({ x: x + 1, y: y });
        stack.push({ x: x - 1, y: y });
        stack.push({ x: x, y: y + 1 });
        stack.push({ x: x, y: y - 1 });
    }

    return count;
}


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

   rightsqaure.weight*=rightFlood
   downsqaure.weight*=downFlood
   upsqaure.weight*=upFlood
   leftsqaure.weight*=leftFlood

   for(let cell of boardarray){
    p5boardarray.push({x:cell.x,y:cell.y,weight:cell.weight})
   }


    let maxWeight = Math.max(rightsqaure.weight,leftsqaure.weight,upsqaure.weight,downsqaure.weight)
    
console.log("right" + rightsqaure.weight  + "left" + leftsqaure.weight  + "up" + upsqaure.weight+ "down" + downsqaure.weight)
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


createboardarray()
borderWeight()
snakeWeight()
averageWeight()
foodWeight()
averageWeight()


//console.log(boardarray)//this is so i can statically update the p5 visualizer with the weights for testing purposes, will comment when not needed



return chooseMove()



}


