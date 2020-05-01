class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';
        this.clicksCounter = 0;
        this.cursorKeysCounter = 0;
        this.wasdKeysCounter = 0;
        this.registry.set('wasdKeys', 0);
    }

    create(){
        /**
         * Launches the scene UI
         */
        this.scene.launch('UI');

        /**
         * Register the event for the mouse clic
         */
        this.input.on('pointerdown', () => {
            this.clicksCounter++;
            //Get the scene UI and execute the method increaseScore
            this.scene.get('UI').increaseNumberOfClicks(this.clicksCounter);
            if(this.clicksCounter > 3){
                //Removes from the screen the scene UI
                this.scene.stop('UI');
                //Turns on the scene Gameover and pass all the data to that scene
                let scoring = {
                    clicksCounter: this.clicksCounter,
                    cursorKeysCounter: this.cursorKeysCounter,
                    wasdKeysCounter: this.wasdKeysCounter,
                };
                //Start the scene Gameover and pass the current scoring...
                this.scene.start('Gameover', scoring);
            }
        } );


        /**
         * Register the event for the cursor keys: LEFT, UP, RIGHT, DOWN, SHIFT, SPACE
         */
        let cursorKeys = this.input.keyboard.createCursorKeys();
        let increaseCursorKeys = () => {
            this.cursorKeysCounter++;
            //Trigger the event 'another_cursor_key_down'
            this.registry.events.emit('another_cursor_key_down', this.cursorKeysCounter);
        };
        cursorKeys.up.on('down', increaseCursorKeys);
        cursorKeys.down.on('down', increaseCursorKeys);
        cursorKeys.left.on('down', increaseCursorKeys);
        cursorKeys.right.on('down',increaseCursorKeys);
        cursorKeys.shift.on('down', increaseCursorKeys);
        cursorKeys.space.on('down', increaseCursorKeys);


        /**
         * Register the wasd keys counter in the registry
         * and then set the events for the W,A,S,D keys
         */
        let increaseWasdKeys = () => {
            this.wasdKeysCounter++;
            this.registry.set('wasdKeys', this.wasdKeysCounter);
        };
        let wasdKeys = this.input.keyboard.addKeys('W,S,A,D');
        wasdKeys.W.on('down', increaseWasdKeys);
        wasdKeys.S.on('down', increaseWasdKeys);
        wasdKeys.A.on('down', increaseWasdKeys);
        wasdKeys.D.on('down', increaseWasdKeys);

    }

    update(){

    }
}

export default Bootloader;