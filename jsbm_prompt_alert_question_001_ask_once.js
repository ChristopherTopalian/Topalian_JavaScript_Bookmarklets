javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_prompt_alert_question_001_ask_once.js */
/* gets input from the person */
/* determines which message to show, based on their answer */
/* shows an alert message related to their answer */

function()
{
    function questionInput(question)
    {
        question = prompt("What is 5 x 5?");

        if(question < 25)
        {
            return "Choose a higher value.";
        }
        else if(question > 25)
        {
            return "Choose a lower value.";
        }
        else
        {
            return "Correct. \n 5 x 5 = 25";
        }
    }

    alert(questionInput());

}());
