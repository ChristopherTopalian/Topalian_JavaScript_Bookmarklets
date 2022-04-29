javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_video_set_playback_rate.js */
/* set the video playback speed */

function()
{
	function videoSetPlaybackRate(speed)
	{
        let theVideo = document.querySelector('video');

		theVideo.playbackRate = speed;
	}
	videoSetPlaybackRate(4.0);
}());
