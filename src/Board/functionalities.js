export function checkForWumpus(agentAddress, cells){
    if(agentAddress%10 !== 0 && cells[agentAddress-1] === 'W') return true;
    if((agentAddress+1)%10 !== 0 && cells[agentAddress+1] === 'W') return true;
    if((agentAddress-10) >= 0 && cells[agentAddress-10] === 'W') return true;
    if(agentAddress+10 < 100 && cells[agentAddress+10] === 'W') return true;
}

export function checkForPit(agentAddress, cells){
    if(agentAddress%10 !== 0 && cells[agentAddress-1] === 'P') return true;
    if((agentAddress+1)%10 !== 0 && cells[agentAddress+1] === 'P') return true;
    if((agentAddress-10) >= 0 && cells[agentAddress-10] === 'P') return true;
    if(agentAddress+10 < 100 && cells[agentAddress+10] === 'P') return true;
}