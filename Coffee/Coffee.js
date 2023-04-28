/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coffee extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Coffee0", "./Coffee/costumes/Coffee0.png", { x: 25, y: 18 }),
      new Costume("Coffee1", "./Coffee/costumes/Coffee1.png", { x: 25, y: 18 }),
      new Costume("Coffee2", "./Coffee/costumes/Coffee2.png", { x: 35, y: 30 }),
      new Costume("Coffee3", "./Coffee/costumes/Coffee3.png", { x: 45, y: 44 }),
      new Costume("Coffee4", "./Coffee/costumes/Coffee4.png", { x: 57, y: 56 }),
      new Costume("Coffee5", "./Coffee/costumes/Coffee5.png", { x: 67, y: 76 }),
      new Costume("Coffee6", "./Coffee/costumes/Coffee6.png", { x: 67, y: 76 }),
      new Costume("Coffee7", "./Coffee/costumes/Coffee7.png", { x: 91, y: 76 }),
      new Costume("Coffee8", "./Coffee/costumes/Coffee8.png", { x: 91, y: 76 }),
      new Costume("Coffee9", "./Coffee/costumes/Coffee9.png", { x: 91, y: 76 }),
      new Costume("Coffee10", "./Coffee/costumes/Coffee10.png", {
        x: 99,
        y: 88
      }),
      new Costume("Coffee11", "./Coffee/costumes/Coffee11.png", {
        x: 99,
        y: 88
      }),
      new Costume("Coffee12", "./Coffee/costumes/Coffee12.png", {
        x: 99,
        y: 88
      }),
      new Costume("Coffee13", "./Coffee/costumes/Coffee13.png", {
        x: 99,
        y: 88
      }),
      new Costume("Coffee14", "./Coffee/costumes/Coffee14.png", {
        x: 69,
        y: 76
      }),
      new Costume("Coffee15", "./Coffee/costumes/Coffee15.png", {
        x: 67,
        y: 76
      }),
      new Costume("Coffee16", "./Coffee/costumes/Coffee16.png", {
        x: 63,
        y: 56
      }),
      new Costume("Coffee17", "./Coffee/costumes/Coffee17.png", {
        x: 53,
        y: 46
      }),
      new Costume("Coffee18", "./Coffee/costumes/Coffee18.png", {
        x: 27,
        y: 30
      }),
      new Costume("Coffee19", "./Coffee/costumes/Coffee19.png", {
        x: 25,
        y: 18
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.ontray = 0;

    this.watchers.ontray = new Watcher({
      label: "Coffee: OnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.ontray,
      x: 559,
      y: -103
    });
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    
  }

  *whenKeySpacePressed() {
    if (
      this.toNumber(this.vars.ontray) === 1 &&
      this.toNumber(this.stage.vars.cupslot) === 1 &&
      this.toNumber(this.stage.vars.mugontray) === 1 &&
      this.toNumber(this.stage.vars.coffeemugvolume) === 0
    ) {
      this.costume = "Coffee0";
      for (let i = 0; i < 14; i++) {
        this.costumeNumber++;
        yield;
      }
      this.broadcast("PourComplete");
      for (let i = 0; i < 5; i++) {
        this.costumeNumber++;
        yield;
      }
    }
  }

  *whenIReceiveStartgame() {
    this.watchers.ontray.visible = false;
    this.vars.ontray = 0;
    this.costume = "Coffee0";
    this.goto(192, 1);
    this.visible = false;
    while (true) {
      if (this.stage.costume.name === "Kitchen") {
        this.visible = true;
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
        this.goto(this.toNumber(this.stage.vars.baristalocation) + 20, 25);
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (
      this.stage.costume.name === "Kitchen" &&
      this.toNumber(this.stage.vars.vesselslot) === 1 &&
        this.toNumber(this.vars.ontray) === 1
    ) {
      this.stage.vars.vesselslot = 0;
      this.vars.ontray = 0;
      this.goto(192, 1);
      return;
    }
    if (
      this.toNumber(this.stage.vars.vesselslot) === 1 &&
      this.toNumber(this.vars.ontray) === 0
    ) {
      return;
    } else {
      this.vars.ontray = 1;
      this.stage.vars.vesselslot = 1;
    }
  }

}
