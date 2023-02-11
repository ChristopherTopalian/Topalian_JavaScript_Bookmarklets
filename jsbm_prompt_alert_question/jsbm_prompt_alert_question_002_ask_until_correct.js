javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_prompt_alert_question_002_ask_until_correct.js */
/* gets input from the person */
/* determines which message to show, based on their answer */
/* shows an alert message related to their answer */
/* keeps asking the question until the person answers correctly */

function()
{
    function questionInput()
    {
        let message;
        let question;
        
        do
        {
            question = prompt("What is 5 x 5?");

            if(question < 25)
            {
                message = "Choose a higher value.";
            }
            else if(question > 25)
            {
                message = "Choose a lower value.";
            }
            else if(question == 25)
            {
                message = "Correct. \n 5 x 5 = 25";
            }

            alert(message);
        }
        while(question != 25);
    }

    questionInput();

}());
