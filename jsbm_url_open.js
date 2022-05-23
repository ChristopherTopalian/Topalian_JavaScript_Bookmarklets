javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_url_open.js */
/* opens the specified url in the current tab, or a new tab */

function()
{
    function urlOpen(theURL, option)
    {
         window.open(theURL, "_" + option);
    }
    
    /* blank to open the url in a new tab */
    /* self to open the url in the current tab */
    urlOpen("https://www.google.com", "self");
    
}());
