/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Placemat2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Placemat", "./Placemat2/costumes/Placemat.svg", {
        x: -38.5,
        y: -3
      })
    ];

    this.sounds = [new Sound("pop", "./Placemat2/sounds/pop.wav")];

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
    this.goto(-139, -15);
    while (true) {
      if (this.stage.costume.name === "Kitchen") {
        this.visible = false;
      }
      if (this.stage.costume.name === "Bar") {
        
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    
  }

}
