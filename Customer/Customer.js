/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Customer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "CustomerStanding",
        "./Customer/costumes/CustomerStanding.png",
        { x: 80, y: 227 }
      ),
      new Costume(
        "CustomerSitting",
        "./Customer/costumes/CustomerSitting.png",
        { x: 80, y: 227 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OrderComplete" },
        this.whenIReceiveOrdercomplete
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewCustomer" },
        this.whenIReceiveNewcustomer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewCustomer" },
        this.whenIReceiveNewcustomer2
      )
    ];

    this.vars.placematnumber = 3;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOrdercomplete() {
    this.stage.vars.customerlocation = 175;
    yield* this.wait(5);
    if (this.toNumber(this.stage.vars.seatnumber) === 1) {
      this.costume = "CustomerStanding";
      yield* this.glide(3, 175, -278);
    }
    if (this.toNumber(this.stage.vars.seatnumber) === 2) {
      this.costume = "CustomerStanding";
      this.stage.vars.customerlocation = 175;
      yield* this.glide(2, 175, -278);
    }
    if (this.toNumber(this.stage.vars.seatnumber) === 3) {
      this.costume = "CustomerStanding";
      this.stage.vars.customerlocation = 175;
      yield* this.glide(1, 175, -278);
    }
    this.visible = false;
    yield* this.wait(3);
    this.broadcast("NewCustomer");
  }

  *whenIReceiveNewcustomer() {
    this.costume = "CustomerStanding";
    this.goto(175, -278);
    this.direction = 90;
    this.stage.vars.customerlocation = 174;
    yield* this.glide(2, 175, -64);
    yield* this.wait(2);
    this.stage.vars.seatnumber = this.random(1, 3);
    this.vars.placematnumber = this.stage.vars.seatnumber;
    if (this.toNumber(this.stage.vars.seatnumber) === 1) {
      yield* this.glide(3, -194, -53);
      this.stage.vars.customerlocation = -194;
      this.costume = "CustomerSitting";
    }
    if (this.toNumber(this.stage.vars.seatnumber) === 2) {
      yield* this.glide(2, -51, -53);
      this.stage.vars.customerlocation = -51;
      this.costume = "CustomerSitting";
    }
    if (this.toNumber(this.stage.vars.seatnumber) === 3) {
      yield* this.glide(1, 90, -53);
      this.stage.vars.customerlocation = 90;
      this.costume = "CustomerSitting";
    }
  }

  *whenIReceiveNewcustomer2() {
    while (true) {
      if (this.stage.costume.name === "Kitchen") {
        this.visible = false;
      }
      if (
        this.stage.costume.name === "Bar" &&
        this.compare(this.stage.vars.customerlocation, 175) < 0
      ) {
        yield
        this.visible = true;
      }
      yield;
    }
  }


}
