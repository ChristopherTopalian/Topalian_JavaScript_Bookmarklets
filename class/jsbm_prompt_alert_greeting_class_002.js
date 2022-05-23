/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_prompt_alert_greeting_class_002.js */
/* gets input from the person */
/* shows an alert message with a name greeting */

javascript:(
function()
{
    class Greeting
    {
        nameInput(greeting, name)
        {
            name = prompt("Enter Name");

            return greeting + " " + name;
        }
    }

    let greetingObject001 = new Greeting();

    alert(greetingObject001.nameInput("Hi", name));

}());
