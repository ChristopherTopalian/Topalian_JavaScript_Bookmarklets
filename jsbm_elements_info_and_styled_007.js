javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_elements_info_and_styled_007.js */
/*
finds all elements of a specified type on a page
shows their info using console.log and a textarea
styles them with a border
shows which number in the collection the element is
*/

function()
{
    let counter = 0;

    let theInfo = "";

    function elementInfoAndStyled(elementType)
    {
        let theElements = document.getElementsByTagName(elementType);

        for (let x = 0; x < theElements.length; x++)
        {
            console.log(counter);

            console.log(theElements[x]);

            theInfo += counter;
            theInfo += "\n";
            theInfo += theElements[x].outerHTML;
            theInfo += "\n\n";

            counter += 1;

            theElements[x].style.borderStyle = "solid";
            theElements[x].style.borderWidth = "5px";
            theElements[x].style.borderColor = "rgb(180, 180, 210)";
        }

        let theTextArea = document.createElement("textarea");
        theTextArea.style.position = "absolute";
        theTextArea.style.width = "700px";
        theTextArea.style.height = "500px";
        theTextArea.value = theInfo;
        document.body.append(theTextArea);
    }

    elementInfoAndStyled("a");

}());

/* Below are examples of using our elementInfoAndStyled function */

/*
we can choose any type of element,
such as:
img, video, div, a, p, textarea, h1, h2, h3, h4, h5, h6, i, b,
table, tr, td, th, button, iframe, embed, input, and more
*/

/* get info and set style of images */
/* elementInfoAndStyled("img"); */

/* get info and set style of videos */
/* elementInfoAndStyled("video"); */

/* get info and set style of divs */
/* elementInfoAndStyled("div"); */

/* get info and set style of anchors */
/* elementInfoAndStyled("a"); */

/* get info and set style of paragraphs */
/* elementInfoAndStyled("p"); */

/* get info and set style of textareas */
/* elementInfoAndStyled("textarea"); */
