/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tray extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Tray", "./Tray/costumes/Tray.png", { x: 92, y: -17 })
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
  }

  *whenIReceiveStartgame() {
    while (true) {
      this.visible = true;
      this.goto(this.toNumber(this.stage.vars.baristalocation), 0);
      if (!(this.toNumber(undefined) === 5)) {
        
      }
      if  (this.stage.costume.name === "GameOver") {
        this.visible = false;
      }
      yield;
    }
  }

}
