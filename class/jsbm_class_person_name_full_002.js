javascript:(
/* Dedicated to God the Father */
/* All Rights Reserved Christopher Topalian Copyright 2000-2022 */
/* jsbm_class_person_name_full_002.js */
/* shows the full name of the person by using our Person class object */
function()
{
    class Person
    {
        constructor(firstName, middleName, lastName)
        {
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
        }

        nameFull()
        {
            let fullName = this.firstName + " " +
            this.middleName + " " +
            this.lastName;

            return fullName;
         }
    }

    let player001 = new Person(
        "Niobi",   /* firstName */
        "Grace",   /* middleName */
        "Amber"    /* lastName*/
    );

    alert(player001.nameFull());
}());
