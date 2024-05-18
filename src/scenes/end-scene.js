import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class EndScene extends Phaser.Scene{
    constructor() {
        super({
          key: SCENE_KEYS.END_SCENE,
        });
      }
      
    create(){
      console.log(`[${EndScene.name}: create] invoked`);
      console.log('Yei, no hay más niveles');

      this.add.text(200, 200, "Felicidades, has terminado \ntodos los niveles",{
        fontSize: '40px',
        color: 'white',
        align: 'center',
      }).setOrigin(0); 

      this.add.text(5, 535, "Assets empleados:\nComplete UI Essential Pack (crusenho)\nHand drawn dungeon icon pack (limofeus)",{
        fontSize: '15px',
        color: 'white',
      }).setOrigin(0); 

      this.add.text(785, 535, "sfx empleados:\nCDat's Wrong! (Beetlemuse)\nDat's Right! (Beetlemuse)",{
        fontSize: '15px',
        color: 'white',
        align: 'right'
      }).setOrigin(0); 


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
          button.disableInteractive();
      }, this);
    }
}