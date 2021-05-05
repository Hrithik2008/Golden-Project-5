class Game {
  constructor() {}
  getState() {
    var state = database.ref("gameState");
    state.on("value", (data) => {
      gameState = data.val();
    });
  }
  updateState(state) {
    database.ref("/").update({
      gameState: state,
    });
  }
  start() {
    Player.getPlayerInfo();
    form = new Form();
    player = new Player();
    form.display();
    player.getCount();
    for(var i = 0; i <= 4;i++){
        objects.push(new PlayerObject(200,200,50,50));
    }
  }
  play() {
    Player.getPlayerInfo();
    var position = displayHeight / 2;
    form.hideForm();
    for(var i = 1; i < objects.length+1;i++){
        let index = "Player"+i;
        objects[i-1].x = allPlayers[index].x;
        objects[i-1].y = allPlayers[index].y;

        objects[i-1].display();
    }
    if (allPlayers !== undefined) {
      for (var i in allPlayers) {
        if (i === "Player" + player.index) {
          player.x = allPlayers[i].x;
          player.y = allPlayers[i].y;
          player.health = allPlayers[i].health;
          player.rank = allPlayers[i].rank;
          fill(0, 255, 0);
          textSize(18);
        } else {
          fill(0);
        }
        //text(`${allPlayers[i].name}|| position = {${allPlayers[i].x},${allPlayers[i].y}} || health = ${allPlayers[i].health} || rank = ${allPlayers[i].rank}`,120,position);
        position += 50;
      }
    }
    if (keyIsDown(87)) {
      player.y += 10;
      console.log(player.y);
      player.update();
    } else if (keyIsDown(83)) {
      player.y -= 10;
      player.update();
    }
    if (keyIsDown(65)) {
      player.x -= 10;
      player.update();
    } else if (keyIsDown(68)) {
      player.x += 10;
      player.update();
    }
  }
  end() {}
}
