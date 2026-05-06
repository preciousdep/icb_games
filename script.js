const botoncontador = document.getElementById("botoncontador");
const botonguess = document.getElementById("botonguess");
const botonppt = document.getElementById("botonppt");
const botonreaccion = document.getElementById("botonreaccion");

botoncontador.onclick = contador();
botonguess.onclick = adivinanumero();
botonppt.onclick = piedrapapelotijeras();
botonreaccion.onclick = reaccion();

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


function reaccion() {
    function colorForma() {
        var letras = "0123456789ABCDEF".split('');
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letras[Math.round(Math.random() * 15)];
        }
        return color; 
	}
    var tiempoClick;
    var tiempoAparecer;
    var tiempoReaccion; 
    function hacerForma() {
        var time=Math.random();
        time=time*3000;
        setTimeout(function() {
            if (Math.random()>0.5) {
                document.getElementById("forma").style.borderRadius="100px";
                } else {
                    document.getElementById("forma").style.borderRadius="0";
                }
            var top= Math.random();
                top= top*300;
            var left= Math.random();
                left= left*500; 
            document.getElementById("forma").style.top = top + "px";
            document.getElementById("forma").style.left = left + "px"; 
            document.getElementById("forma").style.backgroundColor=colorForma();
            document.getElementById("forma").style.display="block";
            tiempoAparecer=Date.now();
        }, time); 
    }
    document.getElementById("forma").onclick=function() {
        tiempoClick=Date.now();
        tiempoReaccion=(tiempoClick-tiempoAparecer)/1000;
        document.getElementById("tiempoReaccion").innerHTML="Tu tiempo de reacción es: " + tiempoReaccion + "seconds";
        this.style.display="none";
        hacerForma();	
    }
    hacerForma(); 
}

function tictactoe() {
    const board = document.getElementById('tablerogato')
    const squares = document.getElementsByClassName('cuadro')
    const btnReiniciar = document.getElementById('btnReiniciarGato')

    let juegoTerminado = false
    const players = ['X', 'O']
    let currentPlayer = players[0]


    const endMessage = document.createElement('h2')
    endMessage.textContent = "Turno de X"
    endMessage.style.marginTop = '30px'
    endMessage.style.textAlign='center'
    endMessage.classList.add('text-light')
    board.after(endMessage)

    const winning_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', () => {
            if(squares[i].textContent !== '' || juegoTerminado){
                return
            }
            squares[i].textContent = currentPlayer
            if(checkWin(currentPlayer)) {
                endMessage.textContent="Gana " + currentPlayer
                juegoTerminado = true
                return
            }
            if(checkTie()) {
                endMessage.textContent= "Empate"
                juegoTerminado = true
                return
            }
            currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
            if(currentPlayer == players[0]) {
                endMessage.textContent= "Turno de X"
            } else {
                endMessage.textContent= "Turno de O"
            }     
        })   
    }

    function checkWin(currentPlayer) {
        for(let i = 0; i < winning_combinations.length; i++){
            const [a, b, c] = winning_combinations[i]
            if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
                return true
            }
        }
        return false
    }

    function checkTie(){
        for(let i = 0; i < squares.length; i++) {
            if(squares[i].textContent === '') {
                return false;
            }
        }
        return true
    }

    btnReiniciar.onclick = function() {
        for(let i = 0; i < squares.length; i++) {
            squares[i].textContent = ""
        }
        currentPlayer = players[0]
        endMessage.textContent = `Turno de ${currentPlayer}!`
        juegoTerminado = false
    }
}

tictactoe();

function snake() {
    var canvas = document.getElementById('snakegame');
    var context = canvas.getContext('2d');
    var grid = 16;
    var count = 0;
    var snake = {
    x: 160,
    y: 160,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
    };
    var apple = {
    x: 320,
    y: 320
    };
    function numerorandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function jueguito() {
        requestAnimationFrame(jueguito);
        if (++count < 4) {
            return;
        }
        count = 0;
        context.clearRect(0,0,canvas.width,canvas.height);
        snake.x += snake.dx;
        snake.y += snake.dy;
        if (snake.x < 0) {
            snake.x = canvas.width - grid;
        } else if (snake.x >= canvas.width) {
            snake.x = 0;
        }
        if (snake.y < 0) {
            snake.y = canvas.height - grid;
        } else if (snake.y >= canvas.height) {
            snake.y = 0;
        }
        snake.cells.unshift({x: snake.x, y: snake.y});
        if (snake.cells.length > snake.maxCells) {
            snake.cells.pop();
        }
        context.fillStyle = 'white';
        context.fillRect(apple.x, apple.y, grid-1, grid-1);
        context.fillStyle = 'white';
        snake.cells.forEach(function(cell, index) {
            context.fillRect(cell.x, cell.y, grid-1, grid-1);
            if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
                apple.x = numerorandom(0, 25) * grid;
                apple.y = numerorandom(0, 25) * grid;
            }
            for (var i = index + 1; i < snake.cells.length; i++) {
                if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                    snake.x = 160;
                    snake.y = 160;
                    snake.cells = [];
                    snake.maxCells = 4;
                    snake.dx = grid;
                    snake.dy = 0;
                    apple.x = numerorandom(0, 25) * grid;
                    apple.y = numerorandom(0, 25) * grid;
                }
            }
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.which === 37 && snake.dx === 0) {
            snake.dx = -grid;
            snake.dy = 0;
        }
        else if (e.which === 38 && snake.dy === 0) {
            snake.dy = -grid;
            snake.dx = 0;
        }
        else if (e.which === 39 && snake.dx === 0) {
            snake.dx = grid;
            snake.dy = 0;
        }
        else if (e.which === 40 && snake.dy === 0) {
            snake.dy = grid;
            snake.dx = 0;
        }
    });
    requestAnimationFrame(jueguito);
}
snake();