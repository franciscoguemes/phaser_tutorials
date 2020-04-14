class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootloader"});
    }
    preload() {
        console.log("The scene is loaded");
    }
}

export default Bootloader;