import {
  BACKGROUND_ASSET_KEYS,
  CHALLENGE_ASSET_KEYS,
  DOOR_ASSET_KEYS,
  POSTER_ASSET_KEYS,
  UI_ASSET_KEYS,
} from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";
import { ChallengeMenu } from "../challenge/ui/menu/challenge-menu.js";
import { DIRECTION } from "../util/direction.js";
import { getRandomLetter } from "../util/shuffle.js";

export class LevelScene extends Phaser.Scene {
  #challengeMenu;
  /** @type {Phaser.Types.Input.Keyboard.CursorKeys} */
  #cursorKey;
  /** @type {Phaser.GameObjects.Image} */
  #door;
  /** @type {boolean} */
  #cleared;
  #challenge;
  #poster;
  #keyEnter;
  #chll

  constructor() {
    super({
      key: SCENE_KEYS.LEVEL_SCENE,
    });
    
  }

  preload(){
    this.#chll = getRandomLetter();
    this.data.set({
      'level': 1,
      progress: false,      
      challenge: this.#chll,
    });
    this.#cleared = false;
  }

  create() {
    //env render
    this.add.image(0, 0, BACKGROUND_ASSET_KEYS.WHITE_ROOM).setOrigin(0).setScale(.52,.39);
    this.add.text(0, 0, "Level: "+this.data.values.level,{
      color: 'black',
      fontSize: '30px',
    });

    this.#poster = this.add.image(300, 250, POSTER_ASSET_KEYS.POSTER_ICON).setScale(0.1);

    this.#handleDoor(this.#cleared);

    this.#poster.setInteractive({ useHandCursor: true });

    let posterLayer = this.add.layer();
    posterLayer.setInteractive();

    //events
    this.#door.on("pointerover", () => {
      this.#door.setAlpha(0.5);
    });

    this.#door.on("pointerout", () => {
      this.#door.clearAlpha();
    });

    let challengeImg, inst, arrow,enterkey;

    this.#door.on("pointerup", () => {
      if (this.#cleared == false) {
        challengeImg = this.add
          .image(350, 70, CHALLENGE_ASSET_KEYS[`LVL1${this.#chll}`])
          .setOrigin(0);

        arrow = this.add.image(100, 100, UI_ASSET_KEYS.ARROWKEYS).setScale(.3);
        enterkey = this.add.image(100, 270, UI_ASSET_KEYS.ENTER_KEY).setScale(.25).setRotation(.3);
        
        inst = this.add.text(
          this.scale.width / 4,
          50,
          "¿Qué valor resulta para '??' ?",
          {
            color: "#000",
            fontSize: "25px",
          }
        );
        this.#challenge = this.add.container(0, 0, [
          this.add.rectangle(this.scale.width / 2, 215, 600, 350, 0xffffff),
          challengeImg,
          inst,
          arrow,
          enterkey,
        ]);

        this.#challengeMenu = new ChallengeMenu(this);

        this.#door.disableInteractive();
        this.#poster.disableInteractive();
      } else {
        console.log("cleared");
      }
    });

    this.#poster.on("pointerover", () => {
      this.#poster.setAlpha(0.5);
    });

    this.#poster.on("pointerout", () => {
      this.#poster.clearAlpha();
    });

    let info, posterOR, posterAND;

    this.#poster.on("pointerup", () => {
      if (!posterOR && !info) {
        posterOR = posterLayer.add(
          this.add
            .image(this.scale.width / 2, 200, POSTER_ASSET_KEYS.POSTER_OR)
            .setScale(0.5)
        );
        posterAND = posterLayer.add(
          this.add
            .image(this.scale.width / 2, 350, POSTER_ASSET_KEYS.POSTER_AND)
            .setScale(0.5)
        );
        info = this.add.text(
          this.scale.width / 3,
          100,
          "Haz clic fuera de la imagen para cerrar",
          {
            color: "#000",
            align: "center",
          }
        );
        posterOR.setVisible(true);
        posterAND.setVisible(true);
        info.setVisible(true);
        this.#poster.disableInteractive();
        this.#door.disableInteractive();
      }
    });

    this.input.on("pointerdown", () => {
      if (posterOR && info) {
        posterOR.setVisible(false);
        posterAND.setVisible(false);
        info.setVisible(false);
        posterOR = null;
        posterAND = null;
        info = null;

        this.#poster.setInteractive();
        this.#door.setInteractive();
      }
    });


    this.#cursorKey = this.input.keyboard.createCursorKeys();
    this.#keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  update() {
    const wasSpaceKey = Phaser.Input.Keyboard.JustDown(this.#cursorKey.space);
    const wasEnterKey = Phaser.Input.Keyboard.JustDown(this.#keyEnter);
    if (this.#challengeMenu && (wasSpaceKey || wasEnterKey)) {
      let ans = this.#challengeMenu.handleInput("OK");
      if (ans === "1") {
        this.#cleared = true;
        console.log("got it right");
        this.#handleDoor(this.#cleared);
        return;
      }
      return;
    }

    if (this.#challengeMenu &&  Phaser.Input.Keyboard.JustDown(this.#cursorKey.shift)) {
      this.#challengeMenu.handleInput("CANCEL");
      this.#door.setInteractive(true);
      this.#challenge.setVisible(false);
      this.#poster.setInteractive(true);
      this.input.keyboard.disableGlobalCapture();
      return;
    }

    /**
     * @type {import ('../util/direction.js').Direction}
     */
    let selectedDir = DIRECTION.NONE;
    if (this.#cursorKey.left.isDown) {
      selectedDir = DIRECTION.LEFT;
    } else if (this.#cursorKey.right.isDown) {
      selectedDir = DIRECTION.RIGHT;
    } else if (this.#cursorKey.down.isDown) {
      selectedDir = DIRECTION.DOWN;
    } else if (this.#cursorKey.up.isDown) {
      selectedDir = DIRECTION.UP;
    }

    if (selectedDir !== DIRECTION.NONE) {
      this.#challengeMenu.handleInput(selectedDir);
    }
  }

  /**
   * @param {boolean} cleared
   */
  #handleDoor(cleared) {
    if (cleared == true) {
      this.#challengeMenu.hideMenu();
      this.#challenge.setVisible(false);

      this.#door = this.add
        .image(this.scale.width / 2, 360, DOOR_ASSET_KEYS.DOOR_OPEN)
        .setScale(.3);

      this.#door.on("pointerup", () => {
        this.data.values.progress = true;
        this.scene.start(SCENE_KEYS.PROGRESS_SCENE, {levelData: this.data.values});
      });
    } else {
      this.#door = this.add
        .image(this.scale.width / 2, 360, DOOR_ASSET_KEYS.DOOR_CLOSED)
        .setScale(.3);
    }
    this.#door.setInteractive({ useHandCursor: true });
  }
}
