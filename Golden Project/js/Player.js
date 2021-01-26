class Player{
    constructor(){
       this.distance=0
       this.oxygenLevel=100
       this.hunger=0
       this.hydrationLevel=100
}
update(){
    var playerIndex = "player";
    database.ref(playerIndex).set({
      OxygenLevel:this.oxygenLevel,
      distance:this.distance,
      hunger:this.hunger,
      hydrationLevel:this.hydrationLevel
    });
  }
}