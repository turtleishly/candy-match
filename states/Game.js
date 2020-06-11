var Match3 = Match3 || {};

Match3.GameState = {
    init: function(){
        this.NUM_ROWS = 8;
        this.NUM_COLS = 8;
        this.NUM_VARIATIONS = 7;
        this.BLOCK_SIZE = 35;
        this.ANIMATION_TIME = 200;

    },
    create: function(){
        this.background = this.add.sprite(0,0,'background');

        this.board = new Match3.Board(this.NUM_ROWS,this.NUM_COLS,this.NUM_VARIATIONS);
    }
}