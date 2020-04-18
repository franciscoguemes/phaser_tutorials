class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';
        
        
    }

    create(){

        /**
         * Text without styles
         */
        this.add.text(20,20, 'Hello World');

        /**
         * Text with styles
         */
        let text = this.add.text(100,100, 'Hello World Styled', {
            color: '#00ff00', 
            backgroundColor: '#fff',
            fontSize: 40,
            fontStyle: 'italic',
            padding: {
                top: 20,
                bottom: 0,
                left: 20,
                right: 20
            } 
        });

        /**
         * Is it possible to override the styles declared for the text
         * or add new ones programatically if the text object is assigned
         * to a variable.
         */
        text.setBackgroundColor('#f0f');
        text.flipX = true;
        text.alpha = 0.5;


        /**
         * This text is going to use a font through the field
         * 'fontFamily'. In this example the name of the font has
         * to match a font name used in the index.html so thus the
         * browser has loaded the font and it is available in the DOM
         * tree.
         */
        const configText = {
            x: 50,
            y: 200,
            text: 'Hello World\n Styled 2',
            style: {
                fontFamily: 'testFont',
                backgroundColor: '#00ff00',
                fontSize: 40,
                align: 'center'
            }
        }
        const text2 = this.make.text(configText);
        text2.setBackgroundColor('#ff0000')

        this.add.text(50,50, 'I am text four', {fontFamily: 'testFont2', fontSize: 40});
    }

    update(){

    }
}

export default Bootloader;