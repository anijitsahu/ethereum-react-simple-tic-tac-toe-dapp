import React, { useState, useEffect } from 'react';
import Box from './Box'

// constants
import Constants from '../Constants'

const TicTacToe = (props) => {
    const [box, setBox] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ])
    const [userTurn, setUserTurn] = useState(false)

    useEffect(() => {
        checkForMatch()
        computerPlays()
    }, [box])

    // initialize all the constants 
    const allConstants = new Constants()
    const GRID_LENGTH = allConstants.GRID_LENGTH

    // handle the onClick event
    const handleOnClick = (event) => {
        const { id } = event.target
        const [rowIndex, colIndex] = generateIndices(id)
        let isEmpty = checkIfEmpty(rowIndex, colIndex)
        if (isEmpty === true) {
            captureUserMove(rowIndex, colIndex)
        }
    }

    // generate row and col index
    const generateIndices = (id) => {
        let [rowIndex, colIndex] = id.split('-')
        rowIndex = parseInt(rowIndex)
        colIndex = parseInt(colIndex)
        return [rowIndex, colIndex]
    }

    // check if it is an empty slot
    const checkIfEmpty = (rowIndex, colIndex) => {
        if (box[rowIndex][colIndex] === 0) {
            return true
        }
        return false
    }

    // capture user's move by set it to 1 
    const captureUserMove = (rowIndex, colIndex) => {
        const boxNew = JSON.parse(JSON.stringify(box))
        boxNew[rowIndex][colIndex] = allConstants.USER_MOVE
        setBox(boxNew)
        setUserTurn(false)
    }

    // check all the cells are filled or not
    const checkIfFilled = () => {
        let gridNew = []
        grid.map((ele) => {
            gridNew.push(...ele)
        })

        // console.log("gridNew", gridNew)
        let isFilled = true
        if (gridNew.indexOf(0) > -1) {
            isFilled = false
        }
        return isFilled
    }

    // check if a match found
    const checkForMatch = () => {

        // for a Horizontal match 
        for (let i = 0; i < GRID_LENGTH; i++) {
            let rowStr = box[i].join('')
            checkWinner(rowStr)
        }

        // for a vertical match
        const boxTranspose = box[0].map((col, i) => box.map(row => row[i]));
        for (let i = 0; i < GRID_LENGTH; i++) {
            let colStr = boxTranspose[i].join('')
            checkWinner(colStr)
        }

        // for a diagonal match
        let principalDiagonal = ''
        let otherDiagonal = ''

        for (let i = 0; i < GRID_LENGTH; i++) {
            for (let j = 0; j < GRID_LENGTH; j++) {
                if (i == j) {
                    principalDiagonal = `${principalDiagonal}${box[i][j]}`
                }

                if ((i + j + 1) == GRID_LENGTH) {
                    otherDiagonal = `${otherDiagonal}${box[i][j]}`
                }
            }
        }

        // console.log("otherDiagonal", otherDiagonal)
        checkWinner(principalDiagonal)
        checkWinner(otherDiagonal)
    }

    // function to check who is the winner
    const checkWinner = (str) => {
        const allEqual = str.split('').every((char) => { return (char != allConstants.EMPTY_CELL) && (char == str[0]) })
        if (str && allEqual) {
            const winner = (str[0] == allConstants.USER_MOVE) ? allConstants.USER_MOVE : allConstants.COMPUTER_MOVE
            console.log(winner)
            showResult(winner)
        }
    }

    // show the result
    const showResult = (winner) => {
        let content = (winner == allConstants.USER_MOVE) ? "You won" : "Computer won"

        if (!winner) {
            content = "GAME TIED"
        }
        console.log('RESULT of the game is', content)
    }

    // function to capture how Computer gives the moves
    // generate Random column and row number
    const computerPlays = () => {
        while (true && !userTurn) {
            let randomCol = Math.floor(Math.random() * GRID_LENGTH) + 0
            let randomRow = Math.floor(Math.random() * GRID_LENGTH) + 0
            console.log("random cell generated", randomCol, " ", randomRow)
            if (checkIfEmpty(randomRow, randomCol)) {
                const boxNew = JSON.parse(JSON.stringify(box))
                boxNew[randomRow][randomCol] = allConstants.COMPUTER_MOVE
                setBox(boxNew)
                setUserTurn(true)
                return;
            }
        }
    }

    // render the box contents
    return (
        <div className="box-container">
        {
        	box.map((row, rowIndex)=> {
        		return (
        			<div className="row-container" key={rowIndex}>
        			{
        				row.map((box, colIndex)=> {
        					return (
        						<Box 
        						value={box} 
        						rowIndex={rowIndex} 
        						colIndex={colIndex} 
        						handleOnClick={handleOnClick}
        						key={colIndex} />)
        				})
        			}
        			</div>
        		)
        	})
        }
    	</div>
    )
}

export default TicTacToe;