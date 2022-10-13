import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'

const Manual = () => {
  return (
    <div>
        <img src='./NEW.png' alt='game-logo' className='img-menu'/><br></br>
        <div className='p-5 m-5'>
        <p className='text'>
        The Wumpus world is a simple world example to illustrate the worth of a knowledge-based agent and to represent knowledge representation. It was inspired by a video game Hunt the Wumpus by Gregory Yob in 1973.<br></br><br></br>

The Wumpus world is a cave which has 10/10 rooms connected with passageways. So there are total 100 rooms which are connected with each other. We have a knowledge-based agent who will go forward in this world. The cave has a room with a beast which is called Wumpus, who eats anyone who enters the room. The Wumpus can be shot by the agent, but the agent has a single bullet in his gun. In the Wumpus world, there are some Pits rooms which are bottomless, and if agent falls in Pits, then he will be stuck there forever. The exciting thing with this cave is that in one room there is a possibility of finding a heap of gold. So the agent goal is to find the gold and climb out the cave without fallen into Pits or eaten by Wumpus. The agent will get a reward if he comes out with gold, and he will get a penalty if eaten by Wumpus or falls in the pit.
        </p>
        </div><br></br>
        <Link to='/'><button className='btn'><b>Return</b></button></Link>
    </div>
  )
}

export default Manual
