/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blankspeechbubble extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "BlankSpeechBubble",
        "./Blankspeechbubble/costumes/BlankSpeechBubble.png",
        { x: 59, y: 49 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewCustomer" },
        this.whenIReceiveNewcustomer
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.goToLayer(7);
  }

  *goToLayer(layerNumber) {
    this.moveBehind();
    this.moveAhead(this.toNumber(layerNumber) - 1);
  }

  *whenIReceiveNewcustomer() {
    this.visible = false;
    this.stage.vars.randomdrinknumber = this.random(1, 3);
    yield* this.wait(8);
    this.goto(this.sprites["Customer"].x, this.sprites["Customer"].y);
    this.y += 140;
    this.visible = true;
    while (true) {
      if (
        this.stage.costume.name === "Bar" &&
        (this.toNumber(this.stage.vars.customerlocation) === -194 ||
          this.toNumber(this.stage.vars.customerlocation) === -51 ||
          this.toNumber(this.stage.vars.customerlocation) === 90)
      ) {
        this.visible = true;
        yield* this.goToLayer(7);
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
