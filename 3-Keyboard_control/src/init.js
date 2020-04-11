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
                // y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload(){
    this.load.image("bird", "./assets/bird.png");
}

function create(){
    /**
     * In the canvas the origin of coordinates is the upper left corner of the canvas, point (0,0).
     * If the canvas is 600x400 this would be the coordinates:
     *  Upper left corner: 0,0
     *  Upper right corner: 600,0
     *  Bottom left corner: 0,400
     *  Bottom right corner: 600,400
     */
    // this.bird = this.add.image(100,50, "bird");
    

    // this.input.keyboard.on("keydown_RIGHT", () =>{
    //     this.bird.x++;
    // })

    /**
     * To print the keycodes in Phaser. See the console in the browser...
     */
    // console.log(Phaser.Input.Keyboard.KeyCodes)

    // this.bird = this.physics.add.image(100,50, "bird");

    // this.input.keyboard.on("keydown_RIGHT", () =>{
    //     this.bird.setAcceleration(100,0);
    // })

    // this.input.keyboard.on("keyup_RIGHT", () =>{
    //     this.bird.setAcceleration(0,0);
    //     this.bird.setVelocity(0);
    // })

    /**
     * An example using the cursor keys defined by default...
     */
    // this.bird = this.physics.add.image(100,50, "bird");
    // this.cursor = this.input.keyboard.createCursorKeys();
    // console.log(this.cursor)

    /**
     * An example using customized keys...
     */
    this.bird = this.physics.add.image(100,50, "bird");
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
}

function update(time, delta){
    
    // if(this.cursor.right.isDown){
    //     this.bird.x++;
    // }else if(this.cursor.left.isDown){
    //     this.bird.x--;
    // }else if(this.cursor.up.isDown){
    //     this.bird.y--;
    // }else if(this.cursor.down.isDown){
    //     this.bird.y++;
    // }

    if(this.right.isDown){
        this.bird.x++;
    }else if(this.left.isDown){
        this.bird.x--;
    }
}