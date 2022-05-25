javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_document_info_002.js */
/*
gets the document title and url
shows the info on a div at the bottom of the screen
the div can be moved down by left clicking on it
the div can be removed by right clicking on it
*/

function()
{
    let amount = 0;

    function moveDown(theElement)
    {
        amount += 5;

        document.getElementById(theElement).style.top = amount + "px";
    }

    function elementRemove(theElement)
    {
        document.getElementById(theElement).remove();
    }

    function documentInfoGetAndShow()
    {
        if (document.getElementById("infoDivId"))
        {
            document.getElementById("infoDivId").remove();
        }

        let infoDiv = document.createElement("div");
        infoDiv.style.position = "relative";
        infoDiv.style.zIndex = "998";
        infoDiv.style.margin = "auto";
        infoDiv.style.paddingLeft = "10px";
        infoDiv.style.paddingRight = "10px";
        infoDiv.style.paddingTop = "20px";
        infoDiv.style.paddingBottom = "20px";
        infoDiv.style.borderStyle = "solid";
        infoDiv.style.borderWidth = "1px";
        infoDiv.style.borderRadius = "10px";

        infoDiv.style.background = "rgb(255, 255, 255)";

        infoDiv.style.color = "rgb(0, 0, 0)";
        infoDiv.style.textAlign = "center";

        infoDiv.id = "infoDivId";

        infoDiv.innerHTML = window.document.title + "<br><br>";

        infoDiv.innerHTML += '<a href = \'' + window.location.href + '\' target = "_blank"> ' + window.location.href + ' </a><br>';

        infoDiv.onclick = function() { moveDown("infoDivId"); };

        infoDiv.oncontextmenu = function() { elementRemove("infoDivId"); };

        let theBreak = document.createElement("div");
        theBreak.innerHTML = "<br>";
        document.body.append(theBreak);
        theBreak.append(infoDiv);
    }

    documentInfoGetAndShow();

}());
