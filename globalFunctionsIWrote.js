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

