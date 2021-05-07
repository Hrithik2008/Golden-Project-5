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
        objects.push(new PlayerObject(600,400,50,50));
    }
  }
  play() {
    background(bg);
    Player.getPlayerInfo();
    var position = displayHeight / 2;
    form.hideForm();
    for(var i = 1; i < objects.length+1;i++){
        let index = "Player"+i;
        Matter.Body.setPosition(objects[i-1].body,{x : allPlayers[index].x,y: allPlayers[index].y});

        objects[i-1].display();
    }
    for(var k in bullets){
      bullets[k].display();
    }
    if (allPlayers !== undefined) {
      for (var i in allPlayers) {
        position = {x : allPlayers[i].x - 20, y : allPlayers[i].y - 25};
        if (i === "Player" + player.index) {
          player.x = allPlayers[i].x;
          player.y = allPlayers[i].y;
          player.health = allPlayers[i].health;
          player.rank = allPlayers[i].rank;
          fill(0, 255, 0);
          ellipse(allPlayers[i].x,allPlayers[i].y,50,50)
          //Body.rotate(objects[player.index-1].body,{x : mouseX , y : mouseY})
        } else {
          fill(255);
        }
        textSize(18);
        text(`${allPlayers[i].name}`,position.x,position.y);
      }
    }
    if(keyIsDown(32)){
      var bullet = new Bullet(player.x,player.y,25);
      Body.applyForce(bullet.body,{x : player.x , y : player.y},2000);
      bullets.push(bullet);
    }
    if (keyIsDown(87)) {
      player.y -= 10;
      player.update();
    } else if (keyIsDown(83)) {
      player.y += 10;
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
