let inputDir = {x: 0,y: 0};
let foodsound = new Audio('food.mp3');
let gameOverSound = new Audio('gameover.mp3');
let moveSound = new Audio("move.mp3");
let musicSound = new Audio('music.mp3');
let board = document.getElementById("board");
let speed = 8;
let lastPaintTime = 0;
let points = document.querySelector("#score")
let score =0;
let snakeArr =[
    {x: 13, y:15}
]
let food = {x: 6, y: 7};

function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed)
        return;

    lastPaintTime = ctime;
    gameEngine();
}



function isCollide(sarr){
    //if enters inside
    for (let i = 1; i < sarr.length; i++){
        if(sarr[i].x === sarr[0].x && sarr[i].y === sarr[0].y)
                return true;
    }   

        if(
            sarr[0].x >= 18 ||
            sarr[0].x <= 0 ||
            sarr[0].y >= 18 ||
            sarr[0].y <= 0
        ){
            return true;
        }// if collided with wall
 return false;   
}




function gameEngine(){
    //part 1 undapting snake var

    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y:0};
        alert("Game over ");
        snakeArr =[{x: 13, y:15}];
        musicSound.play();
        score =0;
    }



    ///after eating food renderuing 
    if(snakeArr[0].y == food.y && snakeArr[0].x == food.x){
        foodsound.play();
        score += 1;
        points.innerHTML = "Score " + score
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y});
        let a = 2; 
        let b = 16;
        food = {x: Math.round(a+ (b-a) * Math.random())  ,  y: Math.round(a+ (b-a) * Math.random())};
    }

    ///move the snake
    for (let i = snakeArr.length -2; i >= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};

    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    //part2 endering snake and food
    //disp snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0)
            snakeElement.classList.add('head');
        snakeElement.classList.add('snake');

        board.appendChild(snakeElement);
    })
    //disp food
        let foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;

        foodElement.classList.add('food');
        board.appendChild(foodElement);

}


///main logic starts here
// let highscore = localStorage.getItem("highscore");
// if(highscore == NULL)
//     {
//         poin =0;
//         localStorage.setItem("highscore", JSON.stringify(poin));
//     }
//     else{
//         poin = JSON.parse(highscore);
//         high_score.innerHTML = "High Score : 0" + highscore;
//     }    

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = {x: 0, y:1} // start the game
    moveSound.play()
    
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        
        default:
            break;
    }
});

