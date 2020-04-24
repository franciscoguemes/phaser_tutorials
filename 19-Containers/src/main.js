import Bootloader from './Bootloader.js';

const config = {
    title: 'containers',
    width: 500,
    height: 400,
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
            }
        }
    }
}

new Phaser.Game(config);

