const preguntas = [
    {
        "pregunta": "¿Cuál es el hueso más largo del cuerpo humano?",
        "opciones": ["Tibia", "Fémur", "Húmero", "Peroné"],
        "correcta": "Fémur"
    },
    {
        "pregunta": "¿Cuál es el desierto más árido del mundo?",
        "opciones": ["Desierto del Sahara", "Desierto de Gobi", "Desierto de Atacama", "Desierto de Kalahari"],
        "correcta": "Desierto de Atacama"
    },
    {
        "pregunta": "¿Quién es el autor de la novela 'Cien años de soledad'?",
        "opciones": ["Mario Vargas Llosa", "Gabriel García Márquez", "Julio Cortázar", "Pablo Neruda"],
        "correcta": "Gabriel García Márquez"
    },
    {
        "pregunta": "¿Qué gas es el más abundante en la atmósfera terrestre?",
        "opciones": ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"],
        "correcta": "Nitrógeno"
    },
    {
        "pregunta": "¿En qué año llegó el ser humano a la Luna?",
        "opciones": ["1965", "1969", "1972", "1959"],
        "correcta": "1969"
    },
    {
        "pregunta": "¿Cuál es el océano más grande de la Tierra?",
        "opciones": ["Océano Atlántico", "Océano Índico", "Océano Ártico", "Océano Pacífico"],
        "correcta": "Océano Pacífico"
    },
    {
        "pregunta": "¿Quién pintó la famosa obra 'La Gioconda' (Mona Lisa)?",
        "opciones": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "correcta": "Leonardo da Vinci"
    },
    {
        "pregunta": "¿Cuál es el elemento químico representado por el símbolo 'K' en la tabla periódica?",
        "opciones": ["Kriptón", "Potasio", "Calcio", "Sodio"],
        "correcta": "Potasio"
    },
    {
        "pregunta": "¿Cuál es el país más grande del mundo por superficie?",
        "opciones": ["China", "Canadá", "Estados Unidos", "Rusia"],
        "correcta": "Rusia"
    },
    {
        "pregunta": "¿Qué técnica de laboratorio se utiliza para amplificar secuencias específicas de ADN, como los microsatélites?",
        "opciones": ["Electroforesis en gel", "Reacción en Cadena de la Polimerasa (PCR)", "Espectrometría de masas", "Cristalografía de rayos X"],
        "correcta": "Reacción en Cadena de la Polimerasa (PCR)"
    },
    {
        "pregunta": "¿En qué año se produjo la caída del Muro de Berlín?",
        "opciones": ["1985", "1989", "1991", "1993"],
        "correcta": "1989"
    },
    {
        "pregunta": "¿Qué organelo es conocido comúnmente como la 'central energética' de la célula eucariota?",
        "opciones": ["Aparato de Golgi", "Retículo endoplasmático", "Mitocondria", "Ribosoma"],
        "correcta": "Mitocondria"
    }
]

let bonk = new Audio("./bonk.mp3");
let fail = new Audio("./spongebob-fail.mp3");
let win = new Audio("./win.mp3");
let wuaaa = new Audio("./mario-falling.mp3");
let faaah = new Audio("./faaah.mp3");
let correct = new Audio("./correct.mp3");

const botoncontador = document.getElementById("botoncontador");
const botonguess = document.getElementById("botonguess");
const botonppt = document.getElementById("botonppt");
const botonreaccion = document.getElementById("botonreaccion");
const botonreflejos = document.getElementById("botonreflejos");
const botontrivia = document.getElementById("botontrivia");
const botonpreguntas = document.getElementById("botonpreguntas");
const botontictactoe = document.getElementById("botontictactoe");
const botonsnake = document.getElementById("botonsnake");
const botoncheems = document.getElementById("botonwhackamole");

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
    const textRestantes = document.getElementById("intentosAdivinar");

    let intentosRestantes = 5;
    
    submitGuess.onclick = function() {
        let intento = parseInt(inputNumero.value);
        intentosRestantes--;
        if (intento === randomNum) {
            replyText.textContent = "Número correcto, felicidades :)";
            win.play();
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

    var tiempoClick;
    var tiempoAparecer;
    var tiempoReaccion;
    function hacerForma() {
        var time=Math.random();
        time=time*3000;
        temporizador = setTimeout(function() {
            document.getElementById("forma").style.backgroundColor="#bb9fdd";
            document.getElementById("forma").style.display="block";
            tiempoAparecer=Date.now();
        }, time); 
    }
    document.getElementById("forma").onclick=function() {
        tiempoClick=Date.now();
        bonk.play();
        tiempoReaccion=(tiempoClick-tiempoAparecer)/1000;
        document.getElementById("tiempoReaccion").innerHTML="Tu tiempo de reacción es: " + tiempoReaccion + "seconds";
        this.style.display="none";
        hacerForma();
    }
    const btnEmpezar = document.getElementById("btnEmpezarReaccion");

    btnEmpezar.onclick = function() {
        this.style.display = "none";
        hacerForma();
    }
    const modalReaccion = document.getElementById('modalreaccion');
    modalReaccion.addEventListener('hidden.bs.modal', function () {
        clearTimeout(temporizador);
        document.getElementById("forma").style.display = "none";
        document.getElementById("tiempoReaccion").innerHTML = "";
        btnEmpezar.style.display = "inline-block";
    });
}

function juegoReflejos() {
    const btnEmpezar = document.getElementById("btnEmpezarReflejos");
    const imagen = document.getElementById("imagenReflejos");
    const textoEstado = document.getElementById("estadoReflejos");
    const zona = document.getElementById("zonaReflejos");
    const modal = document.getElementById("modalreflejos");
    let puntos = 0;
    let fallos = 0;
    let juegoTerminado = true;
    let bombaTiempo, tiempoEspera;

    btnEmpezar.onclick = function() {
        puntos = 0;
        fallos = 0;
        juegoTerminado = false;
        btnEmpezar.style.display = "none";
        actualizarMarcador();
        esperarYMostrar();
    };

    function actualizarMarcador() {
        textoEstado.textContent = `Puntos: ${puntos}/10  |  Fallos: ${fallos}/3`;
        textoEstado.style.color = "white";
    }

    function esperarYMostrar() {
        if (juegoTerminado) return;
        let esperaAleatoria = (Math.random() * 1000) + 100;
        tiempoEspera = setTimeout(mostrarImagen, esperaAleatoria);
    }

    function mostrarImagen() {
        if (juegoTerminado) return;
        let maxLeft = zona.clientWidth - 80;
        let maxTop = zona.clientHeight - 80;
        imagen.style.left = (Math.random() * maxLeft) + "px";
        imagen.style.top = (Math.random() * maxTop) + "px";
        imagen.style.display = "block";

        bombaTiempo = setTimeout(function() {
            imagen.style.display = "none";
            fallos++;
            actualizarMarcador();

            if (fallos >= 3) {
                terminar("¡Perdiste!");
                fail.play();
            } else {
                esperarYMostrar();
            }
        }, 1200);
    }

    imagen.onclick = function() {
        if (juegoTerminado) return;
        clearTimeout(bombaTiempo);
        imagen.style.display = "none";
        puntos++;
        actualizarMarcador();
        bonk.play();

        if (puntos >= 10) {
            terminar("¡Ganaste!");
            win.play();
        } else {
            esperarYMostrar();
        }
    };
    function terminar(mensaje, colorCSS) {
        juegoTerminado = true;
        imagen.style.display = "none";
        clearTimeout(bombaTiempo);
        clearTimeout(tiempoEspera);
        textoEstado.textContent = mensaje;
        textoEstado.style.color = colorCSS;
        btnEmpezar.textContent = "Volver a jugar";
        btnEmpezar.style.display = "inline-block";
    }
    modal.addEventListener('hidden.bs.modal', function () {
        terminar("Consigue 10 puntos para ganar.", "white");
        btnEmpezar.textContent = "¡Empezar Juego!";
    });
}

function trivia() {
    const textoPregunta = document.getElementById("textoPregunta");
    const contenedorOpciones = document.getElementById("contenedorOpciones");
    const mensajeRespuesta = document.getElementById("mensajeRespuesta");

    let preguntasRespondidas = 0;
    let puntaje = 0;
    const MAX_PREGUNTAS = 5;

    function cargarNuevaPregunta() {
        if (preguntasRespondidas >= MAX_PREGUNTAS) {
            mostrarResultadoFinal();
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
        const preguntaActual = preguntas[indiceAleatorio];
        
        textoPregunta.textContent = `Pregunta ${preguntasRespondidas + 1}: ${preguntaActual.pregunta}`;
        contenedorOpciones.innerHTML = "";
        mensajeRespuesta.textContent = "";

        preguntaActual.opciones.forEach(opcion => {
            const boton = document.createElement("button");
            boton.className = "btn-juego mb-3 fs-5";
            boton.textContent = opcion;
            boton.onclick = () => validarRespuesta(opcion, preguntaActual.correcta);
            contenedorOpciones.appendChild(boton);
        });
    }

    function validarRespuesta(elegida, correcta) {
        const botones = contenedorOpciones.querySelectorAll("button");
        botones.forEach(b => b.disabled = true);

        if (elegida === correcta) {
            puntaje++;
            mensajeRespuesta.textContent = "¡Correcto!";
            mensajeRespuesta.style.color = "#a73cb5";
            correct.play();
        } else {
            mensajeRespuesta.textContent = `Incorrecto. Era: ${correcta}`;
            mensajeRespuesta.style.color = "red";
        }

        preguntasRespondidas++;

        const btnSiguiente = document.createElement("button");
        btnSiguiente.className = "btn btn-outline-light mt-3";
        btnSiguiente.textContent = preguntasRespondidas < MAX_PREGUNTAS ? "Siguiente Pregunta" : "Ver Resultados";
        btnSiguiente.onclick = cargarNuevaPregunta;
        
        mensajeRespuesta.appendChild(document.createElement("br"));
        mensajeRespuesta.appendChild(btnSiguiente);
    }

    function mostrarResultadoFinal() {
        textoPregunta.textContent = "¡Trivia Finalizada!";
        contenedorOpciones.innerHTML = `
            <div class="text-light fs-2 mb-4">
                Tu puntaje: <span class="fw-bold">${puntaje}</span> / ${MAX_PREGUNTAS}
            </div>
        `;
        mensajeRespuesta.textContent = puntaje >= 3 ? "Very smart very smart" : "FAHHH";
        
        const btnReiniciar = document.createElement("button");
        btnReiniciar.className = "btn-juego mt-3";
        btnReiniciar.textContent = "Jugar de nuevo";
        btnReiniciar.onclick = () => {
            preguntasRespondidas = 0;
            puntaje = 0;
            cargarNuevaPregunta();
        };
        contenedorOpciones.appendChild(btnReiniciar);
    }
    cargarNuevaPregunta();
}

function preguntasrapidas() {
    const misPreguntas = [
        { p: "¿Cuánto es 8 x 7?", r: "56" },
        { p: "¿Raíz cuadrada de 144?", r: "12" },
        { p: "Si x + 5 = 12, ¿cuánto es x?", r: "7" },
        { p: "(6 x 5) - 2", r: "28"}
    ];
    let numeroPregunta = 0;
    let tiempo = 10;
    let reloj;
    function mostrarPregunta() {
        if (numeroPregunta >= misPreguntas.length) {
            document.getElementById("preguntaActiva").innerText = "¡Fin del juego!";
            document.getElementById("tiempoRestante").innerText = "";
            clearInterval(reloj);
            return;
        }

        document.getElementById("preguntaActiva").innerText = misPreguntas[numeroPregunta].p;
        document.getElementById("respuestaUsuario").value = "";

        tiempo = 10;
        document.getElementById("tiempoRestante").innerText = tiempo;

        clearInterval(reloj);
        reloj = setInterval(function() {
            tiempo--;
            document.getElementById("tiempoRestante").innerText = tiempo;

            if (tiempo === 0) {
                document.getElementById("mensaje").innerText = "¡Tiempo agotado!";
                wuaaa.play()
                numeroPregunta++;
                mostrarPregunta();
            }
        }, 1000);
    }

    document.getElementById("btnEmpezar").onclick = function() {
        numeroPregunta = 0;
        document.getElementById("mensaje").innerText = "";
        mostrarPregunta();
    };

    document.getElementById("btnResponder").onclick = function() {

        let loQueEscribio = document.getElementById("respuestaUsuario").value;
        
        if (loQueEscribio === misPreguntas[numeroPregunta].r) {
            document.getElementById("mensaje").innerText = "¡Correcto!";
            correct.play();
        } else {
            document.getElementById("mensaje").innerText = "Respuesta incorrecta";
            faaah.play();
        }

        numeroPregunta++;
        mostrarPregunta();
    };
}

function tictactoe() {
    const board = document.getElementById('tablerogato');
    const squares = document.getElementsByClassName('cuadro');
    const btnReiniciar = document.getElementById('btnReiniciarGato');

    let juegoTerminado = false;
    const players = ['X', 'O'];
    let currentPlayer = players[0];


    const endMessage = document.createElement('h2');
    endMessage.textContent = "Turno de X";
    endMessage.style.marginTop = '30px';
    endMessage.style.textAlign='center';
    endMessage.classList.add('text-light');
    board.after(endMessage);

    const winning_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', () => {
            if(squares[i].textContent !== '' || juegoTerminado){
                return;
            }
            squares[i].textContent = currentPlayer;
            if(checkWin(currentPlayer)) {
                endMessage.textContent="Gana " + currentPlayer;
                juegoTerminado = true;
                win.play();
                return;
            }
            if(checkTie()) {
                endMessage.textContent= "Empate";
                juegoTerminado = true;
                faaah.play();

                return
            }
            currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
            if(currentPlayer == players[0]) {
                endMessage.textContent= "Turno de X";
            } else {
                endMessage.textContent= "Turno de O";
            }     
        })   
    }

    function checkWin(currentPlayer) {
        for(let i = 0; i < winning_combinations.length; i++){
            const [a, b, c] = winning_combinations[i];
            if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
                return true;
            }
        }
        return false;
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
        currentPlayer = players[0];
        endMessage.textContent = `Turno de ${currentPlayer}!`;
        juegoTerminado = false;
    }
}

function snake() {
    let puntosSnake = 0;
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
                puntosSnake+= 10;
                document.getElementById("puntajeSnake").innerText = "Puntaje: " + puntosSnake;

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
                    puntosSnake = 0;
                    document.getElementById("puntajeSnake").innerText = "Puntaje: " + puntosSnake;
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

function whackamole() {

    let cheemsesta;
    let gatitoesta;
    let puntaje = 0;
    let juegoterminado = false;

    for (let i=0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", seleccionarcuadro);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(aparecercheems, 1000);
    setInterval(aparecergatito, 2000);

    function getRandomTile() {
        let num = Math.floor(Math.random() * 9);
        return num.toString();
    }

    function aparecercheems() {

        if (juegoterminado) {
            return;
        }
        if (cheemsesta) {
            cheemsesta.innerHTML ="";
        }

        let cheems = document.createElement("img");
        cheems.src = "./cheems.png"

        let numcheems = getRandomTile();

        if (gatitoesta  && gatitoesta.id == numcheems){
            return
        }
        cheemsesta = document.getElementById(numcheems);
        cheemsesta.appendChild(cheems);
    }

    function aparecergatito() {

        if (juegoterminado){
            return;
        }

        if (gatitoesta) {
            gatitoesta.innerHTML ="";
        }

        let gatito = document.createElement("img");
        gatito.src = "./gatito.png"

        let numgatito = getRandomTile();
        if (cheemsesta && cheemsesta.id == numgatito) {
            return;
        }
        gatitoesta = document.getElementById(numgatito);
        gatitoesta.appendChild(gatito);
    }

    function seleccionarcuadro() {

        if (juegoterminado){
            return;
        }
        
        if (this == cheemsesta) {
            puntaje += 5;
            let imagenAdentro = this.querySelector("img");
            if (imagenAdentro) {
                imagenAdentro.src = "./bonk.png";
            }
            bonk.play();
            document.getElementById("score").innerText = puntaje.toString();
        } else if (this == gatitoesta) {
            document.getElementById("score").innerText = "Juego terminado. Puntaje final: " + puntaje;
            juegoterminado = true;
            wuaaa.play();
            fail.play();
        }

        if (puntaje == 100) {
            document.getElementById("score").innerText = "¡Ganaste!";
            win.play();
            juegoterminado = true;
        }
    }
}

botoncontador.onclick = contador();
botonguess.onclick = adivinanumero();
botonppt.onclick = piedrapapelotijeras();
botonreaccion.onclick = reaccion();
botonreflejos.onclick = juegoReflejos();
botontrivia.onclick = trivia();
botonpreguntas.onclick = preguntasrapidas();
botontictactoe.onclick = tictactoe();
botonsnake.onclick = snake();
botoncheems.onclick = whackamole();