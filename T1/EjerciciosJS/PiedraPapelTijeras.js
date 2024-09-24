function playerElection(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log("Elección del jugador:", playerChoice);  
    console.log("Elección de la cpu:", computerChoice);  
    
    if (playerChoice === computerChoice) {
        console.log("¡Es un empate!");
    } else if ((playerChoice === 0 && computerChoice === 2) || 
               (playerChoice === 1 && computerChoice === 0) || 
               (playerChoice === 2 && computerChoice === 1)) {
        console.log("¡Has ganado!");
    } else {
        console.log("¡Ha ganado la cpu!");
    }
}


playerElection(2);  
