/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Water extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Water0", "./Water/costumes/Water0.png", { x: 30, y: 26 }),
      new Costume("Water1", "./Water/costumes/Water1.png", { x: 30, y: 26 }),
      new Costume("Water2", "./Water/costumes/Water2.png", { x: 40, y: 42 }),
      new Costume("Water3", "./Water/costumes/Water3.png", { x: 50, y: 42 }),
      new Costume("Water4", "./Water/costumes/Water4.png", { x: 48, y: 56 }),
      new Costume("Water5", "./Water/costumes/Water5.png", { x: 48, y: 56 }),
      new Costume("Water6", "./Water/costumes/Water6.png", { x: 52, y: 68 }),
      new Costume("Water7", "./Water/costumes/Water7.png", { x: 56, y: 76 }),
      new Costume("Water8", "./Water/costumes/Water8.png", { x: 56, y: 76 }),
      new Costume("Water9", "./Water/costumes/Water9.png", { x: 56, y: 88 }),
      new Costume("Water10", "./Water/costumes/Water10.png", { x: 86, y: 92 }),
      new Costume("Water11", "./Water/costumes/Water11.png", { x: 86, y: 92 }),
      new Costume("Water12", "./Water/costumes/Water12.png", { x: 86, y: 92 }),
      new Costume("Water13", "./Water/costumes/Water13.png", { x: 86, y: 92 }),
      new Costume("Water14", "./Water/costumes/Water14.png", { x: 86, y: 92 }),
      new Costume("Water15", "./Water/costumes/Water15.png", { x: 86, y: 92 }),
      new Costume("Water16", "./Water/costumes/Water16.png", { x: 54, y: 80 }),
      new Costume("Water17", "./Water/costumes/Water17.png", { x: 56, y: 74 }),
      new Costume("Water18", "./Water/costumes/Water18.png", { x: 54, y: 66 }),
      new Costume("Water19", "./Water/costumes/Water19.png", { x: 52, y: 54 }),
      new Costume("Water20", "./Water/costumes/Water20.png", { x: 52, y: 44 }),
      new Costume("Water21", "./Water/costumes/Water21.png", { x: 40, y: 40 }),
      new Costume("Water22", "./Water/costumes/Water22.png", { x: 30, y: 26 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.ontray = 0;

    this.watchers.ontray = new Watcher({
      label: "Water: OnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.ontray,
      x: 464,
      y: -74
    });
  }

  *whenKeySpacePressed() {
    if (
      this.toNumber(this.vars.ontray) === 1 &&
      this.toNumber(this.stage.vars.cupslot) === 1 &&
      this.toNumber(this.stage.vars.waterglassontray) === 1 &&
      this.toNumber(this.stage.vars.waterglassvolume) === 0
    ) {
      this.costume = "Water0";
      for (let i = 0; i < 16; i++) {
        this.costumeNumber++;
        yield;
      }
      this.broadcast("PourComplete");
      for (let i = 0; i < 6; i++) {
        this.costumeNumber++;
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    
  }

  *whenIReceiveStartgame() {
    this.watchers.ontray.visible = false;
    this.vars.ontray = 0;
    this.costume = "Water0";
    this.goto(100, 1);
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
        this.goto(this.toNumber(this.stage.vars.baristalocation) + 20, 30);
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
      this.goto(100, 1);
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
