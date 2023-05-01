/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coffeemug2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("EmptyMug", "./Coffeemug2/costumes/EmptyMug.png", {
        x: 28,
        y: 30
      }),
      new Costume("FullMug", "./Coffeemug2/costumes/FullMug.svg", {
        x: 14,
        y: 15
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PourComplete" },
        this.whenIReceivePourcomplete
      )
    ];

    this.vars.ontray = 0;

    this.watchers.ontray = new Watcher({
      label: "Coffeemug2: OnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.ontray,
      x: 489,
      y: 169
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
      if (this.toNumber(this.vars.ontray) === 0) {
        //this._layerOrder = 1;
      }
      if (this.toNumber(this.vars.ontray) === 1) {
        //this._layerOrder = 50;
      }
      if (this.toNumber(this.vars.ontray) === 2) {
        //this._layerOrder = 50;
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
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (
      this.toNumber(this.stage.vars.cupslot) === 1 &&
      this.toNumber(this.vars.ontray) === 1
    ) {
      this.stage.vars.cupslot = 0;
      this.vars.ontray = 0;
      this.stage.vars.mugontray = 0;
      if (this.stage.costume.name === "Kitchen") {
        this.goto(-48, 150);
        return;
      } else {
        this.vars.ontray = 2;
        this.stage.vars.mugontray = 0;
        this.y -= 30;
        this.stage.vars.mugx = this.x;
        
        this.visible = true;
        if (
          this.toNumber(this.stage.vars.randomdrinknumber) === 1 &&
          this.toNumber(this.vars.ontray) === 2 &&
          this.costume.name === "FullMug"
        ) {
          yield* this.score(this.stage.vars.mugx);
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
      this.stage.vars.mugontray = 1;
    }
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
      yield* this.wait(2);
      yield* this.glide(
        1,
        this.sprites["Customer"].x,
        this.sprites["Customer"].y
      );
      // used to go to layer 5 here
      this.costume = "EmptyMug";
      this.stage.vars.coffeemugvolume = 0;
      this.goto(-48, 150);
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
      // used to go to layer 5 here
      this.costume = "EmptyMug";
      this.stage.vars.coffeemugvolume = 0;
      this.goto(-48, 150);
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
      // used to go to layer 5 here
      this.costume = "EmptyMug";
      this.stage.vars.coffeemugvolume = 0;
      this.goto(-48, 150);
      this.vars.ontray = 0;
      this.visible = false;
    }
  }

}
