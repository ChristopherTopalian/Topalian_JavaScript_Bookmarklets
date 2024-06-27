Dedicated to God the Father
# Topalian_JavaScript_Bookmarklets
All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
https://github.com/ChristopherTopalian

Learn programming the fun way with JavaScript bookmarklets.
We can easily paste any of our scripts into our Browser console to execute them.
Instructions:
   * With our Web Browser open, we press F12 to open the console.
   * Paste the Code into the console
   * Press Enter
The JavaScript Bookmarklet code will execute.

#### ``` prompt and alert ```
```javascript
javascript:(
/* prompt, alert */
function()
{
    function askName()
    {
        let name = prompt("Enter Name");
        return name;
    }

    alert("Hi " + askName());

}());
```

---

#### ``` How to Add Comments ```
```javascript
javascript:(
/* How to Add Comments */
function()
{
    function askName()
    {
        let name = prompt("Enter Name");

        /* Here is another comment.
        Comments can be on multiple lines
        using this way */

        return name;
    }

    alert("Hi " + askName());

}());
```

---

#### ``` prompt toLowerCase if alert ```
```javascript
javascript: (
/* prompt toLowerCase if alert */
function()
{
    function askName()
    {
        let name = prompt("Enter Name").toLowerCase();

        if (name == "john")
        {
            alert("Hi " + name);
        }
    }

    askName();

}());
```

---

#### ``` Prompt, if else, toLowerCase, == EQUAL TO ```
```javascript
javascript: (
/* Prompt, if else, toLowerCase, == EQUAL TO */
function()
{
    function askName()
    {
        let name = prompt("Enter Name").toLowerCase();

        if (name == "john")
        {
            return "Hi John";
        }
        else
        {
            return "Hi " + name + " Where is John";
        }
    }

    alert(askName());

}());
```
