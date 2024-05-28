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
import { SideChallengeMenu } from "../challenge/ui/menu/side-challenge.js";
import { getRandomLetter } from "../util/shuffle.js";

export class LevelScene5 extends Phaser.Scene {
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
  #sideDoor;
  #chll;

  constructor() {
    super({
      key: SCENE_KEYS.LEVEL_SCENE5,
    });
  }
  preload() {
    this.#chll = getRandomLetter();
    this.data.set({
      level: 5,
      progress: false,
      challenge: this.#chll,
    });
    this.#cleared = false;
  }

  create() {
    console.log(`[${LevelScene5.name}: create] invoked`);

    //env render
    this.add.image(0, 0, BACKGROUND_ASSET_KEYS.LVL5_WALL).setOrigin(0);
    this.add.text(0, 0, "Level: " + this.data.values.level, {
      color: "black",
      fontSize: "30px",
    });

    this.#poster = this.add
      .image(720, 300, POSTER_ASSET_KEYS.POSTER_ICON)
      .setScale(0.1);

    this.#sideDoor = this.add
      .image(70, 450, DOOR_ASSET_KEYS.MDOOR_CLOSED)
      .setScale(0.3);

    this.#handleDoor(this.#cleared);

    this.#poster.setInteractive({ useHandCursor: true });
    this.#sideDoor.setInteractive({ useHandCursor: true });

    let posterLayer = this.add.layer();
    posterLayer.setInteractive();

    //events
    this.#door.on("pointerover", () => {
      this.#door.setAlpha(0.5);
    });

    this.#door.on("pointerout", () => {
      this.#door.clearAlpha();
    });

    let challengeImg, inst, arrow, enterkey;

    this.#sideDoor.on("pointerover", () => {
      this.#sideDoor.setAlpha(0.5);
    });

    this.#sideDoor.on("pointerout", () => {
      this.#sideDoor.clearAlpha();
    });
    this.#sideDoor.on("pointerup", () => {
      arrow = this.add.image(100, 100, UI_ASSET_KEYS.ARROWKEYS).setScale(0.3);
      enterkey = this.add
        .image(100, 270, UI_ASSET_KEYS.ENTER_KEY)
        .setScale(0.25)
        .setRotation(0.3);

      inst = this.add.text(
        240,
        150,
        "¿Qué tipo de compuerta lógica\nproduce una salida verdadera cuando\nal menos una de las entradas es \nverdadera, o produce una salida\nverdadera solo cuando una de las \nentradas es verdadera pero no ambas?",
        {
          color: "#000",
          fontSize: "25px",
          align: "center",
        }
      );
      this.#challenge = this.add.container(0, 0, [
        this.add.rectangle(this.scale.width / 2, 215, 600, 350, 0xffffff),
        inst,
        arrow,
        enterkey,
      ]);

      this.#challengeMenu = new SideChallengeMenu(this);

      this.#door.disableInteractive();
      this.#poster.disableInteractive();
    });

    this.#door.on("pointerup", () => {
      if (this.#cleared == false) {
        challengeImg = this.add
          .image(70, 50, CHALLENGE_ASSET_KEYS[`LVL5${this.#chll}`])
          .setOrigin(0);

        arrow = this.add.image(100, 100, UI_ASSET_KEYS.ARROWKEYS).setScale(0.3);
        enterkey = this.add
          .image(100, 270, UI_ASSET_KEYS.ENTER_KEY)
          .setScale(0.25)
          .setRotation(0.3);

        inst = this.add.text(
          this.scale.width / 4,
          50,
          "¿Qué valor resulta para el circuito?",
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
        this.#sideDoor.disableInteractive();
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

    let info, posterNOT, posterXNOR, posterNAND;

    this.#poster.on("pointerup", () => {
      if (!posterNOT && !info) {
        posterNOT = posterLayer.add(
          this.add
            .image(this.scale.width / 2, 350, POSTER_ASSET_KEYS.POSTER_NOT)
            .setScale(0.5)
        );

        posterXNOR = posterLayer.add(
          this.add.image(300, 200, POSTER_ASSET_KEYS.POSTER_XNOR).setScale(0.6)
        );
        posterNAND = posterLayer.add(
          this.add.image(680, 200, POSTER_ASSET_KEYS.POSTER_NAND).setScale(0.6)
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
        posterNOT.setVisible(true);
        posterXNOR.setVisible(true);
        posterNAND.setVisible(true);
        info.setVisible(true);
        this.#poster.disableInteractive();
        this.#sideDoor.disableInteractive();
        this.#door.disableInteractive();
      }
    });

    this.input.on("pointerdown", () => {
      if (posterNOT && info) {
        posterNOT.setVisible(false);
        posterXNOR.setVisible(false);
        posterNAND.setVisible(false);
        info.setVisible(false);
        posterNOT = null;
        posterNAND = null;
        posterXNOR = null;
        info = null;

        this.#poster.setInteractive();
        this.#door.setInteractive();
        this.#sideDoor.setInteractive();
      }
    });

    this.#cursorKey = this.input.keyboard.createCursorKeys();
    this.#keyEnter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
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
      } else if(ans === "2" ){
        this.#challenge.setVisible(false);
        this.#door.setInteractive(true);
        this.#poster.setInteractive(true);
      }
      return;
    }

    if (
      this.#challengeMenu &&
      Phaser.Input.Keyboard.JustDown(this.#cursorKey.shift)
    ) {
      this.#challengeMenu.handleInput("CANCEL");
      this.#door.setInteractive(true);
      this.#challenge.setVisible(false);
      this.#sideDoor.setInteractive(true);
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
        .image(this.scale.width / 2, 330, DOOR_ASSET_KEYS.CDOOR_OPEN)
        .setScale(0.5);

      this.#door.on("pointerup", () => {
        this.data.values.progress = true;
        this.scene.start(SCENE_KEYS.PROGRESS_SCENE, {
          levelData: this.data.values,
        });
      });
    } else {
      this.#door = this.add
        .image(this.scale.width / 2, 330, DOOR_ASSET_KEYS.CDOOR_CLOSED)
        .setScale(0.5);
    }
    this.#door.setInteractive({ useHandCursor: true });
  }
}
