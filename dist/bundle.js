(()=>{"use strict";const e=window.Phaser,t=Object.freeze({WHITE_ROOM:"WHITE_ROOM",MENU:"MENU",LVL2_WALL:"LVL2_WALL",LVL3_WALL:"LVL3_WALL",LVL4_WALL:"LVL4_WALL",LVL5_WALL:"LVL5_WALL"}),s=Object.freeze({POSTER_OR:"POSTER_OR",POSTER_AND:"POSTER_AND",POSTER_NOT:"POSTER_NOT",POSTER_NAND:"POSTER_NAND",POSTER_NOR:"POSTER_NOR",POSTER_XOR:"POSTER_XOR",POSTER_XNOR:"POSTER_XNOR",POSTER_ICON:"POSTER_ICON"}),i=Object.freeze({DOOR_OPEN:"DOOR_OPEN",DOOR_CLOSED:"DOOR_CLOSED",FDOOR_OPEN:"FDOOR_OPEN",FDOOR_CLOSED:"FDOOR_CLOSED",CDOOR_OPEN:"CDOOR_OPEN",CDOOR_CLOSED:"CDOOR_CLOSED",GATE_OPEN:"GATE_OPEN",GATE_CLOSED:"GATE_CLOSED",GATED_CLOSED:"GATED_CLOSED",GATEI_CLOSED:"GATEI_CLOSED",MDOOR_CLOSED:"MDOOR_CLOSED"}),a=Object.freeze({LVL1:"LVL1",LVL1B:"LVL1B",LVL1C:"LVL1C",LVL2:"LVL2",LVL2B:"LVL2B",LVL2C:"LVL2C",LVL3:"LVL3",LVL3B:"LVL3B",LVL3C:"LVL3C",LVL4:"LVL4",LVL4B:"LVL4B",LVL4C:"LVL4C",LVL5:"LVL5",LVL5B:"LVL5B",LVL5C:"LVL5C"}),r=Object.freeze({CURSOR:"CURSOR",ARROWKEYS:"ARROWKEYS",FLAT_FRAME:"FLAT_FRAME",ENTER_KEY:"ENTER_KEY"}),o=Object.freeze({PRELOAD_SCENE:"PRELOAD_SCENE",MENU_SCENE:"MENU_SCENE",LEVEL_SCENE:"LEVEL_SCENE",LEVEL_SCENE2:"LEVEL_SCENE2",LEVEL_SCENE3:"LEVEL_SCENE3",LEVEL_SCENE4:"LEVEL_SCENE4",LEVEL_SCENE5:"LEVEL_SCENE5",SIDE_ROOM:"SIDE_ROOM",INTRO_SCENE:"INTRO_SCENE",GAMEOVER_SCENE:"GAMEOVER_SCENE",PROGRESS_SCENE:"PROGRESS_SCENE",END_SCENE:"END_SCENE"});class n extends e.Scene{constructor(){super({key:o.PRELOAD_SCENE})}preload(){console.log(`[${n.name}: preload] invoked`),this.load.setPath("assets/"),this.load.image(t.WHITE_ROOM,"room-wall2.png"),this.load.image(t.LVL2_WALL,"bg_2.png"),this.load.image(t.LVL3_WALL,"bg_3.png"),this.load.image(t.LVL4_WALL,"bg_4.png"),this.load.image(t.LVL5_WALL,"bg_5.png"),this.load.image(s.POSTER_OR,"posterOR.png"),this.load.image(s.POSTER_AND,"posterAND.png"),this.load.image(s.POSTER_NOT,"posterNOT.png"),this.load.image(s.POSTER_NAND,"posterNAND.png"),this.load.image(s.POSTER_NOR,"posterNOR.png"),this.load.image(s.POSTER_XOR,"posterXOR.png"),this.load.image(s.POSTER_XNOR,"posterXNOR.png"),this.load.image(s.POSTER_ICON,"/Realistic/stuff/Document1.png"),this.load.image(i.DOOR_CLOSED,"/Realistic/stuff/Door2.png"),this.load.image(i.DOOR_OPEN,"Door2_open.png"),this.load.image(i.FDOOR_CLOSED,"/Realistic/stuff/FuturisticDoor1.png"),this.load.image(i.FDOOR_OPEN,"/Realistic/stuff/FuturisticDoor1_open.png"),this.load.image(i.CDOOR_CLOSED,"/Realistic/stuff/FuturisticDoor2.png"),this.load.image(i.CDOOR_OPEN,"/Realistic/stuff/FuturisticDoor2_open.png"),this.load.image(i.GATE_OPEN,"/Realistic/stuff/Gate1_open.png"),this.load.image(i.GATE_CLOSED,"/Realistic/stuff/Gate1.png"),this.load.image(i.GATED_CLOSED,"/Realistic/stuff/Gate1D.png"),this.load.image(i.GATEI_CLOSED,"/Realistic/stuff/Gate1I.png"),this.load.image(i.MDOOR_CLOSED,"/Realistic/stuff/MetalDoor1.png"),this.load.image(a.LVL1,"chll/lvl1.png"),this.load.image(a.LVL1B,"chll/lvl1B.png"),this.load.image(a.LVL1C,"chll/lvl1C.png"),this.load.image(a.LVL2,"chll/lvl2.png"),this.load.image(a.LVL2B,"chll/lvl2B.png"),this.load.image(a.LVL3,"chll/lvl3.png"),this.load.image(a.LVL4,"chll/lvl4.png"),this.load.image(a.LVL5,"chll/lvl5.png"),this.load.image(r.CURSOR,"ui/arrowSilver_right.png"),this.load.image(r.ARROWKEYS,"/Realistic/elements/ArrowKeys1.png"),this.load.image(r.FLAT_FRAME,"ui/UI_Flat_Frame_01_Standard.png"),this.load.image(r.ENTER_KEY,"ui/EnterKey1.png"),this.load.audio("menuMusic",["sound/menu_bg.mp3"],{stream:!0}),this.load.audio("wrongAns",["sound/587253__beetlemuse__dats-wrong.wav"]),this.load.audio("rightAns",["sound/587252__beetlemuse__dats-right.wav"]),this.load.text("Intro","txt/intro.txt")}create(){console.log(`[${n.name}: create] invoked`),this.scene.start(o.MENU_SCENE)}}const l=Object.freeze({LEFT:"LEFT",RIGHT:"RIGHT",UP:"UP",DOWN:"DOWN",NONE:"NONE"});function h(e){throw new Error(`Error! Reached forbidden guard function with unexpected value: ${JSON.stringify(e)}`)}function d(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function c(){const e=["","B","C"];return e[Math.floor(Math.random()*e.length)]}const p={1:[{correct:"00",answers:{1:"00",2:"10",3:"01",0:"11"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:1,variant:""},{correct:"0",answers:{1:"10",2:"0",3:"1",0:"01"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:2,variant:"B"},{correct:"100",answers:{1:"001",2:"101",3:"010",0:"100"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:0,variant:"C"}],2:[{correct:"110",answers:{1:"010",2:"110",3:"001",0:"111"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:1,variant:""},{correct:"10",answers:{1:"00",2:"11",3:"10",0:"11"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:2,variant:"B"},{correct:"000",answers:{1:"010",2:"000",3:"110",0:"001"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:2,variant:"C"}],3:[{correct:"01",answers:{1:"00",2:"10",3:"11",0:"01"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:3,variant:""},{correct:"01",answers:{1:"00",2:"10",3:"11",0:"01"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:3,variant:"B"},{correct:"1101",answers:{1:"1100",2:"1011",3:"1101",0:"0110"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:3,variant:"C"}],4:[{correct:"01",answers:{1:"10",2:"11",3:"01",0:"00"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:2,variant:""},{correct:"010",answers:{1:"010",2:"111",3:"011",0:"001"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:1,variant:"B"},{correct:"101",answers:{1:"100",2:"110",3:"010",0:"101"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:0,variant:"C"}],5:[{correct:"011",answers:{1:"111",2:"011",3:"101",0:"010"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:1,variant:""},{correct:"01",answers:{1:"10",2:"11",3:"01",0:"00"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:2,variant:"B"},{correct:"01",answers:{1:"10",2:"11",3:"01",0:"00"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:2,variant:"C"}],SideR3:[{correct:"AND",answers:{1:"OR",2:"AND",3:"NOT",0:"NINGUNA"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:1,variant:""},{correct:"AND",answers:{1:"OR",2:"AND",3:"NOT",0:"NINGUNA"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:1,variant:"B"},{correct:"AND",answers:{1:"OR",2:"AND",3:"NOT",0:"NINGUNA"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:1,variant:"C"}],SideR4:[{correct:"AND & NOT",answers:{1:"OR & NOT",2:"AND & OR",3:"AND & NOT",0:"AND & OR & NOT"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:3,variant:""},{correct:"AND & NOT",answers:{1:"OR & NOT",2:"AND & OR",3:"AND & NOT",0:"AND & OR & NOT"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:3,variant:"B"},{correct:"AND & NOT",answers:{1:"OR & NOT",2:"AND & OR",3:"AND & NOT",0:"AND & OR & NOT"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:3,variant:"C"}],SideR5:[{correct:"OR o XOR",answers:{1:"NINGUNA",2:"OR o NAND",3:"XNOR o NAND",0:"OR o XOR"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:0,variant:""},{correct:"OR o XOR",answers:{1:"NINGUNA",2:"OR o NAND",3:"XNOR o NAND",0:"OR o XOR"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:0,variant:"B"},{correct:"OR o XOR",answers:{1:"NINGUNA",2:"OR o NAND",3:"XNOR o NAND",0:"OR o XOR"},wrongMappings:{1:1,2:2,3:3,0:0},rightMapping:0,variant:"C"}]},u={color:"black",fontSize:"30px"},g=Object.freeze({x:50,y:445});class O{#e;#t;#s;#i;#a;#r;#o;#n;#l;#h;#d;#c;#p;constructor(e){const t=Object.freeze({"":0,B:1,C:2});this.#e=e,this.#r=0,this.#o=this.#e.data.values.level,this.#p=this.#e.data.values.challenge,this.#n=p[this.#o][t[this.#p]],this.#i=2,this.#l=new Set,this.#u()}handleInput(e){if("CANCEL"!==e){if("OK"===e){let e=null;return this.#r<3?e=this.#g(this.#i):this.#e.scene.start(o.GAMEOVER_SCENE),"1"===e?"1":void 0}this.#O(e),this.#E()}else this.hideMenu()}#g(e){if(this.#d[e]===this.#n.correct)return this.#e.sound.play("rightAns",{volume:.5}),"1";if(!this.#l.has(e)){const t=this.#n.wrongMappings[e];if(this.#h=this.#a.getAt(t),!this.#h)return void console.error("Invalid option:",t);this.#h.getAt(0).fillColor=16711680,this.#e.sound.play("wrongAns",{volume:.5}),this.#l.add(e),this.#r++}}#O(e){if(2!==this.#i)if(3!==this.#i)if(0!==this.#i)if(1!==this.#i)h(this.#i);else switch(e){case l.LEFT:return void(this.#i=0);case l.UP:return void(this.#i=3);case l.DOWN:case l.RIGHT:case l.NONE:return;default:h(e)}else switch(e){case l.RIGHT:return void(this.#i=1);case l.UP:return void(this.#i=2);case l.DOWN:case l.LEFT:case l.NONE:return;default:h(this.#i)}else switch(e){case l.LEFT:return void(this.#i=2);case l.DOWN:return void(this.#i=1);case l.UP:case l.RIGHT:case l.NONE:return;default:h(this.#i)}else switch(e){case l.RIGHT:return void(this.#i=3);case l.DOWN:return void(this.#i=0);case l.UP:case l.LEFT:case l.NONE:return;default:h(this.#i)}}#E(){switch(this.#i){case 2:return void this.#s.setPosition(g.x,g.y);case 3:return void this.#s.setPosition(550,g.y);case 0:return void this.#s.setPosition(g.x,538);case 1:return void this.#s.setPosition(550,538);default:return void h(this.#i)}}#u(){const e=Object.keys(this.#n.answers);d(e),this.#s=this.#e.add.image(g.x,g.y,r.CURSOR,0).setScale(1.5),this.#a=this.#e.add.container(0,0),this.#d={},this.#c={},e.forEach(((e,t)=>{this.#d[t]=this.#n.answers[e],this.#c[this.#n.answers[e]]=t;const s=t%2==0?0:508,i=t<2?0:87;this.#a.add(this.#v(s,i,this.#n.answers[e]))})),this.#n.rightMapping=this.#c[this.#n.correct],this.#a.add(this.#s)}#v(e,t,s){return this.#t=this.#e.add.container(0,0,[this.#e.add.rectangle(e+5,this.#e.scale.height-87-t,505,87,15590643,.8).setOrigin(0).setStrokeStyle(8,9460418,1),this.#e.add.text(e+100,this.#e.scale.height-87-t+25,s,u).setOrigin(0)]),this.#t}hideMenu(){this.#a.setVisible(!1)}}class E extends e.Scene{#S;#N;#R;#L;#D;#C;#_;#w;constructor(){super({key:o.LEVEL_SCENE})}preload(){this.#w=c(),this.data.set({level:1,progress:!1,challenge:this.#w}),this.#L=!1}create(){console.log(`[${E.name}: create] invoked`),this.add.image(0,0,t.WHITE_ROOM).setOrigin(0).setScale(.52,.39),this.add.text(0,0,"Level: "+this.data.values.level,{color:"black",fontSize:"30px"}),this.#C=this.add.image(300,250,s.POSTER_ICON).setScale(.1),this.#A(this.#L),this.#C.setInteractive({useHandCursor:!0});let i,o,n,l,h,d,c,p=this.add.layer();p.setInteractive(),this.#R.on("pointerover",(()=>{this.#R.setAlpha(.5)})),this.#R.on("pointerout",(()=>{this.#R.clearAlpha()})),this.#R.on("pointerup",(()=>{0==this.#L?(i=this.add.image(350,70,a[`LVL1${this.#w}`]).setOrigin(0),n=this.add.image(100,100,r.ARROWKEYS).setScale(.3),l=this.add.image(100,270,r.ENTER_KEY).setScale(.25).setRotation(.3),o=this.add.text(this.scale.width/4,50,"¿Qué valor resulta para '??' ?",{color:"#000",fontSize:"25px"}),this.#D=this.add.container(0,0,[this.add.rectangle(this.scale.width/2,215,600,350,16777215),i,o,n,l]),this.#S=new O(this),this.#R.disableInteractive(),this.#C.disableInteractive()):console.log("cleared")})),this.#C.on("pointerover",(()=>{this.#C.setAlpha(.5)})),this.#C.on("pointerout",(()=>{this.#C.clearAlpha()})),this.#C.on("pointerup",(()=>{d||h||(d=p.add(this.add.image(this.scale.width/2,200,s.POSTER_OR).setScale(.5)),c=p.add(this.add.image(this.scale.width/2,350,s.POSTER_AND).setScale(.5)),h=this.add.text(this.scale.width/3,100,"Haz clic fuera de la imagen para cerrar",{color:"#000",align:"center"}),d.setVisible(!0),c.setVisible(!0),h.setVisible(!0),this.#C.disableInteractive(),this.#R.disableInteractive())})),this.input.on("pointerdown",(()=>{d&&h&&(d.setVisible(!1),c.setVisible(!1),h.setVisible(!1),d=null,c=null,h=null,this.#C.setInteractive(),this.#R.setInteractive())})),this.#N=this.input.keyboard.createCursorKeys(),this.#_=this.input.keyboard.addKey(e.Input.Keyboard.KeyCodes.ENTER)}update(){const t=e.Input.Keyboard.JustDown(this.#N.space),s=e.Input.Keyboard.JustDown(this.#_);if(this.#S&&(t||s)){return"1"===this.#S.handleInput("OK")?(this.#L=!0,console.log("got it right"),void this.#A(this.#L)):void 0}if(this.#S&&e.Input.Keyboard.JustDown(this.#N.shift))return this.#S.handleInput("CANCEL"),this.#R.setInteractive(!0),this.#D.setVisible(!1),this.#C.setInteractive(!0),void this.input.keyboard.disableGlobalCapture();let i=l.NONE;this.#N.left.isDown?i=l.LEFT:this.#N.right.isDown?i=l.RIGHT:this.#N.down.isDown?i=l.DOWN:this.#N.up.isDown&&(i=l.UP),i!==l.NONE&&this.#S.handleInput(i)}#A(e){1==e?(this.#S.hideMenu(),this.#D.setVisible(!1),this.#R=this.add.image(this.scale.width/2,360,i.DOOR_OPEN).setScale(.3),this.#R.on("pointerup",(()=>{this.data.values.progress=!0,this.scene.start(o.PROGRESS_SCENE,{levelData:this.data.values})}))):this.#R=this.add.image(this.scale.width/2,360,i.DOOR_CLOSED).setScale(.3),this.#R.setInteractive({useHandCursor:!0})}}class v extends e.Scene{constructor(){super({key:o.MENU_SCENE})}create(){console.log(`[${v.name}: create] invoked`),this.add.image(0,0,t.WHITE_ROOM).setOrigin(0).setScale(.52,.39);this.add.text(this.scale.width/3,180,"LogicGate",{fontFamily:"Courier",fontSize:"64px",color:"#000",align:"center"});const e=this.add.text(this.scale.width/2.7,300,"Jugar",{fontFamily:"Arial",fontSize:"32px",color:"#ffffff",align:"center",fixedWidth:260,backgroundColor:"#8e8e8e"}).setPadding(32).setOrigin(0);this.sound.pauseOnBlur=!1,this.sound.play("menuMusic",{loop:!0,volume:.3}),e.setInteractive({useHandCursor:!0}),e.on("pointerover",(()=>{e.setBackgroundColor("#c1c1c1")})),e.on("pointerout",(()=>{e.setBackgroundColor("#8e8e8e")})),e.on("pointerup",(()=>{this.sound.stopAll(),this.scene.start(o.INTRO_SCENE),e.disableInteractive()}),this)}}class S extends e.Scene{#I=[];#b;#f;#m;#M;#y;#_;#o;constructor(){super({key:o.PROGRESS_SCENE})}init(e){this.#I.push(e),this.#o=e.levelData.level}create(){console.log(`[${S.name}: create] invoked`),this.add.text(this.scale.width/3+50,100,"Presiona enter para continuar",{color:"white"}),this.#b=this.add.container(150,250,[this.add.image(0,0,r.FLAT_FRAME).setOrigin(0).setAlpha(.3),this.add.text(45,40,"1",{fontSize:"20px"})]),this.#f=this.add.container(300,250,[this.add.image(0,0,r.FLAT_FRAME).setOrigin(0).setAlpha(.3),this.add.text(45,40,"2",{fontSize:"20px"})]),this.#m=this.add.container(450,250,[this.add.image(0,0,r.FLAT_FRAME).setOrigin(0).setAlpha(.3),this.add.text(45,40,"3",{fontSize:"20px"})]),this.#M=this.add.container(600,250,[this.add.image(0,0,r.FLAT_FRAME).setOrigin(0).setAlpha(.3),this.add.text(45,40,"4",{fontSize:"20px"})]),this.#y=this.add.container(750,250,[this.add.image(0,0,r.FLAT_FRAME).setOrigin(0).setAlpha(.3),this.add.text(45,40,"5",{fontSize:"20px"})]),this.#T(),this.#_=this.input.keyboard.addKey(e.Input.Keyboard.KeyCodes.ENTER)}update(){if(e.Input.Keyboard.JustDown(this.#_)){console.log(`entering level: ${this.#I.length+1}`),this.#o+=1;const e=`LEVEL_SCENE${this.#o}`;o[e]?this.scene.start(o[e]):this.scene.start(o.END_SCENE)}}#T(){const e=Object.freeze({1:this.#b,2:this.#f,3:this.#m,4:this.#M,5:this.#y});this.#I.forEach((t=>{if(1==t.levelData.progress){const s=e[t.levelData.level];s&&s.getAt(0).setAlpha(1)}}))}resetProgress(){this.#I=[],this.#o=0}}class N extends e.Scene{#S;#N;#R;#L;#D;#C;#_;#w;constructor(){super({key:o.LEVEL_SCENE2})}preload(){this.#w=c(),this.data.set({level:2,progress:!1,challenge:this.#w}),this.#L=!1}create(){console.log(`[${N.name}: create] invoked`),this.add.image(0,0,t.LVL2_WALL).setOrigin(0),this.add.text(0,0,"Level: "+this.data.values.level,{color:"black",fontSize:"30px"}),this.#C=this.add.image(400,250,s.POSTER_ICON).setScale(.1),this.#A(this.#L),this.#C.setInteractive({useHandCursor:!0});let i,o,n,l,h,d,c=this.add.layer();c.setInteractive(),this.#R.on("pointerover",(()=>{this.#R.setAlpha(.5)})),this.#R.on("pointerout",(()=>{this.#R.clearAlpha()})),this.#R.on("pointerup",(()=>{0==this.#L?(i=this.add.image(this.scale.width/8,50,a[`LVL2${this.#w}`]).setOrigin(0).setScale(1.5),n=this.add.image(100,100,r.ARROWKEYS).setScale(.3).setRotation(-.3),l=this.add.image(100,270,r.ENTER_KEY).setScale(.25).setRotation(.3),o=this.add.text(this.scale.width/4,50,"¿Qué valor resulta para el circuito?",{color:"#000",fontSize:"25px"}),this.#D=this.add.container(0,0,[this.add.rectangle(this.scale.width/2,215,600,350,16777215),i,o,n,l]),this.#S=new O(this),this.#R.disableInteractive(),this.#C.disableInteractive()):console.log("cleared")})),this.#C.on("pointerover",(()=>{this.#C.setAlpha(.5)})),this.#C.on("pointerout",(()=>{this.#C.clearAlpha()})),this.#C.on("pointerup",(()=>{d||h||(d=c.add(this.add.image(this.scale.width/2,325,s.POSTER_NOT)),h=this.add.text(this.scale.width/3,100,"Haz clic fuera de la imagen para cerrar",{color:"#000",align:"center"}),d.setVisible(!0),h.setVisible(!0),this.#C.disableInteractive(),this.#R.disableInteractive())})),this.input.on("pointerdown",(()=>{d&&h&&(d.setVisible(!1),h.setVisible(!1),d=null,h=null,this.#C.setInteractive(),this.#R.setInteractive())})),this.#N=this.input.keyboard.createCursorKeys(),this.#_=this.input.keyboard.addKey(e.Input.Keyboard.KeyCodes.ENTER)}update(){const t=e.Input.Keyboard.JustDown(this.#N.space),s=e.Input.Keyboard.JustDown(this.#_);if(this.#S&&(t||s)){return"1"===this.#S.handleInput("OK")?(this.#L=!0,console.log("got it right"),void this.#A(this.#L)):void console.log("adsads")}if(this.#S&&e.Input.Keyboard.JustDown(this.#N.shift))return this.#S.handleInput("CANCEL"),this.#R.setInteractive(!0),this.#D.setVisible(!1),this.#C.setInteractive(!0),void this.input.keyboard.disableGlobalCapture();let i=l.NONE;this.#N.left.isDown?i=l.LEFT:this.#N.right.isDown?i=l.RIGHT:this.#N.down.isDown?i=l.DOWN:this.#N.up.isDown&&(i=l.UP),i!==l.NONE&&this.#S.handleInput(i)}#A(e){1==e?(this.#S.hideMenu(),this.#D.setVisible(!1),this.#R=this.add.image(600,270,i.GATE_OPEN).setScale(.3),this.#R.on("pointerup",(()=>{this.data.values.progress=!0,this.scene.start(o.PROGRESS_SCENE,{levelData:this.data.values})}))):this.#R=this.add.image(600,270,i.GATE_CLOSED).setScale(.3),this.#R.setInteractive({useHandCursor:!0})}}const R={color:"black",fontSize:"30px"},L=Object.freeze({x:50,y:445});class D{#e;#t;#s;#i;#a;#r;#o;#n;#l;#h;#d;#c;constructor(e){this.#e=e,this.#r=0,this.#o=this.#e.data.values.level,this.#n=p["SideR"+this.#o][0],this.#i=2,this.#l=new Set,this.#u()}handleInput(e){if("CANCEL"!==e){if("OK"===e){let e=null;return this.#r<3&&(e=this.#g(this.#i)),"2"===e?"2":void 0}this.#O(e),this.#E()}else this.hideMenu()}#g(e){if(this.#d[e]===this.#n.correct)return this.#e.sound.play("rightAns",{volume:.5}),this.#e.scene.launch(o.SIDE_ROOM,this.#o),this.hideMenu(),"2";if(!this.#l.has(e)){const t=this.#n.wrongMappings[e];if(this.#h=this.#a.getAt(t),!this.#h)return void console.error("Invalid option:",t);this.#h.getAt(0).fillColor=16711680,this.#e.sound.play("wrongAns",{volume:.5}),this.#l.add(e),this.#r++}}#O(e){if(2!==this.#i)if(3!==this.#i)if(0!==this.#i)if(1!==this.#i)h(this.#i);else switch(e){case l.LEFT:return void(this.#i=0);case l.UP:return void(this.#i=3);case l.DOWN:case l.RIGHT:case l.NONE:return;default:h(e)}else switch(e){case l.RIGHT:return void(this.#i=1);case l.UP:return void(this.#i=2);case l.DOWN:case l.LEFT:case l.NONE:return;default:h(this.#i)}else switch(e){case l.LEFT:return void(this.#i=2);case l.DOWN:return void(this.#i=1);case l.UP:case l.RIGHT:case l.NONE:return;default:h(this.#i)}else switch(e){case l.RIGHT:return void(this.#i=3);case l.DOWN:return void(this.#i=0);case l.UP:case l.LEFT:case l.NONE:return;default:h(this.#i)}}#E(){switch(this.#i){case 2:return void this.#s.setPosition(L.x,L.y);case 3:return void this.#s.setPosition(550,L.y);case 0:return void this.#s.setPosition(L.x,538);case 1:return void this.#s.setPosition(550,538);default:return void h(this.#i)}}#u(){const e=Object.keys(this.#n.answers);d(e),this.#s=this.#e.add.image(L.x,L.y,r.CURSOR,0).setScale(1.5),this.#a=this.#e.add.container(0,0),this.#d={},this.#c={},e.forEach(((e,t)=>{this.#d[t]=this.#n.answers[e],this.#c[this.#n.answers[e]]=t;const s=t%2==0?0:508,i=t<2?0:87;this.#a.add(this.#v(s,i,this.#n.answers[e]))})),this.#n.rightMapping=this.#c[this.#n.correct],this.#a.add(this.#s)}#v(e,t,s){return this.#t=this.#e.add.container(0,0,[this.#e.add.rectangle(e+5,this.#e.scale.height-87-t,505,87,15590643,.8).setOrigin(0).setStrokeStyle(8,9460418,1),this.#e.add.text(e+100,this.#e.scale.height-87-t+25,s,R).setOrigin(0)]),this.#t}hideMenu(){this.#a.setVisible(!1)}}class C extends e.Scene{#S;#N;#R;#L;#D;#C;#_;#P;#w;constructor(){super({key:o.LEVEL_SCENE3})}preload(){this.#w=c(),this.data.set({level:3,progress:!1,challenge:this.#w}),this.#L=!1}create(){console.log(`[${C.name}: create] invoked`),this.add.image(0,0,t.LVL3_WALL).setOrigin(0),this.add.text(0,0,"Level: "+this.data.values.level,{color:"black",fontSize:"30px"}),this.#C=this.add.image(250,290,s.POSTER_ICON).setScale(.1),this.#P=this.add.image(855,410,i.GATED_CLOSED).setScale(.3).setAngle(3),this.#A(this.#L),this.#C.setInteractive({useHandCursor:!0}),this.#P.setInteractive({useHandCursor:!0});let o,n,l,h,d,c,p=this.add.layer();p.setInteractive(),this.#P.on("pointerover",(()=>{this.#P.setAlpha(.5)})),this.#P.on("pointerout",(()=>{this.#P.clearAlpha()})),this.#P.on("pointerup",(()=>{l=this.add.image(100,100,r.ARROWKEYS).setScale(.3),h=this.add.image(100,270,r.ENTER_KEY).setScale(.25).setRotation(.3),n=this.add.text(225,150,"¿Qué tipo de compuerta lógica produce\nuna salida de 1 solo cuando ambas\nentradas son 1?",{color:"#000",fontSize:"25px",align:"center"}),this.#D=this.add.container(0,0,[this.add.rectangle(this.scale.width/2,215,600,350,16777215),n,l,h]),this.#S=new D(this),this.#R.disableInteractive(),this.#C.disableInteractive()})),this.#R.on("pointerover",(()=>{this.#R.setAlpha(.5)})),this.#R.on("pointerout",(()=>{this.#R.clearAlpha()})),this.#R.on("pointerup",(()=>{0==this.#L?(o=this.add.image(250,80,a[`LVL3${this.#w}`]).setOrigin(0),l=this.add.image(100,100,r.ARROWKEYS).setScale(.3),h=this.add.image(100,270,r.ENTER_KEY).setScale(.25).setRotation(.3),n=this.add.text(this.scale.width/4,50,"¿Qué valor resulta para el circuito?",{color:"#000",fontSize:"25px"}),this.#D=this.add.container(0,0,[this.add.rectangle(this.scale.width/2,215,600,350,16777215),o,n,l,h]),this.#S=new O(this),this.#R.disableInteractive(),this.#C.disableInteractive()):console.log("cleared")})),this.#C.on("pointerover",(()=>{this.#C.setAlpha(.5)})),this.#C.on("pointerout",(()=>{this.#C.clearAlpha()})),this.#C.on("pointerup",(()=>{c||d||(c=p.add(this.add.image(500,300,s.POSTER_NOT)),d=this.add.text(this.scale.width/3,100,"Haz clic fuera de la imagen para cerrar",{color:"#000",align:"center"}),c.setVisible(!0),d.setVisible(!0),this.#C.disableInteractive(),this.#R.disableInteractive())})),this.input.on("pointerdown",(()=>{c&&d&&(c.setVisible(!1),d.setVisible(!1),c=null,d=null,this.#C.setInteractive(),this.#R.setInteractive())})),this.#N=this.input.keyboard.createCursorKeys(),this.#_=this.input.keyboard.addKey(e.Input.Keyboard.KeyCodes.ENTER)}update(){const t=e.Input.Keyboard.JustDown(this.#N.space),s=e.Input.Keyboard.JustDown(this.#_);if(this.#S&&(t||s)){let e=this.#S.handleInput("OK");return console.log(e),"1"===e?(this.#L=!0,console.log("got it right"),void this.#A(this.#L)):void("2"===e&&(this.#D.setVisible(!1),this.#R.setInteractive(!0),this.#C.setInteractive(!0)))}if(this.#S&&e.Input.Keyboard.JustDown(this.#N.shift))return this.#S.handleInput("CANCEL"),this.#R.setInteractive(!0),this.#D.setVisible(!1),this.#P.setInteractive(!0),this.#C.setInteractive(!0),void this.input.keyboard.disableGlobalCapture();let i=l.NONE;this.#N.left.isDown?i=l.LEFT:this.#N.right.isDown?i=l.RIGHT:this.#N.down.isDown?i=l.DOWN:this.#N.up.isDown&&(i=l.UP),i!==l.NONE&&this.#S.handleInput(i)}#A(e){1==e?(this.#S.hideMenu(),this.#D.setVisible(!1),this.#R=this.add.image(this.scale.width/2.5,320,i.FDOOR_OPEN).setScale(.3),this.#R.on("pointerup",(()=>{this.data.values.progress=!0,this.scene.start(o.PROGRESS_SCENE,{levelData:this.data.values})}))):this.#R=this.add.image(this.scale.width/2.5,320,i.FDOOR_CLOSED).setScale(.3),this.#R.setInteractive({useHandCursor:!0})}}class _ extends e.Scene{#S;#N;#R;#L;#D;#C;#_;#P;#w;constructor(){super({key:o.LEVEL_SCENE4})}preload(){this.#w=c(),this.data.set({level:4,progress:!1,challenge:this.#w}),this.#L=!1}create(){console.log(`[${_.name}: create] invoked`),this.add.image(0,0,t.LVL4_WALL).setOrigin(0),this.add.text(0,0,"Level: "+this.data.values.level,{color:"black",fontSize:"30px"}),this.#C=this.add.image(550,300,s.POSTER_ICON).setScale(.1),this.#P=this.add.image(70,450,i.MDOOR_CLOSED).setScale(.3),this.#A(this.#L),this.#C.setInteractive({useHandCursor:!0}),this.#P.setInteractive({useHandCursor:!0});let o,n,l,h,d,c,p,u,g=this.add.layer();g.setInteractive(),this.#R.on("pointerover",(()=>{this.#R.setAlpha(.5)})),this.#R.on("pointerout",(()=>{this.#R.clearAlpha()})),this.#P.on("pointerover",(()=>{this.#P.setAlpha(.5)})),this.#P.on("pointerout",(()=>{this.#P.clearAlpha()})),this.#P.on("pointerup",(()=>{l=this.add.image(100,100,r.ARROWKEYS).setScale(.3),h=this.add.image(100,270,r.ENTER_KEY).setScale(.25).setRotation(.3),n=this.add.text(225,150,"¿Qué combinación de compuertas \nlógicas se necesita para que una\nsalida sea verdadera (1) únicamente\ncuando ambas entradas son verdaderas y \nluego invertir el resultado?",{color:"#000",fontSize:"25px",align:"center"}),this.#D=this.add.container(0,0,[this.add.rectangle(this.scale.width/2,215,600,350,16777215),n,l,h]),this.#S=new D(this),this.#R.disableInteractive(),this.#C.disableInteractive()})),this.#R.on("pointerup",(()=>{0==this.#L?(o=this.add.image(150,50,a[`LVL4${this.#w}`]).setOrigin(0),l=this.add.image(100,100,r.ARROWKEYS).setScale(.3),h=this.add.image(100,270,r.ENTER_KEY).setScale(.25).setRotation(.3),n=this.add.text(this.scale.width/4,50,"¿Qué valor resulta para el circuito?",{color:"#000",fontSize:"25px"}),this.#D=this.add.container(0,0,[this.add.rectangle(this.scale.width/2,215,600,350,16777215),o,n,l,h]),this.#S=new O(this),this.#R.disableInteractive(),this.#C.disableInteractive(),this.#P.disableInteractive()):console.log("cleared")})),this.#C.on("pointerover",(()=>{this.#C.setAlpha(.5)})),this.#C.on("pointerout",(()=>{this.#C.clearAlpha()})),this.#C.on("pointerup",(()=>{c||d||(c=g.add(this.add.image(this.scale.width/2,350,s.POSTER_NOR).setScale(.6)),p=g.add(this.add.image(300,200,s.POSTER_XOR).setScale(.6)),u=g.add(this.add.image(680,200,s.POSTER_NAND).setScale(.6)),d=this.add.text(this.scale.width/3,100,"Haz clic fuera de la imagen para cerrar",{color:"#000",align:"center"}),c.setVisible(!0),p.setVisible(!0),u.setVisible(!0),d.setVisible(!0),this.#C.disableInteractive(),this.#P.disableInteractive(),this.#R.disableInteractive())})),this.input.on("pointerdown",(()=>{c&&d&&(c.setVisible(!1),p.setVisible(!1),u.setVisible(!1),d.setVisible(!1),c=null,u=null,p=null,d=null,this.#C.setInteractive(),this.#R.setInteractive(),this.#P.setInteractive())})),this.#N=this.input.keyboard.createCursorKeys(),this.#_=this.input.keyboard.addKey(e.Input.Keyboard.KeyCodes.ENTER)}update(){const t=e.Input.Keyboard.JustDown(this.#N.space),s=e.Input.Keyboard.JustDown(this.#_);if(this.#S&&(t||s)){let e=this.#S.handleInput("OK");return"1"===e?(this.#L=!0,console.log("got it right"),void this.#A(this.#L)):void("2"===e&&(this.#D.setVisible(!1),this.#R.setInteractive(!0),this.#C.setInteractive(!0)))}if(this.#S&&e.Input.Keyboard.JustDown(this.#N.shift))return this.#S.handleInput("CANCEL"),this.#R.setInteractive(!0),this.#D.setVisible(!1),this.#P.setInteractive(!0),this.#C.setInteractive(!0),void this.input.keyboard.disableGlobalCapture();let i=l.NONE;this.#N.left.isDown?i=l.LEFT:this.#N.right.isDown?i=l.RIGHT:this.#N.down.isDown?i=l.DOWN:this.#N.up.isDown&&(i=l.UP),i!==l.NONE&&this.#S.handleInput(i)}#A(e){1==e?(this.#S.hideMenu(),this.#D.setVisible(!1),this.#R=this.add.image(350,350,i.GATE_OPEN).setScale(.3),this.#R.on("pointerup",(()=>{this.data.values.progress=!0,this.scene.start(o.PROGRESS_SCENE,{levelData:this.data.values})}))):this.#R=this.add.image(350,350,i.GATE_CLOSED).setScale(.27),this.#R.setInteractive({useHandCursor:!0})}}class w extends e.Scene{#S;#N;#R;#L;#D;#C;#_;#P;#w;constructor(){super({key:o.LEVEL_SCENE5})}preload(){this.#w=c(),this.data.set({level:5,progress:!1,challenge:this.#w}),this.#L=!1}create(){console.log(`[${w.name}: create] invoked`),this.add.image(0,0,t.LVL5_WALL).setOrigin(0),this.add.text(0,0,"Level: "+this.data.values.level,{color:"black",fontSize:"30px"}),this.#C=this.add.image(720,300,s.POSTER_ICON).setScale(.1),this.#P=this.add.image(70,450,i.MDOOR_CLOSED).setScale(.3),this.#A(this.#L),this.#C.setInteractive({useHandCursor:!0}),this.#P.setInteractive({useHandCursor:!0});let o,n,l,h,d,c,p,u,g=this.add.layer();g.setInteractive(),this.#R.on("pointerover",(()=>{this.#R.setAlpha(.5)})),this.#R.on("pointerout",(()=>{this.#R.clearAlpha()})),this.#P.on("pointerover",(()=>{this.#P.setAlpha(.5)})),this.#P.on("pointerout",(()=>{this.#P.clearAlpha()})),this.#P.on("pointerup",(()=>{l=this.add.image(100,100,r.ARROWKEYS).setScale(.3),h=this.add.image(100,270,r.ENTER_KEY).setScale(.25).setRotation(.3),n=this.add.text(240,150,"¿Qué tipo de compuerta lógica\nproduce una salida verdadera cuando\nal menos una de las entradas es \nverdadera, o produce una salida\nverdadera solo cuando una de las \nentradas es verdadera pero no ambas?",{color:"#000",fontSize:"25px",align:"center"}),this.#D=this.add.container(0,0,[this.add.rectangle(this.scale.width/2,215,600,350,16777215),n,l,h]),this.#S=new D(this),this.#R.disableInteractive(),this.#C.disableInteractive()})),this.#R.on("pointerup",(()=>{0==this.#L?(o=this.add.image(70,50,a[`LVL5${this.#w}`]).setOrigin(0),l=this.add.image(100,100,r.ARROWKEYS).setScale(.3),h=this.add.image(100,270,r.ENTER_KEY).setScale(.25).setRotation(.3),n=this.add.text(this.scale.width/4,50,"¿Qué valor resulta para el circuito?",{color:"#000",fontSize:"25px"}),this.#D=this.add.container(0,0,[this.add.rectangle(this.scale.width/2,215,600,350,16777215),o,n,l,h]),this.#S=new O(this),this.#R.disableInteractive(),this.#C.disableInteractive(),this.#P.disableInteractive()):console.log("cleared")})),this.#C.on("pointerover",(()=>{this.#C.setAlpha(.5)})),this.#C.on("pointerout",(()=>{this.#C.clearAlpha()})),this.#C.on("pointerup",(()=>{c||d||(c=g.add(this.add.image(this.scale.width/2,350,s.POSTER_NOT).setScale(.5)),p=g.add(this.add.image(300,200,s.POSTER_XNOR).setScale(.6)),u=g.add(this.add.image(680,200,s.POSTER_NAND).setScale(.6)),d=this.add.text(this.scale.width/3,100,"Haz clic fuera de la imagen para cerrar",{color:"#000",align:"center"}),c.setVisible(!0),p.setVisible(!0),u.setVisible(!0),d.setVisible(!0),this.#C.disableInteractive(),this.#P.disableInteractive(),this.#R.disableInteractive())})),this.input.on("pointerdown",(()=>{c&&d&&(c.setVisible(!1),p.setVisible(!1),u.setVisible(!1),d.setVisible(!1),c=null,u=null,p=null,d=null,this.#C.setInteractive(),this.#R.setInteractive(),this.#P.setInteractive())})),this.#N=this.input.keyboard.createCursorKeys(),this.#_=this.input.keyboard.addKey(e.Input.Keyboard.KeyCodes.ENTER)}update(){const t=e.Input.Keyboard.JustDown(this.#N.space),s=e.Input.Keyboard.JustDown(this.#_);if(this.#S&&(t||s)){let e=this.#S.handleInput("OK");return"1"===e?(this.#L=!0,console.log("got it right"),void this.#A(this.#L)):void("2"===e&&(this.#D.setVisible(!1),this.#R.setInteractive(!0),this.#C.setInteractive(!0)))}if(this.#S&&e.Input.Keyboard.JustDown(this.#N.shift))return this.#S.handleInput("CANCEL"),this.#R.setInteractive(!0),this.#D.setVisible(!1),this.#P.setInteractive(!0),this.#C.setInteractive(!0),void this.input.keyboard.disableGlobalCapture();let i=l.NONE;this.#N.left.isDown?i=l.LEFT:this.#N.right.isDown?i=l.RIGHT:this.#N.down.isDown?i=l.DOWN:this.#N.up.isDown&&(i=l.UP),i!==l.NONE&&this.#S.handleInput(i)}#A(e){1==e?(this.#S.hideMenu(),this.#D.setVisible(!1),this.#R=this.add.image(this.scale.width/2,360,i.CDOOR_OPEN).setScale(.3),this.#R.on("pointerup",(()=>{this.data.values.progress=!0,this.scene.start(o.PROGRESS_SCENE,{levelData:this.data.values})}))):this.#R=this.add.image(this.scale.width/2,330,i.CDOOR_CLOSED).setScale(.5),this.#R.setInteractive({useHandCursor:!0})}}class A extends e.Scene{constructor(){super({key:o.END_SCENE})}create(){console.log(`[${A.name}: create] invoked`),console.log("Yei, no hay más niveles"),this.add.text(200,200,"Felicidades, has terminado \ntodos los niveles",{fontSize:"40px",color:"white",align:"center"}).setOrigin(0),this.add.text(5,535,"Assets empleados:\nComplete UI Essential Pack (crusenho)\nHand drawn dungeon icon pack (limofeus)",{fontSize:"15px",color:"white"}).setOrigin(0),this.add.text(785,535,"sfx empleados:\nCDat's Wrong! (Beetlemuse)\nDat's Right! (Beetlemuse)",{fontSize:"15px",color:"white",align:"right"}).setOrigin(0);const e=this.add.text(370,300,"Volver al menu",{fontFamily:"Courier",fontSize:"15px",color:"#ffffff",align:"center",fixedWidth:260,backgroundColor:"#8e8e8e"}).setPadding(32).setOrigin(0);e.setInteractive({useHandCursor:!0}),e.on("pointerover",(()=>{e.setBackgroundColor("#c1c1c1")})),e.on("pointerout",(()=>{e.setBackgroundColor("#8e8e8e")})),e.on("pointerup",(()=>{this.sound.stopAll(),this.scene.start(o.MENU_SCENE),e.disableInteractive()}),this)}}class I extends e.Scene{constructor(){super({key:o.GAMEOVER_SCENE})}create(){console.log(`[${I.name}: create] invoked`),this.add.text(250,150,"Vaya, parece que no has comprendido el tema lo suficiente :(");const e=this.add.text(370,300,"Volver al menu",{fontFamily:"Courier",fontSize:"15px",color:"#ffffff",align:"center",fixedWidth:260,backgroundColor:"#8e8e8e"}).setPadding(32).setOrigin(0);e.setInteractive({useHandCursor:!0}),e.on("pointerover",(()=>{e.setBackgroundColor("#c1c1c1")})),e.on("pointerout",(()=>{e.setBackgroundColor("#8e8e8e")})),e.on("pointerup",(()=>{this.sound.stopAll(),this.scene.start(o.MENU_SCENE),(new S).resetProgress(),e.disableInteractive()}),this)}}class b extends e.Scene{#V=[];#K;#_;constructor(){super({key:o.INTRO_SCENE})}create(){console.log(`[${b.name}: create] invoked`);const e=this.cache.text.get("Intro");this.#V=e.split("\n"),this.#K=this.add.text(180,150,this.#V[0],{color:"white",fontSize:"20px",align:"center",wordWrap:{width:700}}),this.add.text(350,400,"presiona ENTER para continuar\nPresiona SHIFT para saltar",{color:"white",fontSize:"15px",align:"center"}),this.input.keyboard.on("keydown",(e=>{"Enter"===e.code?this.#x():"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||this.scene.start(o.LEVEL_SCENE)}),this)}#x(){this.#V.shift(),this.#V.length>0?this.#K.setText(this.#V[0]):this.scene.start(o.LEVEL_SCENE)}}class f extends e.Scene{#R;#k;constructor(){super({key:o.SIDE_ROOM})}init(e){this.#k=e.level}create(){switch(console.log(`[${f.name}: create] invoked`),this.add.image(0,0,t.WHITE_ROOM).setOrigin(0).setScale(.52,.39),this.#k){case 3:this.add.image(this.scale.width/2,200,s.POSTER_AND).setScale(.5),this.add.image(this.scale.width/2,350,s.POSTER_OR).setScale(.5),this.#R=this.add.image(100,390,i.GATEI_CLOSED).setScale(.3);break;case 4:this.add.image(700,200,s.POSTER_NOR).setScale(.5),this.add.image(700,350,s.POSTER_XOR).setScale(.5),this.#R=this.add.image(950,400,i.MDOOR_CLOSED).setScale(.3).setFlipX(!0),this.add.image(350,200,s.POSTER_OR).setScale(.4),this.add.image(350,350,s.POSTER_AND).setScale(.4);break;case 5:this.add.image(700,200,s.POSTER_AND).setScale(.4),this.add.image(700,350,s.POSTER_OR).setScale(.4),this.#R=this.add.image(950,400,i.MDOOR_CLOSED).setScale(.4),this.add.image(this.scale.width/3,200,s.POSTER_AND).setScale(.4),this.add.image(this.scale.width/3,350,s.POSTER_OR).setScale(.4);break;default:return}this.#R.setInteractive({useHandCursor:!0}),this.#R.on("pointerover",(()=>{this.#R.setAlpha(.5)})),this.#R.on("pointerout",(()=>{this.#R.clearAlpha()})),this.#R.on("pointerup",(()=>{this.scene.stop()}))}}new e.Game({type:e.CANVAS,scale:{parent:"gameContainer",width:1024,height:576,mode:e.Scale.FIT,autoCenter:e.Scale.CENTER_HORIZONTALLY},audio:{disableWebAudio:!0},scene:[n,v,b,E,N,C,_,w,f,S,A,I]})})();