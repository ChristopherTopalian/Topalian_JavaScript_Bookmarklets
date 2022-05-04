javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_images_info.js */
/*
finds all images on a page and
shows the image info when the mouse arrow hovers over the image
and also shows the images info using console.log
*/
function()
{
    function imagesInfo()
    {
        let theImages = document.getElementsByTagName('img');

        for(let x = 0; x < theImages.length; x++)
        {
            let theTitle = theImages[x].getAttribute("title");
            let theAlt = theImages[x].getAttribute("alt");
            let theSrc = theImages[x].getAttribute("src");
            let theNaturalWidth = theImages[x].naturalWidth;
            let theNaturalHeight = theImages[x].naturalHeight;
            let theWidth = theImages[x].getAttribute("width");
            let theHeight = theImages[x].getAttribute("height");
            let theClass = theImages[x].getAttribute("class");
            let theId = theImages[x].getAttribute("id");

            let theImageInfo =
            "Title: " + theTitle + "\n" +
            "Alt: " + theAlt + "\n" +
            "Source: " + theSrc + "\n" +
            "Image Width: " + theNaturalWidth + " px" + "\n" +
            "Image Height: " + theNaturalHeight + " px" + "\n" +
            "Display Width: " + theWidth + " px" + "\n" +
            "Display Height: " + theHeight + " px" + "\n" +
            "Class: " + theClass + "\n" +
            "Id: " + theId + "\n";

            theImages[x].title = theImageInfo;

            console.log(theImageInfo);
        }
    }

    imagesInfo();
}());
