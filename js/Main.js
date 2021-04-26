let lpaddle = new Paddle(true);
let rpaddle = new Paddle(false);
let lscore = new Score(true);
let rscore = new Score(false);
let line = new Line();
let puck = new Array(balls);
for (var i = 0; i < balls; i++) {
	puck[i] = new Puck(gameWindow, gameWindowCtx);
}
var map = {};
function fillCanvas(canvas, ctx, color) {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function resetCanvas() {
	fillCanvas(gameWindow, gameWindowCtx, '#212121');
}
function update() {
	resetCanvas();
	line.show();
	for (var i = 0; i < balls; i++) {
		puck[i].move();
		puck[i].show();
	}
	if (map[65])
		lpaddle.move(-paddleSpeed);
	if (map[90])
		lpaddle.move(paddleSpeed);
	if (map[75])
		rpaddle.move(-paddleSpeed);
	if (map[77])
		rpaddle.move(paddleSpeed);
	lpaddle.show();
	rpaddle.show();
	lscore.show();
	rscore.show();
}
let loop = setInterval(update, 1000 / framerate);
onkeydown = onkeyup = function (e) {
	e = e || event;
	map[e.keyCode] = e.type == 'keydown';
}