javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_elements_remove_all_by_tag_name_001.js */
/* removes all elements of a certain tag name */

function()
{
    function elementsRemoveAllByTagName(whichTag)
    {
        let theElements = document.getElementsByTagName(whichTag);

        for (let x = 0; x < theElements.length; x++)
        {
            theElements[x].remove();
        }
    }

    elementsRemoveAllByTagName("img");

}());
