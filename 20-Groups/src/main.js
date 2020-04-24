import Bootloader from './Bootloader.js';

const config = {
    title: 'prueba',
    width: 640,
    height: 340,
    parent: 'container',
    type: Phaser.AUTO,
    backgroundColor: "#22a6b3",
    pixelArt: true,
    scene: [
        Bootloader
    ],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            },
            debug: true
        }
    }
}

new Phaser.Game(config);

