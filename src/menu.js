import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <img src='./NEW.png' alt='game-logo' className='img-menu'/><br></br>
        <Link to='/board'><button className='btn'><b>New Game</b></button></Link><br></br><br></br>
        <Link to='/manual'><button className='btn'><b>Game Manual</b></button></Link><br></br><br></br>
        <button className='btn'><b>Exit</b></button>
    </div>
  )
}

export default Menu
