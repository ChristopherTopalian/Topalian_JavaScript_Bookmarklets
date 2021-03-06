javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_links_urls_001.js */
/*
gets all links on a page
shows the href of each link using console.log and a textarea
the textarea will be located at the top or bottom of the page,
depending on which website we activate this script on
*/

function()
{
    function linksGet()
    {
        let linksFormatted = "";

        let theLinks = document.getElementsByTagName("a");

        for (let x = 0; x < theLinks.length; x++)
        {
            linksFormatted += theLinks[x].href;

            linksFormatted += "\n\n";
        }

        return linksFormatted;
    }

    function linksShow()
    {
        console.log(linksGet());

        let theTextArea = document.createElement("textarea");
        theTextArea.style.position = "absolute";
        theTextArea.style.width = "700px";
        theTextArea.style.height = "500px";
        theTextArea.value = linksGet();
        document.body.append(theTextArea);
    }

    linksShow();

}());
