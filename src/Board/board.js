import React, { useEffect, useState } from 'react';
import './board.css';
import agent from './agent.png';
import wumpus from './wumpus.png';
import gold from './gold.png'

/*
    Cell classes:
    =============
    - unvisited (blurred)
    - safe
    - stinky
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
	const [wumpusAddress, setWumpusAddress] = useState(67);
	const [goldAddress, setGoldAddress] = useState(97);
	const [visibility, setVisibility] = useState(Array(row_count*col_count).fill('unvisited'))
	
	const agentvisits = (num) => {
		let boxes = [...cells]
		let visibilities = [...visibility]
		visibilities[num] = 'breeze'
		setAgentAddress(num)
		setVisibility(visibilities)
		setCells(boxes)
		console.log(cells[num])
	}

	const Cell = ({ num }) => {
		return <td onClick={() => agentvisits(num)} className={visibility[num]}>
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