let w1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	w1 = new Walker(200, 200);
}

function draw() {
	w1.update();
	w1.display();
	
}

class Walker {
	constructor(_x, _y) {
		this.posx = _x;
		this.posy = _y;
		this.vel = random(1, 9);
		this.color = color(0, random(100, 255), random(255, 0));

		this.esellipse = random() > 0.5 ? true : false;

		// this.esCirculo;
		// this.r = random();
		// if (this.r > 0.5) {
		// 	this.esCirculo = true;
		// } else {
		// 	this.esCirculo = false;
		// }
	}

	update() {
		this.posx += random(-this.vel, this.vel);
		this.posy += random(-this.vel, this.vel);
	}

	display() {
		fill(this.color);
		stroke('#fae');
		strokeWeight(1.5);
		if (this.esCirculo) {
			circle(this.posx, this.posy, 50);
		} else {
			ellipse(this.posx, this.posy, 25, 40);
		}
	}
}

