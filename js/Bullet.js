class Bullet{
    constructor(x,y,r){
        var options = {
            airFriction : 0.25
        }
        this.body = Bodies.rectangle(x,y,r,r,options);
        this.r = r;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(255);
        rect(0,0,this.r,this.r);
        pop();
    }
}