import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class IntroScene extends Phaser.Scene {
  #text = [];
  #display;
  #keyEnter;
  constructor() {
    super({
      key: SCENE_KEYS.INTRO_SCENE,
    });
  }

  create() {

    const loadedText = this.cache.text.get("Intro");
    this.#text = loadedText.split("\n");

    this.#display = this.add.text(180, 150, this.#text[0], {
      color: "white",
      fontSize: "20px",
      align: "center",
      wordWrap: { width: 700 },
    });

    this.add.text(350, 400, "presiona ENTER para continuar\nPresiona SHIFT para saltar", {
      color: "white",
      fontSize: "15px",
      align: "center",
    });
    
    this.input.keyboard.on(
      "keydown",
      (event) => {
        if(event.code === 'Enter'){
          this.#updateText();
        }else if(event.code === 'ShiftLeft' || event.code === 'ShiftRight'){
          this.scene.start(SCENE_KEYS.LEVEL_SCENE);
        }
      },
      this
    );
  }

  #updateText() {
    this.#text.shift();
    if (this.#text.length > 0) {
      this.#display.setText(this.#text[0]);
    } else {
      this.scene.start(SCENE_KEYS.LEVEL_SCENE);
    }
  }
}
