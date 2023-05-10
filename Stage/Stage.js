/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kitchen", "./Stage/costumes/Kitchen.png", {
        x: 480,
        y: 360,
      }),
      new Costume("Bar", "./Stage/costumes/Bar.png", { x: 480, y: 360 }),
      new Costume("CozzzyCafe", "./Stage/costumes/CozzzyCafe.png", {
        x: 480,
        y: 360,
      }),
      new Costume("GameOver", "./Stage/costumes/GameOver.png", {
        x: 480,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.vars.baristalocation = 17;
    this.vars.customerlocation = 90;
    this.vars.seatnumber = 3;
    this.vars.randomdrinknumber = 2;
    this.vars.traylocation = 0;
    this.vars.cupslot = 0;
    this.vars.vesselslot = 0;
    this.vars.mugontray = 0;
    this.vars.teacupontray = 0;
    this.vars.waterglassontray = 0;
    this.vars.money = 0;
    this.vars.teacupx = 0;
    this.vars.waterglassx = 0;
    this.vars.mugx = 0;
    this.vars.teacupvolume = 0;
    this.vars.coffeemugvolume = 0;
    this.vars.waterglassvolume = 0;
    this.vars.timeremaining = 0;

    this.watchers.baristalocation = new Watcher({
      label: "BaristaLocation",
      style: "normal",
      visible: false,
      value: () => this.vars.baristalocation,
      x: 245,
      y: 175,
    });
    this.watchers.customerlocation = new Watcher({
      label: "CustomerLocation",
      style: "normal",
      visible: false,
      value: () => this.vars.customerlocation,
      x: 245,
      y: 148,
    });
    this.watchers.seatnumber = new Watcher({
      label: "SeatNumber",
      style: "normal",
      visible: false,
      value: () => this.vars.seatnumber,
      x: 570,
      y: -128,
    });
    this.watchers.randomdrinknumber = new Watcher({
      label: "RandomDrinkNumber",
      style: "normal",
      visible: false,
      value: () => this.vars.randomdrinknumber,
      x: 521,
      y: -154,
    });
    this.watchers.traylocation = new Watcher({
      label: "TrayLocation",
      style: "normal",
      visible: false,
      value: () => this.vars.traylocation,
      x: 243,
      y: 144,
    });
    this.watchers.cupslot = new Watcher({
      label: "CupSlot",
      style: "normal",
      visible: false,
      value: () => this.vars.cupslot,
      x: 246,
      y: 175,
    });
    this.watchers.vesselslot = new Watcher({
      label: "VesselSlot",
      style: "normal",
      visible: false,
      value: () => this.vars.vesselslot,
      x: 245,
      y: 148,
    });
    this.watchers.mugontray = new Watcher({
      label: "MugOnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.mugontray,
      x: 245,
      y: 175,
    });
    this.watchers.teacupontray = new Watcher({
      label: "TeaCupOnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.teacupontray,
      x: 245,
      y: 148,
    });
    this.watchers.waterglassontray = new Watcher({
      label: "WaterGlassOnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.waterglassontray,
      x: 545,
      y: 174,
    });
    this.watchers.money = new Watcher({
      label: "Money",
      style: "normal",
      visible: true,
      value: () => this.vars.money,
      x: 500,
      y: 175,
    });
    this.watchers.timeremaining = new Watcher({
      label: "Time",
      style: "normal",
      visible: true,
      value: () => this.vars.timeremaining,
      x: 615,
      y: 175,
    });
  }

  *whenGreenFlagClicked() {
    this.vars.cupslot = 0;
    this.vars.vesselslot = 0;
    this.vars.money = 0;
    this.vars.mugx = 0;
    this.vars.teacupx = 0;
    this.vars.waterglassx = 0;
    this.costume = "CozzzyCafe";
    yield* this.hideallglobalvariables();
  }

  *hideallglobalvariables() {
    //edited this to see certain variables
    this.watchers.baristalocation.visible = false;
    this.watchers.customerlocation.visible = false;
    this.watchers.cupslot.visible = false;
    this.watchers.vesselslot.visible = false;
    this.watchers.mugontray.visible = false;
    this.watchers.waterglassontray.visible = false;
    this.watchers.teacupontray.visible = false;
    this.watchers.money.visible = true;
    this.watchers.randomdrinknumber.visible = false;
    this.watchers.seatnumber.visible = false;
    this.watchers.traylocation.visible = false;
    this.watchers.timeremaining.visible = true;
  }
}
