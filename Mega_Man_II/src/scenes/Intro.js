import Building from '../buildings/Building.js';

class Intro extends Phaser.Scene{
    constructor(){
        super({key: 'Intro'});
    }

    preload(){
        console.log('Scene: InBuildingstro');

        this.camera = this.cameras.main;
    }

    create(){

        const menuTextArray = [
            '  NORMAL\n',
            '  DIFFICULT\n\n',
            'PRESS START'
        ];

        const creditsTextArray = [
            '1998 CAPCOM CO. LTD\n',
            'TM AND 1998 CAPCOM U.S.A, INC.\n',
            'LICENSED BY\n',
            'NINTENDO OF AMERICA. INC.\n',
            'AND CREATED WITH PHASER 3'
        ];

        const textArray = {
            text: [
                'IN THE YEAR OF 200X,\n\nA SUPER ROBOT NAMED MEGAMAN',
                'WAS CREATED.\n\nDR.LIGHT CREATED MEGAMAN',
                'TO STOP THE EVIL DESIRES\n\nOF DR.WILY.',
                'HOWEVER, AFTER HIS DEFEAT,\n\nDR.WILY CREATED EIGHT',
                'OF HIS OWN ROBOTS\n\nTO COUNTER MEGAMAN.'
            ],
            count: 0
        };

        //Credits
        const creditsText = this.add.bitmapText(
            this.scale.width / 2,
            this.scale.height / 2,
            'font',
            creditsTextArray, 16, 1
        )
        .setOrigin(0.5)
        .setDepth(2);

        //Story line text
        const historyText = this.add.bitmapText(
            0,
            0,
            'font',
            textArray.text[0]
        )
        .setCenterAlign()
        .setDepth(2);

        Phaser.Display.Align.In.BottomCenter(
            historyText,
            this.add.zone(0, -60, 512, 480).setOrigin(0)
        );

        const background_text = this.add.image(
            0, 
            this.scale.height, 
            'background_text'
        )
        .setOrigin(0,1)
        .setScrollFactor(0.7)
        .setDepth(1);


        //Background
        const background = this.add.image(0, -104, 'objects', 'background')
        .setScale(2)
        .setOrigin(0);
        background.setScrollFactor(0,0.7);

        const buildings = new Building(this, 'objects', 12);

        //Megaman
        const megaman = this.add.sprite(
            423, 
            -968, 
            'megaman'
        )
        .setScale(2)
        .setDepth(2)
        .setScrollFactor(.9);

        megaman.anims.play('idle');


        //Move the camera
        this.camera.pan(this.scale.width / 2, -1150, 1000, 'Quad.easeIn' );
    }

    update(){

    }

}

export default Intro;