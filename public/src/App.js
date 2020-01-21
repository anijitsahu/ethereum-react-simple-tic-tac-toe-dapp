// dependencies
import React, { useEffect, useState } from 'react'

// component dependencies
import Title from './components/Title'
import EthGreeting from './components/EthGreeting'
import TicTacToe from './components/TicTacToe'

// css
import './styles.css'

const App = (props) => {
	const [title, setTitle] = useState('Truffle React Simple Tic Tac Toe')
    return (
        <div className="container">
          <Title titleToShow={title}/>		
          <TicTacToe />
        </div>
    );
}

export default App