/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import { sFunction } from "../globalFunctionsIWrote.js";

export default class Coffeemug2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("EmptyMug", "./Coffeemug2/costumes/EmptyMug.png", {
        x: 28,
        y: 30,
      }),
      new Costume("FullMug", "./Coffeemug2/costumes/FullMug.svg", {
        x: 14,
        y: 15,
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "PourComplete" },
        this.whenIReceivePourcomplete
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
    ];

    this.vars.ontray = 0;

    this.watchers.ontray = new Watcher({
      label: "Coffeemug2: OnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.ontray,
      x: 489,
      y: 169,
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "EmptyMug";
    this.visible = false;
  }

  *whenIReceiveStartgame() {
    this.watchers.ontray.visible = false;
    this.vars.ontray = 0;
    this.stage.vars.mugontray = 0;
    this.goto(-48, 150);
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
        this.goto(this.toNumber(this.stage.vars.baristalocation) + -12, 0);
      }
      this.stage.vars.coffeemugx = this.x;
      yield;
    }
  }

  *whenKeySPressed() {
    yield* sFunction(this, "coffeemugx", "mugontray", -48, 150, "FullMug", 1);
  }

  *whenIReceivePourcomplete() {
    if (this.toNumber(this.vars.ontray) === 1) {
      this.costume = "FullMug";
      this.stage.vars.coffeemugvolume = 1;
    }
  }

  *score(numberOrText) {
    if (
      this.toNumber(this.stage.vars.seatnumber) === 1 &&
      this.compare(numberOrText, -105) < 0 &&
      this.compare(numberOrText, -250) > 0
    ) {
      this.broadcast("OrderComplete");
      this.costume = "EmptyMug";
      this.stage.vars.coffeemugvolume = 0;
      this.goto(-48, 150);
      this.vars.ontray = 0;
      this.visible = false;
    }
    if (
      this.toNumber(this.stage.vars.seatnumber) === 2 &&
      this.compare(numberOrText, 47) < 0 &&
      this.compare(numberOrText, -106) > 0
    ) {
      this.broadcast("OrderComplete");
      this.costume = "EmptyMug";
      this.stage.vars.coffeemugvolume = 0;
      this.goto(-48, 150);
      this.vars.ontray = 0;
      this.visible = false;
    }
    if (
      this.toNumber(this.stage.vars.seatnumber) === 3 &&
      this.compare(numberOrText, 200) < 0 &&
      this.compare(numberOrText, 48) > 0
    ) {
      this.broadcast("OrderComplete");
      this.costume = "EmptyMug";
      this.stage.vars.coffeemugvolume = 0;
      this.goto(-48, 150);
      this.vars.ontray = 0;
      this.visible = false;
    }
  }
}
