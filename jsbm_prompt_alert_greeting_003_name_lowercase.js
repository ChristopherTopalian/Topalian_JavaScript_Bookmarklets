javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_prompt_alert_greeting_003_name_lowercase.js */
/* gets input from the person */
/* determines which message to show, based on name */
/* shows an alert message with a name greeting */

function()
{
    function nameInput(name)
    {
        name = prompt("Enter Name");

        let nameFormatted = name.toLowerCase();

        if(nameFormatted == "tabitha")
        {
            return "Hi Tabitha.";
        }
        else
        {
            return "Hi " + name + "." + " Where is Tabitha?";
        }
    }
    
    alert(nameInput());

}());
