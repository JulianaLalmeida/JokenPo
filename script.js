const result = document.querySelector('.result')
const humanscore = document.getElementById('humanscore')
const pcscore = document.getElementById('pcscore')

let hscorenumber = 0
let pcscorenumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playGame(humanChoice, playMachine())
}
const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}
const playGame = (human, machine) => {
    console.log(human, machine)

    if (human === machine) {
        result.innerHTML = "Empate"
    }
    else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK || 
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS || 
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) {
        
        hscorenumber++
        result.innerHTML = "Você Ganhou!"
        humanscore.innerHTML = hscorenumber
    }
    else {
        pcscorenumber++
        result.innerHTML = "Você perdeu."
        pcscore.innerHTML = pcscorenumber
    }
}