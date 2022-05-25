javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_document_info_001.js */
/*
gets the document title and url
shows the info on a div at the bottom of the screen
*/

function()
{
    function documentInfoGetAndShow()
    {
        if (document.getElementById("mainDivId"))
        {
            document.getElementById("mainDivId").remove();
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

        infoDiv.innerHTML += '<a href = \'' + window.location.href + '\' target = "_blank"> ' +
        window.location.href + ' </a><br>';

        let mainDiv = document.createElement("div");
        mainDiv.id = "mainDivId";
        mainDiv.innerHTML = "<br>";
        document.body.append(mainDiv);
        mainDiv.append(infoDiv);
    }

    documentInfoGetAndShow();

}());
