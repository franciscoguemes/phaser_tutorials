const config={
    width: 300,
    height: 200,
    parent: 'container',
    pixelArt: true,
    scene:{
        preload,
        create
    }

}

new Phaser.Game(config);

const spreadsheet_id = 'evil_tomato_spreadsheet';
const atlas_id = 'tomato_atlas';
const json_id = 'evil_tomato_json';

const animation1_id = 'tomato_walk_1';
const animation2_id = 'tomato_walk_2';

function preload(){
    console.log("Preload");
    /**
     * You need to know the width and the height of each frame contained in the spreadsheet.
     */
    this.load.spritesheet(spreadsheet_id, './assets/evil_tomato.png', {frameWidth: 16, frameHeight: 25});

    this.load.atlas(atlas_id, './assets/evil_tomato.png', './assets/evil_tomato.json');

    this.load.json(json_id, './assets/evil_tomato_anim.json');
}

function create(){
    console.log("Create");

    /**
     * Loads the frame 2 of the given spreadsheet and position it on the point (20,20)
     */
    this.tomato1 = this.add.sprite(20, 30, spreadsheet_id,2).setScale(2);


    /**
     * Creates the animation from the spreadsheet
     */
    this.tomato2 = this.add.sprite(100, 100, spreadsheet_id).setScale(2);
    this.anims.create({
        key: animation1_id,
        frames: this.anims.generateFrameNumbers(spreadsheet_id,{
            frames: [1, 2, 3, 4, 5, 6, 7, 8]
        }),
        /**
         * If the frames are consecutive, you can also use this alternative method to
         * define the frames in the animation.
         */
        // frames: this.anims.generateFrameNumbers(spreadsheet_id,{
        //     start: 1,
        //     end: 8
        // }),
        repeat: -1,
        frameRate: 10
    });
    this.tomato2.anims.play(animation1_id);



    /**
     * Creates the animation from the atlas
     */
    this.tomato3 = this.add.sprite(200, 100, atlas_id).setScale(2);
    this.anims.create({
        key: animation2_id,
        frames: this.anims.generateFrameNames(atlas_id,{
            prefix: 'evil_tomato_',
            suffix: ".png",
            start: 1,
            end: 8
        }),
        // frames: this.anims.generateFrameNames(atlas_id,{
        //     prefix: 'evil_tomato_',
        //     suffix: ".png",
        //     frames: [1, 2, 3, 4, 5, 6, 7, 8]
        // }),
        repeat: -1,
        frameRate: 10
    });
    this.tomato3.anims.play(animation2_id);


    /**
     * Creates the animation from the JSON.
     * jsonKey comes from the json file, is the first key in the json.
     * Each frame object in the json file has a key, the key has to match the
     * atlas_id we defined in our app, that is the way that Phaser has to map
     * each frame in the json file with the atlas loaded in memory. 
     * Then to know which frame inside the atlas it uses "frame" field from the
     * json file to match the "fileName" in the atlas. 
     */
    const jsonKey = 'tomato_atlas_walk';
    this.tomato4 = this.add.sprite(300, 100, atlas_id).setScale(2);
    this.dataAnim = this.cache.json.get(json_id);
    this.anims.fromJSON(this.dataAnim);
    this.tomato4.anims.play(jsonKey);
}