class Gameover extends Phaser.Scene{
    constructor(){
        super({key: 'Gameover'});
    }

    preload(){
        console.log('Scene: Gameover');
    }

    /**
     * The method is called when the scene is started...
     * 
     * @param {*} scoring The scoring passed to the scene.
     */
    init(scoring){
        this.data.set('number_of_clicks', scoring.clicksCounter);
        this.data.set('number_of_cursor_keys', scoring.cursorKeysCounter);
        this.data.set('number_of_wasd_keys', scoring.wasdKeysCounter);
    }

    create(){
        /**
         * Counts the clicks in the mouse through the mouse event
         */
        this.add.text(120, 120, 'GAMEOVER', {color: '#fff', fontSize: 50});
        this.add.text(120, 160, this.data.get('number_of_clicks'), {color: '#fff', fontSize: 50});
        this.add.text(120, 200, this.data.get('number_of_cursor_keys'), {color: '#fff', fontSize: 50});
        this.add.text(120, 240, this.data.get('number_of_wasd_keys'), {color: '#fff', fontSize: 50});
        

        this.input.on('pointerdown', () => {
            this.scene.start('Bootloader');
        });

    }


}

export default Gameover;