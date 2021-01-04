class Block {
	constructor(x, y, width, height, angle) {
		var options = {
			restitution: 0.8,
			density: 0.5,
			friction: 0.05,
		};
		this.body = Bodies.rectangle(x, y, width, height, options);
		this.width = width;
		this.height = height;
		World.add(world, this.body);
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);
	}
	display() {
		var pos =this.body.position;
		var angle=this.body.angle;
		if(this.body.speed<3){
		push();
		translate(pos.x,pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(4);
	//	stroke(border);
		fill(color(this.r,this.g,this.b));
		rect(0,0, this.width, this.height);
		pop();
		}
		else
		{
		  World.remove(world,this.body);
		  push();
		  this.visibility = this.visibility - 5;
		  tint(100,this.visibility);
		  pop();
		}
	  }
	}