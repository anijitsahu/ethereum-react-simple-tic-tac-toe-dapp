// dependencies
import React, { useEffect, useState } from 'react'

// component dependencies
import Title from './components/Title'
import EthGreeting from './components/EthGreeting'

// css
import './styles.css'

const App = (props) => {
    return (
        <div className="container">
          <Title />		
          <EthGreeting />
        </div>
    );
}

export default App