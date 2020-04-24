class SceneA extends Phaser.Scene{
    constructor(){
        super({key: "SceneA", active: true});
    }

    preload(){

    }

    create(){
        // alert("Create SceneA")
        
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3300, 1)

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        this.add.text(120, 110, "A", { font: "96px Courier", fill: "#000000" });

        /**
         * If you add the scene dinamically, ensure that in the init.js you are not loading the
         * scene, otherwise you will get an error of type: "Cannot add a Scene with duplicate key".
         * This method adds dinamically the scene to the manager, is equivalent as adding the scene
         * in the manager in init.js in the config.
         */
        this.scene.add("SceneC", new SceneC);

        /**
         * Starts the scene and remove the current scene.
         */
        // this.scene.start("SceneC");

        // this.scene.bringToTop("SceneA");
        // this.scene.sendToBack("SceneC");
        // this.scene.moveUp(this);
        // this.scene.moveDown(this);
        // this.scene.moveBelow("SceneB", "SceneC");
        // this.scene.moveAbove("SceneB", "SceneC");

    }

    update(time, delta){

    }
}