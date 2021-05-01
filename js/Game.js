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

    }
    end(){

    }
}