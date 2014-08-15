dragonSrc = chrome.extension.getURL("dragon.png");
// Get a HTML collection of all the images on the page.
var imageList = document.images;
// Create an array so we can access the .length method, and the randomly select a value.
var imageArray = jQuery.makeArray(imageList);
var imageChange = getRandomNumber(1, imageArray.length + 1);
// Set the randomly chosen image to be the dragon.
imageList[imageChange].src = dragonSrc;
var audio = null;
// A helper function to generate a random integer (Min - Inclusive, Max - Exclusive)
function getRandomNumber(Min, Max){
	return Math.floor(Math.random() * (Max - Min) + Min);
};

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