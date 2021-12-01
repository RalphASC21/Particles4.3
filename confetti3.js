class Confetti extends Particle{ //constructor creates particles at an x and y position 
    constructor(x,y){
        super(x,y);
        this.angle = random(TWO_PI); //constructed particles angle of displacement

    }
    
    show(){
        noStroke();
        fill(255, this.lifetime); //how long the particle lasts on the screen
        push();
        translate(this.x, this.y); 
        rotate(this.angle); //the direction of particle displacemnet
        square(0, 0, this.r * 2); //this.r is radius
        pop();
    }
}
