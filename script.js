/*

Tic Tac Toe made for the Odin Project

By Mathew Schaeffer

*/

(function () {
    init() {
      let counter = 0;
      let turnsTaken = 0;
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
  
      const test1 = [1, 2, 3];
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
    }
      
  
      function checkWin(arr) {
        for (let i = 0; i < winCodes.length; i++) {
          counter = 0;
          for (let j = 0; j < arr.length; j++) {
            if (winCodes[i].includes(arr[j])) {
              counter++;
              if (counter === 3) {
                return true;
              }
            }
          }
        }
        return false;
      }
  
  })();
  
  // function checkWin(arr) {
  //   for (let i = 0; i < winCodes.length; i++) {
  //     counter = 0;
  //     for (let j = 0; j < arr.length; j++) {
  //       if (winCodes[i].includes(arr[j])) {
  //         counter++;
  //         if (counter === 3) {
  //           return true;
  //         }
  //       }
  //     }
  //   }
  //   return false;
  // }
  
  // test() {
  //   console.log(checkWin(test1));
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
  // };
  