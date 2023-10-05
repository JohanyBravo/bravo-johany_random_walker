let W1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  W1 = new Walker(200, 200);
}

function draw() {
  W1.update();
  W1.display();
}
class Walker {
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.vel = random(1, 10);
    this.color = color(255, random(0, 200), random(0, 200));
    this.esCirculo = random() > 0.5 ? true : false;
  }

  update() {
    this.posx += random(-this.vel, this.vel);
    this.posy += random(-this.vel, this.vel);
  }

  display() {
    fill(this.color);
    noStroke();
    if (this.esCirculo) {
      circle(this.posx, this.posy, 10);
    } else {
      rect(this.posx, this.posy, 10, 10);
    }
  }
}