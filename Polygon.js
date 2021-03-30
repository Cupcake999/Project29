class Polygon{
    constructor(x,y,r){
        var options={
            isStatic : false,
            restitution : 0,
            friction : 0,
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var polgonPos = this.body.position;
        push()
        translate(this.body.x,this.body.y);
        imageMode(CENTER)
        ellipseMode(CENTER)
        image(this.image,polgonPos.x,polgonPos.y,40,40)
        pop();
    }
}