import Bootloader from './Bootloader.js';
import Scene1 from './scenes/Scene1.js';

const config = {
    title: 'prueba',
    width: 400,
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

