import Bootloader from './Bootloader.js';
import UI from './scenes/UI.js';
import Gameover from './scenes/Gameover.js'

const config = {
    title: 'prueba',
    width: 600,
    height: 400,
    parent: 'container',
    type: Phaser.AUTO,
    backgroundColor: "#22a6b3",
    pixelArt: true,
    scene: [
        Bootloader,
        UI,
        Gameover
    ]
}

new Phaser.Game(config);

