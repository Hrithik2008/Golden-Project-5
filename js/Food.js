class Food{
    constructor(r){
        var options = {
            isStatic : true
        }
        this.x = random(r,width-r);
        this.y = random(r,height-r);
        this.body = Bodies.circle(this.x,this.y,r,options);
        this.r = r;
        World.add(world,this.body)
    }
    display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill(255);
            ellipse(0,0,this.r,this.r);
            pop();
    }
}