class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    audiosprite_id = 'sfx';

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';
        
        this.load.image('logo_gamma', 'logo_gamma.png');

        this.load.audioSprite(this.audiosprite_id, './audio/spriteAudioGamma.json', ['./audio/spriteAudioGamma.ogg']);
    }

    create(){
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo_gamma');

        this.input.keyboard.on('keydown_RIGHT', () =>{
            this.sound.playAudioSprite(this.audiosprite_id, 'sandwich_1');
        });
        this.input.keyboard.on('keydown_DOWN', () =>{
            this.sound.playAudioSprite(this.audiosprite_id, 'sandwich_2');
        });
        this.input.keyboard.on('keydown_LEFT', () =>{
            this.sound.playAudioSprite(this.audiosprite_id, 'sandwich_3');
        });
        this.input.keyboard.on('keydown_UP', () =>{
            this.sound.playAudioSprite(this.audiosprite_id, 'sandwich_4');
        });

    }

    update(){

    }
}

export default Bootloader;