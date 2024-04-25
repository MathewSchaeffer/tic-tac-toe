(function game() {

    function createPlayer(name, score, turns, playerIcon) {
        return { name, score, turns, playerIcon };
    };

    const player1 = createPlayer("Player1", 0, [], "X");
    const player2 = createPlayer("Player2", 0, [], "Y");

    let counter = 0;
    let turnsTaken = 0;
    let isGameRunning = true;

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

    const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function checkWin(arr) {

        for (let i = 0; i < winCodes.length; i++) {
            counter = 0;
            for (let j = 0; j < arr.length; j++) {
                if (winCodes[i].includes(arr[j])) {
                    counter++;
                    if (counter === 3) {
                        isGameRunning = false;
                        console.log("WINNER IS X")
                        player1.turns = [];
                        player2.turns = [];
                        console.log(player1.turns);
                        return true;
                    }
                }
            }

            return false;
        }

    }

    renderConsole();

    // while (isGameRunning) {

    turn = parseInt(prompt("Player X Turn"));
    gameBoard.splice(turn - 1, 1, "X");
    player1.turns.push(turn);
    console.log(`player turns ${player1.turns}`)
    checkWin(player1.turns);
    renderConsole();


    turn = parseInt(prompt("Player X Turn"));
    gameBoard.splice(turn - 1, 1, "X");
    player1.turns.push(turn);
    console.log(`player turns ${player1.turns}`)
    checkWin(player1.turns);
    renderConsole();

    turn = parseInt(prompt("Player X Turn"));
    gameBoard.splice(turn - 1, 1, "X");
    player1.turns.push(turn);
    console.log(`player turns ${player1.turns}`)
    checkWin(player1.turns);
    renderConsole();






    // if (isGameRunning === false) {
    //     return;
    // }
    // }

    function renderConsole() {
        console.log(gameBoard[0], gameBoard[1], gameBoard[2])
        console.log(gameBoard[3], gameBoard[4], gameBoard[5])
        console.log(gameBoard[6], gameBoard[7], gameBoard[8])
    }

    // const test1 = [1, 2, 3];
    // const test2 = [4, 5, 6];
    // const test3 = [9, 8, 7];
    // const test4 = [5, 1, 2, 3];
    // const test5 = [9, 6, 3, 2, 1];
    // const test11 = [1, 3, 5, 7];
    // const test6 = [1, 4, 9];
    // const test7 = [1, 6, 8];
    // const test8 = [1, 2, 4, 5];
    // const test9 = [0, 1, 8, 9];
    // const test10 = [1, 3, 7, 9];
    // const test12 = [5, 8, 7];

    // console.log(checkWin(test1));
    // console.log(checkWin(test2));
    // console.log(checkWin(test3));
    // console.log(checkWin(test4));
    // console.log(checkWin(test5));
    // console.log(checkWin(test11));
    // console.log("---------------");
    // console.log(checkWin(test6));
    // console.log(checkWin(test7));
    // console.log(checkWin(test8));
    // console.log(checkWin(test9));
    // console.log(checkWin(test10));
    // console.log(checkWin(test12));


})();



// testing 

/*     const test1 = [1, 2, 3];
    const test2 = [4, 5, 6];
    const test3 = [9, 8, 7];
    const test4 = [5, 1, 2, 3];
    const test5 = [9, 6, 3, 2, 1];
    const test11 = [1, 3, 5, 7];
    const test6 = [1, 4, 9];
    const test7 = [1, 6, 8];
    const test8 = [1, 2, 4, 5];
    const test9 = [0, 1, 8, 9];
    const test10 = [1, 3, 7, 9];
    const test12 = [5, 8, 7];

    console.log(checkWin(test1));
    console.log(checkWin(test2));
    console.log(checkWin(test3));
    console.log(checkWin(test4));
    console.log(checkWin(test5));
    console.log(checkWin(test11));
    console.log("---------------");
    console.log(checkWin(test6));
    console.log(checkWin(test7));
    console.log(checkWin(test8));
    console.log(checkWin(test9));
    console.log(checkWin(test10));
    console.log(checkWin(test12));



    */