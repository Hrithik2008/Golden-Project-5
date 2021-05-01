class Form{
    constructor(){
        this.input = createInput('Name');
        this.button = createButton('Submit');
        this.title = createElement('h2','Shootingame');
        this.greeting = createElement('h4');
    }
    display(){
        this.input.position(windowWidth/2,windowHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+50);
        this.title.position(displayWidth/2,0);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html('Welcome '+player.name);
            this.greeting.position(windowWidth/2,windowHeight/2);
        });
    }
}