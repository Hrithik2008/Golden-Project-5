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
    for(var i = 0; i <= 1;i++){
        objects.push(new PlayerObject(600,400,50,50));
    }
    for(var i = 0; i < 30;i++){
      foods.push(new Food(5));
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
        objects[i-1].w = allPlayers[index].health;
        objects[i-1].h = allPlayers[index].health;
        Matter.Body.setAngle(objects[i-1].body,allPlayers[index].angle);

        objects[i-1].display();
    }
    if (allPlayers !== undefined) {
      for (var i in allPlayers) {
        
        position = {x : allPlayers[i].x - 20, y : allPlayers[i].y - 25};
        if (i === "Player" + player.index) {
          player.x = allPlayers[i].x;
          player.y = allPlayers[i].y;
          player.health = allPlayers[i].health;
          player.rank = allPlayers[i].rank;
          player.angle = allPlayers[i].angle;
          fill(0, 255, 0);
          //ellipse(allPlayers[i].x,allPlayers[i].y,50,50);     
          for(var k = 0; k < foods.length;k++){
            foods[k].display();
            if(detectCollision(objects[player.index-1],foods[k])){
              console.log("hello");
              player.health++;
            }
          }     
        } else {
          fill(255);
        }
        textSize(18);
        text(`${allPlayers[i].name}`,position.x,position.y);
      }

    }
    
    if(keyIsDown(32)){
      bullet = new Bullet(player.x,player.y,25);
      Matter.Body.applyForce(bullet.body,{x : player.x , y : player.y},{x : 0, y : 20})
      bullets.push(bullet);
    }
    if(keyIsDown(82)){
      player.angle++;
      player.update();
    }
    if (keyIsDown(87)) {
      player.y -= 1;
      player.update();
    } else if (keyIsDown(83)) {
      player.y += 1;
      player.update();
    }
    if (keyIsDown(65)) {
      player.x -= 1;
      player.update();
    } else if (keyIsDown(68)) {
      player.x += 1;
      player.update();
    }
  }
  end() {}
}
