import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Drinkmakers extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("DrinkMakers", "./Drinkmakers/costumes/DrinkMakers.png", {
        x: 246,
        y: 101,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "StartGame" },
        this.whenIReceiveStartgame
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStartgame() {
    this.goto(130, -2);
    while (true) {
      if (this.stage.costume.name === "Bar") {
        this.visible = false;
      }
      if (this.stage.costume.name === "Kitchen") {
        this.visible = true;
      }
      if (this.stage.costume.name === "GameOver") {
        this.visible = false;
      }
      yield;
    }
  }
}
