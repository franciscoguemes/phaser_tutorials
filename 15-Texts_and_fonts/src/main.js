import Bootloader from './Bootloader.js';
import Scene1 from './scenes/Scene1.js';

const config = {
    title: 'fonts',
    width: 600,
    height: 300,
    parent: 'container',
    backgroundColor: "#22a6b3",
    pixelArt: true,
    scene: [
        Bootloader,
        Scene1
    ]
}

new Phaser.Game(config);

