import React, { useEffect, useState } from 'react';
import useKeypress from 'react-use-keypress';
import './board.css';
import { checkForWumpus, checkForPit } from './functionalities';
import agent from '../images/agent.png';
import wumpus from '../images/wumpus.png';
import gold from '../images/gold.png'
import pit from '../images/pit.png'
import stenchagent from '../images/stench.png'
import breezeagent from '../images/breeze.png'
import breezestench from '../images/breeze_stench.png'
import { BoardState } from './BoardState';

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

	let input = [
				'A','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','W','S','S','G','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','G','S','S','S','S','S',
				'S','S','S','S','S','S','P','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S',
				'S','S','S','S','S','S','S','S','S','S'
			];
	const [boardState, setBoardState] = useState(new BoardState(input))
	//let boardState = new BoardState(input)
    const [agentAddress, setAgentAddress] = useState(0);

	const agentVisits = (to) => {
		boardState.agentVisits(agentAddress,to)
		setAgentAddress(to)
		setBoardState(boardState)
	}

	const goAgent = (from, to) => {
		if(from==to) return;
		agentVisits(from+1)
		setTimeout(()=>{goAgent(from+1,to)},1000)
	}
	const Cell = ({ num }) => {
		return <td className={boardState.getCellState(num)}>
                    <div>
                        {
							num == agentAddress && (boardState.getCellState(num) === 'safe' || boardState.getCellState(num) === 'unvisited') ?
                            	<img src={agent} alt="agent" height={70} width={70}/>
								:
								<></>
						}
						{
							num == agentAddress && boardState.getCellState(num) === 'stench' ?
                            	<img src={stenchagent} alt="stenchagent" height={70} width={70}/>
								:
								<></>
						}
						{
							num == agentAddress && boardState.getCellState(num) === 'breeze' ?
                            	<img src={breezeagent} alt="breezeagent" height={70} width={70}/>
								:
								<></>
						}
						{
							boardState.getAvatar(num) === 'wumpus'?
							<img src={wumpus} alt="wumpus" height={70} width={70}/>
							:
							<></>
						}
						{
							boardState.getAvatar(num) === 'pit'?
							<img src={pit} alt="pit" height={70} width={70}/>
							:
							<></>
						}
						{
							boardState.getAvatar(num) === 'gold'?
							<img src={gold} alt="gold" height={70} width={70}/>
							:
							<></>
						}
                    </div>
            </td>;
	};

	useKeypress(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown','Enter'], (event) => {
		if (event.key === 'ArrowLeft') {
			if(agentAddress%10 !== 0) agentVisits(agentAddress - 1)
		}
		if (event.key === 'ArrowRight') {
			if((agentAddress+1)%10 !== 0) agentVisits(agentAddress + 1)
		}
		if (event.key === 'ArrowUp') {
			if(agentAddress-10 >= 0) agentVisits(agentAddress - 10)
		}
		if (event.key === 'ArrowDown') {
			if(agentAddress+10 < 100) agentVisits(agentAddress + 10)
		}
		if (event.key === 'Enter') {
			goAgent(0,9)
		}
	});

    var t = 0;

	return (
		<div className='container mt-5' id='main'>
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