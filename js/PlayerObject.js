class PlayerObject{
    constructor(x,y,w,h){
        var options = {
            restitution : 0,
            friction : 0.6
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.i = loadImage("images/bg.jpg");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0);
        rect(0,0,this.w,this.h);
        pop();
    }
}