export default function move(gameState){
    let moveSafety = {
        up: true,
        down: true,
        left: true,
        right: true
    };
    
    // We've included code to prevent your Battlesnake from moving backwards
    const myHead = gameState.you.body[0];
    const myNeck = gameState.you.body[1];
     let hazards = gameState.board.hazards
    
    if (myNeck.x < myHead.x) {        // Neck is left of head, don't move left
        moveSafety.left = false;
        
    } else if (myNeck.x > myHead.x) { // Neck is right of head, don't move right
        moveSafety.right = false;
        
    } else if (myNeck.y < myHead.y) { // Neck is below head, don't move down
        moveSafety.down = false;
        
    } else if (myNeck.y > myHead.y) { // Neck is above head, don't move up
        moveSafety.up = false;
    }
    
    // TODO: Step 1 - Prevent your Battlesnake from moving out of bounds
    // gameState.board contains an object representing the game board including its width and height
    // https://docs.battlesnake.com/api/objects/board
    let board = gameState.board
        if(myHead.x ==board.width-1){

            moveSafety.right=false

        }
        if(myHead.x ==0){

            moveSafety.left=false

        }
        if(myHead.y ==board.height-1){

            moveSafety.up=false
        }
         if(myHead.y==0){
            moveSafety.down=false
        }
       
    
        
    // TODO: Step 2 - Prevent your Battlesnake from colliding with itself
    // gameState.you contains an object representing your snake, including its coordinates
    // https://docs.battlesnake.com/api/objects/battlesnake
   let battlesnake = gameState.you.body
    
    for(let i =1; i<battlesnake.length-1;i++){
        if(myHead.x+1 ==battlesnake[i].x &&myHead.y == battlesnake[i].y){
            moveSafety.right=false
        }
         if(myHead.x-1 ==battlesnake[i].x && myHead.y == battlesnake[i].y){
            moveSafety.left=false
        }
         if(myHead.y+1 ==battlesnake[i].y && myHead.x == battlesnake[i].x){
            moveSafety.up=false
        }
         if(myHead.y-1 ==battlesnake[i].y && myHead.x == battlesnake[i].x){
            moveSafety.down=false
        }
}
    
    
    // TODO: Step 3 - Prevent your Battlesnake from colliding with other Battlesnakes
    // gameState.board.snakes contains an array of enemy snake objects, which includes their coordinates
    // https://docs.battlesnake.com/api/objects/battlesnake
    let allSnakes = gameState.board.snakes
    let dangers = []

    for(let j =0; j<allSnakes.length;j++){

        let snake = allSnakes[j].body
        for (let segment of snake) {
            dangers.push(segment)
        }
        

        for(let i =1; i<snake.length;i++){
        if(myHead.x+1 ==snake[i].x &&myHead.y == snake[i].y){
            moveSafety.right=false
        }
         if(myHead.x-1 ==snake[i].x && myHead.y == snake[i].y){
            moveSafety.left=false
        }
         if(myHead.y+1 ==snake[i].y && myHead.x == snake[i].x){
            moveSafety.up=false
        }
         if(myHead.y-1 ==snake[i].y && myHead.x == snake[i].x){
            moveSafety.down=false
        }
        }
       
        
        

    }
    
   


function floodfillcheck(){


  let count = 0;

    for (let d of dangers) {
        let dx = Math.abs(d.x - myHead.x);
        let dy = Math.abs(d.y - myHead.y);

        // includes diagonals
        if (dx <= 1 && dy <= 1) {
            count++;
        }
    }
    
    return count;
} //ai to optimize 



if(floodfillcheck() >=3){
    let right = 0
    let left = 0
    let up = 0
    let down = 0
    
    if(moveSafety.right==true){
       right = floodFill("right")
    }
    if(moveSafety.left==true){
         left = floodFill("left")
    }
    if(moveSafety.up==true){
        up = floodFill("up")
    }
    if(moveSafety.down==true){
        down = floodFill("down")
    }

    if(right>=left && right>=up && right>=down){
        
        return{move: "right"}
    } 
     if(left>=right && left>=up && left>=down){
        
        return{move: "left"}
    } 
     if(up>=right && up>=left && up>=down){
        
        return{move: "up"}
    } 
     if(down>=right && down>=left && down>=up){
        
        return{move: "down"}
        
    }

}
    //floodfill
    function floodFill(direction) {
    let dangerSet = new Set(dangers.map(d => `${d.x},${d.y}`));
    let queue = [];
       let counter = 0
       let visited = new Set();
       if(direction == "right"){
        queue.push({x:myHead.x+1,y:myHead.y})
       }
       if(direction == "left"){
        queue.push({x:myHead.x-1,y:myHead.y})
       }
       if(direction == "up"){
        queue.push({x:myHead.x,y:myHead.y+1})
       }
       if(direction == "down"){
        queue.push({x:myHead.x,y:myHead.y-1})
       }
        
       while(queue.length>0){ 
            let current = queue.shift();
            let key = `${current.x},${current.y}`

            
         if(visited.has(key)){
            continue;
            
        }
         if (  current.x < 0 ||current.x >= gameState.board.width || current.y < 0 ||current.y >= gameState.board.height ) {  
            continue;
            }
            if(dangerSet.has(key)){
                continue;
            }
        visited.add(key);
        counter++;
           queue.push(
            { x: current.x + 1, y: current.y },
            { x: current.x - 1, y: current.y },
            { x: current.x, y: current.y + 1 },
            { x: current.x, y: current.y - 1 }
        );
    

        
        
    
    }
    console.log("count" + counter +"direction" + direction)
    return counter;
       
}






    //go for food 
    let foods = gameState.board.food
    
   
    // Find closest food
let closestFood = foods[0];
let minDistance = Math.abs(myHead.x - closestFood.x) + Math.abs(myHead.y - closestFood.y);

for (let i = 1; i < foods.length; i++) {
    let dist = Math.abs(myHead.x - foods[i].x) + Math.abs(myHead.y - foods[i].y);
    if (dist < minDistance) {
        minDistance = dist;
        closestFood = foods[i];
    }
}


   

    if(myHead.x < closestFood.x && moveSafety.right==true){
        console.log(`MOVE ${gameState.turn}: right`)
        return{move: "right"}
    } 
     if(myHead.x > closestFood.x && moveSafety.left==true){
        console.log(`MOVE ${gameState.turn}: left`)
        return{move: "left"}
    }
     if(myHead.y > closestFood.y && moveSafety.down==true){
            console.log(`MOVE ${gameState.turn}: down`)
        return{move: "down"}
    }
     if(myHead.y < closestFood.y && moveSafety.up==true){
         console.log(`MOVE ${gameState.turn}: up`)
        return{move: "up"}
    }
    
    
    // Are there any safe moves left?
    
    //Object.keys(moveSafety) returns ["up", "down", "left", "right"]
    //.filter() filters the array based on the function provided as an argument (using arrow function syntax here)
    //In this case we want to filter out any of these directions for which moveSafety[direction] == false
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