var Match3 = Match3 || {};

Match3.Board = function(state,rows,cols,blockVariations){
    this.state = state;
    this.rows = rows;
    this.cols = cols;
    this.blockVariations = blockVariations;

    this.grid = [];

    var i,j;
    for(i = 0;i < rows; i++){
        this.grid.push([]);

        for(j = 0;j < cols; j++){
            this.grid[i].push(0);
            
        }
    }

    this.reserveGrid = [];

}