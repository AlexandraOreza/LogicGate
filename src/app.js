import Phaser from "./lib/phaser.js";
import { PreloadScene } from "./scenes/preload-scene.js";
import { LevelScene } from "./scenes/level-scene.js";
import { MenuScene } from "./scenes/menu-scene.js";
import { ProgressScene } from "./scenes/progress-scene.js";
import { LevelScene2 } from "./scenes/level-scene2.js";
import { LevelScene3 } from "./scenes/level-scene3.js";
import { LevelScene4 } from "./scenes/level-scene4.js";
import { LevelScene5 } from "./scenes/level-scene5.js";
import { EndScene } from "./scenes/end-scene.js";
import { GameOverScene } from "./scenes/gameover-scene.js";
import { IntroScene } from "./scenes/intro-scene.js";

new Phaser.Game({
    type: Phaser.CANVAS,
    scale:{
        parent: 'gameContainer',
        width: 1024,
        height: 576,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,

    },
    audio: {
        disableWebAudio: true
    },
    scene: [PreloadScene, MenuScene, IntroScene, LevelScene, LevelScene2, LevelScene3, LevelScene4, 
        LevelScene5, ProgressScene, EndScene, GameOverScene],

});

//game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);