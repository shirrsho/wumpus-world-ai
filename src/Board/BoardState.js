class Address {
    constructor(agentAddress, wumpusAddress, pitAddress, goldAddress){
        this.agentAddress = agentAddress;
        this.wumpusAddress = wumpusAddress;
        this.pitAddress = pitAddress;
        this.goldAddress = goldAddress;
    }
    getAgentAddress()               {return this.agentAddress}
    getWumpusAddress()              {return this.wumpusAddress}
    getPitAddress()                 {return this.pitAddress}
    getGoldAddress()                {return this.goldAddress}

    setAgentAddress(agentAddress)   {this.agentAddress = agentAddress}
    setWumpusAddress(wumpusAddress) {this.wumpusAddress = wumpusAddress}
    setPitAddress(pitAddress)       {this.pitAddress = pitAddress}
    setGoldAddress(goldAddress)     {this.goldAddress = goldAddress}
}

export class BoardState {
    constructor(input){
        this.input = input
    }
    row_count = 10
    col_count = 10
    cellState = Array(this.row_count*this.col_count).fill('unvisited')
    graph = Array(this.row_count*this.col_count).fill(Array(this.row_count*this.col_count).fill(0))

    getCellState(index){return this.cellState[index]}
    getAvatar(index){
        if(this.input[index] === 'W') return 'wumpus'
        else if(this.input[index] === 'P') return 'pit'
        else if(this.input[index] === 'G') return 'gold'
        else return 'empty'
    }
    agentVisits(from,index){
        switch(this.getAvatar(index)){
            case 'wumpus' : return 'dead'
            case 'pit' : return 'dead'
            case 'gold' : return 'gold'
        }
        if(this.getAvatar(index) === 'empty'){
            this.graph[from][index] = 1;
            console.log(this.graph);
            if(this.adjacentHas(index,'W')) this.cellState[index] = 'stench'
            else if(this.adjacentHas(index,'P')) this.cellState[index] = 'breeze'
            else this.cellState[index] = 'safe'
        }
        return 'safe'
    }
    adjacentHas(index,thing){
        if(
            (index+1)%10 != 0 && this.input[index+1] === thing ||
            (index)%10 != 0   && this.input[index-1] === thing ||
            (index+10) < 100  && this.input[index+10]=== thing ||
            (index-10) >= 0   && this.input[index-10]=== thing
          ) return true;
    }
}