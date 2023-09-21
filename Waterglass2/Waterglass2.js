/* OnTray variable key:   0. In Cabinet     1.OnTray    2. On Bar */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import { sFunction } from "../globalFunctionsIWrote.js";

export default class Waterglass2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "EmptyWaterGlass",
        "./Waterglass2/costumes/EmptyWaterGlass.png",
        { x: 23, y: 38 }
      ),
      new Costume(
        "FullWaterGlass",
        "./Waterglass2/costumes/FullWaterGlass.svg",
        { x: 11.5, y: 19 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PourComplete" },
        this.whenIReceivePourcomplete
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
    ];

    this.vars.ontray = 0;

    this.watchers.ontray = new Watcher({
      label: "Waterglass2: OnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.ontray,
      x: 490,
      y: 90,
    });
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "EmptyWaterGlass";
    this.stage.vars.waterglassvolume = 0;
  }

  *whenIReceiveStartgame() {
    this.watchers.ontray.visible = false;
    this.vars.ontray = 0;
    this.stage.vars.waterglassontray = 0;
    this.goto(-110, 154);
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "GameOver") {
        this.visible = false;
      }
      if (
        this.stage.costume.name === "Kitchen" &&
        (this.toNumber(this.vars.ontray) === 0 ||
          this.toNumber(this.vars.ontray) === 1)
      ) {
        this.visible = true;
      }
      if (
        this.stage.costume.name === "Kitchen" &&
        this.toNumber(this.vars.ontray) === 2
      ) {
        this.visible = false;
      }
      if (
        this.stage.costume.name === "Bar" &&
        (this.toNumber(this.vars.ontray) === 1 ||
          this.toNumber(this.vars.ontray) === 2)
      ) {
        this.visible = true;
      }
      if (
        this.stage.costume.name === "Bar" &&
        this.toNumber(this.vars.ontray) === 0
      ) {
        this.visible = false;
      }
      if (
        this.toNumber(this.stage.vars.cupslot) === 1 &&
        this.toNumber(this.vars.ontray) === 1
      ) {
        this.goto(this.toNumber(this.stage.vars.baristalocation) + -6, 6);
      }
      this.stage.vars.waterglassx = this.x;
      yield;
    }
  }

  *whenKeySPressed() {
    yield* sFunction(
      this,
      "waterglassx",
      "waterglassontray",
      -110,
      154,
      "FullWaterGlass",
      3
    );
  }

  *whenIReceivePourcomplete() {
    if (this.toNumber(this.vars.ontray) === 1) {
      this.costume = "FullWaterGlass";
      this.stage.vars.waterglassvolume = 1;
    }
  }

  *score(numberOrText) {
    if (
      this.toNumber(this.stage.vars.seatnumber) === 1 &&
      this.compare(numberOrText, -105) < 0 &&
      this.compare(numberOrText, -250) > 0
    ) {
      this.broadcast("OrderComplete");
      this.costume = "EmptyWaterGlass";
      this.stage.vars.waterglassvolume = 0;
      this.goto(-110, 154);
      this.vars.ontray = 0;
      this.visible = false;
    }
    if (
      this.toNumber(this.stage.vars.seatnumber) === 2 &&
      this.compare(numberOrText, 47) < 0 &&
      this.compare(numberOrText, -106) > 0
    ) {
      this.broadcast("OrderComplete");
      this.costume = "EmptyWaterGlass";
      this.stage.vars.waterglassvolume = 0;
      this.goto(-110, 154);
      this.vars.ontray = 0;
      this.visible = false;
    }
    if (
      this.toNumber(this.stage.vars.seatnumber) === 3 &&
      this.compare(numberOrText, 200) < 0 &&
      this.compare(numberOrText, 48) > 0
    ) {
      this.broadcast("OrderComplete");
      this.costume = "EmptyWaterGlass";
      this.stage.vars.waterglassvolume = 0;
      this.goto(-110, 154);
      this.vars.ontray = 0;
      this.visible = false;
    }
  }
}
