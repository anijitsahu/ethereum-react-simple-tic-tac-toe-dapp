// dependencies
import React, { useState, useEffect } from 'react';
import Web3 from 'web3'

// JSON interfaces of Solidity contracts
import TicTacToeJSON from '../../abis/TicTacToe.json'

// Constants
import Constants from '../Constants'

const initializeAll = () => {

    const allConstants = new Constants()

    // initialize web3
    const web3 = new Web3(new Web3.providers.HttpProvider(allConstants.ETH_URL));
    console.log('Web3 as connected', web3)
    const { eth } = web3

    // abi and contract address from the JSON interface of the contract
    const { abi, networks } = TicTacToeJSON
    const networkIds = Object.keys(networks)
    const address = networks[networkIds[0]].address
    console.log("contract address", address, " and abi\n", abi)

    // initialize the contract 
    const contract = new eth.Contract(abi, address)
    console.log('contract', contract)
    return { eth, contract };
}
const { eth, contract } = initializeAll()

const useEthConnector = (props) => {
    const [box, setBox] = useState(props)
    const [gameResult, setResult] = useState('')

    const getBox = async () => {
        const boxReceived = await contract.methods.getCurrentBox().call()
        setBox(boxReceived)
    }

    const saveBox = async (rowVal, colVal, move) => {
        try {
            // use the address of the first account in the block chain
            const accountsReceived = await eth.getAccounts()
            const result = await contract.methods.saveCurrentMove(rowVal, colVal, move).send({ from: accountsReceived[0] })
            console.log('Move is captured successfully')
        } catch (err) {
            console.log('unable to save the move', err)
        }
    }

    const getResult = async () => {
        const gameResultReceived = await contract.methods.getGameResult().call()
        setResult(gameResultReceived)
    }

    const saveResult = async (gameResult) => {
        try {
            // use the address of the first account in the block chain
            const accountsReceived = await eth.getAccounts()
            const result = await contract.methods.saveResult(gameResult).send({ from: accountsReceived[0] })
            console.log('Result is captured successfully')
        } catch (err) {
            console.log('unable to save the Result', err)
        }
    }

    return ([box, getBox, saveBox, gameResult, getResult, saveResult]);
}

export default useEthConnector;