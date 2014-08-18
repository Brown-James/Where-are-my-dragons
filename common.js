// Check if the page has any <img> tags
	// If so....
	// Find image - Append a special class chromeExtensionDragon.
	// Play the sound.
	// On hover of image - wait a few seconds. Insert animation at later date.
	// Return the image to it's original source.
	// Increment total dragons found counter.

// TO DO
//	Preserve Image Size
//  Get correct audio clip
//  Animation on hover
//  Sound on hover?
//  Total dragons found tracker

dragonSrc = chrome.extension.getURL("dragon.png");

// Get a HTML collection of all the images on the page.
var imageList = document.images;

// Create an array so we can access the .length method, and the randomly select a value.
var imageArray = jQuery.makeArray(imageList);
var imageChange = getRandomNumber(1, imageArray.length + 1);

// Store the orignal height and width for later use
var originalHeight = imageList[imageChange].height;
var originalWidth = imageList[imageChange].width;

// Set the randomly chosen image to be the dragon. Store the original source.
var originalImageSrc = imageList[imageChange].src;

imageList[imageChange].src = dragonSrc;
imageList[imageChange].className += " " + "dragonImage";

// Change the height and width the same as the original image
imageList[imageChange].width = originalWidth;
imageList[imageChange].height = originalHeight;

$(document).ready(function(){
	$(".dragonImage").ready(function(){
		$(this).css("pointer-events", "none");
		console.log("Pointer Events Removed!");
	});
	$(".dragonImage").mouseenter(function(){
		$(".dragonImage").attr('src', originalImageSrc);
		console.log("Mouse Entered!");
	});
});

var audio = null;

// A helper function to generate a random integer (Min - Inclusive, Max - Exclusive)
function getRandomNumber(Min, Max){
	return Math.floor(Math.random() * (Max - Min) + Min);
};

// Provide the sound files name and extension in a string
// Automatically plays the sound provided.
function playSound(soundFile){
	audio = document.createElement('audio');
	document.body.appendChild(audio);
	audio.autoplay = true;

	audioSrc = chrome.extension.getURL('audio/' + soundFile);
	audio.volunme = 50;
	audio.src = audioSrc;
	isPlaying = true;
	console.log("Sound should be playing!");
}

playSound('test.ogg');