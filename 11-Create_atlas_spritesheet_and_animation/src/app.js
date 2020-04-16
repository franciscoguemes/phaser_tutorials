const config = {
    width: 300,
    height: 200,
    parent: 'container',
    pixelArt: true,
    scene: { preload, create}
}

new Phaser.Game(config);

/**
 * This atlas_id must match the "key" of each frame specified in the file tomato_anim.json
 */
const atlas_id = 'tomato';
json_id = 'tomato_anim';

function preload(){
    console.log("Preload");

    /**
     * Sets the path so it is not necessary to repeat it. (is like doing a cd)
     */
    this.load.path = './assets/';

    this.load.atlas(atlas_id, 'tomato.png', 'tomato_atlas.json');
    this.load.json(json_id, 'tomato_anim.json');
    

}

function create(){
    console.log("Create");

    this.tomato = this.add.sprite(100,100, atlas_id);
    this.tomato_walk = this.add.sprite(120,100, atlas_id);
    this.tomato_down = this.add.sprite(140,100, atlas_id);
    this.tomato_anim = this.cache.json.get(json_id);

    this.anims.fromJSON(this.tomato_anim);

    this.tomato.anims.play('idle');
    this.tomato_walk.anims.play('walk');
    this.tomato_down.anims.play('down');
}
