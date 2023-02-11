javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_links_urls_002.js */
/*
gets all links on a page
shows the href of each link using console.log and a div
each link is clickable, sending the browser to that link's url
the div will be located at the top or bottom of the page,
depending on which website we activate this script on,
and depending on which position style we choose
*/

function()
{
    function linksGet()
    {
        let linksFormatted = "";

        let theLinks = document.getElementsByTagName("a");

        for (let x = 0; x < theLinks.length; x++)
        {
            linksFormatted += '<a href = \'' + theLinks[x] + '\' target="_blank"> ' + theLinks[x] + ' </a>';

            linksFormatted += "<br><br>";
        }

        return linksFormatted;
    }

    function linksShow(positionStyle)
    {
        console.log(linksGet());

        let theDiv = document.createElement("div");
        theDiv.style.position = positionStyle;
        theDiv.style.minWidth = "800px";
        theDiv.style.padding = "14px";
        theDiv.style.borderStyle = "solid";
        theDiv.style.borderWidth = "10px";
        theDiv.style.borderColor = "rgb(180, 180, 210)";
        theDiv.style.backgroundColor = "rgb(230, 230, 230)";
        theDiv.style.color = "rgb(0, 0, 0)";
        theDiv.innerHTML = linksGet();
        document.body.append(theDiv);
    }

    /* change the position style from relative to absolute and see what happens */
    linksShow("relative");

}());
