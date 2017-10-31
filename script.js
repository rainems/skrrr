$(document).ready(function() {
	var a = document.createElement('audio');
	canAudio = !!(a.canPlayType && (a.canPlayType('audio/mpeg;') || a.canPlayType('audio/ogg;') || a.canPlayType('audio/mp4;')));
    
	if(!canAudio){
		document.getElementById('no-button').style.display = 'none';
    }


	$("#no-button").click(function() {
		document.getElementById('nooo').play();
		});
})


