javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_video_set_playback_rate.js */
/* sets the video playback speed */
    
function()
{
    function videoSetPlaybackRate(speed)
    {
        let theVideo = document.querySelector('video');

        theVideo.playbackRate = speed;
    }
    
    videoSetPlaybackRate(2.0);
    
}());
