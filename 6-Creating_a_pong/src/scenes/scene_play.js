class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: "Scene_play"});
    }

    create(){

        let center_width = this.sys.game.config.width / 2;
        let center_height = this.sys.game.config.height / 2;

        let h_margin = 30;

        // separator
        this.add.image(center_width, center_height, "separator");
        // console.log(this);

        // pallete
        this.left = this.add.image(h_margin, center_height, "left");
        this.right = this.add.image(this.sys.game.config.width - h_margin, center_height, "right");

        // ball
        this.ball = this.physics.add.image(center_width, center_height, "ball");
        this.ball.setVelocityX(-180);
    }
}

export default Scene_play;