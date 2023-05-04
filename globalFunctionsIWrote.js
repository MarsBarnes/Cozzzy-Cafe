export function *sFunction(self, objectLocation, objectOnTray, objectHomeX, objectHomeY, fullCostume, drinkNumber) {
// console.log("barista location:       " + self.stage.vars.baristalocation)
// console.log("barista location - 175:       " + ((self.toNumber(self.stage.vars.baristalocation)) + 175))
if(self.stage.costume.name === "Kitchen" &&
    self.stage.vars.baristalocation - self.stage.vars[objectLocation] < 30 &&
    self.stage.vars.baristalocation - self.stage.vars[objectLocation] > -30
    )
{
        // console.log("barista location:       " + self.stage.vars.baristalocation)
        // console.log("objectHomeX:       " + objectHomeX)
        // console.log("baristalocation - objectHomeX:       " +  (self.toNumber(self.stage.vars.baristalocation) - self.toNumber(objectHomeX)))
        // console.log("objectOnTray" + self.stage.vars[objectOnTray])

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
self.stage.vars.baristalocation - self.stage.vars[objectLocation] > -30){
    if(self.toNumber(self.stage.vars.cupslot) === 0 && self.toNumber(self.vars.ontray) === 2){
    self.stage.vars.cupslot = 1;
    self.vars.ontray = 1;
    self.stage.vars[objectOnTray] = 1;
    return;
    }
    if(self.toNumber(self.stage.vars.cupslot) === 1){
    self.y -= 30;
    self.stage.vars.cupslot = 0;
    self.vars.ontray = 2;
    self.stage.vars[objectOnTray] = 0;
    if (
        self.toNumber(self.stage.vars.randomdrinknumber) === drinkNumber &&
        self.toNumber(self.vars.ontray) === 2 &&
        self.costume.name === fullCostume
    ) {
        yield* self.score(self.stage.vars[objectLocation]);
    }
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
    console.log("sFunction3:    " + "baristaLocation: " + self.stage.vars.baristalocation + "objectLocation: " + objectLocation )
    console.log("barista location - objectLocation: "+ (self.stage.vars.baristalocation - objectLocation))}
    if(self.stage.costume.name === "Bar" &&
    (self.stage.vars.baristalocation - objectLocation) < 100 &&
    (self.stage.vars.baristalocation - objectLocation) > -100 &&
    self.y < 100
    ){
        self.stage.vars.money += 5;
        // self.visible = false;
        self.goto(100,100);
        console.log("sFunction3:     x: " + self.x + "y: " + self.y);
        return;
    }

}

