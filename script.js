const buttons = document.querySelectorAll("button");
const ShowResult = document.getElementById("result");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const scors = document.getElementById("score");
const resetGame = document.getElementById("reset");
let scorePlayer = 0;
let scoreComputer = 0;
let stop = false;

buttons.forEach(button => {

    button.addEventListener("click", ()=>{
        if(stop){return}
        playRound(button.id, computerplayer());
        KnowWinner();

                
    })
})

resetGame.addEventListener('click', newGame);


function computerplayer (){

    const Choices = ['rock','paper', 'scissors'];
    const randomChoices = Math.floor(Math.random() * Choices.length);
    return Choices[randomChoices];
}

function playRound(player, computer){

    if(player === computer){

    ShowResult.textContent = "It's a tie."
        
    }else if ((player === 'scissors' && computer === 'paper')||
(player === 'rock' && computer === 'scissors')||
(player === 'paper' && computer === 'rock')
){
    scorePlayer++;
    userScore.textContent = scorePlayer;
    ShowResult.textContent = `you win ${player} beats ${computer}`;

}else{
    scoreComputer++;
    computerScore.textContent = scoreComputer;
    ShowResult.textContent = `You lost ${computer} beats ${player}`
}
}

function KnowWinner(){
    if(scorePlayer === 3){
        ShowResult.textContent =  `Congratulations, you won the round.`;
        ShowResult.style.color = 'green';
        stop = true;
        scors.style.display = 'none';
        resetGame.style.display = 'block';
    }else if(scoreComputer === 3){
        ShowResult.textContent =  `Unfortunately you lost good luck later!!!!`;
        stop = true;
        scors.style.display = 'none';
        ShowResult.style.color = 'red';
        resetGame.style.display = 'block';
    }
}

function newGame(){
stop = false;
 scorePlayer = 0;
scoreComputer = 0;
userScore.textContent = scorePlayer;
computerScore.textContent = scoreComputer;
resetGame.style.display = 'none';
scors.style.display = 'block';
ShowResult.textContent = '';
ShowResult.style.color = '';
}


