var Match3 = Match3 || {};

Match3.PreloadState = {
    Preload : function(){
        this.preloadBar = this.add.Sprite(this.game.world.centerX,this.game.world.centerY);
        this.preloadBar.anchor.setTo(0.5);
        this.preload.Bar.scale.setTo(100,1);
        this.load.setPreloadSprite(this.preloadBar);

        this.load.image('block1','images/bean_blue.png');
        this.load.image('block2','images/bean_green.png');
        this.load.image('block3','images/bean_orange.png');
        this.load.image('block4','images/bean_pink.png');
        this.load.image('block5','images/bean_purple.png');
        this.load.image('block6','images/bean_yellow.png');
        this.load.image('block7','images/bean_red.png');
        this.load.image('block8','images/bean_.whitepng');
        this.load.image('deadBlock','images/bean_dead.png');
        this.load.image('background','images/backyard2.png')

    },
    create: function(){
       // this.game.start('Game');
    }
}