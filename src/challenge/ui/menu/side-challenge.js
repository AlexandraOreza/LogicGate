import { UI_ASSET_KEYS } from "../../../assets/asset-keys.js";
import Phaser from "../../../lib/phaser.js";
import { SCENE_KEYS } from "../../../scenes/scene-keys.js";
import { DIRECTION } from "../../../util/direction.js";
import { exhaustiveGuard } from "../../../util/guard.js";
import { LEVEL_ANSWERS } from "../../config/lvl-ans.js";

const ans_opt_UI = {
  color: "black",
  fontSize: "30px",
};

const CURSOR_POS = Object.freeze({
  x: 50,
  y: 445,
});

export class SideChallengeMenu {
  /** @type {Phaser.Scene} */
  #scene;
  /** @type {Phaser.GameObjects.Container}*/
  #optionContainer;
  /**
   * @type {Phaser.GameObjects.Image}
   */
  #challengeCursorObj;
  #selectedOpt;
  /**
   * @type {Phaser.GameObjects.Container}
   */
  #MenuPanel;
  #cont;
  #currentLevel;
  #lvlData;
  #selectedWrongOpt;
  #answerTxt;
  /**
   * @type {Phaser.GameObjects.Container}
   */
  #option;

  constructor(scene) {
    this.#scene = scene;
    this.#cont = 0;
    this.#currentLevel = this.#scene.data.values.level;

    this.#lvlData = LEVEL_ANSWERS["SideR" + this.#currentLevel];
    this.#answerTxt = LEVEL_ANSWERS["SideR" + this.#currentLevel].answers;

    this.#selectedOpt = 2;
    this.#selectedWrongOpt = new Set();
    this.#createChallengeMenu();
  }

  /**
   *
   * @param {import ('../../../util/direction.js').Direction | 'OK' | 'CANCEL'} input
   */
  handleInput(input) {
    if (input === "CANCEL") {
      this.hideMenu();
      return;
    }
    if (input === "OK") {
      let ans = null;
      if (this.#cont < 3) {
        ans = this.#checkAnswer(this.#selectedOpt);
      }
      if (ans === "2") {
        return "2";
      }
      return;
    }

    this.#updateSelection(input);
    this.#updateCursorPos();
  }

  /**
   *
   * @param {number} answ
   */
  #checkAnswer(answ) {
    if (answ === this.#lvlData.rightMapping) {
      this.#scene.sound.play("rightAns", {
        volume: 0.5,
      });
      this.#scene.scene.launch(SCENE_KEYS.SIDE_ROOM);
      this.hideMenu();
      return "2";
    } else if (!this.#selectedWrongOpt.has(answ)) {
      const wrongIndex = this.#lvlData.wrongMappings["OP" + answ];
      /**
       * @type {Phaser.GameObjects.Container}
       */
      this.#option = this.#MenuPanel.getAt(wrongIndex);

      if (!this.#option) {
        console.error("Invalid option:", wrongIndex);
        return;
      }

      /**
       * @type {Phaser.GameObjects.Rectangle}
       */
      const rect = this.#option.getAt(0);
      rect.fillColor = 0xff0000;
      this.#scene.sound.play("wrongAns", {
        volume: 0.5,
      });
      this.#selectedWrongOpt.add(answ);
      this.#cont++;
    }
  }

  /**
   *
   * @param {import ('../../../util/direction.js').Direction} direction
   */

  #updateSelection(direction) {
    if (this.#selectedOpt === 2) {
      switch (direction) {
        case DIRECTION.RIGHT:
          this.#selectedOpt = 3;
          return;
        case DIRECTION.DOWN:
          this.#selectedOpt = 0;
          return;
        case DIRECTION.UP:
        case DIRECTION.LEFT:
        case DIRECTION.NONE:
          return;
        default:
          exhaustiveGuard(this.#selectedOpt);
          break;
      }
      return;
    }

    if (this.#selectedOpt === 3) {
      switch (direction) {
        case DIRECTION.LEFT:
          this.#selectedOpt = 2;
          return;
        case DIRECTION.DOWN:
          this.#selectedOpt = 1;
          return;
        case DIRECTION.UP:
        case DIRECTION.RIGHT:
        case DIRECTION.NONE:
          return;
        default:
          exhaustiveGuard(this.#selectedOpt);
          break;
      }
      return;
    }

    if (this.#selectedOpt === 0) {
      switch (direction) {
        case DIRECTION.RIGHT:
          this.#selectedOpt = 1;
          return;
        case DIRECTION.UP:
          this.#selectedOpt = 2;
          return;
        case DIRECTION.DOWN:
        case DIRECTION.LEFT:
        case DIRECTION.NONE:
          return;
        default:
          exhaustiveGuard(this.#selectedOpt);
          break;
      }
      return;
    }

    if (this.#selectedOpt === 1) {
      switch (direction) {
        case DIRECTION.LEFT:
          this.#selectedOpt = 0;
          return;
        case DIRECTION.UP:
          this.#selectedOpt = 3;
          return;
        case DIRECTION.DOWN:
        case DIRECTION.RIGHT:
        case DIRECTION.NONE:
          return;
        default:
          exhaustiveGuard(direction);
          break;
      }
      return;
    }
    exhaustiveGuard(this.#selectedOpt);
  }
  /**
   * op1 = 2
   * op2 = 3
   * op3 = 0
   * op4 = 1
   */
  #updateCursorPos() {
    switch (this.#selectedOpt) {
      case 2:
        this.#challengeCursorObj.setPosition(CURSOR_POS.x, CURSOR_POS.y);
        return;
      case 3:
        this.#challengeCursorObj.setPosition(550, CURSOR_POS.y);
        return;
      case 0:
        this.#challengeCursorObj.setPosition(CURSOR_POS.x, 538);
        return;
      case 1:
        this.#challengeCursorObj.setPosition(550, 538);
        return;
      default:
        exhaustiveGuard(this.#selectedOpt);
        return;
    }
  }

  //Menu creation
  #createChallengeMenu() {
    //538 bttm, 445 up
    this.#challengeCursorObj = this.#scene.add
      .image(CURSOR_POS.x, CURSOR_POS.y, UI_ASSET_KEYS.CURSOR, 0)
      .setScale(1.5);

    this.#MenuPanel = this.#scene.add.container(0, 0, [
      this.#createAnwsPane(0, 0, this.#answerTxt.OP1),
      this.#createAnwsPane(508, 0, this.#answerTxt.OP2),
      this.#createAnwsPane(0, 87, this.#answerTxt.OP3),
      this.#createAnwsPane(508, 87, this.#answerTxt.OP4),
      this.#challengeCursorObj,
    ]);
  }

  #createAnwsPane(x, y, name) {
    const rectW = 505;
    const rectH = 87;

    this.#optionContainer = this.#scene.add.container(0, 0, [
      this.#scene.add
        .rectangle(
          x + 5,
          this.#scene.scale.height - rectH - y,
          rectW,
          rectH,
          0xede4f3,
          0.8
        )
        .setOrigin(0)
        .setStrokeStyle(8, 0x905ac2, 1),
      this.#scene.add
        .text(
          x + 100,
          this.#scene.scale.height - rectH - y + 25,
          name,
          ans_opt_UI
        )
        .setOrigin(0),
    ]);
    return this.#optionContainer;
  }

  hideMenu() {
    this.#MenuPanel.setVisible(false);
  }
}
