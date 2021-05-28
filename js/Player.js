class Player{
    constructor(){
        this.name = null;
        this.x = random(0,width);
        this.y = random(0,height);
        this.health = 10;
        this.index = null;
        this.rank = 0;
        this.angle = 0;
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
            rank : this.rank,
            angle : this.angle
        });
    }
    static getPlayerInfo(){
        var ref = database.ref("players");
        ref.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
}