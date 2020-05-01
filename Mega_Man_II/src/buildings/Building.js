class Building extends Phaser.GameObjects.Group{
    constructor(Scene, key, amountOfBlocks = 0){
        const pos = {
            x: 410,
            y: 288
        }
        super(Scene, {
            key: key,
            frame: 'edificio',
            repeat: amountOfBlocks - 1,
            setXY: {
                x: pos.x,
                y: pos.y,
                /**
                 * The step goes only on the Y-axis because we want the building blocks
                 * to stack one over another. The "96" is the height (in pixels) of the 
                 * building block image
                 */
                stepY: -96
            }
        });

        this.create(
            pos.x,
            /**
             * We get the position of the last block of the building and substract 144 pixels.
             */
            this.getLast(true).y - 144,
            key,
            'edificio_top'
        );

        this.children.iterate( x => {
            x.setScale(2);
            x.setAlpha(1);
            x.setScrollFactor(0.9);
        })
    }
}

export default Building;