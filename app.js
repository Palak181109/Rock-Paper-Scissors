let userScore=0;
let compScore=0;

let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#text");


const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random() * 3);
    return options[ran];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.id;
        console.log("User clicked:", choiceId);

        const compId = genCompChoice();
        console.log("Computer chose:", compId);

        Game(choiceId,compId);
    });
});

const drawGame =(choiceId,compId) => {
    if(choiceId === compId){
        console.log("Game was Draw");
        msg.innerText="Game was Draw";
        msg.style.backgroundColor = "black";
    }
};

const shoWinner =(userWin,choiceId,compId) => {
    if(userWin){
        console.log("You Win");
        userScore++;
        user_score.innerText=userScore;
        msg.innerText=`You Win!Your ${choiceId} beats ${compId}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        console.log("You Lose");
        compScore++;
        comp_score.innerText=compScore;
        msg.innerText=`You Lose.Computer's ${compId} beats your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
};

const Game = (choiceId,compId) => {
    if(choiceId === compId){
        drawGame(choiceId,compId);
    }
    else{
            let userWin=true;

            if(choiceId === "rock"){
                userWin=compId === "paper" ? false : true;
            }

            else if(choiceId === "paper"){
                userWin=compId === "scissors" ? false : true;
            }

            else{
                userWin=compId === "rock" ? false : true;
            }
            shoWinner(userWin,choiceId,compId);
        }
};