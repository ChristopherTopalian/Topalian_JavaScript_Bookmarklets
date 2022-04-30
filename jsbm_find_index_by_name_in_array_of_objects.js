javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_find_index_by_name_in_array_of_objects.js */
/* finds the index by name in an array of objects */
/* and shows the data of the found index object */
function()
{
    let elements = [
    {
    	name: 'Hydrogen',
    	abbreviation: 'H'
    },
    {
    	name: 'Helium',
    	abbreviation: 'He'
    }
    ];

    function findTheIndex(searchWord)
    {
    	/* name of the array that we are searching */
    	let whichArray = elements;

	    /* index in the array of the found word */
        let index = whichArray.findIndex(
        function(whichArray)
        {
            return whichArray.name === searchWord;
        }
    );
    return index;
    }

    function buttonCreate(xPos, yPos, theText)
    {
        let theButton = document.createElement("button");
        theButton.style.position = "absolute";
        theButton.style.left = xPos + "px";
        theButton.style.top = yPos + "px";
        theButton.style.minWidth = 100 + "px";
        theButton.style.backgroundColor = "rgb(120,120,120)";
        theButton.style.borderColor = "rgb(255,255,255)";
        theButton.zIndex = 998;
        theButton.id = theText;
        theButton.innerHTML = theText;
        theButton.onclick = function(){ displayResult(theText); };
        document.body.append(theButton);
    }

    function divCreate(xPos, yPos, theText)
    {
        let resultDiv = document.createElement("div");
        resultDiv.style.position = "absolute";
        resultDiv.style.left = xPos + "px";
        resultDiv.style.top = yPos + "px";
        resultDiv.style.minWidth = 100 + "px";
        resultDiv.style.backgroundColor = "rgb(120,120,120)";
        resultDiv.style.borderStyle = "solid";
        resultDiv.style.borderWidth = 2 + "px";
        resultDiv.style.borderColor = "rgb(255,255,255)";
        resultDiv.style.textAlign = "center";
        resultDiv.style.padding = "4px 4px 4px 4px";
        resultDiv.zIndex = 998;
        resultDiv.id = "showResult";
        resultDiv.innerHTML = theText;
        document.body.append(resultDiv);
    }

    function content()
    {
                          /* xPos, yPos, theText */
        buttonCreate(100, 100, "Hydrogen");

                          /* xPos, yPos, theText */
        buttonCreate(100, 135, "Helium");

                    /* xPos, yPos, theText */
        divCreate(240, 100, "ELEMENTS");
    }

    function displayResult(theChoice)
    {
        /* display name and abbreviation of chosen index */
        document.getElementById("showResult").innerHTML = elements[findTheIndex(theChoice)].name + "<br>" + elements[findTheIndex(theChoice)].abbreviation;
    }
    content();
}());
