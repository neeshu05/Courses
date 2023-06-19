import React, { useState } from 'react'
import './board.css'
function TicTacToe() {
  const [clicked,setclicked] = useState(['','','','','','','','',''])
  const [player,setPlayer] = useState('X')
  const [winner,setWinner] = useState('')

  console.log(winner)

  function handlePlay(index){
    if (clicked[index] === '' && winner === ''){
      let bo = [...clicked]
      bo[index] = player
      setPlayer(player === 'X' ? 'O' : 'X')
      setclicked(bo)
      console.log(clicked)
      if (checkWinner(bo) != ''){
        let val = checkWinner(bo)
        setWinner(val)
      }
    }
  }

  function checkWinner(clicked) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (clicked[a] &&  clicked[a] === clicked[b] && clicked[a] === clicked[c]) {
        return clicked[a];
      }
    }
    return '';
  }
  return (
    <div className="board">
      <div value = {clicked[0]} className="cell" onClick={() => handlePlay(0)}></div>
      <div className="cell" onClick={() => handlePlay(1)}></div>
      <div className="cell" onClick={() => handlePlay(2)}></div>
      <div className="cell" onClick={() => handlePlay(3)}></div>
      <div className="cell" onClick={() => handlePlay(4)}></div>
      <div className="cell" onClick={() => handlePlay(5)}></div>
      <div className="cell" onClick={() => handlePlay(6)}></div>
      <div className="cell" onClick={() => handlePlay(7)}></div>
      <div className="cell" onClick={() => handlePlay(8)}></div>
    </div>
  )
}

export default TicTacToe