import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import { sFunction3 } from "../globalFunctionsIWrote.js";

export default class Money extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("MoneyNew", "./Money/costumes/MoneyNew.png", {
        x: 100,
        y: 100,
      }),
    ];

    this.sounds = [new Sound("pop", "./Money/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OrderComplete" },
        this.whenIReceiveOrdercomplete
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "Kitchen") {
        this.visible = false;
      }
      if (this.stage.costume.name === "GameOver") {
        this.visible = false;
      }
      if (this.stage.costume.name === "Bar" && this.y > 90) {
        this.visible = false;
      }
      if (this.stage.costume.name === "Bar" && this.y < 90) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenIReceiveOrdercomplete() {
    yield* this.wait(2);
    this.visible = true;
    this.goto(this.sprites["Customer"].x, this.sprites["Customer"].y);
    this.x += 130;
    this.y -= 60;
    yield* this.wait(2);
  }

  *whenKeySPressed() {
    yield* sFunction3(this, this.x);
  }

  *whenIReceiveStartgame() {
    this.stage.watchers.money.visible = true;
  }
}
