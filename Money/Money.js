/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Money extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Money", "./Money/costumes/Money.svg", {
        x: 28.5,
        y: -58.9048344465582
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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "kitchen") {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveOrdercomplete() {
    yield* this.wait(2);
    this.visible = true;
    this.goto(this.sprites["Customer"].x, this.sprites["Customer"].y);
    this.x += 70;
    this.y += 90;
  }

  *whenthisspriteclicked() {
    this.stage.vars.money += 5;
    this.visible = false;
  }

  *whenIReceiveStartgame() {
    this.stage.watchers.money.visible = true;
  }
}
