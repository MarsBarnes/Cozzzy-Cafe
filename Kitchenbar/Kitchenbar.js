/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kitchenbar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("KitchenBar", "./Kitchenbar/costumes/KitchenBar.png", {
        x: 320,
        y: 180,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartgame() {
    this.moveBehind();
    this.goto(0, -43);
    while (true) {
      if (this.stage.costume.name === "Bar") {
        this.visible = false;
      }
      if (this.stage.costume.name === "Kitchen") {
        this.visible = true;
      }
      if (this.stage.costume.name === "GameOver") {
        this.visible = false;
      }
      yield;
    }
  }
}
