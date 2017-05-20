// Implements mediaelement.js
$('video,audio').mediaelementplayer({
	success: function(player, node) {
		$("#" + node.id + "-mode").html("mode: " + player.pluginType);
	},
	translationSelector: true
});

// Selects all p elements (transcript) and stores them in textIntervals const
const textIntervals = document.getElementsByTagName('p');

//Adds play event listener to video 
video.addEventListener('play', () => {

	//Selects the video element and stores it in video const
	const video = document.getElementById('video_html5');
	
	//Allows video.currentTime to update as video plays
	video.ontimeupdate = function() {

		//if.. else if statement to apply the .highligh class to appropiate textIntervals[i] element
		if (video.currentTime < 4) {
			textIntervals[0].className = 'highlight';
		}
		else if (video.currentTime > 4 && video.currentTime < 8) {
			textIntervals[0].className = '';
			textIntervals[1].className = 'highlight';
		}
		else if (video.currentTime > 8 && video.currentTime < 11) {
			textIntervals[1].className = '';
			textIntervals[2].className = 'highlight';
		}
		else if (video.currentTime > 11 && video.currentTime < 13) {
			textIntervals[2].className = '';
			textIntervals[3].className = 'highlight';
		}
		else if (video.currentTime > 13 && video.currentTime < 17) {
			textIntervals[3].className = '';
			textIntervals[4].className = 'highlight';
		}
		else if (video.currentTime > 17 && video.currentTime < 22) {
			textIntervals[4].className = '';
			textIntervals[5].className = 'highlight';
		}
		else if (video.currentTime > 22 && video.currentTime < 27) {
			textIntervals[5].className = '';
			textIntervals[6].className = 'highlight';
		}
		else if (video.currentTime > 27 && video.currentTime < 31) {
			textIntervals[6].className = '';
			textIntervals[7].className = 'highlight';
		}
		else if (video.currentTime > 32 && video.currentTime < 34) {
			textIntervals[7].className = '';
			textIntervals[8].className = 'highlight';
		}
		else if (video.currentTime > 34 && video.currentTime < 39) {
			textIntervals[8].className = '';
			textIntervals[9].className = 'highlight';
		}
		else if (video.currentTime > 39 && video.currentTime < 41) {
			textIntervals[9].className = '';
			textIntervals[10].className = 'highlight';
		}
		else if (video.currentTime > 41 && video.currentTime < 46) {
			textIntervals[10].className = '';
			textIntervals[11].className = 'highlight';
		}
		else if (video.currentTime > 46 && video.currentTime < 49) {
			textIntervals[11].className = '';
			textIntervals[12].className = 'highlight';
		}
		else if (video.currentTime > 49 && video.currentTime < 54) {
			textIntervals[12].className = '';
			textIntervals[13].className = 'highlight';
		}
		else if (video.currentTime > 54 && video.currentTime < 58) {
			textIntervals[13].className = '';
			textIntervals[14].className = 'highlight';
		}
		else if (video.currentTime > 58 && video.currentTime < 60) {
			textIntervals[14].className = '';
			textIntervals[15].className = 'highlight';
		}
	};
});

//Adds mousedown event to textIntervals[i] elements
for(let i = 0; i < textIntervals.length; i++) {
	textIntervals[i].addEventListener('mousedown', (e) => {
		
		// Selects video element and stores it in video const
		const video = document.getElementById('video_html5');

		//if.. else if statement to set video.currentTime to starting point of given textIntervals[i] on mousedown event
		if (e.target === textIntervals[0]) {
			video.currentTime = 0;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[1]) {
			video.currentTime = 4;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[2]) {
			video.currentTime = 8;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[3]) {
			video.currentTime = 11;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[4]) {
			video.currentTime = 13;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[5]) {
			video.currentTime = 17;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[6]) {
			video.currentTime = 22;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[7]) {
			video.currentTime = 27;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[8]) {
			video.currentTime = 32;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[9]) {
			video.currentTime = 34;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[10]) {
			video.currentTime = 39;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[11]) {
			video.currentTime = 41;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[12]) {
			video.currentTime = 46;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[13]) {
			video.currentTime = 49;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[14]) {
			video.currentTime = 54;
			e.target.className = 'highlight';
		}
		else if (e.target === textIntervals[15]) {
			video.currentTime = 58;
			e.target.className = 'highlight';
		}
	});
};

//Adds 'seeked' event to video which will reset the class all textIntervals[i] elements to '', removing .highlight when user manually changes time via progress bar or by clicking on transcript 
video.addEventListener('seeked', () => {
	textIntervals[0].className = '';
	textIntervals[1].className = '';
	textIntervals[2].className = '';
	textIntervals[3].className = '';
	textIntervals[4].className = '';
	textIntervals[5].className = '';
	textIntervals[6].className = '';
	textIntervals[7].className = '';
	textIntervals[8].className = '';
	textIntervals[9].className = '';
	textIntervals[10].className = '';
	textIntervals[11].className = '';
	textIntervals[12].className = '';
	textIntervals[13].className = '';
	textIntervals[14].className = '';
	textIntervals[15].className = '';
});
