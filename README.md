# ethereum-react-simple-tic-tac-toe-dapp
A Simple Distributed Tic Tac Toe Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Ethereum Truffle](https://www.trufflesuite.com/), a framework for Ethereum blockchain development, and [Solidity](https://solidity.readthedocs.io/en/v0.6.2/), official language to write Smart Contracts in Ethereum.

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Purcel](https://parceljs.org/). This application uses *Custom Hook* design feature introduced in [React JS](https://reactjs.org/docs/getting-started.html) v16.8. 

ES6 `module` creation along with `import /export`, `async/ await` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to *transpile* all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

Back end is implemented using [Solidity](https://solidity.readthedocs.io/en/v0.6.2/). Communication with the Smart Contracts is done using [Web3 JS](https://web3js.readthedocs.io/en/v1.2.6/)


For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

This is a *responsive web application* for viewing in both Mobile and Desktop.


## Features
<ul>
 <li> This is Simple Tic Tac Toe Application </li>
 <li> It is a Distributed Application </li>
</ul>


<ul>
 <li>All the user moves, computer moes are stored in the <a href="https://solidity.readthedocs.io/en/v0.6.2/">Solidity</a> Smart Contract. As a result when you <i>refresh the page</i> you will get the current state of the game. </li>
 <li>No move is <b>lost</b>.</li>
</ul>

 
<ul>
 <li> Communication with the Smart Contracts is supported using <b>JSON RPC</b> by <a href="https://web3js.readthedocs.io/en/v1.2.6/">Web3 JS</a>  
</ul>  

## Installation

1. Clone the repository using `git clone https://github.com/anijitsahu/ethereum-react-simple-tic-tac-toe-dapp.git` from `Git Bash / Command Prompt`
2. Navigate inside the directory by `cd ethereum-react-simple-tic-tac-toe-dapp`
3. Install all the necessary dependecies by using `npm install` 
4. Generate the build by `npm run dev` 

5. Open another `Command Prompt` and Run it as Administrator (in Windows)  and navigate to the same directory `ethereum-react-simple-tic-tac-toe-dapp`
6. In the second Command prompt, run the *Truffle Development network* by `truffle develop`
7. In the second Command prompt, deploy the blockchain by `truffle migrate`
8. Now in a Web browser navigate to `http://localhost:8081` and enjoy the TicTacToe game

9. In the browser you have to <b>add</b> the <a href="https://metamask.io/">Metamask Addon</a> to talk with the Blockchain
10. If the game ended and you want to play it again, in the second command prompt hit `Ctrl + C` and then run `truffle migrate --reset`

 
*tested with <img src="screenshots/chrome.png" width="20px" title="Google Chrome">Google Chrome v70 and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">Mozilla Firefox Developer Editon*  

## Screenshots

Some screens of the application is given below for better understanding. 

Desktop as well as Mobile version of the screenshots are given side by side.

<p> Game Screen <br/> 
 <img src="screenshots/desktop (1).png" width="590px" title="Game screen"/>
 <img src="screenshots/mobile (1).png" width="190px" title="Game screen"/> 
</p>
 
 <p> Game Result Screen <br/> 
 <img src="screenshots/desktop (2).png" width="590px" title="Game Result Screen screen"/>
 <img src="screenshots/mobile (2).png" width="190px" title="Game Result Screen screen"/> 
</p>


