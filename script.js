(function game() {

    let div = "";

    setup();

    function createPlayer(name, score, turns, playerIcon) {
        return { name, score, turns, playerIcon };
    };

    const player1 = createPlayer("Player1", 0, [], "X");
    const player2 = createPlayer("Player2", 0, [], "O");

    let counter = 0;
    let currentPlayer = player1;
    let isGameOver = false;

    const winCodes = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    function setup() {
        const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const squares = [0];
        for (let i = 1; i <= gameBoard.length; i++) {
            div = document.getElementById(i);
            squares.push(div);
            inputHandler(div);

        }
    };

    function inputHandler(div) {
        div.addEventListener("click", function eventHandler() {
            if (!isGameOver) {
                div.innerText = currentPlayer.playerIcon;
                let number = parseInt(div.getAttribute("id"));
                currentPlayer.turns.push(number);
                checkWin(currentPlayer.turns);
                currentPlayer = currentPlayer === player1 ? player2 : player1;
            }
        }, { once: true });
    }

    function checkWin(arr) {
        let totalTurns = player1.turns.length + player2.turns.length;
        for (let i = 0; i < winCodes.length; i++) {
            counter = 0;
            for (let j = 0; j < arr.length; j++) {
                if (winCodes[i].includes(arr[j])) {
                    counter++;
                    if (counter === 3) {
                        console.log(`${currentPlayer.playerIcon} is the WINNER!`);
                        isGameOver = true;
                        return true;
                    }
                }
            }
        }
        if (totalTurns === 9) {
            console.log("DRAW");
            isGameOver = true;
            return false;
        }
        return false;
    }
})();
