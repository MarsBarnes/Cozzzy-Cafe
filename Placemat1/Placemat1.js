/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Placemat1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Placemat", "./Placemat1/costumes/Placemat.png", {
        x: -38.5,
        y: -3,
      }),
    ];

    this.sounds = [new Sound("pop", "./Placemat1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveStartgame() {
    this.goto(-247, -17);
    while (true) {
      if (this.stage.costume.name === "Kitchen") {
        this.visible = false;
      }
      if (this.stage.costume.name === "Bar") {
        this.visible = true;
      }
      if (this.stage.costume.name === "GameOver") {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield;
  }
}
