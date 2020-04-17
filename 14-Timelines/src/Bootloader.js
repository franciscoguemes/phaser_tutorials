class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';
        
        this.load.image('logo_gamma', 'logo_gamma.png');
    }

    create(){
        this.logo = this.add.image(60, 60, 'logo_gamma').setScale(2);

        /**
         * This is one way of creating the timeline.
         * First create the timeline, then adding the different animations,
         * and finally play it.
         */
        // let timeline = this.tweens.createTimeline();
        // timeline.add({
        //     targets: this.logo,
        //     x: 400
        // });
        // timeline.add({
        //     targets: this.logo,
        //     y: 300,
        //     duration: 500
        // });
        // timeline.add({
        //     targets: this.logo,
        //     x: 60,
        //     duration: 1000
        // });
        // timeline.add({
        //     targets: this.logo,
        //     y: 60,
        //     duration: 500
        // });
        // timeline.play();

        /**
         * Another way to create the timeline is to define directly the 
         * animations. The difference is that now the properties are applied
         * to the entire timeline. It is possible to apply properties to 
         * each individual animation (tween) by adding the properties into
         * the tween.
         */
        // let timeline = this.tweens.timeline({
        //     targets: this.logo,
        //     ease: "Power 1",
        //     duration: 2000,
        //     loop: -1,
        //     tweens: [
        //         {
        //             x:400,
        //             duration: 500,
        //             ease: 'Power2'
        //         },
        //         {
        //             y:300,
        //             duration: 1000,
        //             ease: 'Power3'
        //         },
        //         {
        //             x:60,
        //             duration: 500,
        //             ease: 'lineal'
        //         },
        //         {
        //             y:60
        //         },
        //     ]
        // });

        /**
         * This animation is similar than the previous one, but it plays
         * with the offset.
         */
        // let timeline = this.tweens.timeline({
        //     targets: this.logo,
        //     ease: "Power 1",
        //     duration: 2000,
        //     loop: -1,
        //     tweens: [
        //         {
        //             x:400
        //         },
        //         {
        //             y:300,
        //             offset: 500
        //         },
        //         {
        //             x:60
        //         },
        //         {
        //             y:60
        //         },
        //     ]
        // });


        /**
         * This example shows how a timeline can manage animations with
         * multiple targets (images).
         */
        this.logo2 = this.add.image(60, 220, 'logo_gamma').setScale(2);
        let timeline = this.tweens.timeline({
            targets: [ this.logo, this.logo2],
            ease: "Power 1",
            duration: 2000,
            loop: -1,
            yoyo: -1,
            tweens: [
                {
                    x:400
                }
            ]
        });

        

    }

    update(){

    }
}

export default Bootloader;