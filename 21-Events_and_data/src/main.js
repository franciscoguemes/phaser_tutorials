import Bootloader from './Bootloader.js';

const config = {
    title: 'prueba',
    width: 300,
    height: 200,
    parent: 'container',
    type: Phaser.AUTO,
    backgroundColor: "#22a6b3",
    pixelArt: true,
    scene: [
        Bootloader
    ]
}

new Phaser.Game(config);

