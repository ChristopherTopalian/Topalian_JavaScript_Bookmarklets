javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_document_info_003.js */
/*
gets the document title and url
shows the info on a div at the bottom of the screen
the div can be moved down by left clicking on it
the div can be removed by right clicking on it
in this slight variation, in the event section,
we show that we can use infoDiv.id instead of typing "infoDivId"
to specify which element we are referring to
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
        if (document.getElementById("mainDivId"))
        {
            document.getElementById("mainDivId").remove();
        }

        let mainDiv = document.createElement("div");
        mainDiv.id = "mainDivId";
        mainDiv.style.position = "relative";
        mainDiv.innerHTML = "<br>";
        document.body.append(mainDiv);

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

        infoDiv.onclick = function() { moveDown(mainDivId.id); };

        infoDiv.oncontextmenu = function() { elementRemove(mainDivId.id); };

        mainDiv.append(infoDiv);
    }

    documentInfoGetAndShow();

}());
