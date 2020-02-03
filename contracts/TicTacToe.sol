pragma solidity >=0.4.21 <0.7.0;

contract TicTacToe {

  // initialize the box as 3 x 3 Array of unsigned integers    
  uint [3][3] box;    
  string gameResult;

  // initialize the box when the contract is deployed
  constructor() public {
      initializeBox();
  }
  
  
  // initialize the box the O values for each cell
  function initializeBox() public {
      /* this section can be written using for loop however for simplicity and 
         gas consumption it is omitted 
      */
      
      box = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
      gameResult = 'TBD';
  }
  
  // save current move by user / computer  
  function saveCurrentMove(uint rowVal, uint colVal, uint move) public {
      box[rowVal][colVal] = move;
  }

  // save the result of the game
  function saveResult (string memory result) public {
    gameResult = result;
  }
  
  
  // get the current box
  function getCurrentBox() public view returns(uint [3][3] memory) {
      return box;
  }

  // get the game RESULT
  function getGameResult() public view returns(string memory) {
      return gameResult;
  }
  
}