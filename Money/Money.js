/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import{
  sFunction3
} from "../globalFunctionsIWrote.js";

export default class Money extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("MoneyNew", "./Money/costumes/MoneyNew.png", {
        x: 100,
        y: 100
      })
    ];

    this.sounds = [new Sound("pop", "./Money/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OrderComplete" },
        this.whenIReceiveOrdercomplete
      ),
      // new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "Kitchen") {
        this.visible = false;
      }
      if(this.stage.costume.name === "Bar" && this.y > 90) {
        this.visible = false;
      }
      if(this.stage.costume.name === "Bar" && this.y < 90) {
        this.visible = true;
      }
      //need to define  new varibale here to keep track of money location
      // moneyx = this.x;
      yield;
    }
  }

  // *whenKeySPressed(){
  //   yield* sFunction3(this, this.x);
  // }

  *whenIReceiveOrdercomplete() {
    yield* this.wait(2);
    // if(this.stage.costume.name === "Bar"){
      this.visible = true;
    // }
    this.goto(this.sprites["Customer"].x, this.sprites["Customer"].y);
    this.x += 130;
    this.y -= 60;
    // console.log("whenIReceiveOrdercomplete:     x: " + this.x + "y: " + this.y)
    yield* this.wait(2);
  }

  *whenKeySPressed(){ 
      yield* sFunction3(this, this.x);
  }

  // *whenthisspriteclicked() {
  //   this.stage.vars.money += 5;
  //   this.visible = false;
  // }

  *whenIReceiveStartgame() {
    this.stage.watchers.money.visible = true;
  }


}
