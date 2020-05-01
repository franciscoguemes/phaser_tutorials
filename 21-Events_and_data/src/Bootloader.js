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
         * Store data. The data stored here (this.data) is only available in 
         * this scene.
         */
        this.data.set('lives', 3);
        this.data.set('coins', 300);
        console.log(this.data.get('coins'));

        /**
         * Recover data
         */
        this.data.setValue('coins', 400);
        console.log(this.data.get('coins'));

        /**
         * Delete data
         */
        this.data.remove('coins');
        console.log(this.data.get('coins'));

        /**
         * Show all data
         */
        console.log(this.data.getAll());

        /**
         * Register an event.
         * Registry is a vaiable avaliable for all scenes. So in 
         * this.registry.events can be stored all events of all scenes.
         * This means an event can be triggered and register in different
         * scenes and functions.
         * 
         */
        this.registry.events.on('change', (score) => {
            console.log('The current score is:' + score);
        });

        /**
         * Trigger the event...
         * Before trigger an event, please ensure that the event was registered
         * first, otherwise the event will have no effect.
         */
        this.registry.events.emit('change', 100);


        /** ********************************************************************
         * Another way to exchange data between scenes...
         ******************************************************************** */

        /**
         * Create the data item 'score' in the global registry (accessible by
         * all existing scenes in the game (at that moment))
         */
        this.registry.set('score', 0);
        this.score = 0;

        /**
         * In this case we are registering for the event CHANGE_DATA:
         * https://photonstorm.github.io/phaser3-docs/Phaser.Data.Events.html
         * 
         * This event is triggered whenever a change on the data store (this.registry)
         * is changed.
         */
        this.registry.events.on('changedata', (parent, key, data) => {
            if(key === 'score'){
                console.log(data);
            }
        });

        /**
         * Every time the pointer is down, then the local score will be one point up and
         * we will also change the score in the global registry, so this will trigger the
         * event CHANGE_DATA ('changedata')
         */
        this.input.on('pointerdown', () => {
            this.score ++;
            this.registry.set('score', this.score);
        });
    }

    update(){

    }
}

export default Bootloader;