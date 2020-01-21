import React from 'react';

const Box = (props) => {
    // extracting necessary fields from the props
    const { value, rowIndex, colIndex, handleOnClick } = props
    const boxIndex = rowIndex + colIndex + 1
    const boxStyle = (boxIndex % 2 === 0) ? 'even-box box' : 'odd-box box'

    return (
        <div id={`${rowIndex}-${colIndex}`} className={boxStyle} onClick={handleOnClick}>
	        {value == 1 ? 'X' : value ==2 ? 'O' : ''}
        </div>
    )
}

export default Box;