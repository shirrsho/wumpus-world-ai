import React from 'react'
import Board from './Board/board'
import './menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <img src='./NEW.png' alt='game-logo'/>
      <Board />
    </div>
  )
}

export default Menu
