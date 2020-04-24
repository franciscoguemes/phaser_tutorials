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

        // Controls right pallete
        this.cursor = this.input.keyboard.createCursorKeys();

        // Controls left pallete
        this.cursor_w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    }

    update(){
        if(this.ball.x < 0 || this.ball.x > this.sys.game.config.width){
            this.ball.setPosition(this.sys.game.config.width / 2,  this.sys.game.config.height / 2);
        }

        // Control of the right pallete
        if(this.cursor.down.isDown){
            this.right.body.setVelocityY(300);
        }else if(this.cursor.up.isDown){
            this.right.body.setVelocityY(-300);
        }else {
            this.right.body.setVelocityY(0);
        }

        // Control of the left pallete
        if(this.cursor_s.isDown){
            this.left.body.setVelocityY(300);
        }else if(this.cursor_w.isDown){
            this.left.body.setVelocityY(-300);
        }else {
            this.left.body.setVelocityY(0);
        }
    }

    collidePallete(){
        /**
         * TODO: Instead of changing the direction randomly, do it according to the point where
         * the ball collide with the pallete.
         */
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }



}



export default Scene_play;