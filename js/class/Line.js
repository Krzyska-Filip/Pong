class Line {
	constructor() {
		this.x = gameWindow.width / 2;
		this.y = 0;
		this.y1 = gameWindow.height;
	}
	show() {
		gameWindowCtx.beginPath();
		gameWindowCtx.strokeStyle = '#FFFFFF';
		gameWindowCtx.lineWidth = 3;
		gameWindowCtx.setLineDash([10,10]);
		gameWindowCtx.moveTo(this.x, this.y);
		gameWindowCtx.lineTo(this.x, this.y1);
		gameWindowCtx.stroke();
	}
}