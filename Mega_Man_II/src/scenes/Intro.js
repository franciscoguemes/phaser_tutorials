import Building from '../buildings/Building.js';

class Intro extends Phaser.Scene{
    constructor(){
        super({key: 'Intro'});
    }


    preload(){
        console.log('Scene: Intro');
    }

    init(){
        this.camera = this.cameras.main;
        this.audioMega = this.sound.add('megamanAudio', {
            loop: false
        });
    }

    create(){

        const menuTextArray = [
            '  NORMAL\n',
            '  DIFFICULT\n\n',
            'PRESS START'
        ];

        const logo = this.add.image(
            this.scale.width / 2, 
            -1195,
            'logo'
        )
        .setScale(2);

        const menuText = this.add.bitmapText(
            90,
            -1070,
            'font',
            menuTextArray
        )

        const selectorPos = [0, 30];

        const selector = this.add.image(
            100,
            -1063 + selectorPos[0],
            'selector'
        )
        .setScale(2);

        const cursor = this.input.keyboard.createCursorKeys();
        cursor.down.on('down', () => {
            selector.y = -1063 + selectorPos[1];
        });
        cursor.up.on('down', () => {
            selector.y = -1063 + selectorPos[0];
        });

        this.tweens.add({
            targets: selector,
            ease: (e) => Math.round(e),
            repeat: -1,
            alpha: 0
        });

        const menuContainer = this.add.container(0,0);

        menuContainer.add([
            selector,
            logo,
            menuText
        ]);

        menuContainer.setAlpha(0);

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
        .setDepth(2)
        .setAlpha(0);

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
        .setOrigin(0)
        .setAlpha(0);
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


        const timeline = this.tweens.createTimeline();

        timeline.add({
            targets: creditsText,
            alpha: 0,
            delay: 3000,
            duration: 500,
            onComplete: () => {
                this.cameras.main.flash(500);
                this.audioMega.play();
            }
        });

        timeline.add({
            targets: [background, ...buildings.getChildren()],
            alpha: 1,
            duration: 1000
        })


        timeline.add({
            targets: [historyText],
            alpha: 1,
            repeat: textArray.text.length -1,
            hold: 2900,
            repeatDelay: 100,
            yoyo: true,
            onRepeat: () => {
                textArray.count ++;
                historyText.setText(textArray.text[textArray.count]);

                Phaser.Display.Align.In.BottomCenter(
                    historyText,
                    this.add.zone(0, -60, 512, 480).setOrigin(0)
                );
            },
            onComplete: () => {
                //Move the camera
                this.camera.pan(this.scale.width / 2, -1150, 10000, 'Quad.easeIn' );
            }

        });

        timeline.add({
            targets: [menuContainer],
            delay: 1100,
            duration: 1,
            alpha: 1
        });

        timeline.play();

        
    }

    update(){

    }

}

export default Intro;