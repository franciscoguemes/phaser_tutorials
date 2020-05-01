class UI extends Phaser.Scene{
    constructor(){
        super({key: 'UI'});
    }

    preload(){
        console.log('Scene: UI');
    }

    create(){
        /**
         * Counts the clicks in the mouse through the mouse event
         */
        this.add.text(20, 20, 'Clicks:', {color: '#fff', fontSize: 50});
        this.clicks = this.add.text(240, 20, '0', {color: '#fff', fontSize: 50});


        /**
         * Emits/listents its own event in order to count the cursor keys
         */
        this.add.text(20, 100, 'Cursor Keys:', {color: '#fff', fontSize: 50});
        this.cursorKeys = this.add.text(400, 100, '0', {color: '#fff', fontSize: 50});
        this.registry.events.on('another_cursor_key_down', (keysDown) => {
            this.cursorKeys.setText(keysDown);
        });


        /**
         * Listen for any event of type data change central registry and then update
         * the WASD keys counter
         */
        this.add.text(20, 200, 'WASD Keys:', {color: '#fff', fontSize: 50});
        this.wasdKeys = this.add.text(340, 200, '0', {color: '#fff', fontSize: 50});
        this.registry.events.on('changedata', (parent, key, data) => {
            if(key === 'wasdKeys' ){
                this.wasdKeys.setText('' + data)
            }
        });
    }

    increaseNumberOfClicks(clicks){
        this.clicks.setText(clicks);
    }

    update(){

    }

}

export default UI;