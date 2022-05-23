javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_elements_info_and_styled_004.js */
/*
finds all elements of a specified type on a page
shows their info using console.log
styles them with a border
shows how many elements were found
this script is a slight variation from the previous script
in this script, we solve the tasks, by adding more functions
to simplify each task

the functions that we add, are kept very simple,
to simplify each task into smaller pieces,
but if the task is already broken down into its smallest piece,
then it does not need to be broken down again

for example, if our function ONLY does console.log,
then we should just use console.log
instead of making a new function for it :-)

simplification is good, but oversimplification for the sake of simplifying is often not useful.

in the code below, we show how to do it both ways,
for tutorial purposes

look closely at the commented-out code in the for loop
*/

function()
{
    let counter = 0;

    function elementInfoGet(whichItem)
    {
        counter += 1;

        return whichItem;
    }

    function elementInfoShow(whichItem)
    {
        console.log(elementInfoGet(whichItem));
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
            /* console.log(elementInfoGet(theElements[x])); */

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
