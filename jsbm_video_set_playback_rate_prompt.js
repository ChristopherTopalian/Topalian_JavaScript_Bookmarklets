javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_video_set_playback_rate_prompt.js */
/* sets the video playback speed according to user input  */
function()
{
    function videoSetPlaybackRatePrompt()
    {
        let userInput = parseFloat(prompt('Enter a Speed','0.50'));

        let theVideo = document.querySelector('video');

        theVideo.playbackRate = userInput;
    }
    videoSetPlaybackRatePrompt();
}());
