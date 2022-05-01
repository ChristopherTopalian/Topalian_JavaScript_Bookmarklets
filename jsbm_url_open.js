javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_url_open.js */
/* opens the specified url in the current tab, or a new tab */
function()
{
    function urlOpen(option)
    {
         window.open("http://google.com/", "_" + option);
    }
    /* blank to open the url in a new tab */
    /* self to open the url in the current tab */
    urlOpen("self");
})();
