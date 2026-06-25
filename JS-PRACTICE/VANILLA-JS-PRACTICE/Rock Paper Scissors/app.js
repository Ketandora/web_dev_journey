let userScore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userpara = document.querySelector("#user-score");
const comppara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randinx = Math.floor(Math.random()*3);
    return options[randinx];
}

const drawgame = () =>{
    msg.innerText = "game is draw";
    msg.style.backgroundColor = "pink";//print game is draw;
};

const showwinner = (userwin, userchoice , compchoice) => {
    if(userwin)
    {
        userScore++;
        userpara.innerText = userScore;
        msg.innerText =  `you won....${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compscore++;
        comppara.innerText = compscore;
        msg.innerText = `you loose....${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userchoice) => {
    console.log("user choice  = ", userchoice);
    const compchoice = genCompChoice();

    if(userchoice === compchoice)
        drawgame();
    else{
        let userwin = true;
        if(userchoice === "rock")
            userwin = compchoice === "paper" ? false : true;

        else if(userchoice === "paper")
            userwin = compchoice ==="scissors" ?false : true;
        else
            userwin = compchoice === "rock" ? false : true;

        showwinner(userwin , userchoice , compchoice);
    }
};





choices.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})