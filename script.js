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
            return 0
        if( (pSelection == "rock") && (computerSelection == "scissors") 
            || (pSelection == "scissors") && (computerSelection == "paper") 
            || (pSelection == "paper") && (computerSelection == "rock") 
            )
            return 1;
        else 
            return -1;
    }
function updateResult (id){

    let result = document.getElementById("rslt");

    if(id == 0){
        result.innerText = "Draw!"
    }
    else if(id == 1) {
        let winnerhtml = document.getElementById("p");
        let score = parseInt(winnerhtml.innerText,10);
        ++score;
        console.log(winnerhtml.innerText);
        winnerhtml.innerText = score;
        result.innerText = "You win!";
        if (score >=5)
            window.alert("You won the game!");

    }
    else {

        let winnerhtml = document.getElementById("c");
        let score = parseInt(winnerhtml.innerText,10);
        ++score;
        console.log(winnerhtml.innerText);
        winnerhtml.innerText = score;
        result.innerText = "You lose!";
        if (score >=5)
            window.alert("You lost the game!");
    }
    
    
}
const btns = document.querySelectorAll("button");
btns.forEach( (btn) => {

    btn.addEventListener("click", () => {
        updateResult(playRound(btn.id));
    });
} );