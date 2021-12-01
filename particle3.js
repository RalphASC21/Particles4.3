

class Particle extends p5.Vector  {
    constructor(x, y) {
      super(x, y); //more concise way to create a position vector
      this.vel = p5.Vector.random2D(); //velocity component
      this.vel.mult(random(0.5, 2)); //velocity multiplier
      this.acc = createVector(0, 0); //acceleration component
      this.r = 4; //radius
      this.lifetime = 255; //time displayed on screen
    }
  
    finished() { // actually incorporation the lifetime in the sketch
      return this.lifetime < 0;
    }
  
    applyForce(force) { //applies force and adds additional forces
      this.acc.add(force);
    }

  
    update() { //adds any new velocity, acceleration, or lifetime components
      this.vel.add(this.acc);
      this.add(this.vel);
      this.acc.set(0, 0);
  
      this.lifetime -= 5;
    }
  
    show() {
      stroke(255, this.lifetime);
      strokeWeight(2);
      fill(255, this.lifetime);
  
      ellipse(this.x, this.y, this.r * 2);
    }
  }
  