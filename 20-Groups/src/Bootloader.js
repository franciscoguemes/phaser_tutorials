class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';
        
        this.load.animation('coinData', 'monedas_anim.json');
        this.load.atlas('monedas', 'monedas.png', 'monedas_atlas.json');
    }

    create(){
        let coin = this.add.sprite(150, 50, 'monedas');

        let group = this.add.group();
        group.add(coin);
        // console.log(group);

        /**
         * Each element in the group has body, but since it is a 
         * staticGrop, the elements are not affected by the gravity.
         */
        let group2 =  this.physics.add.staticGroup({
            key: 'monedas',
            repeat: 5,
            setXY: {
                x:150,
                y: 150,
                stepX: 50
            }
        })

        /**
         * Add manually one more coin to the grop2
         */
        group2.create(90, 150, 'monedas');
        group2.playAnimation('moneda');

        /**
         * Different ways of iterate over the elements of the 
         * group in order to perform individual operations such as
         * scale them. Groups are not containers, and therefore we 
         * can not perform operations over the group.
         */
        // group2.children.entries.map( (x) => {
        //     x.setScale(2);
        // });
        // group2.getChildren().map( (x) => {
        //     x.setScale(2);
        // });
        // Phaser.Actions.ScaleXY(group2.getChildren(), 2, 2);
        group2.children.iterate( (x) => {
            x.setScale(2);
        });

        /**
         * For this group the phyisical body will not follow the each 
         * element in the animation since we declared the group as 
         * staticGroup, which means the physical body is static.
         */
        this.tweens.add({
            targets: group2.getChildren(),
            duration: 600,
            ease: 'Power1',
            y: 100,
            yoyo: true,
            repeat: -1
        });


        /**
         * Each element of group3 has a phyisical body and
         * it is affected by the gravity.
         */
        let group3 =  this.physics.add.group({
            key: 'monedas',
            repeat: 5,
            setXY: {
                x: 150,
                y: 250,
                stepX: 50
            }
        })
        group3.playAnimation('moneda');
        /**
         * In order to make the gravity not to affect each element
         * in the group, the gravity has to be disabled individually
         * for each element.
         */
        group3.children.iterate( (x) => {
            x.setScale(2);
            x.body.setAllowGravity(false);
        });

        /**
         * Since each element has a physical body, the body will
         * move in the animation. To see it clearly set debug 
         * to true in the physics properties in the config (main.js).
         */
        this.tweens.add({
            targets: group3.getChildren(),
            duration: 600,
            ease: 'Power1',
            y: 200,
            yoyo: true,
            repeat: -1
        });
    }

    update(){

    }
}

export default Bootloader;