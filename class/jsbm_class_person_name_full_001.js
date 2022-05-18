javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_class_person_name_full_001.js */
/* shows the full name of the person by using our Person class object */

function()
{
    class Person
    {
        nameFull(firstName, middleName, lastName)
        {
            let fullName = firstName + " " +
            middleName + " " +
            lastName;

            return fullName;
        }
    }

    let player001 = new Person();

    alert(player001.nameFull("Niobi", "Grace", "Amber"));
}());
