import { UI_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class ProgressScene extends Phaser.Scene {
  #progress = [];
  #lvl1;
  #lvl2;
  #lvl3;
  #lvl4;
  #lvl5;
  #keyEnter;
  #currentLevel;

  constructor() {
    super({
      key: SCENE_KEYS.PROGRESS_SCENE,
    });
  }
  /**
   * @param {Object} data
   */
  init(data) {
    this.#progress.push(data);
    this.#currentLevel = data.levelData.level;
  }
  create() {

    this.add.text(
      this.scale.width / 3 + 50,
      100,
      "Presiona enter para continuar",
      { color: "white" }
    );

    this.#lvl1 = this.add.container(150, 250, [
      this.add
        .image(0, 0, UI_ASSET_KEYS.FLAT_FRAME)
        .setOrigin(0)
        .setAlpha(0.3),
        this.add.text(45, 40, "1",{
          fontSize: '20px'
        })
    ]);

    this.#lvl2 = this.add.container(300, 250, [this.add
      .image(0,0, UI_ASSET_KEYS.FLAT_FRAME)
      .setOrigin(0)
      .setAlpha(0.3),
      this.add.text(45, 40, "2",{
        fontSize: '20px'
      })
  ]);
    this.#lvl3 = this.add.container(450, 250, [this.add
      .image(0, 0, UI_ASSET_KEYS.FLAT_FRAME)
      .setOrigin(0)
      .setAlpha(0.3),
      this.add.text(45, 40, "3",{
        fontSize: '20px'
      })
  ]);
    this.#lvl4 = this.add.container(600, 250, [this.add
      .image(0, 0, UI_ASSET_KEYS.FLAT_FRAME)
      .setOrigin(0)
      .setAlpha(0.3),
      this.add.text(45, 40, "4",{
        fontSize: '20px'
      })
  ]);
    this.#lvl5 = this.add.container(750, 250, [this.add
      .image(0, 0, UI_ASSET_KEYS.FLAT_FRAME)
      .setOrigin(0)
      .setAlpha(0.3),
      this.add.text(45, 40, "5",{
        fontSize: '20px'
      })
  ]);

    this.#updateProgress();

    this.#keyEnter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
  }

  update() {
    const wasEnterKey = Phaser.Input.Keyboard.JustDown(this.#keyEnter);
    if (wasEnterKey) {
      console.log(`entering level: ${this.#progress.length + 1}`);
      this.#currentLevel += 1;
      const nextLevelKey = `LEVEL_SCENE${this.#currentLevel}`;
      if (SCENE_KEYS[nextLevelKey]) {
        this.scene.start(SCENE_KEYS[nextLevelKey]);
      } else {
        this.scene.start(SCENE_KEYS.END_SCENE);
      }
    }
  }

  #updateProgress() {
    const LEVELS = Object.freeze({
      1: this.#lvl1,
      2: this.#lvl2,
      3: this.#lvl3,
      4: this.#lvl4,
      5: this.#lvl5,
    });

    this.#progress.forEach((element) => {
      if (element.levelData.progress == true) {
        const level = LEVELS[element.levelData.level];
        if (level) {
          level.getAt(0).setAlpha(1);
        }
      }
    });
  }

  resetProgress(){
    this.#progress = [];
    this.#currentLevel = 0;
  }
}
