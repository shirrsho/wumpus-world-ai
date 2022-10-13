import React from 'react'
import Board from './Board/board'
import './menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <img src='./NEW.png' alt='game-logo' className='img-menu'/><br></br>
        <button className='btn'><b>New Game</b></button>
      <Board />
    </div>
  )
}

export default Menu
