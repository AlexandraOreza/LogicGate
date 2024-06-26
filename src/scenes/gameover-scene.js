import Phaser from "../lib/phaser.js";
import { ProgressScene } from "./progress-scene.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.GAMEOVER_SCENE,
    });
  }
  create() {
    this.add.text(
      250,
      150,
      "Vaya, parece que no has comprendido el tema lo suficiente :("
    );

    const button = this.add
      .text(370, 300, "Volver al menu", {
        fontFamily: "Courier",
        fontSize: "15px",
        color: "#ffffff",
        align: "center",
        fixedWidth: 260,
        backgroundColor: "#8e8e8e",
      })
      .setPadding(32)
      .setOrigin(0);

    button.setInteractive({ useHandCursor: true });

    //button events
    button.on("pointerover", () => {
      button.setBackgroundColor("#c1c1c1");
    });

    button.on("pointerout", () => {
      button.setBackgroundColor("#8e8e8e");
    });
    button.on(
      "pointerup",
      () => {
        this.sound.stopAll();
        const progressScene = this.scene.get(SCENE_KEYS.PROGRESS_SCENE);
        if (progressScene && progressScene instanceof ProgressScene) {
          progressScene.resetProgress();
        } else {
          console.error(
            "ProgressScene is not initialized or is not an instance of ProgressScene"
          );
        }
        this.scene.start(SCENE_KEYS.MENU_SCENE);
        button.disableInteractive();
      },
      this
    );
  }
}
