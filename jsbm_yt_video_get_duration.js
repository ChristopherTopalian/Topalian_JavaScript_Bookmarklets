javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_yt_video_get_duration.js */
/* shows youtube video duration time in seconds */

function()
{
    function ytVideoGetDuration(theVideo)
    {
        theVideo = document.getElementById('movie_player');

        let theDuration = theVideo.getDuration();

        return theDuration + " seconds";
    }
    
    alert(ytVideoGetDuration());
    
}());
