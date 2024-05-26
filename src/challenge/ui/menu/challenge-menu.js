import { UI_ASSET_KEYS } from "../../../assets/asset-keys.js";
import Phaser from "../../../lib/phaser.js";
import { SCENE_KEYS } from "../../../scenes/scene-keys.js";
import { DIRECTION } from "../../../util/direction.js";
import { exhaustiveGuard } from "../../../util/guard.js";
import { shuffle } from "../../../util/shuffle.js";
import { LEVEL_ANSWERS } from "../../config/lvl-ans.js";

const ans_opt_UI = {
  color: "black",
  fontSize: "30px",
};

const CURSOR_POS = Object.freeze({
  x: 50,
  y: 445,
});

export class ChallengeMenu {
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
  /**
   * @type {Phaser.GameObjects.Container}
   */
  #option;
  #shuffledAnswers;
  #reverseMappings;
  #currentChallenge;

  constructor(scene) {
    const CHALLENGES = Object.freeze({
      "": 0,
      "B": 1,
      "C": 2,
    });

    this.#scene = scene;
    this.#cont = 0;
    this.#currentLevel = this.#scene.data.values.level;
    this.#currentChallenge = this.#scene.data.values.challenge;

    this.#lvlData = LEVEL_ANSWERS[this.#currentLevel][CHALLENGES[this.#currentChallenge]];

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
      } else {
        this.#scene.scene.start(SCENE_KEYS.GAMEOVER_SCENE);
      }
      if (ans === "1") {
        return "1";
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
    const selectedAnswer = this.#shuffledAnswers[answ];
    if (selectedAnswer === this.#lvlData.correct) {
      this.#scene.sound.play("rightAns", {
        volume: 0.5,
      });
      return "1";
    } else if (!this.#selectedWrongOpt.has(answ)) {
      const wrongIndex = this.#lvlData.wrongMappings[answ];
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
    const rightAns = Object.keys(this.#lvlData.answers);
    shuffle(rightAns);

    //538 bttm, 445 up
    this.#challengeCursorObj = this.#scene.add
      .image(CURSOR_POS.x, CURSOR_POS.y, UI_ASSET_KEYS.CURSOR, 0)
      .setScale(1.5);

    this.#MenuPanel = this.#scene.add.container(0, 0);

    this.#shuffledAnswers = {};
    this.#reverseMappings = {};

    rightAns.forEach((key, index) => {
      this.#shuffledAnswers[index] = this.#lvlData.answers[key];
      this.#reverseMappings[this.#lvlData.answers[key]] = index;

      const x = index % 2 === 0 ? 0 : 508;
      const y = index < 2 ? 0 : 87;
      this.#MenuPanel.add(
        this.#createAnwsPane(x, y, this.#lvlData.answers[key])
      );
    });
    this.#lvlData.rightMapping = this.#reverseMappings[this.#lvlData.correct];
    this.#MenuPanel.add(this.#challengeCursorObj);
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
