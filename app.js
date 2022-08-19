document.addEventListener("DOMContentLoaded", () => { //registra uma única espera de evento em um único alvo (ouvinte de eventos).
    createSquares();

    function createSquares(){
        const gameBoard = document.getElementById("board") //pega o elemento pelo id que será o tabuleiro

        for (let index = 0; index < 30; index++){ //30 quadrados do tabuleiro
            let square = document.createElement("div") //cria o elemento HTML especificado
            square.setAttribute("id", index + 1)  //Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico. Id do número do quadrado.
            gameBoard.appendChild(square)

        }
    }