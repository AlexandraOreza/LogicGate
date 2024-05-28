import { BACKGROUND_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.MENU_SCENE,
    });
  }

  create() {

    //env render
    this.add
      .image(0, 0, BACKGROUND_ASSET_KEYS.WHITE_ROOM)
      .setOrigin(0)
      .setScale(0.52, 0.39);

    const text = this.add.text(this.scale.width / 3, 180, "LogicGate", {
      fontFamily: "Courier",
      fontSize: "64px",
      color: "#000",
      align: "center",
    });
    const button = this.add
      .text(this.scale.width / 2.7, 300, "Jugar", {
        fontFamily: "Arial",
        fontSize: "32px",
        color: "#ffffff",
        align: "center",
        fixedWidth: 260,
        backgroundColor: "#8e8e8e",
      })
      .setPadding(32)
      .setOrigin(0);

    this.sound.pauseOnBlur = false;
    this.sound.play("menuMusic", {
      loop: true,
      volume: 0.3,
    });

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
        this.scene.start(SCENE_KEYS.INTRO_SCENE);
        button.disableInteractive();
      },
      this
    );
  }
}
