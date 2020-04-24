import Bootloader from './Bootloader.js';

const config = {
    title: 'audio',
    width: 400,
    height: 300,
    parent: 'container',
    type: Phaser.AUTO,
    backgroundColor: "#22a6b3",
    pixelArt: false,
    scene: [
        Bootloader
    ]
}

new Phaser.Game(config);

