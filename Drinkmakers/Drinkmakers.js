/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Drinkmakers extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("DrinkMakers", "./Drinkmakers/costumes/DrinkMakers.png", {
        x: 246,
        y: 101
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.goToLayer(7);
  }

  *whenIReceiveStartgame() {
    this.goto(116, -2);
    while (true) {
      if (this.stage.costume.name === "Bar") {
        this.visible = false;
      }
      if (this.stage.costume.name === "Kitchen") {
        this.visible = true;
        yield* this.goToLayer(7);
      }
      yield;
    }
  }

  *goToLayer(layerNumber) {
    this.moveBehind();
    this.moveAhead(this.toNumber(layerNumber) - 1);
  }
}
