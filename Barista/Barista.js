import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Barista extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Barista", "./Barista/costumes/Barista.png", {
        x: 80,
        y: 247,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
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

  *whenKeyAPressed() {
    this.stage.vars.baristalocation -= 5;
    this.move(-5);
    if (
      this.compare(this.stage.vars.baristalocation, -195) < 0 &&
      this.stage.costume.name === "Bar"
    ) {
      this.stage.vars.baristalocation = -195;
      this.goto(-195, -4);
    }
    if (
      this.compare(this.stage.vars.baristalocation, -180) < 0 &&
      this.stage.costume.name === "Kitchen"
    ) {
      this.stage.costume = "Bar";
      this.stage.vars.baristalocation = 177;
      this.goto(177, -4);
    }
  }

  *whenKeyDPressed() {
    this.stage.vars.baristalocation += 5;
    this.move(5);
    if (
      this.compare(this.stage.vars.baristalocation, 195) > 0 &&
      this.stage.costume.name === "Bar"
    ) {
      this.stage.costume = "Kitchen";
      this.stage.vars.baristalocation = -195;
      this.goto(-195, -4);
    }
    if (
      this.compare(this.stage.vars.baristalocation, 195) > 0 &&
      this.stage.costume.name === "Kitchen"
    ) {
      this.stage.vars.baristalocation = 195;
      this.goto(195, -4);
    }
  }

  *whenIReceiveStartgame() {
    this.stage.vars.baristalocation = 175;
    this.direction = 90;
    this.goto(175, -4);
    this.visible = true;
    while (true) {
      if (this.stage.costume.name === "GameOver") {
        this.visible = false;
      }
      yield;
    }
  }
}
