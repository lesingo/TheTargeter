//var bg;
var ballXpos=220
var ballYpos=500
var ySpeed=200	
var xspeed=2
var chupa4;
var chupa6;
var chupa10;
var chupa3designed;
var chupa3;
var chupa8;
var time=0;
var gameover;
// create an array of chupas
var chupas = [];

var x=1
//draw the canvas and load the background
function setup () {
	createCanvas (500,800);
 //strokeWeight(3);
 fill(255,0,0);
 gameover=loadImage("FB.png")
 bg=loadImage("bowling.png");
 //fill(255,0,0);
  
 for (var i = 0; i < 5; i++){
	var chupaObject = {
		pic: 0,
		xpos: 0,
		ypos: 0,
	}
	chupas.push(chupaObject);
}
chupas[0].pic  = loadImage("chupa4.png");
chupas[0].xpos  = 100;
chupas[0].ypos  = 75;

chupas[1].pic  =loadImage("chupa3.png")
chupas[1].xpos  = 150;
chupas[1].ypos  = 75;
											
chupas[2].pic  =loadImage("chupa10.png")
chupas[2].xpos  = 200;
chupas[2].ypos  = 75;


chupas[3].pic  =loadImage("chupa6.png")
chupas[3].xpos  = 250;
chupas[3].ypos  = 75;


chupas[4].pic  =loadImage("chupa3designed.png")
chupas[4].xpos  = 300;
chupas[4].ypos  = 75;

}
/* end of function setup*/


function draw() {
 clear();
 background(bg);



//the xposition of the ball changes	
 if (keyIsDown(LEFT_ARROW)){
    ballXpos = ballXpos - 1;
 	}
 if (keyIsDown(RIGHT_ARROW)){
    ballXpos = ballXpos + 1;
 	}
 if(keyIsDown(UP_ARROW)){
	ballYpos = ballYpos -10;	
    }

//drawing the ball
 ellipse(ballXpos,ballYpos,20,20);
 //ballYpos=ballYpos-xspeed;
 ballYpos=ballYpos-xspeed;

 

if (ballYpos == (0,0)){
	return(ballXpos=220, ballYpos=500);
}


//making the ball move up while key 's' is pressed

			
//console.log (key === 'S' || key === 's');
if (key === 'S' || key === 's'){
    ballYpos = ballYpos - ballySpeed;
	} 

for (var i = 0; i < chupas.length; i++){
	image(chupas[i].pic,chupas[i].xpos,chupas[i].ypos,15,40);
	var distance = dist(ballXpos+5,ballYpos-12, chupas[i].xpos, chupas[i].ypos)

	if (distance<= 20){
		console.log(distance);
		// chupa disappears
		chupas.splice(i, 1);	
	}
}
if (frameCount % 30===0);{
	time++;
}
console.log(time);
if (time>=800){
	clear();
	background(gameover);
	reload
}
textSize(50);
text(time,50,230);
} 

 






