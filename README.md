Dedicated to God the Father
# Topalian_JavaScript_Bookmarklets
All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
https://github.com/ChristopherTopalian

* With our Web Browser open, we press F12 to open the console.
* Paste the Code into the Console
* Press Enter to Run the JavaScript Code

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
javascript:(
/* prompt, if, toLowerCase, alert, == Equal To */
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

/* John or JOHN or jOhN will activate */
/* Jo hn or JOH N or J O H N will NOT activate */
```

---

#### ``` Prompt, if else, toLowerCase, == EQUAL TO ```
```javascript
javascript:(
/* prompt, if else, toLowerCase, == Equal To */
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
            return "Hi " + name + ". Where is John?";
        }
    }

    alert(askName());

}());
```

---

#### ``` prompt, if else, toLowerCase != Not Equal To ```
```javascript
javascript:(
/* prompt, if else, toLowerCase != Not Equal To */
function()
{
    function askName()
    {
        let name = prompt("Enter Name").toLowerCase();

        if (name != "john")
        {
            return "Hi " + name + ". Where is John?";
        }
        else
        {
            return "Hi John";
        }
    }

    alert(askName());

}());
```

---

#### ``` prompt OK and Cancel Button Responses ```
```javascript
javascript:(
/* prompt OK and Cancel Button Responses */
function()
{
    function askName()
    {
        let name = prompt("Enter Name");

        if (name == null)
        {
            return "You pressed the Cancel button";
        }
        if (name == "")
        {
            return "You pressed OK without first entering your name";
        }

        return name;
    }

    alert("Hi " + askName());

}());

/*
if the person enters their name and presses OK, it says their name.
if the person presses the OK button without first entering their name, it tells them that they didn’t enter their name. 
if the person presses the Cancel button it tells them that they pressed the Cancel button.
*/
```

#### ``` prompt if else if, < less than, > greater than ```
```javascript
javascript:(
/* prompt if else if, < less than, > greater than */
function()
{
    function askQuestion()
    {
        let question = prompt("What is 5 x 5?");

        if (question < 25)
        {
            return "A bit higher";
        }
        else if (question > 25)
        {
            return "A bit lower";
        }
        else
        {
            return "Correct";
        }
    }

    alert(askQuestion());

}());
```

---

#### ``` prompt, if else if, do while loop, <, >, != ```
```javascript
javascript:(
/* prompt, if else if, do while loop, <, >, != */
function()
{
    function askQuestion()
    {
        let message;

        do
        {
            let question = prompt("What is 5 x 5?");

            if (question < 25)
            {
                message = "A bit higher";
            }
            else if (question > 25)
            {
                message = "A bit lower";
            }
            else
            {
                message = "Correct";
            }
            alert(message);
        }
        while (question != 25);
    }

    askQuestion();

}());
```

---

#### ``` prompt, if, while loop, < less than ```
```javascript
javascript:(
/* prompt, if, while loop, < less than */
function()
{
    function askQuestion()
    {
        let players = prompt("Enter Number of Players");

        let x = 0;

        while (x < players)
        {
            x++;
            console.log("Player " + x + ", ");
        }
    }

    askQuestion();

}());
```

---

#### ``` prompt, while loop, <= less than equal to ```
```javascript
javascript:(
/* prompt, while loop, <= less than equal to */
function()
{
    function askQuestion()
    {
        let players = prompt("Enter Number of Players");

        let x = 1;

        while (x <= players)
        {
            console.log("Player " + x + ", ");

            x++;
        }
    }

    askQuestion();

}());
```

---

#### ``` prompt, for loop, createElement ```
```javascript
javascript:(
/* prompt, for loop, createElement */
function()
{
    function askQuestion()
    {
        let players = prompt("Enter Number of Players");

        let mainDiv = document.createElement("div");
        mainDiv.style.position = "absolute";
        mainDiv.style.width = 200 + "px";
        mainDiv.style.height = 200 + "px";
        mainDiv.style.display = "flex";
        mainDiv.style.flexDirection = "column";
        mainDiv.style.overflowY = "scroll";
        document.body.append(mainDiv);

        for (let x = 0; x < players; x++)
        {
            let player = document.createElement("button");

            player.onclick = function()
            {
                alert("Player " + x);
            };

            player.innerHTML = "Player " + x;

            mainDiv.append(player);
        }
    }

    askQuestion();

}());
```

---

#### ``` prompt, for loop with break ```
```javascript
javascript:(
/* prompt, for loop with break */
function()
{
    function askQuestion()
    {
        let players = prompt("Enter Number of Players");

        for (let x = 1; x <= players; x++)
        {
            if (players <= 3)
            {
                alert(players + " people is not enough");

                break;
            }

            console.log("Player " + x + ", ");
        }
    }

    askQuestion();

}());


/*
we use a for loop to display
how many players the user chose
and use break if it is
not enough players chosen
*/
```

#### ``` Date, Time, Time zone ```
```javascript
javascript:(
/* Date, Time, Time zone */
function()
{
    function getDateAndTime()
    {
        let currentDate = new Date();

        return currentDate;
    }

    console.log(getDateAndTime());

    alert(getDateAndTime());

}());

/* Sun Aug 27 2023 07:41:22 GMT-0400 (Eastern Daylight Time) */
```

---

### ``` Date and Time - toLocaleString ```
```javascript
javascript:(
/* Date and Time - toLocaleString */
function()
{
    function getDateAndTime()
    {
        let currentDate = new Date();

        let dateString = currentDate.toLocaleString();

        return dateString;
    }

    console.log(getDateAndTime());

    alert(getDateAndTime());

}());

/* 8/27/2023, 7:35:23 AM */
```

---

#### ``` Date - getYear ```
```javascript
javascript:(
/* Date - getYear */
function()
{
    function getYear()
    {
        let currentDate = new Date();

        let year = currentDate.getUTCFullYear();

        return year;
    }

    console.log("Year: " + getYear());

    alert("Year: " + getYear());

}());

/* Year: 2023 */
```

---

#### ``` Date - Month ```
```javascript
javascript:(
/* Date - Month */
function()
{
    function getTheMonth()
    {
        let currentDate = new Date();

        let month = currentDate.getMonth();

        if (month == 0)
        {
            return "January";
        }
        else if (month == 1)
        {
            return "February";
        }
        else if (month == 2)
        {
            return "March";
        }
        else if (month == 3)
        {
            return "April";
        }
        else if (month == 4)
        {
            return "May";
        }
        else if (month == 5)
        {
            return "June";
        }
        else if (month == 6)
        {
            return "July";
        }
        else if (month == 7)
        {
            return "August";
        }
        else if (month == 8)
        {
            return "September";
        }
        else if (month == 9)
        {
            return "October";
        }
        else if (month == 10)
        {
            return "November";
        }
        else if (month == 11)
        {
            return "December";
        }

        /* return month; */
    }

    console.log("Month is: " + getTheMonth());

    alert("Month is: " + getTheMonth());

}());

/*
August
*/
```

---

#### ``` Date - Day ```
```javascript
javascript:(
/* Date - Day */
function()
{
    function getTheDay()
    {
        let currentDate = new Date();

        let day = currentDate.getDay();

        if (day == 0)
        {
            return "Sunday";
        }
        else if (day == 1)
        {
            return "Monday";
        }
        else if (day == 2)
        {
            return "Tuesday";
        }
        else if (day == 3)
        {
            return "Wednesday";
        }
        else if (day == 4)
        {
            return "Thursday";
        }
        else if (day == 5)
        {
            return "Friday";
        }
        else if (day == 6)
        {
            return "Saturday";
        }

        /* return day; */
    }

    console.log("Today is: " + getTheDay());

    alert("Today is: " + getTheDay());

}());

/*
Sunday
*/
```

---

#### ``` Date - Time - Military - 24 Hour Format ```
```javascript
javascript:(
/* Date - Time - Military - 24 Hour Format */
function()
{
    function getMilitaryTime()
    {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();

        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }

        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }

        let timeString = hours + ":" + minutes + ":" + seconds;

        return timeString;
    }

    console.log("Time: " + getMilitaryTime());

    alert("Time: " + getMilitaryTime());

}());

/*
Time: 17:17:28
*/
```

---

#### ``` Date - Time - AM or PM - 12 Hour Format ```
```javascript
javascript:(
/* Date - Time - AM or PM - 12 Hour Format */
function()
{
    function getTheTime()
    {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let amOrPm;

        if (hours >= 12)
        {
            amOrPm = "PM";
            if (hours > 12)
            {
                hours -= 12;
            }
        }
        else
        {
            amOrPm = "AM";
            if (hours === 0)
            {
                hours = 12;
            }
        }

        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }

        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }

        let timeString = hours + ":" + minutes + ":" + seconds + " " + amOrPm;

        return timeString;
    }

    console.log("Time: " + getTheTime());

    alert("Time: " + getTheTime());

}());

/* Time: 8:50:17 AM */
```

---

#### ``` Date - Time - AM or PM - 12 Hour Format – Updates Time in a div ```
```javascript
javascript:(
/* Date - Time - AM or PM - 12 Hour Format – Updates Time in a div */
function()
{
    function getTheTime()
    {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let amOrPm;

        if (hours >= 12)
        {
            amOrPm = "PM";
            if (hours > 12)
            {
                hours -= 12;
            }
        }
        else
        {
            amOrPm = "AM";
            if (hours === 0)
            {
                hours = 12;
            }
        }

        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }

        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }

        let timeString = hours + ":" + minutes + ":" + seconds + " " + amOrPm;

        return timeString;
    }

    function createTimeText()
    {
        let timeDiv = document.createElement("div");
        timeDiv.style.position = "fixed";
        timeDiv.style.right = "0px";
        timeDiv.style.top = "0px";
        timeDiv.style.paddingLeft = "15px";
        timeDiv.style.paddingRight = "15px";
        timeDiv.style.paddingTop = "5px";
        timeDiv.style.paddingBottom = "5px";
        timeDiv.style.borderRadius = "8px";
        timeDiv.style.backgroundColor = "rgb(0, 0, 0)";
        timeDiv.style.fontSize = "30px";
        timeDiv.style.color = "rgb(255, 255, 255)";

        setInterval(function()
        {
            timeDiv.innerHTML = getTheTime();
        }, 1000);

        document.body.append(timeDiv);
    }

    createTimeText();

}());

/* Time: 8:57:17 AM */
```

---

#### ``` Date - Time - Time Zones America ```
```javascript
javascript:(
/* Date - Time - Time Zones America */
function()
{
    function getCurrentTimeAndDate(timezone, label)
    {
        let now = new Date();

        let options = {
            timeZone: timezone,
            timeStyle: 'short',
            dateStyle: 'medium'
        };

        let formattedTimeAndDate = now.toLocaleString(undefined, options);

        return label + " " + formattedTimeAndDate;
    }
 console.log(getCurrentTimeAndDate('America/Los_Angeles', 'West Coast'));
    console.log(getCurrentTimeAndDate('America/Denver', 'Mountain'));
 console.log(getCurrentTimeAndDate('America/Chicago', 'Central'));

console.log(getCurrentTimeAndDate('America/New_York', 'East Coast'));

}());

/* West Coast Oct 19, 2023, 12:31 PM
Mountain Oct 19, 2023, 1:31 PM
Central Oct 19, 2023, 2:31 PM
East Coast Oct 19, 2023, 3:31 PM */
```

---

#### ``` URL - Go to a Webpage ```
```javascript
javascript:(
/* URL - Go to a Webpage */
function()
{
    let url001 = "https://www.google.com";

    function openWebpage()
    {
        window.location.href = url001;
    }

    openWebpage();

}());
```

---

#### ``` URL of the webpage ```
```javascript
javascript:(
/* URL of the webpage */
function()
{
    function getURL()
    {
        let url = window.location.href;

        return url;
    }

    console.log(getURL());

    alert(getURL());

}());
```

---

#### ``` Title of the webpage ```
```javascript
javascript:(
/* Title of the webpage */
function()
{
    function titleOfPage()
    {
        let title = document.title;

        return title;
    }

    console.log(titleOfPage());

    alert(titleOfPage());

}());
```

---

#### ``` Title and URL of the webpage ```
```javascript
javascript:(
/* Title and URL of the webpage */
function()
{
    function titleOfPage()
    {
        let title = document.title;
        return title;
    }

    function urlOfPage()
    {
        let url = window.location.href;
        return url;
    }

    console.log(titleOfPage() + "\n" + urlOfPage());

    alert(titleOfPage() + "\n" + urlOfPage());

}());
```

---

#### ``` Title and URL of webpage as single function ```
```javascript
javascript:(
/* Title and URL of webpage as single function */
function()
{
    function getPageData()
    {
        let pageTitle = document.title;
        let pageURL = window.location.href;

        let pageData =
        "Title: " + pageTitle + "\n" +
        "URL: " + pageURL;

        return pageData;
    }

    console.log(getPageData());

    alert(getPageData());

}());
```

---

#### ``` Elements - How Many Elements on a Page ```
```javascript
javascript:(
/* Elements - How Many Elements on a Page */
function()
{
    function howManyElements()
    {
        let elements = document.getElementsByTagName("*");

        let elementCount = elements.length;

        return elementCount;
    }

    console.log(howManyElements());

    alert(howManyElements());

}());
```

---

#### ``` Images - How many Images on a page ```
```javascript
javascript:(
/* Images - How many Images on a page */
function()
{
    function howManyImages()
    {
        let images = document.getElementsByTagName('img');

        let imageCount = images.length;

        return imageCount;
    }

    console.log("Number of images is " + howManyImages());

    alert("Number of images is " + howManyImages());

}());
```

---

#### ``` Links - How many links on a page ```
```javascript
javascript:(
/* Links - How many links on a page */
function()
{
    function howManyLinks()
    {
        let links = document.getElementsByTagName('a');

        let linksCount = links.length;

        return linksCount;
    }

    console.log("Number of Links: " + howManyLinks());

    alert("Number of Links: " + howManyLinks());

}());
```

---

#### ``` How many specified elements ```
```javascript
javascript:(
/* How many specified elements */
function()
{
    function howManySpecifiedElements(whichElementType)
    {
        let elements = document.getElementsByTagName(whichElementType);

        let elementCount = elements.length;

        return elementCount;
    }

 console.log(howManySpecifiedElements("a"));

    alert(howManySpecifiedElements("a"));

}());
```

---

#### ``` Style Links ```
```javascript
javascript:(
/* Style Links */
function()
{
    function styleLinks()
    {
        let links = document.getElementsByTagName('a');

        for (let x = 0; x < links.length; x++)
        {
            links[x].style.backgroundColor = "rgb(0, 255, 255)";

            links[x].style.color = "rgb(0, 0, 0)";
        }
    }

    styleLinks();

}());
```

---

#### ``` Style Specified Elements ```
```javascript
javascript:(
/* Style Specified Elements */
function()
{
    function styleSpecifiedElements(whichElementType)
    {
        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            elements[x].style.backgroundColor = "rgb(0, 255, 255)";
            elements[x].style.color = "rgb(0, 0, 0)";
        }
    }

    styleSpecifiedElements("a");

}());
```

---

#### ``` Text Color of a Webpage Changed to Aqua ```
```javascript
javascript:(
/* Text Color of a Webpage Changed to Aqua */
function()
{
    function textColorChange()
    {
        let ourStyle = document.createElement("style");

        ourStyle.textContent = "body * { color: aqua !important; }";

        document.head.append(ourStyle);
    }

    textColorChange();

}());

/* !important makes a CSS rule a higher specificity.
It overrides any other style */
```

---

#### ``` Text Color of a Webpage Changed to a Specified Color ```
```javascript
javascript:(
/* Text Color of a Webpage Changed to a Specified Color */
function()
{
    function textColorChange(whichColor)
    {
        let ourStyle = document.createElement("style");

        ourStyle.textContent = "body * { color: " + whichColor + " !important; }";

        document.head.append(ourStyle);
    }

    textColorChange("aqua");

}());
```

---

#### ``` Style All Elements of a Specified Type ```
```javascript
javascript:(
/* Style All Elements of a Specified Type */
function()
{
    function styleElement(whichElementType)
    {
        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            elements[x].style.borderStyle = "solid";

            elements[x].style.borderWidth = 1 + "px";

            elements[x].style.borderRadius = 8 + "px";

            elements[x].style.borderColor = "rgb(0, 255, 255)";

            elements[x].style.fontSize = 20 + "px";

            elements[x].style.fontWeight = "bold";
        }
    }

    styleElement("div");

}());
```

---

#### ``` Number of Elements of Specified Type on Page ```
```javascript
javascript:(
/* Number of Elements of Specified Type on Page */
function()
{
    function getNumberOfSpecifiedElement(whichElement)
    {
        let elements = document.getElementsByTagName(whichElement);

        return elements.length;
    }

console.log(getNumberOfSpecifiedElement("div"));

    alert(getNumberOfSpecifiedElement("div"));

}());
```

---

#### ``` Show the innerHTML of each specified element type on a Page ```
```javascript
javascript:(
/* Show the innerHTML of each specified element type on a Page */
function()
{
    function showElementInnerHTML(whichElementType)
    {
        let report = "";

        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            report += elements[x].innerHTML;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showElementInnerHTML("p");

}());

/*
Show innerHTML of element types, such as:
/*
<p>: Paragraph elements.
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Headings of different levels.
<div>: Div elements.
<span>: Span elements.
<li>: List item elements within <ul> or <ol>.
<a>: Anchor links.
<button>: Buttons.
<label>: Labels for form elements.
<textarea>: Textareas within forms.
<option>: Options within <select> elements.
<blockquote>: Block quotes.
<cite>: Citations within block quotes.
<abbr>: Abbreviations.
<code>: Code snippets.
<pre>: Preformatted text.
*/
```

---

#### ``` Show the src of each specified element type on a Page ```
```javascript
javascript:(
/* Show the src of each specified element type on a Page */
function()
{
    function showElementsSrc(whichElementType)
    {
        let report = "";

        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            report += elements[x].src;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showElementsSrc("img");

}());

/*
Show src of element types, such as:
<img>: Image elements.
<input>: Input elements.
<script>: Script elements.
*/
```

---

#### ``` Show the href of each specified element type on a Page ```
```javascript
javascript:(
/* Show the href of each specified element type on a Page */
function()
{
    function showElementsHref(whichElementType)
    {
        let report = "";

        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            report += elements[x].href;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showElementsHref("link");

}());

/*
Show href of element types, such as:

<a>: Anchor elements.

<link>: Link elements, such as style sheets.
*/
```

---

#### ``` Show the innerHTML of the specified element type and style it ```
```javascript
javascript:(
/* Show the innerHTML of the specified element type and style it */
function()
{
    function showElementInnerHTML(whichElementType)
    {
        let report = "";

        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            elements[x].style.padding = 10 + "px";

            elements[x].style.borderStyle = "solid";

            elements[x].style.borderWidth = 2 + "px";

            elements[x].style.borderColor = "rgb(0, 255, 255)";

            elements[x].style.fontWeight = "bold";

            report += elements[x].innerHTML;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showElementInnerHTML("p");

}());
```

---

#### ``` Show All Image URLS ```
```javascript
javascript:(
/* Show All Image URLS */
function()
{
    function showImageUrls()
    {
        let report = "";

        let theLinks = document.getElementsByTagName("img");

        for (let x = 0; x < theLinks.length; x++)
        {
            report += theLinks[x].src;
            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showImageUrls();

}());

/*
alert shows a limited amount of characters.

Use console.log or other method to show all image links found, when there are many.

Press F12 to see the console report.
*/
```

---

#### ``` Show All Image URLS with style ```
```javascript
javascript:(
/* Show All Image URLS with style */
function()
{
    function showImageUrls()
    {
        let report = "";

        let images = document.getElementsByTagName("img");

        for (let x = 0; x < images.length; x++)
        {
            images[x].style.borderStyle = "solid";

            images[x].style.borderWidth = 2 + "px";

            images[x].style.borderColor = "rgb(0, 255, 255)";

            report += images[x].src;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showImageUrls();

}());
```

---

#### ``` Show All Buttons with style ```
```javascript
javascript:(
/* Show All Buttons with style */
function()
{
    function showButons()
    {
        let report = "";

        let buttons = document.getElementsByTagName("button");

        for (let x = 0; x < buttons.length; x++)
        {
            buttons[x].style.borderStyle = "solid";

            buttons[x].style.borderWidth = 2 + "px";

            buttons[x].style.borderColor = "rgb(0, 255, 255)";

            report += buttons[x].innerHTML;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showButons();

}());
```

---

#### ``` Show All Links with style ```
```javascript
javascript:(
/* Show All Links with style */
function()
{
    function showLinks()
    {
        let report = "";

        let links = document.getElementsByTagName("a");

        for (let x = 0; x < links.length; x++)
        {
            links[x].style.borderStyle = "solid";

            links[x].style.borderWidth = 2 + "px";

            links[x].style.borderColor = "rgb(0, 255, 255)";

            report += links[x].href;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showLinks();

}());
```

---

#### ``` Get Selected Text ```
```javascript
javascript:(
/* Get Selected Text */
function()
{
    function getSelectedText()
    {
        let selectedText = window.getSelection().toString();

        return selectedText;
    }

    console.log(getSelectedText());

    alert(getSelectedText());

}());
```

---

#### ``` Replace Words on a Webpage ```
```javascript
javascript:(
/* Replace Words on a Webpage */
function()
{
    function replaceWords()
    {
        let elements = document.getElementsByTagName('*');

        for (let x = 0; x < elements.length; x++)
        {
            let theElement = elements[x];

            theElement.innerHTML = theElement.innerHTML.replace(/\b(?:News)\b/gi, 'Howdy');

            theElement.innerHTML = theElement.innerHTML.replace(/\b(?:The|Was|A|To|Were)\b/gi, 'LOL');

            theElement.innerHTML = theElement.innerHTML.replace(/\b(?:What|Where|When|Why|How)\b/gi, 'Funny');
        }
    }

    replaceWords();

}());

/*

/ beginning and ending slashes show the start and end of the regular expression pattern.

g means global and it replaces all occurrences of the pattern, not only the first one.

i means case insensitive, meaning it matches uppercase and lowercase of the found pattern.

\b(?:News)\b The regular expression pattern being searched for

\b word boundary anchor means that the pattern is matched only as a whole word but not as part of a bigger word.

(?:News) This is a non-capturing group that matches the word "News." The ?: at the beginning of the group makes it non-capturing, which means it won't be found as part of a match.

\b word boundary anchor ensures the whole word is matched.
*/
```

---

#### ``` Replace Words on a Webpage - Variation ```
```javascript
javascript:(
/* Replace Words on a Webpage - Variation */
function()
{
    function replaceText(whichElement)
    {
        whichElement.innerHTML = whichElement.innerHTML.replace(/\bgoogle\b/gi, 'Orc Factory');
    }

    let elements = document.getElementsByTagName('*');

    for (let x = 0; x < elements.length; x++)
    {
        replaceText(elements[x]);
    }

}());
```

---

#### ``` Remove Element by Left Clicking it ```
```javascript
javascript:(
/* Remove Element by Left Clicking it */
function()
{
    document.addEventListener('click', function(event)
    {
        event.preventDefault();

        event.target.remove();
    });

}());
```

---

#### ``` Remove Element by Left Clicking it - Variation ```
```javascript
javascript:(
/* Remove Element by Left Clicking it - Variation */
function()
{
    document.onclick = function(event)
    {
        event.preventDefault();

        event.target.remove();
    };

}());
```

---

#### ``` Images Display to None ```
```javascript
javascript:(
/* Images Display to None */
function()
{
    function hideImages()
    {
        let images = document.getElementsByTagName('img');

        for (let x = 0; x < images.length; x++)
        {
            if (window.getComputedStyle(images[x]).display === "none")
            {
                images[x].style.display = "block";
            }
            else
            {
                images[x].style.display = "none";
            }
        }
    }
    hideImages();

}());
```

---

#### ``` Images - Gray Scale ```
```javascript
javascript:(
/* Images - Gray Scale */
function()
{
    function makeImagesGrayScale()
    {
        let theImages = document.getElementsByTagName('img');

        for (let x = 0; x < theImages.length; x++)
        {
            theImages[x].style.filter = 'grayscale(100%)';
        }
    }

    makeImagesGrayScale();

}());
```

---

#### ``` Toggle Images On/Off ```
```javascript
javascript:(
/* Toggle Images On/Off */
function()
{
    function toggleImagesOnOrOff()
    {
        let images = document.getElementsByTagName('img');

        for (let x = 0; x < images.length; x++)
        {
            let display = window.getComputedStyle(images[x]).display;

            if (display === 'none')
            {
                images[x].style.display = 'block';
            }
            else
            {
                images[x].style.display = 'none';
            }
        }
    }

    toggleImagesOnOrOff();

}());

/*
if images are hidden, it will show them

if images are visible, it will hide them
*/
```

---

#### ``` Mouse Click Changes Font Weight ```
```javascript
javascript:(
/* Mouse Click Changes Font Weight */
function()
{
    function mouseTriggersStyle()
    {
        document.onclick = function()
        {
            let elements = document.getElementsByTagName('*');

            for (let x = 0; x < elements.length; x++)
            {
                elements[x].style.fontWeight = "bold";
            }
        };
    }

    mouseTriggersStyle();

}());
```

---

#### ``` First Click Does X, Second Click Does Y ```
```javascript
javascript:(
/* First Click Does X, Second Click Does Y */
function()
{
    function mouseTriggersStyle()
    {
        let toggleFlag = false;

        document.onclick = function()
        {
            let elements = document.getElementsByTagName('*');

            for (let x = 0; x < elements.length; x++)
            {
                if (toggleFlag)
                {
                    elements[x].style.fontWeight = "normal";
                } 
                else
                {
                    elements[x].style.fontWeight = "bold";
                }
            }

            toggleFlag = !toggleFlag;
        };
    }

    mouseTriggersStyle();

}());

/*
The next tutorial shows a variation of this idea. Choose the way that you find to be more natural.
*/
```

---

#### ``` First Click Does X, Second Click Does Y - Variation ```
```javascript
javascript:(
/* First Click Does X, Second Click Does Y - Variation */
function()
{
    let toggleFlag = false;

    function mouseTriggersStyle()
    {
        document.onclick = function()
        {
            let elements = document.getElementsByTagName('*');

            for (let x = 0; x < elements.length; x++)
            {
                if (toggleFlag == false)
                {
                    elements[x].style.fontWeight = "normal";

                    toggleFlag = true;
                }
                else
                {
                    elements[x].style.fontWeight = "bold";

                    toggleFlag = false;
                }
            }
        };
    }

    mouseTriggersStyle();

}());
```

---

#### ``` First Click do X, Second Click do Y, Third Click do Z ```
```javascript
javascript:(
/* First Click do X, Second Click do Y, Third Click do Z */
function()
{
    let state = 0;

    function toggleFontWeightAndColor(element)
    {
        if (state === 0)
        {
            element.style.fontWeight = "normal";

            element.style.color = "red";

            state = 1;
        }

        else if (state === 1)
        {
            element.style.fontWeight = "bold";
            element.style.color = "green";
            state = 2;
        }

        else
        {
            element.style.color = "blue";
            state = 0;
        }
    }

    function mouseTriggersStyle()
    {
        document.onclick = function()
        {
            let elements = document.getElementsByTagName('*');

            for (let x = 0; x < elements.length; x++)
            {
          toggleFontWeightAndColor(elements[x]);
            }
        };
    }
    mouseTriggersStyle();

}());
```

---

#### ``` Random Number Generator from 1 to 100 ```
```javascript
javascript:(
/* Random Number Generator from 1 to 100 */
function()
{
    function generateRandomNumber()
    {
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        return randomNumber;
    }

    console.log(generateRandomNumber());

    alert(generateRandomNumber());

}());

/* In this script, console.log
will show one random value
and alert will show
another random value */
```

---

#### ``` Random Background Color ```
```javascript
javascript:(
/* Random Background Color */
function()
{
    function randomBackgroundColor()
    {
        let randomColor = 'rgb(' +
Math.floor(Math.random() * 255) + ',' +
Math.floor(Math.random() * 255) + ',' +
Math.floor(Math.random() * 255) + ')';

        document.body.style.backgroundColor = randomColor;
    }

    randomBackgroundColor();

}());

/* // Template Literal Version
let randomColor = `rgb(
${ Math.floor(Math.random() * 255) },
${ Math.floor(Math.random() * 255) },
${ Math.floor(Math.random() * 255) }
)`;
*/
```

---

#### ``` Random Background Color - Variation ```
```javascript
javascript:(
/* Random Background Color - Variation */
function()
{
    function randomValue()
    {
        return Math.floor(Math.random() * 255);
    }

    let red = randomValue();
    let green = randomValue();
    let blue = randomValue();

    let randomColor = 'rgb('+red+', '+green+', '+ blue+')';

    document.body.style.backgroundColor = randomColor;

}());

/*
// Template Literal Version
let randomColor = `rgb(${red}, ${green}, ${blue})`;
*/
```

---

#### ``` Random Greeting ```
```javascript
javascript:(
/* Random Greeting */
function()
{
    let greetings =
    [
        "Hi",
        "Howdy.",
        "How ya doing?",
        "You having fun?",
        "Glad you are here.",
        "Nice weather today.",
        "It's such a nice day out."
    ];

    function makeRandomMessage(whichArray)
    {
        let randomGreeting = whichArray[Math.floor(Math.random() * whichArray.length)];

        return randomGreeting;
    }

    let message = makeRandomMessage(greetings);

    console.log(message);

    alert(message);

}());
```

---

#### ``` Random Quote Generator ```
```javascript
javascript:(
/* Random Quote Generator */
function()
{
    function generateRandomQuote()
    {
        let quotes =
        [
            "Always be kind",
            "Be excellent to each other",
            "Live long and prosper"
        ];

        let randomIndex = Math.floor(Math.random() * quotes.length);

        let randomQuote = quotes[randomIndex];
        return randomQuote;
    }

    let quote = generateRandomQuote();
    console.log(quote);
    alert(quote);

}());
```

---

#### ``` Random Font for the entire Webpage ```
```javascript
javascript:(
/* Random Font for the entire Webpage */
function()
{
    let fonts =
    [
        'Arial',
        'Times New Roman',
        'Courier New',
        'Garamond',
        'Avant Garde',
        'Palatino Linotype'
    ];

    function makeRandomFont()
    {
        let elements = document.getElementsByTagName('*');

        let randomFont = fonts[Math.floor(Math.random() * fonts.length)];

        for (let x = 0; x < elements.length; x++)
        {
            elements[x].style.fontFamily = randomFont;
        }

        console.log('Changed font to ' + randomFont);

        alert('Changed font to ' + randomFont);
    }

    makeRandomFont();

}());
```

---

#### ``` Random Background Color ```
```javascript
javascript:(
/* Random Background Color */
function()
{
    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        return 'rgb('+r+', '+g+ ', '+b+')';
    }

    document.body.style.backgroundColor = getRandomColor();

}());

/*
// Template Literal Version
return `rgb(${r}, ${g}, ${b})`;
*/
```

---

#### ``` Random BG to Specified Element ```
```javascript
javascript:(
/* Random BG to Specified Element */
function()
{
    function styleSpecifiedElements(whichElementType)
    {
        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            let randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';

            elements[x].style.backgroundColor = randomColor;
        }
    }

    styleSpecifiedElements("a");

}());
```

---

#### ``` Random BG to Specified Elements - Variation ```
```javascript
javascript:(
/* Random BG to Specified Elements - Variation */
function()
{
    function styleSpecifiedElements(whichElementType, whichRgbColor)
    {
        let theElements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < theElements.length; x++)
        {
            theElements[x].style.backgroundColor = whichRgbColor;
        }
    }

    styleSpecifiedElements("p", 'rgb(' +
Math.floor(Math.random() * 255) + ',' +
Math.floor(Math.random() * 255) + ',' +
Math.floor(Math.random() * 255) + ')');

}());
```

---

#### ``` Random Positions for a Circle ```
```javascript
javascript:(
/* Random Positions for a Circle */
function()
{
    function createCircle()
    {
        let circle = document.createElement("div");
        circle.id = "circle";
        circle.style.position = "absolute";
        circle.style.width = "20px";
        circle.style.height = "20px";
        circle.style.background = "aqua";
        circle.style.borderRadius = "50%";
        document.body.append(circle);
        return circle;
    }

    function getRandomPosition()
    {
        let x = Math.floor(Math.random() * window.innerWidth);

        let y = Math.floor(Math.random() * window.innerHeight);

        return {
            x: x,
            y: y
        };
    }

    function moveObject(circle)
    {
        let pos = getRandomPosition();
        circle.style.left = pos.x + "px";
        circle.style.top = pos.y + "px";
    }

    function moveObjectRandomPositions()
    {
        let circle = createCircle();

        /* move every 1 second */
        setInterval(function()
        {
            moveObject(circle);
        }, 1000);
    }
    moveObjectRandomPositions();

}());
```

---

#### ``` Random Positions and Colors for a Circle ```
```javascript
javascript:(
/* Random Positions and Colors for a Circle */
function()
{
    function createCircle()
    {
        let circle = document.createElement("div");
        circle.id = "circle";
        circle.style.position = "absolute";
        circle.style.width = "20px";
        circle.style.height = "20px";
        circle.style.borderRadius = "50%";
        document.body.append(circle);
        return circle;
    }

    function getRandomPosition()
    {
        let x = Math.floor(Math.random() * window.innerWidth);

        let y = Math.floor(Math.random() * window.innerHeight);

        return {
            x: x,
            y: y
        };
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb("+r+", "+g+", "+b+")";
    }

    function moveObject(circle)
    {
        let pos = getRandomPosition();

        circle.style.backgroundColor = getRandomColor();

        circle.style.left = pos.x + "px";
        circle.style.top = pos.y + "px";
    }

    function moveObjectRandomPositions()
    {
        let circle = createCircle();
        moveObject(circle);

        /* move every 1 second */
        setInterval(function()
        {
            moveObject(circle);
        }, 1000);
    }

    moveObjectRandomPositions();

}());
```

---

```javascript
javascript:(
/* Random Positions and Colors for a Circle - How Many */
function()
{
    function createCircle()
    {
        let circle = document.createElement("div");
        circle.id = "circle";
        circle.style.position = "absolute";
        circle.style.width = "20px";
        circle.style.height = "20px";
        circle.style.borderRadius = "50%";
        document.body.append(circle);
        return circle;
    }

    function getRandomPosition()
    {
        let x = Math.floor(Math.random() * window.innerWidth);

        let y = Math.floor(Math.random() * window.innerHeight);

        return {
            x: x,
            y: y
        };
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb("+r+", "+g+", "+b+")";
    }

    function moveObject(circle)
    {
        let pos = getRandomPosition();

        circle.style.backgroundColor = getRandomColor();

        circle.style.left = pos.x + "px";
        circle.style.top = pos.y + "px";
    }

    function moveObjectRandomPositions(numberOfCircles)
    {
        for (let i = 0; i < numberOfCircles; i++)
        {
            let circle = createCircle();

            moveObject(circle);
        }

        /* move every 1 second */
        setInterval(function()
        {
            let circles = document.querySelectorAll("#circle");

            for (let i = 0; i < circles.length; i++)
            {
                moveObject(circles[i]);
            }
        }, 1000);
    }

    let numberOfCircles = prompt("Enter number of circles to create");

    if (numberOfCircles && !isNaN(numberOfCircles))
    {
        moveObjectRandomPositions(Number(numberOfCircles));
    }
    else
    {
        alert("Enter 1 or higher");
    }

}());
```

---

#### ``` Random Pos, Size, Color for Circles ```
```javascript
javascript:(
/* Random Pos, Size, Color for Circles */
function()
{
    function createCircle()
    {
        let circle = document.createElement("div");
        circle.id = "circle";
        circle.style.position = "absolute";
        let size = getRandomSize();
        circle.style.width = size + "px";
        circle.style.height = size + "px";
        circle.style.borderRadius = "50%";
        document.body.append(circle);
        return circle;
    }

    function getRandomSize()
    {
        // random size between 10 and 100 pixels
        return Math.floor(Math.random() * 91) + 10;
    }

    function getRandomPosition()
    {
        let x = Math.floor(Math.random() * window.innerWidth);

        let y = Math.floor(Math.random() * window.innerHeight);

        return {
            x: x,
            y: y
        };
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb("+r+", "+g+", "+b+")";
    }

    function moveObject(circle)
    {
        let pos = getRandomPosition();

        circle.style.backgroundColor = getRandomColor();

        circle.style.left = pos.x + "px";
        circle.style.top = pos.y + "px";
    }

    function moveObjectRandomPositions(numberOfCircles)
    {
        for (let i = 0; i < numberOfCircles; i++)
        {
            let circle = createCircle();
            moveObject(circle);
        }

        /* move every 1 second */
        setInterval(function()
        {
            let circles = document.querySelectorAll("#circle");

            for (let i = 0; i < circles.length; i++)
            {
                moveObject(circles[i]);
            }
        }, 1000);
    }

    let numberOfCircles = prompt("Enter number of circles to create");

    if (numberOfCircles && !isNaN(numberOfCircles))
    {
        moveObjectRandomPositions(Number(numberOfCircles));
    }
    else
    {
        alert("Enter a valid number.");
    }

}());
```

---

#### ``` Random Border Color with Timer ```
```javascript
javascript:(
/* Random Border Color with Timer */
function()
{
    let theTimer;
    let isRunning = false;

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return 'rgb('+r+', '+g+', '+b+')';
    }

    function toggleColorChange()
    {
        if (!isRunning)
        {
            document.body.style.borderStyle = "solid";

            document.body.style.borderColor = "rgb(255, 255, 255)";

            theTimer = setInterval(function()
            {
                document.body.style.borderColor = getRandomColor();
            }, 1000);
        }
        else
        {
            clearInterval(theTimer);

            document.body.style.backgroundColor = '';
        }
        isRunning = !isRunning;
    }

    toggleColorChange();

    document.body.addEventListener('click', toggleColorChange);

}());
```

---

#### ``` Replace Images with a Random Image from our Array ```
```javascript
javascript:(
/* Replace Images with a Random Image from our Array */
function()
{
    let textures =
    [
'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wood1.jpg',

'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/copper.jpg',

'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/silver.jpg',

'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/gold.jpg',
    ];

    function replaceImages()
    {
        let images = document.getElementsByTagName('img');

        for (let x = 0; x < images.length; x++)
        {
            let imageIndex = x % textures.length;

            images[x].src = textures[imageIndex];

            images[x].alt = 'Replaced Image';
        }
    }

    replaceImages();

}());

/* replaces all images on the current page with random images from our array */
```

---

#### ``` Replace Images with specified Image ```
```javascript
javascript:(
/* Replace Images with specified Image */
function()
{
    function replaceImages()
    {
        let images = document.getElementsByTagName('img');

        for (let x = 0; x < images.length; x++)
        {
            images[x].src = 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/asphalt.jpg';

            images[x].alt = 'Asphalt';
        }
    }

    replaceImages();

}());
```

---

#### ``` Video Pause - Pauses the Video ```
```javascript
javascript:(
/* Video Pause - Pauses the Video */
function()
{
    function videoPause()
    {
        let theVideo = document.querySelector('video');

        theVideo.pause();
    }

    videoPause();

}());

/* When Activated, this Bookmarklet will PAUSE the first video found on the page. */
```

---

#### ``` Video Play ```
```javascript
javascript:(
/* Video Play */
function()
{
    function videoPlay()
    {
        let theVideo = document.querySelector('video');

        theVideo.play();
    }

    videoPlay();

}());
```

---

#### ``` Video Back 2 Seconds ```
```javascript
javascript:(
/* Video Back 2 Seconds */
function()
{
    function videoSkipBackwards()
    {
        let theTime = document.querySelector('video').currentTime += -2;
    }

    videoSkipBackwards();

}());
```

---

#### ``` Video Forward 2 Seconds ```
```javascript
javascript:(
/* Video Forward 2 Seconds */
function()
{
    function videoSkipForward()
    {
        let theTime = document.querySelector('video').currentTime += 2;
    }

    videoSkipForward();

}());
```

---

#### ``` Video Forward 2 Seconds, Keep Activating ```
```javascript
javascript:(
/* Video Forward 2 Seconds, Keep Activating */
function()
{
    function videoSkipForward()
    {
      document.querySelector('video').currentTime += 2;
    }

    setInterval(videoSkipForward, 1000);

}());
```

---

#### ``` Video currentTime ```
```javascript
javascript:(
/* Video currentTime */
function()
{
    function videoCurrentTime()
    {
        let time = document.querySelector('video').currentTime;

        return time;
    }

    console.log(videoCurrentTime());

    alert(videoCurrentTime());

}());
```

---

#### ``` Video currentTime with round ```
```javascript
javascript:(
/* Video currentTime with round */
function()
{
    function videoCurrentTime()
    {
        let time = document.querySelector('video').currentTime;

        let roundedTime = Math.round(time);

        return roundedTime;
    }

    console.log(videoCurrentTime());

    alert(videoCurrentTime());

}());
```

---

#### ``` Video currentTime using toFixed ```
```javascript
javascript:(
/* Video currentTime using toFixed */
function()
{
    function videoCurrentTime()
    {
        let time = document.querySelector('video').currentTime;

        let formattedTime = time.toFixed(2);

        return formattedTime;
    }

    console.log(videoCurrentTime());

    alert(videoCurrentTime());

}());
```

---

```javascript
javascript:(
/* Video - Set the currentTime */
function()
{
    function videoSetTime(whichSeconds)
    {
   document.querySelector('video').currentTime = whichSeconds;
    }

    videoSetTime(60);

}());
```

---


```javascript
javascript:(
/* Video - Duration - Total Length in Seconds */
function()
{
    function videoGetDuration()
    {
        let theDuration = document.querySelector('video').duration;

        return theDuration;
    }

    console.log(videoGetDuration());

    alert(videoGetDuration());

}());
```

---

```javascript
javascript:(
/* Video - loop if true, non loop if false */
function()
{
    function videoLoop(whichLoopSetting)
    {
        document.querySelector('video').loop = whichLoopSetting;
    }

    videoLoop(true);

}());
```

---

```javascript
javascript:(
/* Video muted if true, unmuted if false */
function()
{
    function videoMute(whichMuteSetting)
    {
        document.querySelector('video').muted = whichMuteSetting;
    }

    videoMute(true);

}());
```

---

```javascript
javascript:(
/* Video URL - window.location.href */
function()
{
    function videoSource()
    {
        let theSrc = window.location.href;

        return theSrc;
    }

    alert(videoSource());

}());
```

---

```javascript
javascript:(
/* Video Volume - 0.0 Mute, 1.0 Full */
function()
{
    function videoVolume(whichVolume)
    {
        document.querySelector('video').volume = whichVolume;
    }

    videoVolume(0.5);

}());
```

---

```javascript
javascript:(
/* Video Volume - Get Volume Level 0.0 to 1.0 */
function()
{
    function videoVolumeGet()
    {
        let theSrc = document.querySelector('video').volume;

        return theSrc;
    }

    alert(videoVolumeGet());

}());
```

---

```javascript
javascript:(
/* Video Speed to Custom Value */
/* Set the speed value of the video, such as: 0.0, 0.25, 0.5, 0.75, 1.00, 1.25, 1.5, 1.75, 2.00, 20.0, or super slow 0.01 */
function()
{
    function videoSpeedSet(whichSpeed)
    {
   document.querySelector('video').playbackRate = whichSpeed;
    }

    videoSpeedSet(0.5);

}());
```

---

```javascript
javascript:(
/* Video - Custom Speed */
function()
{
    function videoSpeedSet()
    {
        let speedInput = prompt('Enter a Speed', '0.50');

        let videoSpeed = parseFloat(speedInput);

 document.querySelector('video').playbackRate = videoSpeed;
    }

    videoSpeedSet();

}());
```

---

```javascript
javascript:(
/* YouTube - Style Description Border color */
function()
{
    function createBorderAroundVideoInfo()
    {
        let theBorder = document.querySelector(".style-scope ytd-watch-metadata");
        
        theBorder.style.borderStyle = 'solid';

        theBorder.style.borderColor = 'aqua';
    }

    createBorderAroundVideoInfo();

}());
```

---

```javascript
javascript:(
/* YouTube - Get URL, Title, Description, Date */
function()
{
    function getInfo()
    {
        let nameList = document.querySelectorAll(".style-scope ytd-video-primary-info-renderer");

        let theNames = [];

        for (let x = 0; x < nameList.length; x++)
        {
            theNames += nameList[x].textContent;

            theNames += "\n";
        }

        let theTextArea = document.createElement("textarea");
        theTextArea.style.position = "absolute";
        theTextArea.style.left = 100 + 'px';
        theTextArea.style.top = 200 + 'px';
        theTextArea.style.width = 700 + 'px';
        theTextArea.style.height = 200 + 'px';
        theTextArea.style.zIndex = "1000";
        theTextArea.style.border = "solid 2px rgba(0,0,100,1.0)";
        theTextArea.style.background = "white";
        theTextArea.style.fontFamily = "arial";
        theTextArea.style.fontWeight = "normal";
        theTextArea.style.fontSize = "medium";
        theTextArea.style.color = "black";
        theTextArea.style.textAlign = "center";

        theTextArea.setAttribute("readonly", "true");

        theTextArea.value = theNames;

        document.body.append(theTextArea);
    }

    getInfo();

}());
```

---

```javascript
javascript:(
/* Shows Mouse Position when person clicks the screen */
function()
{
    function mousePos()
    {
        let mouseX = event.pageX;
        let mouseY = event.pageY;

        let mousePos =
        "Mouse" + "\n" +
        "X " + mouseX + "\n" +
        "Y " + mouseY;

        console.log(mousePos);

        document.title = mousePos;
    }

    window.addEventListener("click", mousePos, false);

    mousePos();
}());
```

---

```javascript
javascript:(
/* Create Video Game Player on Any Webpage */
function()
{
    function createPlayer()
    {
        let player = document.createElement("div");
        player.id = "thePlayer";
        player.style.position = "absolute";
        player.style.left = 0;
        player.style.top = 0;
        player.style.width = "50px";
        player.style.height = "50px";
        player.style.zIndex = "15";
        player.style.fontFamily = "exo";
        player.style.fontSize = "20px";
        player.style.fontWeight = "bold";
        player.style.color = "rgb(255, 255, 255)";
        player.style.textAlign = "center";
        player.style.background = "rgba(76, 175, 180, 0.5)";
        document.body.append(player);

        /*----*/

        /* keyboard Letter Codes Being Pressed */
        let keyboard = {};
        keyboard.UP = 87;
        keyboard.DOWN = 83;
        keyboard.LEFT = 65;
        keyboard.RIGHT = 68;

        /*----*/

        /* player's start position and id */
        let ourPlayer =
        {
            x: 100,
            y: 300,
            speedMultiplier: 2,
            playerId: document.getElementById("thePlayer")
        };

        /*----*/

        /* key press detection */
        document.body.onkeyup = document.body.onkeydown = function(e)
{
        if (e.keyCode == 80) /* letter p */
        {
            ourPlayer.playerId.style.background = "rgba(0, 175, 80, 0.5)";
            ourPlayer.speedMultiplier = 4;
        }
        if (e.keyCode == 79) /* letter o */
        {
            ourPlayer.playerId.style.background = "rgba(76, 0, 80, 0.5)";
            ourPlayer.speedMultiplier = 3;
        }
        if (e.keyCode == 73) /* letter i */
        {
            ourPlayer.playerId.style.background = "rgba(76, 175, 180, 0.5)";
            ourPlayer.speedMultiplier = 2;
        }

        /* find out which key was pressed */
        let theKeyCode = e.keyCode || e.which;

        keyboard[theKeyCode] = e.type == 'keydown';
    };

    /*----*/

    /* character movement updating */
    let movePlayer = function(theX, theY)
    {
        ourPlayer.x += (theX || 0) * ourPlayer.speedMultiplier;

        ourPlayer.y += (theY || 0) * ourPlayer.speedMultiplier;

        ourPlayer.playerId.style.left = ourPlayer.x + 'px';

        ourPlayer.playerId.style.top = ourPlayer.y + 'px';
    };

    /*----*/

    /* player controls */
    let sensePlayerMotion = function()
    {
        if (keyboard[keyboard.LEFT])
        {
            movePlayer(-1, 0);
        }
        if (keyboard[keyboard.RIGHT])
        {
            movePlayer(1, 0);
        }
        if (keyboard[keyboard.UP])
        {
            movePlayer(0, -1);
        }
        if (keyboard[keyboard.DOWN])
        {
            movePlayer(0, 1);
        }
    };

    /*----*/

    /* update the Position of the player */
    movePlayer();

    /*----*/

    function scrollIt()
    {
document.getElementById("thePlayer").scrollIntoView(
        {
            block: "center",
            inline: "center"
        });
    }

    let loop001;

    function gameLoop()
    {
        sensePlayerMotion();

        scrollIt();

        loop001 = requestAnimationFrame(gameLoop);
    }

    gameLoop();
}

createPlayer();
}());
```

---

```javascript
javascript:(
/* createElement, append, Make a div, style */
function()
{
    function createInfoDiv()
    {
        let ourDiv = document.createElement("div");
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingTop = "5px";
        ourDiv.style.paddingBottom = "5px";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.borderStyle = "solid";
        ourDiv.style.borderWidth = "1px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.borderColor = "rgb(0, 255, 255)";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = "30px";
        ourDiv.style.fontWeight = "bold";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "center";
        ourDiv.innerHTML = "Copper";
        ourDiv.innerHTML += "<br>";
        ourDiv.innerHTML += "29";
        document.body.append(ourDiv);
    }

    createInfoDiv();

}());
```

---

```javascript
javascript:(
/* createElement - id - Right click on the Div and choose Inspect */
function()
{
    function createDiv()
    {
        let ourDiv = document.createElement("div");
        ourDiv.id = "ourDiv";
        ourDiv.style.position = "absolute";
        ourDiv.style.left = 100 + "px";
        ourDiv.style.top = 100 + "px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingTop = "5px";
        ourDiv.style.paddingBottom = "5px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.borderStyle = "solid";
        ourDiv.style.borderWidth = "1px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.borderColor = "rgb(0, 255, 255)";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = "30px";
        ourDiv.style.fontWeight = "bold";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "center";
        ourDiv.innerHTML = "Right click this div. Choose Inspect.";
        document.body.append(ourDiv);
    }

    createDiv();

}());
```

---

```javascript
javascript:(
/* createElement, append, Make a Paragraph */
function()
{
    function createParagraph()
    {
        let ourParagraph = document.createElement("p");
        ourParagraph.style.position = "absolute";
        ourParagraph.style.top = 100 + 'px';
        ourParagraph.style.left = 100 + 'px';
        ourParagraph.innerHTML = "Here is the text.";
        document.body.append(ourParagraph);
    }

    createParagraph();

}());
```

---

```javascript
javascript:(
/* createElement, div, style, url new tab */
function()
{
    function createInfoDiv()
    {
        let copper =
        {
            name: "copper",
            number: "29",
            link: "https://en.wikipedia.org/wiki/Copper"
        };

        let ourDiv = document.createElement("div");
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingBottom = "15px";
        ourDiv.style.paddingTop = "9px";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = 30 + "px";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "center";
        ourDiv.innerHTML = copper.name;
        ourDiv.innerHTML += "<br>";
        ourDiv.innerHTML += copper.number;
        ourDiv.innerHTML += "<br>";
        ourDiv.innerHTML += '<a href = \'' + copper.link + '\' target = "_blank"> Link </a>';
        document.body.append(ourDiv);
    }

    createInfoDiv();

}());
```

---

```javascript
javascript:(
/* createElement, Array Of Objects - link */
function()
{
    function createInfoDiv()
    {
        let myRecord =
        [
            {
                name: "Key",
                weight: 140,
                link: "https://google.com/news"
            },
            {
                name: "Donald",
                weight: 160,
                link: "https://google.com"
            }
        ];

        let ourDiv = document.createElement("div");
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.width = "100px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingBottom = "15px";
        ourDiv.style.paddingTop = "9px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.fontSize = 30 + "px";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "center";
        ourDiv.innerHTML = myRecord[0].name;
        ourDiv.innerHTML += "<br>";
        ourDiv.innerHTML += myRecord[0].weight;
        ourDiv.innerHTML += "<br>";
        ourDiv.innerHTML += '<a href = \'' + myRecord[0].link + '\' target = "_blank"> Link </a>';

        document.body.append(ourDiv);
    }

    createInfoDiv();

}());

/*
We make an Array of Objects that we named myRecord

The 0 entry of the myRecord array is Key.

The 1 entry of the myRecord array is Donald.
In the above script, we only display one record, which is the entry that has the name Key.

To display the first entry name we use myRecord[0].name
To display the first entry weight we use myRecord[0].weight

To display the second entry name we use myRecord[1].name
To display the second entry weight we use myRecord[1].weight
*/
```

---

```javascript
javascript:(
/* createElement, Array of Objects - Show All */
function()
{
    function createInfoDiv()
    {
        let myRecord =
        [
            {
                name: "Key",
                weight: 140,
                link: "https://google.com/news"
            },
            {
                name: "Donald",
                weight: 160,
                link: "https://google.com"
            }
        ];

        /*----*/

        let ourDiv = document.createElement("div");
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingBottom = "2px";
        ourDiv.style.paddingTop = "2px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.fontSize = 30 + "px";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "right";
        document.body.append(ourDiv);

        let output = "";

        for (let x = 0; x < myRecord.length; x++)
        {
            output += "<hr>";
            output += myRecord[x].name;
            output += " ";
            output += myRecord[x].weight;
            output += " ";
            output += '<a href = \'' + myRecord[x].link + '\' target = "_blank"> Link </a>';
        }

        output += '<hr>';

        ourDiv.innerHTML = output;

    }

    createInfoDiv();

}());

/*
Creates a New div on the page with style & url link of an array of objects, displaying all entries.
We loop through the entries of the myRecords array to display all of them at once.
The for loop will only continue for as many entries that are found. In this case, there are only two entries.
We display all of the entries on a div that we have made using createElement.
*/
```

---

```javascript
javascript:(
/* createElement, Make a Button */
function()
{
    function textMessage(whichText)
    {
        alert(whichText);
    }

    function createMessage(whichText)
    {
        let ourButton = document.createElement("button");
        ourButton.style.position = "absolute";
        ourButton.style.left = "100px";
        ourButton.style.top = "100px";
        ourButton.style.padding = "2px";
        ourButton.style.zIndex = "1000";
        ourButton.style.background = "rgb(0, 0, 0)";
        ourButton.style.fontSize = 22 + "px";
        ourButton.style.color = "rgb(255, 255, 255)";
        ourButton.innerHTML = "Greeting";

        ourButton.onmouseover = function()
        {
            ourButton.style.color = "rgb(0, 255, 255)";
        };

        ourButton.onmouseout = function()
        {
            ourButton.style.color = "rgb(255, 255, 255)";
        };

        ourButton.onclick = function()
        {
            textMessage(whichText);
        };

        document.body.append(ourButton);

    }

    createMessage("Hi Everyone");

}());
```

---

```javascript
javascript:(
/* Scene - Position - Get Current Position of the square object by left clicking it */
function()
{
    let horizon = document.createElement('div');
    horizon.style.position = 'absolute';
    horizon.style.left = '0px';
    horizon.style.top = '0px';
    horizon.style.width = '100%';
    horizon.style.height = '50%';
    horizon.style.backgroundColor = 'rgb(0, 100, 200)';
    document.body.append(horizon);

    /*----*/

    let grass = document.createElement('div');
    grass.style.position = 'absolute';
    grass.style.left = '0px';
    grass.style.bottom = '0px';
    grass.style.width = '100%';
    grass.style.height = '50%';
    grass.style.backgroundColor = 'rgb(0, 120, 0)';
    document.body.append(grass);

    /*----*/

    let road = document.createElement('div');
    road.style.position = 'absolute';
    road.style.left = '30%';
    road.style.bottom = '0%';
    road.style.width = '20%';
    road.style.height = '100%';
    road.style.clipPath = 'polygon(0 100%, 50% 50%, 100% 100%)';
    road.style.backgroundColor = 'rgb(0, 20, 0)'; 
    document.body.append(road);

    /*----*/

    let object001 = document.createElement('div');
    object001.style.position = 'absolute';
    object001.style.left = '400px';
    object001.style.top = '500px';
    object001.style.width = '20px';
    object001.style.height = '20px';
    object001.style.backgroundColor = 'tan';
    object001.style.cursor = 'pointer';
    object001.style.zIndex = '10000';

    object001.onclick = function(event)
    {
        /* get position */
        let objectRect = object001.getBoundingClientRect();

        console.log('X: ' + objectRect.x + ', Y: ' + objectRect.y);

        alert('X: ' + objectRect.x + ', Y: ' + objectRect.y);
    };

    document.body.append(object001);

    /*----*/

    let sun = document.createElement('div');
    sun.style.position = 'absolute';
    sun.style.left = '300px';
    sun.style.bottom = '400px';
    sun.style.width = '100px';
    sun.style.height = '100px';
    sun.style.borderRadius = "50%";
    sun.style.backgroundColor = 'yellow';
    sun.style.cursor = 'pointer';
    sun.style.zIndex = '10000';
    document.body.append(sun);

}());

/*
Result:
X: 400, Y: 500
*/
```

---

```javascript
javascript:(
/* createElement - Get link textContent - right click removes element */
function()
{
    function createInfoDiv()
    {
        let report = "";

        let theLinks = document.getElementsByTagName("a");

        for (let x = 0; x < theLinks.length; x++)
        {
            report += '<a href = " ' + theLinks[x] + ' " target = "_blank">' + theLinks[x].textContent + '</a>';

            report += "<hr>";
        }

        let ourDiv = document.createElement("div");
        ourDiv.id = "theDiv";
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.width = "300px";
        ourDiv.style.height = "200px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingBottom = "5px";
        ourDiv.style.paddingTop = "5px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.fontSize = 22 + "px";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.overflowY = "scroll";

        ourDiv.innerHTML = report;

        ourDiv.oncontextmenu = function()
        {
    document.getElementById("theDiv").remove();
        };

        document.body.append(ourDiv);
    }

    createInfoDiv();

}());

/* For example: we can search Google for the word News and then activate our script */

/*
The div is created on the page and the links of the page are shown in the div and are clickable.
The div is also scrollable.
*/

/*
Choose the sytax style that you like using more:

report += "<a href = ' " + theLinks[x] + " ' target = '_blank'>" + theLinks[x].textContent + "</a>";

report += '<a href = " ' + theLinks[x] + ' " target = "_blank">' + theLinks[x].textContent + '</a>';

report += '<a href = \'' + theLinks[x] + '\' target = "_blank"> '+theLinks[x].textContent+' </a>';

report += `<a href = "${theLinks[x]}" target = "_blank">${theLinks[x].textContent}</a>`;

*/
```

---

```javascript
javascript:(
/* createElement - Get URL when button is clicked, onmouseover, onmouseout */
function()
{
    function showUrl()
    {
        let ourButton = document.createElement("button");
        ourButton.style.position = "fixed";
        ourButton.style.right = 5 + "px";
        ourButton.style.top = 5 + "px";
        ourButton.style.borderRadius = 8 + "px";
        ourButton.style.paddingLeft = 10 + "px";
        ourButton.style.paddingRight = 10 + "px";
        ourButton.style.paddingBottom = 5 + "px";
        ourButton.style.paddingTop = 5 + "px";
        ourButton.style.zIndex = "1000";
        ourButton.style.background = "rgb(0, 0, 0)";
        ourButton.style.fontSize = 20 + "px";
        ourButton.style.fontWeight = "bold";
        ourButton.style.color = "rgb(255, 255, 255)";

        ourButton.onclick = function()
        {
              console.log(window.location.href);
            alert(window.location.href);
        };

        ourButton.onmouseover = function()
        {
              ourButton.style.borderColor = "aqua";
            ourButton.style.color = "aqua";
        };

        ourButton.onmouseout = function()
        {
              ourButton.style.borderColor = "white";
            ourButton.style.color = "white";
        };

        ourButton.innerHTML = "Show URL";

        document.body.append(ourButton);
    }

    showUrl();

}());

/* onmouseover the button changes style, onmouseout the button changes style again.
onclick it shows the url of the page in a console message and alert message box */
```

---


```javascript
javascript:(
/* createElement, Video pause button */
function()
{
    function videoPause()
    {
        let ourButton = document.createElement("button");
        ourButton.id = "theButton";
        ourButton.style.position = "absolute";
        ourButton.style.left = "100px";
        ourButton.style.top = "100px";
        ourButton.style.paddingLeft = 10 + "px";
        ourButton.style.paddingRight = 10 + "px";
        ourButton.style.paddingTop = 5 + "px";
        ourButton.style.paddingBottom = 5 + "px";
        ourButton.style.borderRadius = 8 + "px";
        ourButton.style.zIndex = "1000";
        ourButton.style.background = "rgb(0, 0, 0)";
        ourButton.style.fontSize = 20 + "px";
        ourButton.style.fontWeight = "bold";
        ourButton.style.color = "rgb(255, 255, 255)";
        ourButton.innerHTML = "Pause Button";

        ourButton.onmouseover = function()
        {
            ourButton.style.color = "rgb(0, 255, 255)";
        };

        ourButton.onmouseout = function()
        {
            ourButton.style.color = "rgb(255, 255, 255)";
        };

        ourButton.onclick = function()
        {
            let theVideo = document.querySelectorAll("video");

            theVideo.pause();
        };

        document.body.append(ourButton);

    }

    videoPause();

}());


/* When we have a video playing in our browser we can pause it using this button. */
```

---

```javascript
javascript:(
/* createElement, Video, Play, Pause Buttons */
function()
{
    function createPausePlayButtons()
    {
        let playButton = document.createElement("button");
        playButton.id = "playButton";
        playButton.style.position = "absolute";
        playButton.style.left = 100 + "px";
        playButton.style.top = 100 + "px";
        playButton.style.paddingLeft = 10 + "px";
        playButton.style.paddingRight = 10 + "px";
        playButton.style.paddingTop = 5 + "px";
        playButton.style.paddingBottom = 5 + "px";
        playButton.style.borderRadius = 8 + "px";
        playButton.style.zIndex = 1000;
       playButton.style.background = "rgb(0, 0, 0)";
        playButton.style.fontSize = 20 + "px";
        playButton.style.fontWeight = "bold";
       playButton.style.color = "rgb(255, 255, 255)";
        playButton.innerHTML = "Play Button";

        playButton.onmouseover = function()
        {
           playButton.style.color = "rgb(0, 255, 255)";
        };

        playButton.onmouseout = function()
        {
       playButton.style.color = "rgb(255, 255, 255)";
        };

        playButton.onclick = function()
        {
            let theVideo = document.querySelectorAll("video");

            theVideo.play();
        };

        document.body.append(playButton);

        /*----*/

        let pauseButton = document.createElement("button");
        pauseButton.id = "pauseButton";
        pauseButton.style.position = "absolute";
        pauseButton.style.left = 100 + "px";
        pauseButton.style.top = 150 + "px";
        pauseButton.style.paddingLeft = 10 + "px";
        pauseButton.style.paddingRight = 10 + "px";
        pauseButton.style.paddingTop = 5 + "px";
        pauseButton.style.paddingBottom = 5 + "px";
        pauseButton.style.borderRadius = 8 + "px";
        pauseButton.style.zIndex = 1000;
        pauseButton.style.background = "rgb(0, 0, 0)";
        pauseButton.style.fontSize = 20 + "px";
        pauseButton.style.fontWeight = "bold";
        pauseButton.style.color = "rgb(255, 255, 255)";
        pauseButton.innerHTML = "Pause Button";

        pauseButton.onmouseover = function()
        {
            pauseButton.style.color = "rgb(0, 255, 255)";
        };

        pauseButton.onmouseout = function()
        {
            pauseButton.style.color = "rgb(255, 255, 255)";
        };

        pauseButton.onclick = function()
        {
            let theVideo = document.querySelectorAll("video");

            theVideo.pause();
        };
        document.body.append(pauseButton);
    }
    createPausePlayButtons();

}());
```

---

```javascript
javascript:(
/* createElement Video, play, pause, back, forward, Mute, UnMute */
function()
{
    function createVideoControls()
    {
        let thePaddingLeft = 10;
        let thePaddingRight = 10;
        let thePaddingTop = 5;
        let thePaddingBottom = 5;
        let theMargin = 1;
        let theBorderRadius = 8;
        let theZIndex = 1000;
        let theFontSize = 16;
        let theTextColor = "rgb(255, 255, 255)";
        let theBackgroundColor = "rgba(0, 0, 0, 0.3)";
        let theBorderColor = "rgba(255, 255, 255, 0.3)";
        let theFontWeight = "bold";

        /*----*/

        let mainDiv = document.createElement("div");
        mainDiv.style.position = "absolute";
        mainDiv.style.left = 5 + "px";
        mainDiv.style.top = 70 + "px";
        mainDiv.style.display = "flex";
        mainDiv.style.flexDirection = "column";
        document.body.append(mainDiv);

        /*----*/

        let playButton = document.createElement("button");
        playButton.id = "playButton";
        playButton.style.paddingLeft = thePaddingLeft + "px";
        playButton.style.paddingRight = thePaddingRight + "px";
        playButton.style.paddingTop = thePaddingTop + "px";
        playButton.style.paddingBottom = thePaddingBottom + "px";
        playButton.style.margin = theMargin + "px";
        playButton.style.borderRadius = theBorderRadius + "px";
        playButton.style.borderColor = theBorderColor;
        playButton.style.zIndex = theZIndex;
        playButton.style.background = theBackgroundColor;
        playButton.style.fontSize = theFontSize + "px";
        playButton.style.fontWeight = theFontWeight;
        playButton.style.color = theTextColor;
        playButton.innerHTML = "Play";

        playButton.onmouseover = function()
        {
            playButton.style.color = "rgb(0, 255, 255)";
        };

        playButton.onmouseout = function()
        {
            playButton.style.color = theTextColor;
        };

        playButton.onclick = function()
        {
            let theVideo = document.querySelector("video");

            theVideo.play();
        };

        mainDiv.append(playButton);

        /*----*/

        let pauseButton = document.createElement("button");
        pauseButton.id = "pauseButton";
        pauseButton.style.paddingLeft = thePaddingLeft + "px";
        pauseButton.style.paddingRight = thePaddingRight + "px";
        pauseButton.style.paddingTop = thePaddingTop + "px";
        pauseButton.style.paddingBottom = thePaddingBottom + "px";
        pauseButton.style.margin = theMargin + "px";
        pauseButton.style.borderRadius = theBorderRadius + "px";
        pauseButton.style.borderColor = theBorderColor;
        pauseButton.style.zIndex = theZIndex;
        pauseButton.style.background = theBackgroundColor;
        pauseButton.style.fontSize = theFontSize + "px";
        pauseButton.style.fontWeight = theFontWeight;
        pauseButton.style.color = theTextColor;
        pauseButton.innerHTML = "Pause";

        pauseButton.onmouseover = function()
        {
            pauseButton.style.color = "rgb(0, 255, 255)";
        };

        pauseButton.onmouseout = function()
        {
            pauseButton.style.color = theTextColor;
        };

        pauseButton.onclick = function()
        {
            let theVideo = document.querySelector("video");

        theVideo.pause();
        };

        mainDiv.append(pauseButton);

        /*----*/

        let backButton = document.createElement("button");
        backButton.id = "backButton";
        backButton.style.paddingLeft = thePaddingLeft + "px";
        backButton.style.paddingRight = thePaddingRight + "px";
        backButton.style.paddingTop = thePaddingTop + "px";
        backButton.style.paddingBottom = thePaddingBottom + "px";
        backButton.style.margin = theMargin + "px";
        backButton.style.borderRadius = theBorderRadius + "px";
        backButton.style.borderColor = theBorderColor;
        backButton.style.zIndex = theZIndex;
        backButton.style.background = theBackgroundColor;
        backButton.style.fontSize = theFontSize + "px";
        backButton.style.fontWeight = theFontWeight;
        backButton.style.color = theTextColor;
        backButton.innerHTML = "Back";

        backButton.onmouseover = function()
        {
            backButton.style.color = "rgb(0, 255, 255)";
        };

        backButton.onmouseout = function()
        {
            backButton.style.color = theTextColor;
        };

        backButton.onclick = function()
        {
            let theVideo = document.querySelector("video");

            theVideo.currentTime += -2;
        };

        mainDiv.append(backButton);

        /*----*/

        let forwardButton = document.createElement("button");
        forwardButton.id = "forwardButton";
        forwardButton.style.paddingLeft = thePaddingLeft + "px";
        forwardButton.style.paddingRight = thePaddingRight + "px";
        forwardButton.style.paddingTop = thePaddingTop + "px";
        forwardButton.style.paddingBottom = thePaddingBottom + "px";
        forwardButton.style.margin = theMargin + "px";
        forwardButton.style.borderRadius = theBorderRadius + "px";
        forwardButton.style.borderColor = theBorderColor;
        forwardButton.style.zIndex = theZIndex;
        forwardButton.style.background = theBackgroundColor;
        forwardButton.style.fontSize = theFontSize + "px";
        forwardButton.style.fontWeight = theFontWeight;
        forwardButton.style.color = theTextColor;
        forwardButton.innerHTML = "Forward";

        forwardButton.onmouseover = function()
        {
            forwardButton.style.color = "rgb(0, 255, 255)";
        };

        forwardButton.onmouseout = function()
        {
            forwardButton.style.color = theTextColor;
        };

        forwardButton.onclick = function()
        {
            let theVideo = document.querySelector("video")[0];

            theVideo.currentTime += 2;
        };

        mainDiv.append(forwardButton);

        /*----*/

        let speedButton = document.createElement("button");
        speedButton.id = "speedButton";
        speedButton.style.paddingLeft = thePaddingLeft + "px";
        speedButton.style.paddingRight = thePaddingRight + "px";
        speedButton.style.paddingTop = thePaddingTop + "px";
        speedButton.style.paddingBottom = thePaddingBottom + "px";
        speedButton.style.margin = theMargin + "px";
        speedButton.style.borderRadius = theBorderRadius + "px";
        speedButton.style.borderColor = theBorderColor;
        speedButton.style.zIndex = theZIndex;
        speedButton.style.background = theBackgroundColor;
        speedButton.style.fontSize = theFontSize + "px";
        speedButton.style.fontWeight = theFontWeight;
        speedButton.style.color = theTextColor;
        speedButton.innerHTML = "Speed";

        speedButton.onmouseover = function()
        {
            speedButton.style.color = "rgb(0, 255, 255)";
        };

        speedButton.onmouseout = function()
        {
            speedButton.style.color = theTextColor;
        };

        speedButton.onclick = function()
        {
            let video = document.querySelector("video");

            let speedInput = prompt("Enter speed", "");

            video.playbackRate = parseFloat(speedInput);
        };

        mainDiv.append(speedButton);

        /*----*/

        let muteButton = document.createElement("button");
        muteButton.id = "muteButton";
        muteButton.style.paddingLeft = thePaddingLeft + "px";
        muteButton.style.paddingRight = thePaddingRight + "px";
        muteButton.style.paddingTop = thePaddingTop + "px";
        muteButton.style.paddingBottom = thePaddingBottom + "px";
        muteButton.style.margin = theMargin + "px";
        muteButton.style.borderRadius = theBorderRadius + "px";
        muteButton.style.borderColor = theBorderColor;
        muteButton.style.zIndex = theZIndex;
        muteButton.style.background = theBackgroundColor;
        muteButton.style.fontSize = theFontSize + "px";
        muteButton.style.fontWeight = theFontWeight;
        muteButton.style.color = theTextColor;
        muteButton.innerHTML = "Mute";

        muteButton.onmouseover = function()
        {
            muteButton.style.color = "rgb(0, 255, 255)";
        };

        muteButton.onmouseout = function()
        {
            muteButton.style.color = theTextColor;
        };

        muteButton.onclick = function()
        {
           document.querySelector("video").muted = true;
        };

        mainDiv.append(muteButton);

        /*----*/

        let unmuteButton = document.createElement("button");
        unmuteButton.id = "unmuteButton";
        unmuteButton.style.paddingLeft = thePaddingLeft + "px";
        unmuteButton.style.paddingRight = thePaddingRight + "px";
        unmuteButton.style.paddingTop = thePaddingTop + "px";
        unmuteButton.style.paddingBottom = thePaddingBottom + "px";
        unmuteButton.style.margin = theMargin + "px";
        unmuteButton.style.borderRadius = theBorderRadius + "px";
        unmuteButton.style.borderColor = theBorderColor;
        unmuteButton.style.zIndex = theZIndex;
        unmuteButton.style.background = theBackgroundColor;
        unmuteButton.style.fontSize = theFontSize + "px";
        unmuteButton.style.fontWeight = theFontWeight;
        unmuteButton.style.color = theTextColor;
        unmuteButton.innerHTML = "Unmute";

        unmuteButton.onmouseover = function()
        {
            unmuteButton.style.color = "rgb(0, 255, 255)";
        };

        unmuteButton.onmouseout = function()
        {
            unmuteButton.style.color = theTextColor;
        };

        unmuteButton.onclick = function()
        {
            document.querySelector("video").muted = false;
        };

        mainDiv.append(unmuteButton);
    }

    createVideoControls();

}());
```

---

```javascript
javascript:(
/* Show elements of a class name on https://CollegeOfScripting.weebly.com */
function()
{
    function showData()
    {
        let nameList = document.querySelectorAll(".buttonStyle");

        let theNames = [];

        for (let x = 0; x < nameList.length; x++)
        {
            nameList[x].style.borderColor = "rgb(0, 255, 255)";

            theNames += nameList[x].textContent;

            theNames += "\n";
        }

        return theNames.toString();
    }

    console.log(showData());

    alert(showData());

}());

/*
This Bookmarklet is designed to work ONLY on https://CollegeOfScripting.weebly.com
Right Click on the buttons, such as the JavaScript button and then
Choose Inspect Element

We see that the Element has a css style class called .buttonStyle
We use the dot syntax before the class name.
The css style class name is .buttonStyle
Inspecting an Element
After Right Clicking on the Button and choosing Inspect Element, the Inspector Opens and allows us to see the name of the class of that Button.
In this case, the buttons of this Weebly Website have a class called 
buttonStyle
Thus, we simply use that class name, when we want to reference only elements that use that class. This allows us to examine any webpage and inspect any element to find their class name, which therefore allows us the ability to reference any elements on the page that use that class.
*/
```

---

```javascript
Inspecting an Element

/* After Right Clicking on the button and choosing Inspect Element, the Inspector Opens and shows the name of the class of that button. In this case, the button of this Weebly Website has a class named buttonStyle */
```

---

```javascript
javascript:(
/* Solar Wind Speed - https://www.swpc.noaa.gov/ */
function()
{
    function getSolarWindSpeed()
    {
        let solarWindSpeed = document.querySelector("#WindSpeed").textContent;

        return solarWindSpeed;
    }

    function showData()
    {
        let solarWindSpeed = "Solar Wind Speed: " + getSolarWindSpeed() + " km/second";

        console.log(solarWindSpeed);
        alert(solarWindSpeed);
    }
    showData();

}());

/*
Solar Wind Speed: 354 km/second

When we go to https://www.swpc.noaa.gov and right click on the Solar Wind Speed and choose Inspect, we find out many things about the element, including the id, which we use in this script to get the textContent of that id.
*/
```

---

```javascript
javascript:(
/* Solar Wind Speed - https://www.swpc.noaa.gov - Timer */
function()
{
    function getSolarWindSpeed()
    {
        let solarWindSpeed = document.querySelector("#WindSpeed").textContent;

        return solarWindSpeed;
    }

    function showData()
    {
        let solarWindSpeed = "Solar Wind Speed: " + getSolarWindSpeed() + " km/second";

        console.log(solarWindSpeed);
    }

    showData();

    let theTimer = setInterval(function()
    {
        showData();
    }, 60 * 1000);

}());

/*
We go to https://www.swpc.noaa.gov and then activate this script.

This script will keep getting the Solar Wind Speed from the element id "WindSpeed" textContent. */
```

---

```javascript
javascript:(
/* Solar Wind Speed - https://www.swpc.noaa.gov - Timer - Array */
function()
{
    let solarWindArray = [];

    function getSolarWindSpeed()
    {
        let solarWindSpeed = document.querySelector("#WindSpeed").textContent;

        let date = new Date();

        let dateLocal = date.toLocaleString();

        return dateLocal + " - Solar Wind Speed: " + solarWindSpeed + " km/second";
    }

    /* push data into the array */
    solarWindArray.push(getSolarWindSpeed());

    console.log(JSON.stringify(solarWindArray));

    let theTimer = setInterval(function()
    {
      /* push data into the array on each iteration */
       solarWindArray.push(getSolarWindSpeed());

      console.log(JSON.stringify(solarWindArray));

    }, 60 * 1000);

}());

/*
When activated on https://www.swpc.noaa.gov this script will get the Solar Wind Speed every 1 minute and add the solar wind speed to the array, in addition to the date and time.

The first time that the script gathers the solar wind speed it looks like this:
["8/28/2023, 6:54:56 AM - Solar Wind Speed: 327 km/second"]

The second time that the script gathers the solar wind speed it looks like this:
["8/28/2023, 6:54:17 AM - Solar Wind Speed: 327 km/second","8/28/2023, 6:55:17 AM - Solar Wind Speed: 325 km/second"]
*/
```

---

```javascript
javascript:(
/* Solar Wind Speed - https://www.swpc.noaa.gov - Timer - Array of Objects -*/
function()
{
    let solarWindArray = [];

    function getSolarWindSpeed()
    {
        let solarWindSpeed = document.querySelector("#WindSpeed").textContent;

        let date = new Date();
        let dateLocal = date.toLocaleString();

        return {
            date: dateLocal,
            speed: solarWindSpeed
        };
    }

    /* push data into the array */
    solarWindArray.push(getSolarWindSpeed());

    console.log(JSON.stringify(solarWindArray));

    let theTimer = setInterval(function()
    {
      /* push data into array on each iteration */
    solarWindArray.push(getSolarWindSpeed());
   
   console.log(JSON.stringify(solarWindArray));
    }, 60 * 1000);

}());

/* When activated on https://www.swpc.noaa.gov script gets solar wind speed every 1 minute and add the solar wind speed to the array of objects, in addition to the date and time.

first time script gathers solar wind speed
[{"date":"8/28/2023, 7:15:49 AM","speed":"323"}]

second time script gathers solar wind speed
[{"date":"8/28/2023, 7:15:49 AM","speed":"323"},{"date":"8/28/2023, 7:16:49 AM","speed":"325"}]

third time script gathers solar wind speed
[{"date":"8/28/2023, 7:15:49 AM","speed":"323"},{"date":"8/28/2023, 7:16:49 AM","speed":"325"},{"date":"8/28/2023, 7:17:49 AM","speed":"324"}]

fourth time script gathers solar wind speed
[{"date":"8/28/2023, 7:15:49 AM","speed":"323"},{"date":"8/28/2023, 7:16:49 AM","speed":"325"},{"date":"8/28/2023, 7:17:49 AM","speed":"324"},{"date":"8/28/2023, 7:18:49 AM","speed":"323"}]
*/
```

---

```javascript
javascript:(
/* Timer - Every 5 Seconds, Trigger function */
function()
{
    let counter = 0;

    function showCounterData()
    {
        console.log(counter);

        counter += 1;
    }

    setInterval(showCounterData, 5000);

}());
```

---

```javascript
javascript:(
/* Timer - Every 1 Second, Count Up */
function()
{
    let counter = 0;

    function updateIt()
    {
        counter += 1;

        return counter;
    }

    function createCounterDiv()
    {
        let ourDiv = document.createElement("div");
        ourDiv.id = "theDiv";
        ourDiv.style.position = "absolute";
        ourDiv.style.left = 20 + "px";
        ourDiv.style.top = 150 + "px";
        ourDiv.style.width = 100 + "px";
        ourDiv.style.height = 25 + "px";
        ourDiv.style.padding = 10 + "px";
        ourDiv.style.backgroundColor = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = 20 + "px";
        ourDiv.style.color = "rgb(255, 255, 255)";
        ourDiv.innerHTML = updateIt();
        document.body.append(ourDiv);
    }

    setInterval(createCounterDiv, 1000);

}());
```

---

```javascript
javascript:(
/* Timer - Every 1 Second, Count Down, clearInterval */
function()
{
    let counter = prompt("Enter Count Down Start Time");

    function countDown()
    {
        counter -= 1;

        if (counter == 0)
        {
            clearInterval(ourTimer);
        }
        return counter;
    }

    function createCounterDiv()
    {
        let ourDiv = document.createElement("div");
        ourDiv.id = "theDiv";
        ourDiv.style.position = "absolute";
        ourDiv.style.left = 100 + "px";
        ourDiv.style.top = 100 + "px";
        ourDiv.style.padding = 10 + "px";
        ourDiv.style.borderRadius = 8 + "px";
     ourDiv.style.backgroundColor = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = 25 + "px";
        ourDiv.style.fontWeight = "bold";
        ourDiv.style.color = "rgb(255, 255, 255)";
        ourDiv.innerHTML = countDown();
        document.body.append(ourDiv);
    }

    let ourTimer = setInterval(createCounterDiv, 1000);

}());
```

---

```javascript
javascript:(
/* Array of Objects - JSON.stringify */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },
        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showData(whichArray)
    {
        console.log(whichArray);

        console.log(JSON.stringify(whichArray));
    }

    showData(people);

}());

/*
Here is the Output

console.log(people);
0: Object { name: "Melissa", date: "1980/03/01" }

1: Object { name: "Tabitha", date: "1983/04/05" }

console.log(JSON.stringify(people));
[{"name":"Melissa","date":"1980/03/01"},{"name":"Tabitha","date": "1983/04/05"}]
*/
```

---

```javascript
javascript:(
/* Array of Objects - for loop */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showData(whichArray)
    {
        for (let x = 0; x < whichArray.length; x++)
        {
            console.log(whichArray[x]);
        }
    }

    showData(people);

}());

/*

Object { name: "Melissa", date: "1980/03/01" }

Object { name: "Tabitha", date: "1983/04/05" }

*/
```

---

```javascript
javascript:(
/* Array of Objects - while loop */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showData(whichArray)
    {
        let x = 0;

        while (x < whichArray.length)
        {
            console.log(whichArray[x]);

            x += 1;
        }
    }

    showData(people);

}());

/*
{ name: 'Melissa', date: '1980/03/01' }
{ name: 'Tabitha', date: '1983/04/05' }
*/
```

---

```javascript
javascript:(
/* Array of Objects - Names only */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showData(whichArray)
    {
        let x = 0;

        while (x < whichArray.length)
        {
            console.log(whichArray[x].name);

            x += 1;
        }
    }

    showData(people);

}());

/*
Melissa
Tabitha
*/
```

---

```javascript
javascript:(
/* Array of Objects - Dates only */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    let x = 0;

    while (x < people.length)
    {
        console.log(people[x].date);

        x += 1;
    }

}());

/*
1980/03/01
1983/04/05
*/
```

---

```javascript
javascript:(
/* Array of Objects - for loop */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },
        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showData(whichArray)
    {
        let output = 'Name\t\tDate\n';

        for (let x = 0; x < whichArray.length; x++)
        {
            output = output + whichArray[x].name;

            output += "\t";

            output += whichArray[x].date;

            output += "\n";
        }

        console.log(output);

        alert(output);
    }

    showData(people);

}());

/*
Name       Date
Melissa   1980/03/01
Tabitha    1983/04/05
*/
```

---

```javascript
javascript:(
/* Array of Objects - First Letter Initial */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showFirstLetterOfName(whichArray)
    {
        let x = 0

        while (x < whichArray.length)
        {
            console.log(whichArray[x].name[0]);

            x += 1;
        }
    }

    showFirstLetterOfName(people);

}());

/*
M
T
*/
```

---

```javascript
javascript:(
/* Array of Objects - First 3 Letter Initials  */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showData(whichArray)
    {
        let x = 0;

        while (x < whichArray.length)
        {
            console.log(whichArray[x]['name'][0] +
            whichArray[x]['name'][1] +
            whichArray[x]['name'][2]);

            x += 1;
        }
    }

    showData(people);

}());

/*
Mel
Tab
*/
```

---

```javascript
javascript:(
/* Array of Objects - Filter by Year */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        },

        {
            name: 'Jane',
            date: '1987/08/12'
        }
    ];

    function sortByDate(whichArray, direction) 
    {
        if (direction == "up")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(a.date) - new Date(b.date);
            });
        }

        else if (direction == "down")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(b.date) - new Date(a.date);
            });
        }
    }

    function showData(whichArray)
    {
        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].date >= "1981")
            {
                console.log(whichArray[x].name + "\n" + whichArray[x].date); 
            }
        }
    }

    sortByDate(people, "up");

    showData(people);

}());

/*
Tabitha
1983/04/05

Jane
1987/08/12
*/
```

---

```javascript
javascript:(
/* Array of Objects - Filter by Year and Month */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        },

        {
            name: 'Joan',
            date: '1983/05/17'
        },

        {
            name: 'Jane',
            date: '1987/08/12'
        }
    ];

    function sortByDate(whichArray, direction) 
    {
        if (direction == "up")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(a.date) - new Date(b.date);
            });
        }

        else if (direction == "down")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(b.date) - new Date(a.date);
            });
        }
    }

    function showData(whichArray)
    {
        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].date >= "1983/05")
            {
                console.log(whichArray[x].name + "\n" + whichArray[x].date); 
            }
        }
    }

    sortByDate(people, "up");

    showData(people);

}());

/*
Joan
1983/05/17

Jane
1987/08/12
*/
```

---

```javascript
javascript:(
/* Array of Objects - Filter by Year, Month and Day */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        },

        {
            name: 'Joan',
            date: '1983/05/17'
        },

        {
            name: 'Jane',
            date: '1987/08/12'
        }
    ];

    function sortByDate(whichArray, direction) 
    {
        if (direction == "up")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(a.date) - new Date(b.date);
            });
        }

        else if (direction == "down")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(b.date) - new Date(a.date);
            });
        }
    }

    function showData(whichArray)
    {
        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].date == "1983/04/05")
            {
                console.log(whichArray[x].name + "\n" + whichArray[x].date); 
            }
        }
    }

    sortByDate(people, "up");

    showData(people);

}());

/*
Tabitha
1983/04/05
*/
```

---

```javascript
javascript:(
/* Array of Objects - Filter by Year, Month, Day and Time */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01 12:00PM',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05 2:57PM'
        },

        {
            name: 'Jennifer',
            date: '1983/05/17 3:45PM'
        },

        {
            name: 'Joan',
            date: '1983/05/17 4:07PM'
        },

        {
            name: 'Jane',
            date: '1987/08/12 8:23PM'
        }
    ];

    function sortByDate(whichArray, direction) 
    {
        if (direction == "up")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(a.date) - new Date(b.date);
            });
        }

        else if (direction == "down")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(b.date) - new Date(a.date);
            });
        }
    }

    function showData(whichArray)
    {
        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].date >= "1983/05/17 3:50PM")
            {
                console.log(whichArray[x].name + "\n" + whichArray[x].date); 
            }
        }
    }

    sortByDate(people, "up");

    showData(people);
}());

/*
Joan
1983/05/17 4:07PM
Jane
1987/08/12 8:23PM
*/
```

---

```javascript
javascript:(
/* Array of Objects - Filter Date A to Date B, YYYY/MM/DD */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01 12:00PM',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05 2:57PM'
        },

        {
            name: 'Jennifer',
            date: '1983/05/17 3:45PM'
        },

        {
            name: 'Joan',
            date: '1983/05/17 4:07PM'
        },

        {
            name: 'Jane',
            date: '1987/08/12 8:23PM'
        }
    ];

    function sortByDate(whichArray, direction) 
    {
        if (direction == "up")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(a.date) - new Date(b.date);
            });
        }

        else if (direction == "down")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(b.date) - new Date(a.date);
            });
        }
    }

    function showData(whichArray)
    {
        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].date >= "1983/05/17 3:45PM" && whichArray[x].date <= "1983/05/17 4:00PM")
            {
                console.log(whichArray[x].name + "\n" + whichArray[x].date); 
            }
        }
    }

    sortByDate(people, "up");

    showData(people);

}());

/*
Jennifer
1983/05/17 3:45PM
*/
```

---

```javascript
javascript:(
/* Array of Objects - Special way to show keys and values */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '2021/04/01',
        },
        {
            name: 'Tabitha',
            date: '2021/04/05'
        }
    ];

    for (let x = 0; x < people.length; x++)
    {
        let person = people[x];

        let entries = Object.entries(person);

        for (let m = 0; m < entries.length; m++)
        {
            let key = entries[m][0];

            let value = entries[m][1];

            console.log(key + ': ' + value);
        }
    }

}());

/*
we use a for loop to iterate through this array and access both the key and value for each property in the object

name: Melissa
date: 2021/04/01
name: Tabitha
date: 2021/04/05

*/
```

---

```javascript
javascript:(
/* Array of Objects with Nested Arrays */
function()
{
    function showData()
    {
        let data =
        [
            {
                name: 'James',
                age: 30,
                hobbies: ['Gardening', 'Gaming']
            },

            {
                name: 'Joan',
                age: 25,
                hobbies: ['Hiking', 'Painting']
            }
        ];

        let message = 'Array of Objects:\n';

        for (let x = 0; x < data.length; x++)
        {
            let person = data[x];

            message += 'Name: ' + person.name +
', Age: ' + person.age + ', Hobbies: [' + person.hobbies.join(', ') + ']\n';
        }

        console.log(message);

        alert(message);
    }

    showData();

}());
```

---

```javascript
javascript:(
/* Array of Objects - Show Data on Rows of Divs */
function()
{
    function showData()
    {
        let data =
        [
            {
                name: 'Item 1',
                description: 'Description 1'
            },

            {
                name: 'Item 2',
                description: 'Description 2'
            },

            {
                name: 'Item 3',
                description: 'Description 3'
            },

            {
                name: 'Item 4',
                description: 'Description 4'
            },

            {
                name: 'Item 5',
                description: 'Description 5'
            },

            {
                name: 'Item 6',
                description: 'Description 6'
            },

            {
                name: 'Item 7',
                description: 'Description 7'
            },

            {
                name: 'Item 8',
                description: 'Description 8'
            },

            {
                name: 'Item 9',
                description: 'Description 9'
            },
        ];

        /* create a container for the rows of divs */
        let container = document.createElement('div');
        container.style.position = "absolute";
        container.style.left = 10 + "px";
        container.style.top = 10 + "px";
        container.style.maxWidth = '800px';
        container.style.padding = '10px';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.justifyContent = 'space-between';
        document.body.append(container);

        /* function to create a div for each object */
        function createDivForObject(object)
        {
            let dataDiv = document.createElement('div');
            dataDiv.style.width = '30%';
            dataDiv.style.paddingLeft = '10px';
            dataDiv.style.paddingRight = '10px';
            dataDiv.style.paddingBottom = '5px';
            dataDiv.style.marginLeft = '1px';
            dataDiv.style.marginRight = '1px';
            dataDiv.style.marginBottom = '7px';
            dataDiv.style.marginTop = '7px';
            dataDiv.style.border = '1px solid';
            dataDiv.style.borderColor = 'rgb(255, 255, 255)';

            dataDiv.innerHTML = '<h3>' + object.name + '</h3>' + '<p>' + object.description + '</p>';

            container.append(dataDiv);
        }

        /* create divs for each object in the array */
        for (let x = 0; x < data.length; x++)
        {
            createDivForObject(data[x]);
        }
    }

    showData();

}());
```

---

```javascript
javascript:(
/* Array of Objects - map, filter, reduce - Finds Ages Over Specified Age */
function()
{
    function showNamesOverSpecifiedAge(whichAge)
    {
        let data =
        [
            {
                name: 'John',
                age: 30
            },
            {
                name: 'Jane',
                age: 25
            },
            {
                name: 'James',
                age: 35
            },
            {
                name: 'Alice',
                age: 28
            },
            {
                name: 'Joan',
                age: 40
            }
        ];

        /* map to extract names */
        let names = [];

        for (let x = 0; x < data.length; x++)
        {
            names.push(data[x].name);
        }
        console.log('Mapped Names:', names);

        /*----*/

        /* filter to find people over 30 */
        let ageArray = [];

        for (let x = 0; x < data.length; x++)
        {
            if (data[x].age >= whichAge)
            {
                ageArray.push(data[x]);
            }
        }
        console.log('People Over ' + whichAge + ' Years Old:', ageArray);

        /* reduce to calculate total age */
        let totalAge = 0;

        for (let x = 0; x < data.length; x++)
        {
            totalAge += data[x].age;
        }

        console.log('Total Age:', totalAge);

        /*----*/

        /* show each item */
        for (let x = 0; x < data.length; x++)
        {
            console.log('Name:', data[x].name, '| Age:', data[x].age);
        }
    }
    showNamesOverSpecifiedAge(30);

}());
```

---

```javascript
javascript:(
/* Array of Objects - Emoji Fun */
function()
{
    let funObjects =
    [
        {
            name: "Smiling Face",
            description: "A face with a big smile 😃",
        },

        {
            name: "Big Hat",
            description: "A big hat 🎩",
        },

        {
            name: "SunShades",
            description: "A pair of sunshades 😎",
        },
    ];

    let message = "Fun Objects:\n\n";

    for (let x = 0; x < funObjects.length; x++)
    {
        message += "Name: " + funObjects[x].name + "\n";

        message += "Description: " + funObjects[x].description + "\n\n";
    }

    console.log(message);

    alert(message);

}());
```

---

```javascript
javascript:(
/* Array of Objects - Random Object – Programming Languages */
function()
{
    let programmingFacts =
    [
        {
            name: "C",
            fact: "Invented in 1972",
        },
        {
            name: "C++",
            fact: "Invented in 1985",
        },
        {
            name: "JavaScript",
            fact: "Invented in 1995",
        } 
    ];

    function generateRandomFact(whichArray)
    {
        let randomIndex = Math.floor(Math.random() * whichArray.length);

        let randomFact = whichArray[randomIndex];

        let message = randomFact.name + "\n" + randomFact.fact + "\n";

        console.log(message);

        alert(message);
    }

    generateRandomFact(programmingFacts);

}());
```

---

```javascript
javascript:(
/* Array of Objects - Random Object - Periodic Elements */
function()
{
    let periodicTable =
    [
        {
            symbol: "H",
            name: "Hydrogen",
            atomicNumber: 1,
        },

        {
            symbol: "He",
            name: "Helium",
            atomicNumber: 2,
        },

        {
            symbol: "Li",
            name: "Lithium",
            atomicNumber: 3,
        },

        {
            symbol: "Be",
            name: "Beryllium",
            atomicNumber: 4,
        }
    ];

    function generateRandomFact(whichArray)
    {
        let randomIndex = Math.floor(Math.random() * whichArray.length);

        let randomFact = whichArray[randomIndex];

        let message = randomFact.symbol + "\n" + randomFact.name + "\n" + randomFact.atomicNumber;

        console.log(message);

        alert(message);
    }

    generateRandomFact(periodicTable);

}());
```

---

```javascript
javascript:(
/* Array of Objects - Calculate the Average Score */
function()
{
    function calculateAverageScore()
    {
        let students =
        [
            {
                name: "Alice",
                score: 85
            },

            {
                name: "Bob",
                score: 92
            },

            {
                name: "James",
                score: 78
            },

            {
                name: "David",
                score: 88
            },

            {
                name: "Jennifer",
                score: 95
            },
        ];

        function calculateAverage(scores)
        {
            let total = 0;

            for (let x = 0; x < scores.length; x++)
            {
                total += scores[x].score;
            }

            return total / scores.length;
        }

        /* calculate the average score */
        let averageScore = calculateAverage(students);

        /* display the result */
        alert("Average Exam Score: " + averageScore.toFixed(2));
    }

    calculateAverageScore();

}());
```

---

```javascript
javascript:(
/* Array of Objects - Calculate Average Score, Standard Deviation */
function()
{
    let students =
    [
        {
            name: "Alice",
            score: 85
        },

        {
            name: "Bob",
            score: 92
        },

        {
            name: "Jennifer",
            score: 78
        },

        {
            name: "David",
            score: 88
        },

        {
            name: "Joan",
            score: 95
        },
    ];

    function calculateAverage(scores)
    {
        let total = 0;

        for (let x = 0; x < scores.length; x++)
        {
            total += scores[x].score;
        }

        return total / scores.length;
    }

    function calculateStandardDeviation(scores)
    {
        let average = calculateAverage(scores);

        let variance = 0;

        for (let x = 0; x < scores.length; x++)
        {
            variance += Math.pow(scores[x].score - average, 2);
        }

        let stdDeviation = Math.sqrt(variance / scores.length);

        return stdDeviation;
    }

    /* calculate average score and standard deviation */
    let averageScore = calculateAverage(students);

    let standardDeviation = calculateStandardDeviation(students);

    /* display the results */
    alert("Average Score: " + averageScore.toFixed(2) + "\nStandard Deviation: " + standardDeviation.toFixed(2));

}());
```

---

```javascript
javascript:(
/* Array of Objects - Find Max/Min Temperature */
function()
{
    function calculateMinMaxTemperature()
    {
        let cities =
        [
            {
                name: "New York",
                temperature: 90
            },

            {
                name: "Los Angeles",
                temperature: 82
            },

            {
                name: "Chicago",
                temperature: 76
            },

            {
                name: "Boston",
                temperature: 95
            },

            {
                name: "Denver",
                temperature: 87
            },
        ];

        function findMaxTemperature(whichArray)
        {
            let max = whichArray[0].temperature;

            for (let x = 1; x < whichArray.length; x++)
            {
                if (whichArray[x].temperature > max)
                {
                    max = whichArray[x].temperature;
                }
            }
            return max;
        }

        function findMinTemperature(whichArray)
        {
            let min = whichArray[0].temperature;

            for (let x = 1; x < whichArray.length; x++)
            {
                if (whichArray[x].temperature < min)
                {
                    min = whichArray[x].temperature;
                }
            }
            return min;
        }

        /* find the maximum and minimum temperatures */
        let maxTemperature = findMaxTemperature(cities);

        let minTemperature = findMinTemperature(cities);

        /* show the results */
        alert("Maximum Temperature: " + maxTemperature + "°F\nMinimum Temperature: " + minTemperature + "°F");
    }

    calculateMinMaxTemperature();

}());
```

---

```javascript
javascript:(
/* Array of Objects - Calculate Sales Total */
function()
{
    function calculateSalesTotal()
    {
        let products =
        [
            {
                name: "Store A",
                sales: 250
            },
            {
                name: "Store B",
                sales: 180
            },
            {
                name: "Store C",
                sales: 320
            },
            {
                name: "Store D",
                sales: 420
            },
        ];

        function calculateTotalSales(salesData)
        {
            let total = 0;

            for (let x = 0; x < salesData.length; x++)
            {
                total += salesData[x].sales;
            }

            return total;
        }

        /* calculate the total sales */
        let totalSales = calculateTotalSales(products);

        return "Total Sales: $" + totalSales.toFixed(2);
    }

    /* display the result */
    console.log(calculateSalesTotal());

    alert(calculateSalesTotal());

}());
```

---

```javascript
javascript:(
/* Array of Objects - Count occurrences of each item */
function()
{
    let food =
    [
        {
            name: "Apple",
            quantity: 3
        },

        {
            name: "Banana",
            quantity: 2
        },

        {
            name: "Strawberry",
            quantity: 4
        },

        {
            name: "Apple",
            quantity: 2
        },

        {
            name: "Pear",
            quantity: 3
        },

        {
            name: "Banana",
            quantity: 1
        },
    ];

    function countItemOccurrences(whichArray)
    {
        let itemCounts = {};

        for (let x = 0; x < whichArray.length; x++)
        {
            let itemName = whichArray[x].name;

            if (itemCounts[itemName])
            {
                itemCounts[itemName] += whichArray[x].quantity;
            }
            else
            {
                itemCounts[itemName] = whichArray[x].quantity;
            }
        }
        return itemCounts;
    }

    /* count the occurrences of each item */
    let itemOccurrences = countItemOccurrences(whichArray);

    /* display the results */
    let message = "Item Occurrences:\n\n";

    let itemKeys = Object.keys(itemOccurrences);

    for (let x = 0; x < itemKeys.length; x++)
    {
        let item = itemKeys[x];
message += item + ": " + itemOccurrences[item] + "\n";
    }

    console.log(message);

    alert(message);

}());

/*

Item Occurrences:

Apple: 5
Banana: 3
Strawberry: 4
Pear: 3

*/
```

---

```javascript
javascript:(
/* Array of Objects - push */
function()
{
    let people =
    [
        {
            name: "Jane",
            eyeColor: "Brown",
        },
        {
            name: "Jennifer",
            eyeColor: "Blue",
        }
    ];

    /* create a new person object */
    let newPerson =
    {
        name: "Melissa",
        eyeColor: "Green",
    };

    /* push adds new person to people array */
    people.push(newPerson);

    /* display the updated people array */
    console.log(people);

}());
```

---
