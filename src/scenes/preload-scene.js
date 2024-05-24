import { BACKGROUND_ASSET_KEYS, CHALLENGE_ASSET_KEYS, DOOR_ASSET_KEYS, POSTER_ASSET_KEYS, UI_ASSET_KEYS } from "../assets/asset-keys.js";
import Phaser from "../lib/phaser.js";
import { SCENE_KEYS } from "./scene-keys.js";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOAD_SCENE,
    });
  }

  preload() {
    console.log(`[${PreloadScene.name}: preload] invoked`);
    this.load.setPath('assets/');

    //background
    this.load.image(BACKGROUND_ASSET_KEYS.WHITE_ROOM, 'room-wall2.png');
    this.load.image(BACKGROUND_ASSET_KEYS.LVL2_WALL, 'bg_2.png');
    this.load.image(BACKGROUND_ASSET_KEYS.LVL3_WALL, 'bg_3.png');
    this.load.image(BACKGROUND_ASSET_KEYS.LVL4_WALL, 'bg_4.png');
    this.load.image(BACKGROUND_ASSET_KEYS.LVL5_WALL, 'bg_5.png');

    //posters
    this.load.image(POSTER_ASSET_KEYS.POSTER_OR, 'posterOR.png');
    this.load.image(POSTER_ASSET_KEYS.POSTER_AND, 'posterAND.png');
    this.load.image(POSTER_ASSET_KEYS.POSTER_NOT, 'posterNOT.png');
    this.load.image(POSTER_ASSET_KEYS.POSTER_NAND, 'posterNAND.png');
    this.load.image(POSTER_ASSET_KEYS.POSTER_NOR, 'posterNOR.png');
    this.load.image(POSTER_ASSET_KEYS.POSTER_XOR, 'posterXOR.png');
    this.load.image(POSTER_ASSET_KEYS.POSTER_XNOR, 'posterXNOR.png');
    this.load.image(POSTER_ASSET_KEYS.POSTER_ICON, '/Realistic/stuff/Document1.png');
    
    //doors
    this.load.image(DOOR_ASSET_KEYS.DOOR_CLOSED, '/Realistic/stuff/Door2.png');
    this.load.image(DOOR_ASSET_KEYS.DOOR_OPEN, 'Door2_open.png');
    this.load.image(DOOR_ASSET_KEYS.FDOOR_CLOSED, '/Realistic/stuff/FuturisticDoor1.png');
    this.load.image(DOOR_ASSET_KEYS.FDOOR_OPEN, '/Realistic/stuff/FuturisticDoor1_open.png');
    this.load.image(DOOR_ASSET_KEYS.CDOOR_CLOSED, '/Realistic/stuff/FuturisticDoor2.png');
    this.load.image(DOOR_ASSET_KEYS.CDOOR_OPEN, '/Realistic/stuff/FuturisticDoor2_open.png');
    this.load.image(DOOR_ASSET_KEYS.GATE_OPEN, '/Realistic/stuff/Gate1_open.png');
    this.load.image(DOOR_ASSET_KEYS.GATE_CLOSED, '/Realistic/stuff/Gate1.png');
    this.load.image(DOOR_ASSET_KEYS.GATED_CLOSED, '/Realistic/stuff/Gate1D.png');
    this.load.image(DOOR_ASSET_KEYS.GATEI_CLOSED, '/Realistic/stuff/Gate1I.png');
    this.load.image(DOOR_ASSET_KEYS.MDOOR_CLOSED, '/Realistic/stuff/MetalDoor1.png');

    //gates
    this.load.image(CHALLENGE_ASSET_KEYS.LVL1, 'chll/lvl1.png');
    this.load.image(CHALLENGE_ASSET_KEYS.LVL2, 'chll/lvl2.png');
    this.load.image(CHALLENGE_ASSET_KEYS.LVL3, 'chll/lvl3.png');
    this.load.image(CHALLENGE_ASSET_KEYS.LVL4, 'chll/lvl4.png');
    this.load.image(CHALLENGE_ASSET_KEYS.LVL5, 'chll/lvl5.png');

    //UI
    this.load.image(UI_ASSET_KEYS.CURSOR, 'ui/arrowSilver_right.png');
    this.load.image(UI_ASSET_KEYS.ARROWKEYS, '/Realistic/elements/ArrowKeys1.png');
    this.load.image(UI_ASSET_KEYS.FLAT_FRAME, 'ui/UI_Flat_Frame_01_Standard.png');
    this.load.image(UI_ASSET_KEYS.ENTER_KEY, 'ui/EnterKey1.png');

    //sound
    this.load.audio('menuMusic', ['sound/menu_bg.mp3'], {stream: true});  
    this.load.audio('wrongAns', ['sound/587253__beetlemuse__dats-wrong.wav']);  
    this.load.audio('rightAns', ['sound/587252__beetlemuse__dats-right.wav']);  

    //text
    this.load.text('Intro', 'txt/intro.txt');
    
  }

  create() {
    console.log(`[${PreloadScene.name}: create] invoked`);
    this.scene.start(SCENE_KEYS.LEVEL_SCENE5);
  }
}
