class Rope {
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB: {x:this.offsetX,y:this.offsetY},
            length: 100
        }
        
        this.rope = Constraint.create(options);
        this.pointB = this.rope.pointB;
        World.add(world,this.rope);        
    }

    display() {
        
        var point1 = this.Rope.bodyA.position;
        var point2 = this.Rope.bodyB.position;

        stroke("red");
        line(point1.x,point1.y,this.pointB.x+this.offsetX,this.pointB.y+this.offsetY);
        
    }
}