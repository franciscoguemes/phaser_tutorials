class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';
        
        this.load.image('logo_gamma', 'logo_gamma.png');
        this.load.audio('testAudio', 'sandwich.mp3');
    }

    create(){
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, 'logo_gamma');

        let audio = this.sound.add('testAudio', {loop: false});


        /**
         * This property makes the sound to continue even when the game container loses
         * the focus.
         */
        this.sound.pauseOnBlur = false;

        /**
         * Global sound properties.
         */
        this.sound.stopAll();
        this.sound.resumeAll();

        this.input.keyboard.on('keydown_RIGHT', () => {
            audio.play();
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            audio.stop();
        });

        this.input.keyboard.on('keydown_UP', () => {
            // audio.pause();
            // audio.rate += 0.1;
            // audio.detune += 100;
            // audio.mute = true;
            // audio.volume -= 0.1;
            // audio.seek = 3;

            /**
             * This makes the fade out effect.
             */
            this.tweens.add({
                targets: audio,
                volume: 0,
                ease: 'Power1',
                duration: 2000
            });

        });
        this.input.keyboard.on('keydown_DOWN', () => {
            // audio.resume();
            // audio.rate = 1;
            // audio.detune = 1;
            // audio.mute = false;
            // audio.volume = 1;
        })
    }

    update(){

    }
}

export default Bootloader;