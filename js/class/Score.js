class Score {
	constructor(left) {
		this.font = 40;
		if (left) {
			this.x = 0 + 1 / 100 * gameWindow.width;
        }
		else {
			this.x = gameWindow.width - this.font * 2;
        }
		this.y = this.font;
		this.points = 0;
	}
	addPoint() {
		this.points++;
		this.points = Math.min(Math.max(this.points, 1), 999);
	}
	show() {
		gameWindowCtx.font = this.font + 'px Arial';
		gameWindowCtx.fillStyle = '#B5B5B5';
		gameWindowCtx.fillText(this.points, this.x, this.y);
	}
}