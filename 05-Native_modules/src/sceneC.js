export default class SceneC extends Phaser.Scene{
    constructor(){
        super({key: "SceneC", active:true});
    }

    preload(){

    }

    create(){
        // alert("Create SceneC")
        
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff9999, 1)

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(300, 100, 100, 100);

        this.add.text(320,110,"C", {font: "96px Courier", fill: "#000000"});
    }

    update(time, delta){

    }
}