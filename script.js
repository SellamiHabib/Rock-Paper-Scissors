function computerPlay (){
    let randomInt = Math.random();
    if (randomInt <(1/3))
        return "rock";
    else if (randomInt < (2/3))
        return "paper";
    else
        return "scissors";
}
function playRound(playerSelection )
    { 
        let computerSelection = computerPlay()
        
        let pSelection = playerSelection.toLowerCase();
        if ( pSelection == computerSelection )
            return "Draw";
        if( (pSelection == "rock") && (computerSelection == "scissors") 
            || (pSelection == "scissors") && (computerSelection == "paper") 
            || (pSelection == "paper") && (computerSelection == "rock") 
            )
            return "You win";
        else 
            return "You lose";
    }

const btns = document.querySelectorAll("button");
btns.forEach( (btn) => {

    btn.addEventListener("click", () => {
        
        console.log(playRound(btn.id));
    });
} );