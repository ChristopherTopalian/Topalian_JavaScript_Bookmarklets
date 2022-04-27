javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_video_time_adjust.js */
/* skip video back 2 seconds by using -2 */
/* skip video forward 2 seconds by using 2 */
function()
{
    function videoTimeAdjust(seconds)
    {
        let theTime = document.querySelector('video').currentTime += seconds;
    }
    videoTimeAdjust(2);
}());
