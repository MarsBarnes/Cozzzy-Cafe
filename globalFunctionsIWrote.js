export function *sFunction(self, objectLocation, objectOnTray, objectHomeX, objectHomeY, fullCostume, drinkNumber) {
if(self.stage.costume.name === "Kitchen" &&
    self.stage.vars.baristalocation - self.stage.vars[objectLocation] < 30 &&
    self.stage.vars.baristalocation - self.stage.vars[objectLocation] > -30
    )
{
    if(self.toNumber(self.stage.vars[objectOnTray]) === 1 && 
        (self.toNumber(self.stage.vars.baristalocation) - self.toNumber(objectHomeX) < 35) &&
        (self.toNumber(self.stage.vars.baristalocation) - self.toNumber(objectHomeX) > -35)
    ){
    self.goto(objectHomeX, objectHomeY);
    self.stage.vars.cupslot = 0;
    self.vars.ontray = 0;
    self.stage.vars[objectOnTray] = 0;
    return;
    }
    if(self.toNumber(self.stage.vars[objectOnTray]) === 0){
    if(self.toNumber(self.stage.vars.cupslot) === 1){
        return;
    }
    if(self.toNumber(self.stage.vars.cupslot) === 0){
        self.stage.vars.cupslot = 1;
        self.vars.ontray = 1;
        self.stage.vars[objectOnTray] = 1;
        return;
    }
    }
}
if(self.stage.costume.name === "Bar" &&
self.stage.vars.baristalocation - self.stage.vars[objectLocation] < 30 &&
self.stage.vars.baristalocation - self.stage.vars[objectLocation] > -30 
// && self.y > -7
// && self.vars.ontray !== 3

){
    // console.log(fullCostume, "is close enough");
    // console.log("distWater " + (Math.abs(self.stage.vars.baristalocation - self.stage.vars.waterglassx))+
    //     "       distTea " + (Math.abs(self.stage.vars.baristalocation - self.stage.vars.teacupx))+
    //     "       distCoffee " + (Math.abs(self.stage.vars.baristalocation - self.stage.vars.coffeemugx)));

    let distWater = Math.abs(self.stage.vars.baristalocation - self.stage.vars.waterglassx);
    let distTea = Math.abs(self.stage.vars.baristalocation - self.stage.vars.teacupx);
    let distCoffee = Math.abs(self.stage.vars.baristalocation - self.stage.vars.coffeemugx);
    let closestBev = 500;
    if (distWater < closestBev && self.stage.costume.name === "Bar") {
        closestBev = distWater;
    }
    if (distTea < closestBev && self.stage.costume.name === "Bar") {
        closestBev = distTea;
    }
    if (distCoffee < closestBev && self.stage.costume.name === "Bar") {
        closestBev = distCoffee;
    }
    // console.log("closestBev: " + closestBev)
    // console.log("closestBev calcularion:  " + (Math.abs(self.stage.vars.baristalocation - self.stage.vars[objectLocation])))


    if (closestBev === (Math.abs(self.stage.vars.baristalocation - self.stage.vars[objectLocation]))){
        // console.log("I got to closest bev" + closestBev);
        if(self.toNumber(self.stage.vars.cupslot) === 0 && self.toNumber(self.vars.ontray) === 2){
            // console.log(fullCostume, "sees cupslot as 0")
        self.stage.vars.cupslot = 1;
        self.vars.ontray = 1;
        self.stage.vars[objectOnTray] = 1;
        console.log("pickup "+self.y + fullCostume)

        return;
        }}

        if(self.toNumber(self.stage.vars.cupslot) === 1 && self.toNumber(self.vars.ontray) === 1){
        self.y -= 30;
        self.stage.vars.cupslot = 0;
        self.vars.ontray = 2;
        self.stage.vars[objectOnTray] = 0;
        console.log("setdown "+self.y + fullCostume)

            if (
                self.toNumber(self.stage.vars.randomdrinknumber) === drinkNumber &&
                self.toNumber(self.vars.ontray) === 2 &&
                self.costume.name === fullCostume
            ) {
                self.toNumber(self.vars.ontray) === 3;
                console.log("before score  "+self.y + fullCostume)
                yield* self.score(self.stage.vars[objectLocation]);
                }
            // if(self.y < -7) {
            //     self.goto(objectHomeX, objectHomeY)
            //     console.log("after score   "+self.y + fullCostume)
            // }
        return;
        }
}
else{
    return;
}
}

// -------------------------------------------------------------------------------------------------------------------------------

export function *sFunction2(self, objectHomeX, objectHomeY, fullCostume) {
    if (
        self.stage.costume.name === "Kitchen" &&
        self.toNumber(self.stage.vars.vesselslot) === 1 &&
        self.toNumber(self.vars.ontray) === 1 &&
        self.stage.vars.baristalocation - objectHomeX < 30 &&
        self.stage.vars.baristalocation - objectHomeX > -30
      ) {
        self.stage.vars.vesselslot = 0;
        self.vars.ontray = 0;
        self.goto(objectHomeX, objectHomeY);
        self.costume = fullCostume;
        return;
      }
    if (
        self.stage.costume.name === "Kitchen" &&
        self.toNumber(self.stage.vars.vesselslot) === 1 &&
        self.toNumber(self.vars.ontray) === 0 &&
        self.stage.vars.baristalocation - objectHomeX < 30 &&
        self.stage.vars.baristalocation - objectHomeX > -30
      ) {
        return;
      } 
    if(self.stage.costume.name === "Kitchen" &&
        self.stage.vars.baristalocation - objectHomeX < 30 &&
        self.stage.vars.baristalocation - objectHomeX > -30
    ) {
        self.vars.ontray = 1;
        self.stage.vars.vesselslot = 1;
      }
}

// -------------------------------------------------------------------------------------------------------------------------------

export function *sFunction3(self, objectLocation) {
    if(self.stage.costume.name === "Bar"){
    // console.log("sFunction3:    " + "baristaLocation: " + self.stage.vars.baristalocation + "objectLocation: " + objectLocation )
    // console.log("barista location - objectLocation: "+ (self.stage.vars.baristalocation - objectLocation))
}
    if(self.stage.costume.name === "Bar" &&
    (self.stage.vars.baristalocation - objectLocation) < 100 &&
    (self.stage.vars.baristalocation - objectLocation) > -100 &&
    self.y < 100
    ){
        self.stage.vars.money += 5;
        // self.visible = false;
        self.goto(100,100);
        // console.log("sFunction3:     x: " + self.x + "y: " + self.y);
        return;
    }

}

