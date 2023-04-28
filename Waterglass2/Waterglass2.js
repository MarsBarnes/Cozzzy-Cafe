/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

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
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PourComplete" },
        this.whenIReceivePourcomplete
      )
    ];

    this.vars.ontray = 0;

    this.watchers.ontray = new Watcher({
      label: "Waterglass2: OnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.ontray,
      x: 490,
      y: 90
    });
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "EmptyWaterGlass";
    this.stage.vars.waterglassvolume = 0;
    yield* this.goToLayer(1);
  }

  *whenthisspriteclicked() {
    if (
      this.toNumber(this.stage.vars.cupslot) === 1 &&
      this.toNumber(this.vars.ontray) === 1
    ) {
      this.stage.vars.cupslot = 0;
      this.vars.ontray = 0;
      this.stage.vars.waterglassontray = 0;
      if (this.stage.costume.name === "Kitchen") {
        this.goto(-35, 86);
        return;
      } else {
        this.vars.ontray = 2;
        this.stage.vars.waterglassontray = 0;
        this.y -= 30;
        this.stage.vars.waterglassx = this.x;
        yield* this.goToLayer(6);
        this.visible = true;
        if (
          this.toNumber(this.stage.vars.randomdrinknumber) === 3 &&
          this.toNumber(this.vars.ontray) === 2 &&
          this.costume.name === "FullWaterGlass"
        ) {
          yield* this.score(this.stage.vars.waterglassx);
        }
        return;
      }
    }
    if (
      this.toNumber(this.stage.vars.cupslot) === 1 &&
      this.toNumber(this.vars.ontray) === 0
    ) {
      return;
    } else {
      this.vars.ontray = 1;
      this.stage.vars.cupslot = 1;
      this.stage.vars.waterglassontray = 1;
    }
  }

  *whenIReceiveStartgame() {
    this.watchers.ontray.visible = false;
    this.vars.ontray = 0;
    this.stage.vars.waterglassontray = 0;
    this.goto(-35, 86);
    this.visible = false;
    while (true) {
      if (this.toNumber(this.vars.ontray) === 0) {
        yield* this.goToLayer(1);
      }
      if (this.toNumber(this.vars.ontray) === 1) {
        yield* this.goToLayer(6);
      }
      if (this.toNumber(this.vars.ontray) === 2) {
        yield* this.goToLayer(5);
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
      yield;
    }
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
      yield* this.wait(2);
      yield* this.glide(
        1,
        this.sprites["Customer"].x,
        this.sprites["Customer"].y
      );
      this.warp(this.goToLayer)(5);
      this.costume = "EmptyWaterGlass";
      this.stage.vars.waterglassvolume = 0;
      this.goto(-35, 86);
      this.vars.ontray = 0;
      this.visible = false;
    }
    if (
      this.toNumber(this.stage.vars.seatnumber) === 2 &&
      this.compare(numberOrText, 47) < 0 && this.compare(numberOrText, -106) > 0
    ) {
      this.broadcast("OrderComplete");
      yield* this.wait(2);
      yield* this.glide(
        1,
        this.sprites["Customer"].x,
        this.sprites["Customer"].y
      );
      this.warp(this.goToLayer)(5);
      this.costume = "EmptyWaterGlass";
      this.stage.vars.waterglassvolume = 0;
      this.goto(-35, 86);
      this.vars.ontray = 0;
      this.visible = false;
    }
    if (
      this.toNumber(this.stage.vars.seatnumber) === 3 &&
      this.compare(numberOrText, 200) < 0 && this.compare(numberOrText, 48) > 0
    ) {
      this.broadcast("OrderComplete");
      yield* this.wait(2);
      yield* this.glide(
        1,
        this.sprites["Customer"].x,
        this.sprites["Customer"].y
      );
      this.warp(this.goToLayer)(5);
      this.costume = "EmptyWaterGlass";
      this.stage.vars.waterglassvolume = 0;
      this.goto(-35, 86);
      this.vars.ontray = 0;
      this.visible = false;
    }
  }

  *goToLayer(layerNumber) {
    this.moveBehind();
    this.moveAhead(this.toNumber(layerNumber) - 1);
  }
}
