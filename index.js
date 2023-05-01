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
    layerOrder: 100
  }),
  Bubbleteacup: new Bubbleteacup({
    x: 90,
    y: 87,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 105
  }),
  Bubblewaterglass: new Bubblewaterglass({
    x: -194,
    y: 87,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 110
  }),
  Blankspeechbubble: new Blankspeechbubble({
    x: 90,
    y: 87,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 85
  }),
  Money: new Money({
    x: -124,
    y: 37,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 80
  }),
  Coffeemug2: new Coffeemug2({
    x: -48,
    y: 150,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 50
  }),
  Teacup2: new Teacup2({
    x: -175,
    y: 146,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 55
  }),
  Waterglass2: new Waterglass2({
    x: -100,
    y: 154,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 60
  }),
  Tray: new Tray({
    x: 17,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 45
  }),
  Drinkmakers: new Drinkmakers({
    x: 130,
    y: -2,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 95
  }),
  Coffee: new Coffee({
    x: 180,
    y: 1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 65
  }),
  Tea: new Tea({
    x: 4,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 70
  }),
  Water: new Water({
    x: 111,
    y: 1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 75
  }),
  Playbutton: new Playbutton({
    x: 0,
    y: -100,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Placemat1: new Placemat1({
    x: -292,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 30
  }),
  Placemat2: new Placemat2({
    x: -139,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 35
  }),
  Placemat3: new Placemat3({
    x: 14,
    y: -15,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 40
  }),
  Bar: new Bar({
    x: 0,
    y: -55,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: true,
    layerOrder: 20
  }),
  Kitchenbar: new Kitchenbar({
    x: 0,
    y: -43,
    direction: 90,
    costumeNumber: 1,
    size: 150,
    visible: false,
    layerOrder: 25
  }),
  Barista: new Barista({
    x: 17,
    y: -4,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Customer: new Customer({
    x: 90,
    y: -53,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 90
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
