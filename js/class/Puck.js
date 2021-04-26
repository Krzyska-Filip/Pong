class Puck{
  constructor(){
    this.reset();
  };

  reset() {
    this.ballSpeed = ballSpeed;
    this.x = gameWindow.width/2;
    this.y = gameWindow.height/2;
    this.angle = (Math.random() * 1 / 2 * Math.PI) - Math.PI / 4;
    this.Vx = this.ballSpeed * Math.cos(this.angle);
    this.Vy = this.ballSpeed * Math.sin(this.angle);

    if(Math.random() < 0.5){
      this.Vx *= -1;
    };

    this.r = ballRadius;
  };

  move(){
    this.x += this.Vx;
    this.y += this.Vy;
    this.checkPlatform();
    this.checkEdge();
  };

  show(){
    gameWindowCtx.beginPath();
    gameWindowCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    gameWindowCtx.fillStyle = 'white';
    gameWindowCtx.fill();
  };

  checkEdge(){
    if(this.y < this.r || this.y > gameWindow.height - this.r){
      this.Vy *= -1;
    };
    if(this.x < this.r){
      rscore.addPoint();
      this.reset();
    };
    if(this.x > gameWindow.width - this.r){
      lscore.addPoint();
      this.reset();
    };
  };

  checkPlatform(){
    if(this.x < lpaddle.x1 + this.r / 2 && this.x > lpaddle.x1 / 2){
      if(this.y > lpaddle.y - this.r / 2 && this.y < lpaddle.y + paddleHeight + this.r / 2){
        this.x += this.r / 2;

        var relativeIntersect = (lpaddle.y + paddleHeight / 2) - this.y;
        var normalizedRelativeIntersection = (relativeIntersect /(paddleHeight/2));
        var bounceAngle = normalizedRelativeIntersection * Math.PI / 3;
        this.Vx = this.ballSpeed * Math.cos(bounceAngle);
        this.Vy = this.ballSpeed * -Math.sin(bounceAngle);

        this.ballSpeed *= 1.02;

        //this.reverse();
      }
    }
    else if(this.x > rpaddle.x - this.r / 2 && this.x < rpaddle.x + rpaddle.x1 / 2){
      if(this.y > rpaddle.y - this.r / 2 && this.y < rpaddle.y + paddleHeight + this.r / 2){
        this.x -= this.r / 2;

        var relativeIntersect = (rpaddle.y + paddleHeight / 2) - this.y;
        var normalizedRelativeIntersection = (relativeIntersect / (paddleHeight/2));
        var bounceAngle = normalizedRelativeIntersection * Math.PI / 3;
        this.Vx = this.ballSpeed * -Math.cos(bounceAngle);
        this.Vy = this.ballSpeed * -Math.sin(bounceAngle);

        this.ballSpeed *= speedMultiplyer;

        //this.reverse();
      }
    }
  }

  reverse(){
    this.Vx *= -1;
  }
};
