javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_elements_info_and_styled_003.js */
/*
finds all elements of a specified type on a page
shows their info using console.log
styles them with a border
shows how many elements were found
this script is a slight variation from the previous script
in this script, we add another function to style the element
*/

function()
{
    let counter = 0;

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

            console.log(theElements[x]);

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
