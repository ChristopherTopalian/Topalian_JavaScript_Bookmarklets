/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_prompt_alert_greeting_002.js */
/* gets input from the person */
/* shows an alert message with a name greeting */

javascript:(
function()
{
    function nameInput(greeting, name)
    {
        name = prompt("Enter Name");

        return greeting + " " + name;
    }

    alert(nameInput("Hi", name));
}());
