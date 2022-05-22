javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_elements_info_and_styled_005.js */
/*
finds all elements of a specified type on a page
shows their info using console.log
styles them with a border
shows how many elements were found
this script is a slight variation from the previous script
in this script, we show how to return two values, using an object,
we return the location of the document
and the info of the item in the collection of elements
*/

function()
{
    let counter = 0;

    function elementInfoGet(whichItem)
    {
        let theWebsite = document.location;

        return {
            theLocation: theWebsite,
            theItem: whichItem
        };
    }

    function elementInfoShow(whichItem)
    {
        console.log(elementInfoGet(whichItem).theLocation);

        console.log(elementInfoGet(whichItem).theItem);
    }

    function elementStyle(whichItem)
    {
        whichItem.style.borderStyle = "solid";
        whichItem.style.borderWidth = "5px";
        whichItem.style.borderColor = "rgb(180, 180, 210)";
    }

    function elementInfoAndStyled(elementType)
    {
        let theElements = document.getElementsByTagName(elementType);

        for (let x = 0; x < theElements.length; x++)
        {
            counter += 1;
            
            elementInfoShow(theElements[x]);

            elementStyle(theElements[x]);
        }

        console.log(counter);
    }

    elementInfoAndStyled("a");

}());

/* Below are examples of using our elementInfoAndStyled function */

/*
we can choose any type of element,
such as:
img, video, div, a, p, textarea, h1, h2, h3, h4, h5, h6, i, b, table, tr, td, th, button, iframe, embed, input, and more
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
