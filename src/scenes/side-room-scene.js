import {
  BACKGROUND_ASSET_KEYS,
  DOOR_ASSET_KEYS,
  POSTER_ASSET_KEYS,
} from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class SideRoomScene extends Phaser.Scene {
  #door;
  #level;
  /**
   * @type {Phaser.Scene}
   */

  constructor() {
    super({
      key: SCENE_KEYS.SIDE_ROOM,
    });
  }

  init(data) {
    this.#level = data.level;
  }

  create() {
    console.log(`[${SideRoomScene.name}: create] invoked`);

    this.add
      .image(0, 0, BACKGROUND_ASSET_KEYS.WHITE_ROOM)
      .setOrigin(0)
      .setScale(0.52, 0.39);

    switch (this.#level) {
      case 3:
        this.add
          .image(this.scale.width / 2, 200, POSTER_ASSET_KEYS.POSTER_AND)
          .setScale(0.5);

        this.add
          .image(this.scale.width / 2, 350, POSTER_ASSET_KEYS.POSTER_OR)
          .setScale(0.5);

        this.#door = this.add
          .image(100, 390, DOOR_ASSET_KEYS.GATEI_CLOSED)
          .setScale(0.3);
        break;
      case 4:
        this.add
          .image(700, 200, POSTER_ASSET_KEYS.POSTER_NOR)
          .setScale(0.5);

        this.add
          .image(700, 350, POSTER_ASSET_KEYS.POSTER_XOR)
          .setScale(0.5);

        this.#door = this.add
          .image(950, 400, DOOR_ASSET_KEYS.MDOOR_CLOSED)
          .setScale(0.3).setFlipX(true);

          this.add
          .image(350, 200, POSTER_ASSET_KEYS.POSTER_OR)
          .setScale(0.4);

        this.add
          .image(350, 350, POSTER_ASSET_KEYS.POSTER_AND)
          .setScale(0.4);
        break;
      case 5:
        this.add
          .image(700, 200, POSTER_ASSET_KEYS.POSTER_AND)
          .setScale(0.4);

        this.add
          .image(700, 350, POSTER_ASSET_KEYS.POSTER_OR)
          .setScale(0.4);

        this.#door = this.add
          .image(950, 400, DOOR_ASSET_KEYS.MDOOR_CLOSED)
          .setScale(0.4);

        this.add
          .image(this.scale.width / 3, 200, POSTER_ASSET_KEYS.POSTER_AND)
          .setScale(0.4);

        this.add
          .image(this.scale.width / 3, 350, POSTER_ASSET_KEYS.POSTER_OR)
          .setScale(0.4);
        break;
      default:
        return;
    }

    this.#door.setInteractive({ useHandCursor: true });

    this.#door.on("pointerover", () => {
      this.#door.setAlpha(0.5);
    });

    this.#door.on("pointerout", () => {
      this.#door.clearAlpha();
    });

    this.#door.on("pointerup", () => {
      this.scene.stop();
    });
  }
}
