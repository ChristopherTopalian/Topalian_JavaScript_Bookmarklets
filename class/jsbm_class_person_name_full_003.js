javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_class_person_name_full_003.js */
/*
shows a greeting message with the the first and last name of the person
by using our Person class object
creates a div on the page with that name greeting message
the div can be removed by left clicking on it
*/

function()
{
    class Person
    {
        constructor(firstName, lastName)
        {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        greeting(message)
        {
            return message + " " + this.firstName + " " + this.lastName;
        }
    }

    let player001 = new Person("Amber", "Grace");

    let ourDiv = document.createElement("div");
    ourDiv.style.position = "absolute";
    ourDiv.style.top = "100px";
    ourDiv.style.left = "100px";
    ourDiv.style.zIndex = "998";
    ourDiv.style.paddingLeft = "8px"
    ourDiv.style.paddingRight = "8px";
    ourDiv.style.paddingBottom = "3px";
    ourDiv.style.paddingTop = "1px";
    ourDiv.style.borderStyle = "solid";
    ourDiv.style.borderWidth = "2px";
    ourDiv.style.borderRadius = "8px";
    ourDiv.style.borderColor = "rgb(255, 255, 255)";
    ourDiv.style.background = "rgb(0, 0, 0)";
    ourDiv.style.color = "rgb(255, 255, 255)";
    ourDiv.style.fontWeight = "bold";
    
    ourDiv.title = "Left Click to Remove this Div";
    ourDiv.id = "ourDivId";

    ourDiv.innerHTML = player001.greeting("Happy Scripting");

    ourDiv.onmouseenter = function() { ourDiv.style.borderColor = "rgb(185, 170, 240)"; };

    ourDiv.onmouseout = function() { ourDiv.style.borderColor = "rgb(255, 255, 255)"; };

    ourDiv.onclick= function(){ document.getElementById("ourDivId").remove(); };

    document.body.append(ourDiv);
}());
