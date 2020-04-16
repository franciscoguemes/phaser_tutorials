import Pallete from '../gameObjects/pallete.js';

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
        this.left = new Pallete(this, h_margin, center_height, "left");
        this.right = new Pallete(this, this.sys.game.config.width - h_margin, center_height, "right");

        // ball
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(center_width, center_height, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);

        // Physics
        this.physics.add.collider(this.ball, this.left, this.collidePallete, null, this);
        this.physics.add.collider(this.ball, this.right, this.collidePallete, null, this);
    }

    collidePallete(){
        
    }

}



export default Scene_play;