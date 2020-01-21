import React, { useState } from 'react';
import Box from './Box'

// constants
import Constants from '../Constants'

const TicTacToe = (props) => {
    const [box, setBox] = useState([
        [0, 2, 0],
        [1, 0, 0],
        [0, 0, 1]
    ])


    // initialize all the constants 
    const allConstants = new Constants()

    // handle the on click event
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