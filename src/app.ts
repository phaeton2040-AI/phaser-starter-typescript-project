import Phaser from 'phaser';
import WebFont from 'webfontloader';
import './fonts.css'

class BootScene extends Phaser.Scene {
    constructor() {
        super({key: 'BootScene'});
    }

    preload() {
        WebFont.load({
            // google: {
            //     families: ['Oxygen'] // If you're loading from Google Fonts or specify the custom font you're loading
            // },
            custom: {
                families: ['Oxygen'], // Specify custom font families
                urls: ['styles.css'] // Path to your CSS file that includes @font-face
            },
            active: () => {
                this.scene.start('TestGameScene'); // Start the main scene after fonts have loaded
            }
        });
    }
}

class TestGameScene extends Phaser.Scene {
    constructor() {
        super({key: 'TestGameScene'});
    }

    create() {
        // Set the scene background color to light blue
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#ADD8E6");

        // Calculate the center of the screen
        const width = this.sys.game.scale.width;
        const height = this.sys.game.scale.height;

        // Add a red circle in the center of the scene
        this.add.circle(width / 2, height / 2, 200, 0xFF0000);
        const text = this.add.text(width / 2, height / 2, 'Hello Phaser!', {fontFamily: 'Oxygen', fontSize: '48px', color: '#fff'});

        text.setOrigin(0.5, 0.5);
    }
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game',
    scale: {
        mode: Phaser.Scale.RESIZE, // Resize the game to fill the whole screen
        parent: 'game', // Ensure the game scales correctly in the div with ID 'game'
        width: '100%',
        height: '100%'
    },
    scene: [BootScene, TestGameScene]
};

window.onload = () => {
    new Phaser.Game(config);
};
