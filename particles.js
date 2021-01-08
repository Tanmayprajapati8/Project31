class Particle {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
        }
        this.body = Bodies.circle(x, y, this.r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.width = width;
        this.height = height;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}