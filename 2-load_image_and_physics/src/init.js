const config = {
    width: 320 * 2,
    height: 180 * 2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload(){
    // this.load.image("pajaro", "./assets/bird.png");
    this.load.image("pajaro", "./assets/bird_dos.png");
}

function create(){
    // this.pajaro = this.add.image(0,0,"pajaro");
    // this.pajaro = this.add.image(80,100,"pajaro");
    this.pajaro = this.physics.add.image(80,100,"pajaro");
    // console.log(this.pajaro);
    this.pajaro.setScale(2);
    this.pajaro.flipX = true;
    // this.pajaro.setAngle(30);
    // this.pajaro.setOrigin(0,0);
    this.pajaro.setOrigin(0.5,0.5);

    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(0.7);

    // this.pajaro.setAcceleration(20,0)
    // this.pajaro.setVelocity(50,0)
}

function update(time, delta){
    // this.pajaro.angle++;

    // this.pajaro.x++;
    // this.pajaro.y++;
}