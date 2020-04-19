import Bootloader from './Bootloader.js';

const config = {
    title: 'audio',
    width: 500,
    height: 400,
    parent: 'container',
    type: Phaser.AUTO,
    backgroundColor: "#22a6b3",
    pixelArt: true,
    scene: [
        Bootloader
    ]
}

new Phaser.Game(config);

