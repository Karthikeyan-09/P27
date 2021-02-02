class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction :0.5,
            density : 1.2
        }
        this.bob = Bodies.circle(x,y,radius,options);
        World.add(world,this.bob);
        this.radius = radius;
        
    }

    display() {
        var pos = this.bob.position;
        push();
        translate(pos.x,pos.y);
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}