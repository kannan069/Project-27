class Bob {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction:0.5,
          density:5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(100,100,100);
      strokeWeight(4);
      stroke(150,150,150)
      circle(0, 0, (2*this.radius));
      pop();
    }
  };
  