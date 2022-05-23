/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_prompt_alert_greeting_001.js */
/* gets input from the person */
/* shows an alert message with a name greeting */

javascript:(
function()
{
    function nameInput(name)
    {
        name = prompt("Enter Name");

        return "Hi " + name;
    }

    alert(nameInput());
}());
