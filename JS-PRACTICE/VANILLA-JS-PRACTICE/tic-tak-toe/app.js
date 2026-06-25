let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-gamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = true//getting turns true for O

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame = () => {
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn == true){
            turn = false;
            box.innerText = 'O';
        }
        else{
            turn = true;
            box.innerText = 'X';
        }
        box.disabled = true;

        checkWinner();
    });
});


const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText;

        if( pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos1val == pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
};

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);
