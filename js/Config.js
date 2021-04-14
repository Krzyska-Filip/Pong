//Globals
var gameWindow = document.getElementById('gameWindow');
var gameWindowCtx = gameWindow.getContext('2d');

//Game config
var balls = 1;
var ballSpeed = 5;
var ballRadius = 13;
var speedMultiplyer = 1.04;

var paddleHeight = 150;
var paddleSpeed = 5;

var framerate = 60;