class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';

        this.load.image('tabla', 'tabla.png');
    }

    create(){

        const centerWidth = this.sys.game.config.width/2;
        const centerHeight = this.sys.game.config.height/2;

        let score = this.add.image(centerWidth, centerHeight, 'tabla').setScale(3);
        let textPoints = this.add.text(centerWidth -150, centerHeight -50, 'POINTS', {
            fontFamily: 'Arial',
            fontSize: 30,
            color: '#fff'
        });
        let points = this.add.text(centerWidth, centerHeight -50, '0', {
            fontFamily: 'Arial',
            fontSize: 30,
            color: '#fff'
        });

        /**
         * The container allows to work with multiple objects (score, textScore, points)
         * like if they were a single object.
         */
        let container = this.add.container(0,-300);
        container.add([score, textPoints, points]);

        /**
         * Now is very easy to use the tweens to move everything since we only need to target
         * the container inside the tweens.
         */
        this.tweens.add({
            targets: container,
            duration: 600,
            ease: 'Pointer1',
            y:0
        })

    }

    update(){

    }
}

export default Bootloader;