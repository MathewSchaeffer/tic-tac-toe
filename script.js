/*

Tic Tac Toe made for the Odin Project

By Mathew Schaeffer

*/

const main = (() => {
    const init = () => {

        // create game board
        const gameBoard = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const winningCombinations = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 5, 9],
            [3, 5, 7],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
        ]

        console.log(gameBoard);

        // create players
        function createPlayer(name, score, turns) {
            return {
                name: name,
                score: score,
                turns: turns,
            }
        }

        player1 = createPlayer("Player One", 0, []);
        player2 = createPlayer("Player Two", 0, []);
        player1.turns = [1, 2, 3];

        // check winning combinations

        for (let combinations of winningCombinations) {
            if (combinations.includes()) {

            }
        };
    }

    init();


})();
