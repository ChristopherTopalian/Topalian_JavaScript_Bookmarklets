javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_images_urls_and_styled.js */
/* finds all images on a page and styles their borders */
/* shows urls of all images using alert and console.log */
function()
{
    function imagesUrlsAndStyled()
    {
        /* declare a variable as an empty string to hold the urls of the images */
        let urlsOfImages = "";

        /* get the collection of images */
        let theImages = document.getElementsByTagName("img");

        /* for loop through the collection of images */
        for(let x = 0; x < theImages.length; x++)
        {
            /* style the border of the image */
            theImages[x].style.border = '12px solid rgb(140,140,140)';

            /* add the url of the image to the string */
            urlsOfImages += theImages[x].src;

            /* add two new lines to the string */
            urlsOfImages += "\n\n";
        }

        /* show the urls of the images in the collection using alert */
        alert(urlsOfImages);

        /* show the urls of the images in the collection using console.log */
        console.log(urlsOfImages);
    }

    /* activate our function */
    imagesUrlsAndStyled();
}());
