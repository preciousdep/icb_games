function contador() {
    const decreasebtn = document.getElementById("decreasebtn");
    const resetbtn = document.getElementById("resetbtn");
    const increasebtn = document.getElementById("increasebtn");
    const countLabel = document.getElementById("countLabel");
    let count = 0;
    increasebtn.onclick = function(){
        count++;
        countLabel.textContent = count;
    }
    decreasebtn.onclick = function(){
        count--;
        countLabel.textContent = count;
    }
    resetbtn.onclick = function() {
        count = 0;
        countLabel.textContent = count;
    }
}
contador();

function adivinanumero() {
    let randomNum = Math.floor(Math.random()*100) + 1;
    const inputNumero = document.getElementById("numeroAdivinar");
    const submitGuess = document.getElementById("submitAdivinar");
    const replyText = document.getElementById("replyAdivinar");
    const textRestantes = document.getElementById("intentosAdivinar")

    let intentosRestantes = 5;
    
    submitGuess.onclick = function() {
        let intento = parseInt(inputNumero.value);
        intentosRestantes--;
        if (intento === randomNum) {
            replyText.textContent = "Número correcto, felicidades :)"
        } else if (intentosRestantes === 0){
            replyText.textContent = "Se acabaron los intentos, el número correcto era " + randomNum;
        } else if (intento < randomNum) {
            replyText.textContent = "El número es más alto";
        } else if (intento > randomNum) {
            replyText.textContent = "El número es más bajo";
        }
        textRestantes.textContent = "Intentos restantes: " + intentosRestantes;
    }
}
adivinanumero();

function piedrapapelotijeras() {
    const jugadorText = document.querySelector("#inputText");
    const compuText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");

    const choiceBtns = document.querySelectorAll(".choiceBtn");

    let player;
    let computer;
    let result;

    choiceBtns.forEach(button => button.addEventListener("click", () => {
        player = button.textContent;
        computerTurn();
        jugadorText.textContent = "Tu jugada: " + player;
        compuText.textContent = "Tu contrincante: " + computer;
        resultText.textContent = ganador();
    }));

    function computerTurn() {
        const randppt = Math.floor(Math.random() * 3) + 1;

        switch(randppt) {
            case 1:
                computer = "Piedra";
                break;
            case 2:
                computer = "Papel";
                break;
            case 3:
                computer ="Tijeras";
                break;
        }
    }

    function ganador() {
        if (player == computer) {
            return "Empate!";
        } else if (computer == "Piedra") {
            return (player =="Papel") ? "Ganaste" : "Perdiste";
        } else if (computer == "Papel") {
            return (player == "Tijeras") ? "Ganaste" : "Perdiste";
        } else if (computer == "Tijeras") {
            return (player == "Piedra") ? "Ganaste" : "Perdiste";
        }
        
    }
}

piedrapapelotijeras();