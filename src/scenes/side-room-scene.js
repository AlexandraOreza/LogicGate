import {
    BACKGROUND_ASSET_KEYS,
    DOOR_ASSET_KEYS,
    POSTER_ASSET_KEYS,
  } from "../assets/asset-keys.js";
  import Phaser from "../lib/phaser.js";
  import { SCENE_KEYS } from "./scene-keys.js";
  
  export class SideRoomScene extends Phaser.Scene {
    #door;
  
    constructor() {
      super({
        key: SCENE_KEYS.SIDE_ROOM,
      });
    }
    create() {
      console.log(`[${SideRoomScene.name}: create] invoked`);
  
      this.add
        .image(0, 0, BACKGROUND_ASSET_KEYS.WHITE_ROOM)
        .setOrigin(0)
        .setScale(0.52, 0.39);
  
      this.#door = this.add
        .image(100, 390, DOOR_ASSET_KEYS.GATED_CLOSED)
        .setScale(0.3)
        .setFlipX(true)
        .setAngle(-10);
      this.#door.setInteractive({ useHandCursor: true });
  
      this.add.image(this.scale.width / 2, 200, POSTER_ASSET_KEYS.POSTER_AND).setScale(0.5);
  
      this.add.image(this.scale.width / 2, 350, POSTER_ASSET_KEYS.POSTER_OR).setScale(0.5);
  
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
  