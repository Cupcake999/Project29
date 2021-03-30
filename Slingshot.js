class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.slingshot)
    }
attach(body){
    this.slingshot.bodyA = body;
}
fly(){
    this.slingshot.bodyA = null;
}
display(){
    if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position
        var pointB = this.pointB
    
    push();
    strokeWeight(5);
    fill(73,181,221);
    stroke(73,181,221);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
    }
}
}