javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* https://github.com/ChristopherTopalian */
/* jsbm_alert_class_001.js */
/* shows an alert message */

function()
{
    class OurAlertClass
    {
        showAlert(ourMessage)
        {
            alert(ourMessage);
        }
    }

    let greetingObject001 = new OurAlertClass();

    greetingObject001.showAlert("Howdy");

}());
