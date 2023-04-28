/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Teacup2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("EmptyTeaCup", "./Teacup2/costumes/EmptyTeaCup.png", {
        x: 35,
        y: 21
      }),
      new Costume("FullTeaCup", "./Teacup2/costumes/FullTeaCup.svg", {
        x: 17.5,
        y: 10.5
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
      label: "Teacup2: OnTray",
      style: "normal",
      visible: false,
      value: () => this.vars.ontray,
      x: 497,
      y: 141
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "EmptyTeaCup";
    this.visible = false;
    
  }

  *whenIReceiveStartgame() {
    this.watchers.ontray.visible = false;
    this.vars.ontray = 0;
    this.stage.vars.teacupontray = 0;
    this.goto(-150, 162);
    this.visible = false;
    while (true) {
      if (this.toNumber(this.vars.ontray) === 0) {
        //this._layerOrder = 2;
      }
      if (this.toNumber(this.vars.ontray) === 1) {
        //this._layerOrder = 55;
      }
      if (this.toNumber(this.vars.ontray) === 2) {
        //this._layerOrder = 55;
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
        this.goto(this.toNumber(this.stage.vars.baristalocation) + -29, -6);
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
      this.stage.vars.teacupontray = 0;
      if (this.stage.costume.name === "Kitchen") {
        this.goto(-150, 162);
        return;
      } else {
        this.vars.ontray = 2;
        this.stage.vars.teacupontray = 0;
        this.y -= 30;
        this.stage.vars.teacupx = this.x;
        
        this.visible = true;
        if (
          this.toNumber(this.stage.vars.randomdrinknumber) === 2 &&
          this.toNumber(this.vars.ontray) === 2 &&
          this.costume.name === "FullTeaCup"
        ) {
          yield* this.score(this.stage.vars.teacupx);
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
      this.stage.vars.teacupontray = 1;
      this.vars.ontray = 1;
      this.stage.vars.cupslot = 1;
    }
  }

  *whenIReceivePourcomplete() {
    if (this.toNumber(this.vars.ontray) === 1) {
      this.costume = "FullTeaCup";
      this.stage.vars.teacupvolume = 1;
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
      this.costume = "EmptyTeaCup";
      this.stage.vars.teacupvolume = 0;
      this.goto(-150, 162);
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
      this.costume = "EmptyTeaCup";
      this.stage.vars.teacupvolume = 0;
      this.goto(-150, 162);
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
      this.costume = "EmptyTeaCup";
      this.stage.vars.teacupvolume = 0;
      this.goto(-150, 162);
      this.vars.ontray = 0;
      this.visible = false;
    }
  }

}
