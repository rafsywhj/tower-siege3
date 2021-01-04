class Polygon {
	constructor(x, y) {
		var options = {
			restitution: 1.0,
			friction: 1.0,
			density: 0.5,
			isStatic: false,
		};
		
		this.image = loadImage('polygon.png');
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
        this.height = 40;
        this.x = x;
        this.y = y;
		World.add(world, this.body);
	}

	move() {
		Matter.Body.setPosition(this.body, {x: mouseX, y: mouseY});
	}

	display() {
		var angle = this.body.angle;
		push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
		fill(255);
		rectMode(CENTER);
		image(this.image,0, 0, this.width*2, this.height*2);
		pop();
		
	}
}
