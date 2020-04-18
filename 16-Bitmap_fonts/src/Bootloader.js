

const image_font_black_id = 'bitmap_font_black';
const json_font_black_id = 'bitmap_font_b';

const image_font_white_id = 'bitmap_font_white';
const json_font_white_id = 'bitmap_font_w';


class Bootloader extends Phaser.Scene{
    constructor(){
        super('Bootloader');
    }

    preload(){
        console.log('Bootloader :D');
        this.load.path = './assets/';

        this.load.image(image_font_black_id, 'bitmap_font_black.png');
        this.load.json(json_font_black_id, 'bitmap_font_black.json');

        this.load.image(image_font_white_id, 'bitmap_font_white.png');
        this.load.json(json_font_white_id, 'bitmap_font_white.json');
        
    }

    create(){
        this.value = 0;

        /**
         * Since the font is black, the setTint is useless, it can not change the color
         */
        let config1 = this.cache.json.get(json_font_black_id);
        this.cache.bitmapFont.add(image_font_black_id, Phaser.GameObjects.RetroFont.Parse(this, config1));
        this.text1 = this.add.bitmapText(10, 10, image_font_black_id, 'VALUE 0').setTint(0xff0000);

        /**
         * The second font is white, so the color can be modified with the 'setTint'
         */
        let config2 = this.cache.json.get(json_font_white_id);
        this.cache.bitmapFont.add(image_font_white_id, Phaser.GameObjects.RetroFont.Parse(this, config2));
        this.text2 = this.add.bitmapText(10, 30, image_font_white_id, 'VALUE 0').setTint(0xff0000);
    }

    update(){
        var static_text = 'VALUE ' + this.value++;
        this.text1.text = static_text;
        this.text2.text = static_text;
    }
}

export default Bootloader;