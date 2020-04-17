class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';
        
        this.load.image('logo_gamma', 'logo_gamma.png');
    }

    create(){
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo_gamma');
    }

    update(){

    }
}

export default Bootloader;