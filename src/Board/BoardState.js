class CellProperty {
    constructor(cellNumber){
        this.cellNumber = cellNumber
    }
    isVisited = false
    safeProbability = 0.0
    wumpusProbability = 0.0
    pitProbability = 0.0
    riskProbability = 0.0
    connections = new Set()
    possibleMoves = new Set()

    setSafe(){
        this.wumpusProbability = 0
        this.pitProbability = 0
        this.riskProbability = 0
        this.safeProbability = 1
    }
    setWumpusProbability(){
        if(this.safeProbability===1) this.wumpusProbability = 0
        else this.wumpusProbability = NaN
        this.setRiskProbability()
    }
    setPitProbability(){
        if(this.safeProbability===1) this.pitProbability = 0
        else this.pitProbability = NaN
        this.setRiskProbability()
    }
    setRiskProbability(){
        if(this.safeProbability===1) this.riskProbability = 0
        else this.riskProbability = Math.max(this.pitProbability,this.wumpusProbability)
    }
    setConnection(index){
        this.connections.add(index)
    }
    setPossibleMoves(index){
        this.possibleMoves.add(index)
    }
    getIsCellSafe(){
        if(this.safeProbability===1) return true
        else return false
    }
    getConnections(){
        return this.connections
    }
    getPossibleMoves(){
        return this.possibleMoves
    }
    setVisited(){this.isVisited = true}
    getIsVisited(){return this.isVisited}
}

export class BoardState {
    constructor(input){
        this.input = input
        this.cellProperties = Array(100)
        this.agentAddress = -1
        for (let i = 0; i < 100; i++) {
            this.cellProperties[i] = new CellProperty(i)
        }
        for (let i = 0; i < 100; i++) {
            if(this.input[i]==='A') this.agentAddress = i;
        }
        //this.setCellClass(this.agentVisits(this.agentAddress))
    }
    row_count = 10
    col_count = 10
    cellClass = Array(this.row_count*this.col_count).fill('unvisited')
    graph = Array(this.row_count*this.col_count).fill(Array(this.row_count*this.col_count).fill(0))


    agentVisits(nowOn){

        switch(this.getAvatar(nowOn)){
            case 'wumpus' : return 'dead'
            case 'pit' : return 'dead'
        }
        if(this.getAvatar(nowOn)=='gold'){
            this.setCellClass(nowOn,'safe');
            return 'gold'
        }

        if(this.getAvatar(nowOn) === 'empty'){
            // this.cellProperties[nowOn].setVisited()
            // this.setConnectionBetweenCells(nowOn)
            // this.setPossibleMovesForCell(nowOn)

            if(this.adjacentHas(nowOn,'W')){
                this.setCellClass(nowOn,'stench')
                // this.cellClass[nowOn] = 'stench'
                this.cellProperties[nowOn].setWumpusProbability()
            }

            else if(this.adjacentHas(nowOn,'P')) {
                this.setCellClass(nowOn,'breeze')
                // this.cellClass[nowOn] = 'breeze'
                this.cellProperties[nowOn].setPitProbability()
            }

            else {
                this.setCellClass(nowOn,'safe')
                // this.cellClass[nowOn] = 'safe'
                // this.setAllSafe(nowOn)
            }
        }

        return 'safe'
    }

    getUnvisitedAdjascents(nowOn){
        let ret = new Set()
        if(nowOn % 10 !== 0 && this.getCellClass(nowOn-1)=='unvisited')
            ret.add(nowOn-1)
        if(nowOn+1 % 10 !== 0 && this.getCellClass(nowOn+1)=='unvisited')
            ret.add(nowOn+1)
        if(nowOn-10 >= 0 && this.getCellClass(nowOn-10)=='unvisited')
            ret.add(nowOn-10)
        if(nowOn+10 < 100 && this.getCellClass(nowOn+10)=='unvisited')
            ret.add(nowOn+10)
        return ret
    }

    // setPossibleMovesForCell(nowOn){
    //     this.cellProperties[nowOn].setVisited()
    //     if(nowOn % 10 !== 0)
    //         this.cellProperties[nowOn].setPossibleMoves(nowOn-1)
    //     if(nowOn+1 % 10 !== 0)
    //         this.cellProperties[nowOn].setPossibleMoves(nowOn+1)
    //     if(nowOn-10 >= 0)
    //         this.cellProperties[nowOn].setPossibleMoves(nowOn-10)
    //     if(nowOn+10 < 100)
    //         this.cellProperties[nowOn].setPossibleMoves(nowOn+10)
    //     // if(nowOn % 10 !== 0 && this.input[nowOn-1] == 'S')
    //     //     this.cellProperties[nowOn].setPossibleMoves(nowOn-1)
    //     // if(nowOn+1 % 10 !== 0 && this.input[nowOn+1] == 'S')
    //     //     this.cellProperties[nowOn].setPossibleMoves(nowOn+1)
    //     // if(nowOn-10 >= 0 && this.input[nowOn-10] == 'S')
    //     //     this.cellProperties[nowOn].setPossibleMoves(nowOn-10)
    //     // if(nowOn+10 < 100 && this.input[nowOn+10] == 'S')
    //     //     this.cellProperties[nowOn].setPossibleMoves(nowOn+10)
    // }

    // setConnectionBetweenCells(nowOn){
    //     if(nowOn % 10 !== 0 && this.cellProperties[nowOn-1].getIsVisited()){
    //         this.graph[nowOn][nowOn-1] = 1;
    //         this.graph[nowOn-1][nowOn] = 1;
    //         this.cellProperties[nowOn].setConnection(nowOn-1);
    //         this.cellProperties[nowOn-1].setConnection(nowOn);
    //     }
    //     if((nowOn+1) % 10 !== 0 && this.cellProperties[nowOn+1].getIsVisited()){
    //         this.graph[nowOn][nowOn+1] = 1;
    //         this.graph[nowOn+1][nowOn] = 1;
    //         this.cellProperties[nowOn].setConnection(nowOn+1);
    //         this.cellProperties[nowOn+1].setConnection(nowOn);
    //     }
    //     if(nowOn-10 >= 0 && this.cellProperties[nowOn-10].getIsVisited()){
    //         this.graph[nowOn][nowOn-10] = 1;
    //         this.graph[nowOn-10][nowOn] = 1;
    //         this.cellProperties[nowOn].setConnection(nowOn-10);
    //         this.cellProperties[nowOn-10].setConnection(nowOn);
    //     }
    //     if(nowOn+10 < 100 && this.cellProperties[nowOn+10].getIsVisited()){
    //         this.graph[nowOn][nowOn+10] = 1;
    //         this.graph[nowOn+10][nowOn] = 1;
    //         this.cellProperties[nowOn].setConnection(nowOn+10);
    //         this.cellProperties[nowOn+10].setConnection(nowOn);
    //     }
    // }

    // setAllSafe(index){
	// 	this.cellProperties[index].setSafe()
	// 	if(index	%10 !== 0) 	    this.cellProperties[index-1].setSafe()
	// 	if((index+1)%10 !== 0) 	    this.cellProperties[index+1].setSafe()
	// 	if((index-10)	>= 	0) 	    this.cellProperties[index-10].setSafe()
	// 	if((index+10)    < 	100)    this.cellProperties[index+10].setSafe()
	// }

    // getIsCellSafe(whichCell){
    //     return this.cellProperties[whichCell].getIsCellSafe()
    // }
    
    getCellClass(index){return this.cellClass[index]}

    setCellClass(index,whichClass){this.cellClass[index] = whichClass}

    // getConnectionWithCell(index){ // returns a set
    //     return this.cellProperties[index].getConnections()
    // }
    // getPossibleMovesFromCell(index){ // returns a set
    //     return this.cellProperties[index].getPossibleMoves()
    // }

    // getIsCellVisited(index){
    //     return this.cellProperties[index].getIsVisited();
    // }

    getAvatar(index){
        if(this.input[index] === 'W') return 'wumpus'
        else if(this.input[index] === 'P') return 'pit'
        else if(this.input[index] === 'G') return 'gold'
        else return 'empty'
    }

    adjacentHas(index,thing){
        if(
            (index+1)%10 != 0 && this.input[index+1] === thing ||
            (index)%10 != 0   && this.input[index-1] === thing ||
            (index+10) < 100  && this.input[index+10]=== thing ||
            (index-10) >= 0   && this.input[index-10]=== thing
          ) return true;
    }

    getInitialAgentAddress(){
        this.agentVisits(this.agentAddress)
        return this.agentAddress;
    }
}