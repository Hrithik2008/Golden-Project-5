class Game{
    constructor(){}
    getState(){
        var state = database.ref("gameState")
        state.on("value",(data)=>{
            gameState = data.val();
        });
    }
    updateState(state){
        database.ref("/").update({
            gameState : state
        });
    }
    start(){
        form = new Form();
        player = new Player();
        form.display();
        player.getCount();
    }
    play(){
        Player.getPlayerInfo();
        var position=displayHeight/2;
        form.hideForm();
        if(allPlayers!== undefined){
        for(var i in allPlayers){
            if(i === "Player"+player.index){
                player.x = allPlayers[i].x;
                player.y = allPlayers[i].y;
                player.health = allPlayers[i].health;
                player.rank = allPlayers[i].rank;
                fill(0,255,0);
                textSize(18);
            }else{
                fill(0);
            }
            text(`${allPlayers[i].name}|| position = {${allPlayers[i].x},${allPlayers[i].y}} || health = ${allPlayers[i].health} || rank = ${allPlayers[i].rank}`,120,position);
            position+=50;
        }
    }
    if(keyIsDown(119)){
        player.y += 50;
        player.update();
    }else if (keyIsDown(115)){
        player.y-=50;
        player.update();
    }
    if(keyIsDown(97)){
        player.x -= 50;
        player.update();
    }else if(keyIsDown(100)){
        player.x+=50;
        player.update();
    }
    }
    end(){

    }
}