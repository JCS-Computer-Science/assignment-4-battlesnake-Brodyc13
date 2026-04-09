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
    
    for(let i =1; i<battlesnake.length;i++){
        if(myHead.x ==battlesnake[i].x-1 &&myHead.y == battlesnake[i].y){
            moveSafety.right=false
        }
         if(myHead.x ==battlesnake[i].x+1 && myHead.y == battlesnake[i].y){
            moveSafety.left=false
        }
         if(myHead.y ==battlesnake[i].y-1 && myHead.x == battlesnake[i].x){
            moveSafety.up=false
        }
         if(myHead.y ==battlesnake[i].y+1 && myHead.x == battlesnake[i].x){
            moveSafety.down=false
        }
}
    
    
    // TODO: Step 3 - Prevent your Battlesnake from colliding with other Battlesnakes
    // gameState.board.snakes contains an array of enemy snake objects, which includes their coordinates
    // https://docs.battlesnake.com/api/objects/battlesnake
    let allSnakes = gameState.board.snakes

    for(let j =0; j<allSnakes.length;j++){

        let snake = allSnakes[j].body

        for(let i =1; i<snake.length;i++){
        if(myHead.x ==snake[i].x-1 &&myHead.y == snake[i].y){
            moveSafety.right=false
        }
         if(myHead.x ==snake[i].x+1 && myHead.y == snake[i].y){
            moveSafety.left=false
        }
         if(myHead.y ==snake[i].y-1 && myHead.x == snake[i].x){
            moveSafety.up=false
        }
         if(myHead.y ==snake[i].y+1 && myHead.x == snake[i].x){
            moveSafety.down=false
        }
        }
       
        
        

    }
 /*   floodFill(1,myHead,)
    //floodfill
    function floodFill(direction, start) {
        let queue = [start];
       let counter = 0
        
       while(queue.length>0){ {
            let current = queue[i];
            let neighbors = getNeighbors(current);

            for(let j = 0; j<neighbors.length;j++){
                queue.push(neighbors[j])
                counter++
            }
            queue.pop(current)
            counter--
        }
        return counter
    }


    
       function getNeighbors(current) {
        
        let neighbors = [];
        neighbors.push({ x: current.x + 1, y: current.y }); // right
        neighbors.push({ x: current.x - 1, y: current.y }); // left
        neighbors.push({ x: current.x, y: current.y + 1 }); // up
        neighbors.push({ x: current.x, y: current.y - 1 }); // down

        for(let i =0 ;i<neighbors.length;i++){
            for(let j =0; j<hazards.length;j++){
            if(neighbors[i].x==hazards[j].x && neighbors[i].y==hazards[j].y){
                neighbors.splice(i,1)
            }
        }
        return neighbors
        }
    }
    
*/



    //go for food 
    let food = gameState.board.food[1]
   

    if(myHead.x < food.x && moveSafety.right==true){
        return{move: "right"}
    } else if(myHead.x > food.x && moveSafety.left==true){
        return{move: "left"}
    }else if(myHead.y > food.y && moveSafety.down==true){
        return{move: "down"}
    }else if(myHead.y < food.y && moveSafety.up==true){
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