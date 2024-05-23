import Phaser from "../lib/phaser.js";
import { ProgressScene } from "./progress-scene.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class GameOverScene extends Phaser.Scene{
    constructor(){
        super({
            key: SCENE_KEYS.GAMEOVER_SCENE,
        })
    }
    create(){
        console.log(`[${GameOverScene.name}: create] invoked`);
        this.add.text(250, 150, "Vaya, parece que no has comprendido el tema lo suficiente :(");

        const button = this.add.text(370, 300, 'Volver al menu', {
            fontFamily: 'Courier',
            fontSize: '15px',
            color: '#ffffff',
            align: 'center',
            fixedWidth: 260,
            backgroundColor: '#8e8e8e'
        }).setPadding(32).setOrigin(0);
  
        button.setInteractive({ useHandCursor: true });
  
          //button events
          button.on('pointerover', () => {
              button.setBackgroundColor('#c1c1c1');
          });
  
          button.on('pointerout', () => {
              button.setBackgroundColor('#8e8e8e');
          });
          button.on('pointerup', () => {
              this.sound.stopAll();
              this.scene.start(SCENE_KEYS.MENU_SCENE);
              let progress = new ProgressScene();
              progress.resetProgress();
              button.disableInteractive();
          }, this);
    }
}