var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

var background_img_tag;
var car_img_tag;

function add() {
	background_img_tag = new Image();
	background_img_tag.onload = uploadBackground;
	background_img_tag.src = background_image;

	car_img_tag = new Image();
	car_img_tag.onload = uploadgreencar;
	car_img_tag.src = greencar_image;
}

function uploadBackground()
{
	ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar()
{
	ctx.drawImage(car_img_tag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}

		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}

		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}

		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}


}


function up()
{
  if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}


function down()
{
  if(greencar_y <=600)
  {
    greencar_y = greencar_y + 10;
    uploadBackground();
    uploadgreencar();
  }
}


function left()
{
  if(greencar_x >=0)
  {
    greencar_x = greencar_x - 10;
    uploadBackground();
    uploadgreencar();
  }
}


function right()
{
  if(greencar_x <=800)
  {
    greencar_x = greencar_x + 10;
    uploadBackground();
    uploadgreencar();
  }
}
