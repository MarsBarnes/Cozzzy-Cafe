/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Playbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("PlayButton", "./Playbutton/costumes/PlayButton.png", {
        x: 172,
        y: 37,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -100);
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("StartGame");
    this.visible = false;
    this.stage.costume = "Bar";
    this.broadcast("NewCustomer");
  }

  *whenthisspriteclicked() {
    this.stage.vars.timeremaining = 120;
    this.broadcast("StartGame");
    this.visible = false;
    this.stage.costume = "Bar";
    this.broadcast("NewCustomer");
    for (let i = 0; i < 120; i++) {
      yield* this.wait(1);
      this.stage.vars.timeremaining--;
      yield;
    }
    this.visible = false;
    this.stage.costume = "GameOver";
    return;
  }
}
