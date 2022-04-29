javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_video_get_playback_rate.js */
/* gets the video playback speed */
function()
{
    function videoGetPlaybackRate()
    {
        let theVideo = document.querySelector('video');

        let speed = theVideo.playbackRate;

        return speed;
    }
    alert(videoGetPlaybackRate());
}());
