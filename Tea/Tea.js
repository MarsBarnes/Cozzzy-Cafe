/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import { sFunction2 } from "../globalFunctionsIWrote.js";

export default class Tea extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Tea0", "./Tea/costumes/Tea0.png", { x: 11, y: 10 }),
      new Costume("Tea1", "./Tea/costumes/Tea1.png", { x: 11, y: 10 }),
      new Costume("Tea2", "./Tea/costumes/Tea2.png", { x: 19, y: 16 }),
      new Costume("Tea3", "./Tea/costumes/Tea3.png", { x: 27, y: 30 }),
      new Costume("Tea4", "./Tea/costumes/Tea4.png", { x: 27, y: 38 }),
      new Costume("Tea5", "./Tea/costumes/Tea5.png", { x: 45, y: 56 }),
      new Costume("Tea6", "./Tea/costumes/Tea6.png", { x: 71, y: 62 }),
      new Costume("Tea7", "./Tea/costumes/Tea7.png", { x: 71, y: 62 }),
      new Costume("Tea8", "./Tea/costumes/Tea8.png", { x: 97, y: 64 }),
      new Costume("Tea9", "./Tea/costumes/Tea9.png", { x: 97, y: 64 }),
      new Costume("Tea10", "./Tea/costumes/Tea10.png", { x: 97, y: 64 }),
      new Costume("Tea11", "./Tea/costumes/Tea11.png", { x: 97, y: 64 }),
      new Costume("Tea12", "./Tea/costumes/Tea12.png", { x: 97, y: 64 }),
      new Costume("Tea13", "./Tea/costumes/Tea13.png", { x: 97, y: 64 }),
      new Costume("Tea14", "./Tea/costumes/Tea14.png", { x: 97, y: 64 }),
      new Costume("Tea15", "./Tea/costumes/Tea15.png", { x: 97, y: 64 }),
      new Costume("Tea16", "./Tea/costumes/Tea16.png", { x: 97, y: 64 }),
      new Costume("Tea17", "./Tea/costumes/Tea17.png", { x: 97, y: 64 }),
      new Costume("Tea18", "./Tea/costumes/Tea18.png", { x: 97, y: 64 }),
      new Costume("Tea19", "./Tea/costumes/Tea19.png", { x: 97, y: 64 }),
      new Costume("Tea20", "./Tea/costumes/Tea20.png", { x: 67, y: 62 }),
      new Costume("Tea21", "./Tea/costumes/Tea21.png", { x: 67, y: 62 }),
      new Costume("Tea22", "./Tea/costumes/Tea22.png", { x: 45, y: 56 }),
      new Costume("Tea23", "./Tea/costumes/Tea23.png", { x: 27, y: 38 }),
      new Costume("Tea24", "./Tea/costumes/Tea24.png", { x: 27, y: 30 }),
      new Costume("Tea25", "./Tea/costumes/Tea25.png", { x: 19, y: 16 }),
      new Costume("Tea26", "./Tea/costumes/Tea26.png", { x: 11, y: 10 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      // new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
    ];

    this.vars.ontray = 0;

    this.watchers.ontray = new Watcher({
      label: "Tea: OnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.ontray,
      x: 388,
      y: -49,
    });
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartgame() {
    this.watchers.ontray.visible = false;
    this.vars.ontray = 0;
    this.costume = "Tea0";
    this.goto(4, -15);
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "Kitchen") {
        this.visible = true;
      }
      if (this.stage.costume.name === "GameOver") {
        this.visible = false;
      }
      if (
        this.stage.costume.name === "Bar" &&
        this.toNumber(this.vars.ontray) === 1
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
        this.toNumber(this.stage.vars.vesselslot) === 1 &&
        this.toNumber(this.vars.ontray) === 1
      ) {
        this.goto(this.toNumber(this.stage.vars.baristalocation) + 0, 10);
      }
      yield;
    }
  }

  // *whenthisspriteclicked() {
  //   if (
  //     this.stage.costume.name === "Kitchen" &&
  //     this.toNumber(this.stage.vars.vesselslot) === 1 &&
  //       this.toNumber(this.vars.ontray) === 1
  //   ) {
  //     this.stage.vars.vesselslot = 0;
  //     this.vars.ontray = 0;
  //     this.goto(4, -15);
  //     return;
  //   }
  //   if (
  //     this.toNumber(this.stage.vars.vesselslot) === 1 &&
  //     this.toNumber(this.vars.ontray) === 0
  //   ) {
  //     return;
  //   } else {
  //     this.vars.ontray = 1;
  //     this.stage.vars.vesselslot = 1;
  //   }
  // }

  *whenKeySPressed() {
    yield* sFunction2(this, 4, -15, "Tea0");
  }

  *whenKeySpacePressed() {
    if (
      this.toNumber(this.vars.ontray) === 1 &&
      this.toNumber(this.stage.vars.cupslot) === 1 &&
      this.toNumber(this.stage.vars.teacupontray) === 1 &&
      this.toNumber(this.stage.vars.teacupvolume) === 0
    ) {
      this.costume = "Tea0";
      for (let i = 0; i < 19; i++) {
        this.costumeNumber++;
        yield;
      }
      this.broadcast("PourComplete");
      for (let i = 0; i < 8; i++) {
        this.costumeNumber++;
        yield;
      }
    }
  }
}
