dragonSrc = chrome.extension.getURL("dragon.png");
// Get a HTML collection of all the images on the page.
var imageList = document.images;
// Create an array so we can access the .length method, and the randomly select a value.
var imageArray = jQuery.makeArray(imageList);
var imageChange = getRandomNumber(1, imageArray.length + 1);
// Set the randomly chosen image to be the dragon.
imageList[imageChange].src = dragonSrc;

//displayVideo();

// A helper function to generate a random integer (Min - Inclusive, Max - Exclusive)
function getRandomNumber(Min, Max){
	return Math.floor(Math.random() * (Max - Min) + Min);
};

//function displayVideo(){
//	$(document).add('<iframe width="360" height="203" src="//www.youtube.com/embed/CT646cr9erY?autoplay=1" frameborder="0" allowfullscreen></iframe>');
//};

$(document).ready(function(){
	$('p').append('<iframe class="youtube-player" type="text/html" width="640" height="385" src="https://www.youtube.com/embed/kwnxiRDQ9Mo?autoplay=1"></iframe>');
	$('iframe').css('height', 0px);
	$('iframe').css('width', 0px);
});





//var audio = null;

function playSound(){
	if (audio) {
		audio.pause()
		document.body.removeChild(audio);
		audio = null;
	}

	audio = document.createElement('audio');
	audio.addEventListener('ended', function(evt){
		isPlaying = false;
	});
	document.body.appendChild(audio);
	audio.autoplay = true;

	var src = 'audio/test.ogg';
	audio.volunme = 100;
	audio.src = src;
	isPlaying = true;
}

//playSound();