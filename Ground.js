class Ground {
    constructor(x,y,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,600,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, 600, this.height);
    }
  };
