pragma solidity >=0.4.21 <0.7.0;

contract TicTacToe {

  // initialize the box as 3 x 3 Array of unsigned integers    
  uint [3][3] box;    
  
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
  }
  
  // save current move by user / computer  
  function saveCurrentMove(uint [3][3] memory boxReceived) public {
      box = boxReceived;
  }
  
  // get the current box
  function getCurrentBox() public view returns(uint [3][3] memory) {
      return box;
  }
  
}