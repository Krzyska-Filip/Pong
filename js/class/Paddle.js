class Paddle {
	constructor(left) {
		this.x1 = 20;
		this.y1 = paddleHeight;
		this.Vy = 0;
		if (left) {
			this.x = 0;
        }
		else {
			this.x = gameWindow.width - this.x1;
        }
		this.y = gameWindow.height / 2 - this.y1 / 2;
	}
	show() {
		gameWindowCtx.beginPath();
		gameWindowCtx.rect(this.x, this.y, this.x1, this.y1);
		gameWindowCtx.fillStyle = 'white';
		gameWindowCtx.fill();
	}
	move(Vy) {
		this.y += Vy;
		this.y = Math.min(Math.max(this.y, 0), gameWindow.height - this.y1);
	}
}