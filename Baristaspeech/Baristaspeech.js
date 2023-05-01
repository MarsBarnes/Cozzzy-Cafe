/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Baristaspeech extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Welcome", "./Baristaspeech/costumes/Welcome.svg", {
        x: 66.25,
        y: 135.855265
      }),
      new Costume(
        "DrinkQuestion",
        "./Baristaspeech/costumes/DrinkQuestion.svg",
        { x: 66.25, y: 135.855265 }
      )
    ];

    this.sounds = [new Sound("pop", "./Baristaspeech/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStartgame() {
    
    this.goto(40, 40);
    this.costume = "Welcome";
    this.visible = true;
    yield* this.wait(2);
    this.visible = false;
    yield* this.wait(2);
    this.costume = "DrinkQuestion";
    this.visible = true;
    yield* this.wait(2);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
      while (true) {
      if (
        this.stage.costume.name === "Kitchen" || this.stage.costume.name === "CozzzyCafe"
      ) {
        this.visible = false;
      }
      yield;
    }
  }



}
