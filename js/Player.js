class Player{
    constructor(){
        this.name = null;
        this.x = 0;
        this.y = 0;
        this.health = 0;
        this.index = null;
        this.rank = 0;
    }
    getCount(){
        var playerC = database.ref("playerCount");
        playerC.on("value",(data)=>{
            playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        });
    }
    update(){
        var playerIndex = "players/Player"+this.index;
        database.ref(playerIndex).update({
            name : this.name,
            x : this.x,
            y : this.y,
            health : this.health,
            rank : this.rank
        });
    }
}