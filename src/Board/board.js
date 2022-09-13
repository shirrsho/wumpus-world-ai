import React, { useEffect, useState } from 'react';
import useKeypress from 'react-use-keypress';
import './board.css';
import agent from '../images/agent.png'
import wumpus from '../images/wumpus.png';
import gold from '../images/gold.png'

/*
    Cell classes:
    =============
    - unvisited (blurred)
    - safe
    - stench
    - breeze
    - agentsafe
    - agentstinky
    - agentbreeze
    - wumpus (blurred)
    - pit (blurred)
    - gold (blurred)
    - agentwumpus
    - agentpit
    - agentgold
*/

const Board = () => {
	const row_count = 10;
	const col_count = 10;
	let gameStarted = false;
	let input = Array(row_count*col_count)
		input = [
				'A','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','W','S','S','G','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','G','S','S','S','S','S',
				'S','S','W','S','S','S','P','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S'
			];
	const [cells, setCells] = useState(input);
    const [agentAddress, setAgentAddress] = useState(27);
	const [wumpusAddress, setWumpusAddress] = useState(Array(row_count*col_count).fill(-1));
	const [pitAddress, setPitAddress] = useState([37]);
	const [goldAddress, setGoldAddress] = useState([97]);
	const [cellState, setcellState] = useState(Array(row_count*col_count).fill('unvisited'))
	const [move, setMove] = useState(true)
	
	const startGame = () => {
		initiateBoard()
		//console.log(cells);
		gameStarted = true;
	}
	//startGame()
	const initiateBoard = () => {
		
			//setCells(oldArray => [...oldArray, input]);
		setCells(input)
		//console.log(input);
		//console.log(cells);
		for (let i = 0; i < cells.length; i++) {
			if(cells[i]=='W'){
				const arr = [...wumpusAddress]
				arr[i] = i;
				//arr.push(i)
				//setWumpusAddress(wumpus => [...wumpus,i])
				setWumpusAddress(arr)
				console.log(wumpusAddress)
			}
			else if(cells[i]=='G'){
				let arr = [...goldAddress]
				arr.concat(i)
				setGoldAddress(arr)
			}
			if(cells[i]=='P'){
				let arr = [...pitAddress]
				arr.concat(i)
				setPitAddress(arr)
			}
		}
	}
	
	const agentvisits = (to) => {
		//console.log();
		let boxes = [...cells]
		let cellStates = [...cellState]
		cellStates[to] = 'visited'
		setAgentAddress(to)
		setcellState(cellStates)
		setCells(boxes)
		//console.log(cells[num])
		setMove(!move)
	}

	const Cell = ({ num }) => {
		return <td className={cellState[num]}>
                    <div className={cells[num]}>
                        {
							num==agentAddress?
                            	<img src={agent} height={70} width={70}/>
								:
								<></>
						}
						{
							num==wumpusAddress?
                            	<img src={wumpus} height={70} width={70}/>
								:
								<></>
						}
						{
							num==goldAddress?
                            	<img src={gold} height={70} width={70}/>
								:
								<></>
						}
                    </div>
            </td>;
	};

	useKeypress(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'], (event) => {
		if (event.key === 'ArrowLeft') {
			if(agentAddress%10 != 0) agentvisits(agentAddress - 1)
		}
		if (event.key === 'ArrowRight') {
			if((agentAddress+1)%10 != 0) agentvisits(agentAddress + 1)
		}
		if (event.key === 'ArrowUp') {
			if(agentAddress-10 >= 0) agentvisits(agentAddress - 10)
		}
		if (event.key === 'ArrowDown') {
			if(agentAddress+10 < 100) agentvisits(agentAddress + 10)
		}
	});

	useEffect(() => {
		//console.log("effect");
		if(gameStarted) setTimeout(() => {  agentvisits(agentAddress+1) }, 2000);
	})

    var t = 0;

	return (
		<div className='container mt-5'>
			<button onClick={startGame}>Start Game</button>
			<table className="box">
				<tbody>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Board;