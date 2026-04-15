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
    for(segment of boardarray){
        if(segment.x == 0 || segment.x == board.width-1 || segment.y == 0 || segment.y == board.height-1){
            segment.weight = -.25
        }

    }
}

function snakeWeight(){
    let allSnakes = gameState.board.snakes
    for(let j =0; j<allSnakes.length;j++){
 
        let snake = allSnakes[j].body
        for (let segment of snake) {
            for(let cell of boardarray){
                if(cell.x == segment.x && cell.y == segment.y){
                    cell.weight = -1
                }
            }
        }
    }
}

function foodWeight(){
    let foods = gameState.board.food
    for(let food of foods){
        for(let cell of boardarray){
            if(cell.x == food.x && cell.y == food.y){
                cell.weight += .5
            }
        }
    }
}

function chooseMove(){
    let myHead = gameState.you.body[0]
    let rightsqaure = boardarray.find(cell => cell.x == myHead.x+1 && cell.y == myHead.y)
    let leftsqaure = boardarray.find(cell => cell.x == myHead.x-1 && cell.y == myHead.y)
    let upsqaure = boardarray.find(cell => cell.x == myHead.x && cell.y == myHead.y+1)
    let downsqaure = boardarray.find(cell => cell.x == myHead.x && cell.y == myHead.y-1)

    let maxWeight = Math.max(rightsqaure.weight,leftsqaure.weight,upsqaure.weight,downsqaure.weight)

    if(rightsqaure.weight == maxWeight && moveSafety.right){
        return {move:"right"}
    }
    else if(leftsqaure.weight == maxWeight && moveSafety.left){
        return {move:"left"}
    }
    else if(upsqaure.weight == maxWeight && moveSafety.up){
        return {move:"up"}
    }
    else if(downsqaure.weight == maxWeight && moveSafety.down){
        return {move:"down"}
    }
}


createboardarray()
borderWeight()
snakeWeight()
foodWeight()
chooseMove()



 const safeMoves = Object.keys(moveSafety).filter(direction => moveSafety[direction]);
    if (safeMoves.length == 0) {
        console.log(`MOVE ${gameState.turn}: No safe moves detected! Moving down`);
        return { move: "down" };
    }
    
    // Choose a random move from the safe moves
    const nextMove = safeMoves[Math.floor(Math.random() * safeMoves.length)];
    
    // TODO: Step 4 - Move towards food instead of random, to regain health and survive longer
    // gameState.board.food contains an array of food coordinates https://docs.battlesnake.com/api/objects/board
    
    console.log(`MOVE ${gameState.turn}: ${nextMove}`)
    return { move: nextMove };
}
