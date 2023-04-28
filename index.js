import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Bubblemug from "./Bubblemug/Bubblemug.js";
import Bubbleteacup from "./Bubbleteacup/Bubbleteacup.js";
import Bubblewaterglass from "./Bubblewaterglass/Bubblewaterglass.js";
import Blankspeechbubble from "./Blankspeechbubble/Blankspeechbubble.js";
import Money from "./Money/Money.js";
import Coffeemug2 from "./Coffeemug2/Coffeemug2.js";
import Teacup2 from "./Teacup2/Teacup2.js";
import Waterglass2 from "./Waterglass2/Waterglass2.js";
import Tray from "./Tray/Tray.js";
import Drinkmakers from "./Drinkmakers/Drinkmakers.js";
import Coffee from "./Coffee/Coffee.js";
import Tea from "./Tea/Tea.js";
import Water from "./Water/Water.js";
import Playbutton from "./Playbutton/Playbutton.js";
import Placemat1 from "./Placemat1/Placemat1.js";
import Placemat2 from "./Placemat2/Placemat2.js";
import Placemat3 from "./Placemat3/Placemat3.js";
import Bar from "./Bar/Bar.js";
import Kitchenbar from "./Kitchenbar/Kitchenbar.js";
import Barista from "./Barista/Barista.js";
import Customer from "./Customer/Customer.js";
import Baristaspeech from "./Baristaspeech/Baristaspeech.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Bubblemug: new Bubblemug({
    x: -194,
    y: 87,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  Bubbleteacup: new Bubbleteacup({
    x: 90,
    y: 87,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Bubblewaterglass: new Bubblewaterglass({
    x: -194,
    y: 87,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19
  }),
  Blankspeechbubble: new Blankspeechbubble({
    x: 90,
    y: 87,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Money: new Money({
    x: -124,
    y: 37,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Coffeemug2: new Coffeemug2({
    x: -48,
    y: 162,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Teacup2: new Teacup2({
    x: -50,
    y: 124,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Waterglass2: new Waterglass2({
    x: -35,
    y: 86,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Tray: new Tray({
    x: 17,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  Drinkmakers: new Drinkmakers({
    x: 116,
    y: -2,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Coffee: new Coffee({
    x: 192,
    y: 1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Tea: new Tea({
    x: -10,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  Water: new Water({
    x: 100,
    y: 1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Playbutton: new Playbutton({
    x: 0,
    y: -100,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Placemat1: new Placemat1({
    x: -292,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  Placemat2: new Placemat2({
    x: -139,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Placemat3: new Placemat3({
    x: 14,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Bar: new Bar({
    x: 0,
    y: -55,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: true,
    layerOrder: 5
  }),
  Kitchenbar: new Kitchenbar({
    x: 0,
    y: -43,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: false,
    layerOrder: 13
  }),
  Barista: new Barista({
    x: 17,
    y: -4,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Customer: new Customer({
    x: 90,
    y: -53,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Baristaspeech: new Baristaspeech({
    x: 40,
    y: 40,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 15
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
