import React, { useEffect, useState } from 'react';
import useKeypress from 'react-use-keypress';
import './board.css';
import agent from './agent.png';
import wumpus from './wumpus.png';
import gold from './gold.png'

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
	const [cells, setCells] = useState(Array(row_count*col_count).fill(''));
    const [agentAddress, setAgentAddress] = useState(27);
	const [wumpusAddress, setWumpusAddress] = useState([67]);
	const [goldAddress, setGoldAddress] = useState([97]);
	const [cellState, setcellState] = useState(Array(row_count*col_count).fill('unvisited'))

	const initiateBoard = () => {

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
	}

	const Cell = ({ num }) => {
		return <td className={cellState[num]}>
                    <div className={cells[num]}>
                        {
							num==agentAddress?
                            	<img src={agent} height={50} width={50}/>
								:
								<></>
						}
						{
							num==wumpusAddress?
                            	<img src={wumpus} height={50} width={50}/>
								:
								<></>
						}
						{
							num==goldAddress?
                            	<img src={gold} height={50} width={50}/>
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

	// useEffect(() => {
	// 		window.addEventListener('keypress', e => {
	// 			console.log(e.key);
	// 			if(e.key === 'w'){
	// 				agentvisits(agentAddress - 10)
	// 			}
	// 			if(e.key === 's'){
	// 				agentvisits(agentAddress + 10)
	// 			}
	// 			if(e.key === 'a'){
	// 				agentvisits(agentAddress + 1)
	// 			}
	// 			if(e.key === 'd'){
	// 				agentvisits(agentAddress - 1)
	// 			}
	// 		})
	// })

    var t = 0;

	return (
		<div className='container mt-5'>
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