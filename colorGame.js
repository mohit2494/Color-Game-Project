console.log("Connected!");

// Initialise the number of colors to 6
var numSquares = 6;

// The spaces between the RGBs are important 
var colors = generateRandomColors(numSquares);

// All variables are defined below
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){

	// print on console that button was clicked
	console.log("Easy button clicked");

	// change the number of squares in the game
	numSquares = 3;

	// update selected color on the button
	this.classList.add("selected");
	hardBtn.classList.remove("selected");

	// generate new colors
	colors = generateRandomColors(numSquares);

	// pick a new color
	pickedColor = pickColor();

	// display the new color
	colorDisplay.textContent = pickedColor;

	// the message display should be reset
	messageDisplay.textContent = "";

	// Assign the new random colors to first 3 squares
	for (var i = 0 ; i < squares.length; i++) {
		if(colors[i])
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	}


});

hardBtn.addEventListener("click",function(){

	console.log("Hard button clicked");
	this.classList.add("selected");
	easyBtn.classList.remove("selected");

	// change the number of squares in the game
	numSquares = 6;

	// generate new colors
	colors = generateRandomColors(numSquares);

	// pick a new color
	pickedColor = pickColor();

	// display the new color
	colorDisplay.textContent = pickedColor;

	// the message display should be reset
	messageDisplay.textContent = "";

	// Assign the new random colors to first 3 squares
	for (var i = 0 ; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function(){

	console.log("Reset Button Clicked");

	// Generate all new colors
	colors = generateRandomColors(numSquares);

	// Pick a new random color from array
	pickedColor = pickColor();

	// Change color display to picked color
	colorDisplay.textContent = pickedColor;

	// the message display should be reset
	messageDisplay.textContent = "";

	// this.textContent
	this.textContent = "New Colors";

	// Change colors of squares
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}

	// Change header color
	h1.style.backgroundColor = "steelblue";

});


// Update variables here
colorDisplay.textContent = pickedColor;

// Loop through the squares to apply the color 
for(var i = 0; i< squares.length; i++){

	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to square
	squares[i].addEventListener("click",function(){
		// Grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		// comparing formats on console
		console.log(pickedColor,clickedColor);

		// compare color to pickedColor
		if(clickedColor===pickedColor)
		{
			console.log("Correct!");
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else 
		{
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor="#232323";			
		}
			
	});
}

function changeColors(color){
	// Loop through all squares
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	// add num random colors to array
	// return the array

	var arr = [];

	for(var i = 0 ; i < num ; i++)
	{
		// get random color and push into arr
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){

	// pick a "red" from 0-255
	var red = Math.floor(Math.random()*256);
	// pick a "green" from 0-255
	var green = Math.floor(Math.random()*256);
	// pick a "blue" from 0-255
	var blue = Math.floor(Math.random()*256);

	// return big string
	return "rgb(" + red +", "+ green +", "+ blue+")";

}