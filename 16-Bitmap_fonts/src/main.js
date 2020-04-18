import Bootloader from './Bootloader.js';

const config = {
    title: 'prueba',
    width: 500,
    height: 300,
    parent: 'container',
    backgroundColor: "#22a6b3",
    pixelArt: true,
    scene: [
        Bootloader
    ]
}

new Phaser.Game(config);

