/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bubblemug extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("CoffeeMug", "./Bubblemug/costumes/CoffeeMug.png", {
        x: 28,
        y: 30
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OrderComplete" },
        this.whenIReceiveOrdercomplete
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewCustomer" },
        this.whenIReceiveNewcustomer
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    
  }

  *whenIReceiveOrdercomplete() {}


  *whenIReceiveNewcustomer() {
    this.visible = false;
    yield* this.wait(8);
    if (this.toNumber(this.stage.vars.randomdrinknumber) === 1) {
      this.goto(this.sprites["Customer"].x, this.sprites["Customer"].y);
      this.y += 140;
      this.visible = true;
    }
    while (true) {
      if (
        this.stage.costume.name === "Bar" &&
        this.toNumber(this.stage.vars.randomdrinknumber) === 1 &&
        (this.toNumber(this.stage.vars.customerlocation) === -194 ||
          this.toNumber(this.stage.vars.customerlocation) === -51 ||
          this.toNumber(this.stage.vars.customerlocation) === 90)
      ) {
        this.visible = true;
        
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
