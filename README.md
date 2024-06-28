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

```javascript
javascript:(
/* Array of Objects - push with prompt */
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
    let newPerson = {};

    /* ask the person their name */
    newPerson.name = prompt("Enter Name:");

    /* ask the person their eye color */
    newPerson.eyeColor = prompt("Enter Eye Color:");

    /* push adds new person to people array */
    people.push(newPerson);

    /* show updated people array */
    console.log(people);

}());
```

---

```javascript
javascript:(
/* Links - List and Count */
function()
{
    function listLinksAndCount()
    {
        let links = document.links;

        let linkCount = links.length;

        if (linkCount === 0)
        {
            alert('No links found on the page');
        }
        else
        {
            let linkSources = [];

            for (let x = 0; x < linkCount; x++)
            {
                linkSources.push(links[x].href);
            }

            let data = 'Total Links: ' +
            linkCount + '\n\n' +
            'Link Sources: ' +
            linkSources.join('\n');

            console.log(data);

            alert(data);
        }
    }

    listLinksAndCount();

}());
```

---

```javascript
javascript:(
/* Element - List and Count Specified Type */
function()
{
    function listAndCount(elementType)
    {
        let elements = document.getElementsByTagName(elementType);

        let elementCount = elements.length;

        if (elementCount === 0)
        {
            alert('No ' + elementType + 's found on this page');
        }
        else
        {
            let elementContents = [];

            for (let x = 0; x < elementCount; x++)
            {
elementContents.push(elements[x].textContent);
            }

            let data = 'Total ' +
            elementType + 's: ' +
            elementCount + '\n\n' +
            elementType + ' ' +
            'Contents:' + '\n' +
            elementContents.join('\n');

            console.log(data);
            alert(data);
        }
    }

    listAndCount('a');

}());
```

---

```javascript
javascript:(
/* Mouse Arrow Effect - Circles */
function()
{
    function changeMouseArrow()
    {
        let theEffect = document.createElement('style');

        theEffect.innerText = `
     * {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="transparent"/><circle cx="12" cy="12" r="6" stroke="white" stroke-width="2" fill="transparent"/><circle cx="12" cy="12" r="2" fill="white"/></svg>'), auto !important;
        }`;

        document.head.append(theEffect);
    }

    changeMouseArrow();

}());
```

---

```javascript
javascript:(
/* Animate Words Typing Effect */
function()
{
    function animateText()
    {
        let text = "Hi Everyone";
        let x = 0;
        let animationSpeed = 400;

        let textDiv = document.createElement("div");
        textDiv.style.position = "fixed";
        textDiv.style.top = "50%";
        textDiv.style.left = "50%";
        textDiv.style.transform = "translate(-50%, -50%)";
        textDiv.style.fontSize = "25px";
        document.body.append(textDiv);

        let animation = setInterval(function()
        {
            if (x < text.length)
            {
                textDiv.textContent = text.substring(0, x + 1);

                x++;
            }
            else
            {
                clearInterval(animation);
            }
        }, animationSpeed);
    }

    animateText();

}());

/*
displays a text of "Hi Everyone" with an animation. Each letter appears one by one.
*/
```

---

```javascript
javascript:(
/* Detect which Web Browser is being used */
function()
{
    function detectWebBrowser()
    {
        if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1)
        {
            return 'You are using Firefox';
        }
        
        if (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1)
        {
            return 'You are using Chrome';
        }
        
        if (navigator.userAgent.toLowerCase().indexOf('safari') !== -1)
        {
            return 'You are using Safari';
        }

        /* if none of the above, display a generic message */
        return 'No known browser detected';
    }

    console.log(detectWebBrowser());

    alert(detectWebBrowser());

}());
```

---

```javascript
javascript:(
/* Pythagorean Theorem */
function()
{
    /* create a function to calculate the hypotenuse length */
    function calculateHypotenuse(a, b)
    {
        return Math.sqrt(a * a + b * b);
    }

    /* create a function to display the result */
    function displayResult(a, b, c)
    {
        alert(
            "Side A: " + a + "\n" +
            "Side B: " + b + "\n" +
            "Hypotenuse C: " + c.toFixed(2)
        );
    }

    /* prompt the user for the lengths of side A and side B */
    let sideA = parseFloat(prompt("Enter the length of side A:"));

    let sideB = parseFloat(prompt("Enter the length of side B:"));

    /* check if the input is valid */
    if (isNaN(sideA) || isNaN(sideB))
    {
        alert("Enter only valid numbers");
    }
    else
    {
        /* calculate hypotenuse with the Pythagorean Theorem */
        let hypotenuse = calculateHypotenuse(sideA, sideB);

        /* display the result */
        displayResult(sideA, sideB, hypotenuse);
    }

}());
```

---

```javascript
javascript:(
/* Calculate Factorial */
function()
{
    /* create a function to calculate the factorial */
    function calculateFactorial(whichNumber)
    {
        if (whichNumber < 0)
        {
            return "The factorial is not defined for negative numbers";
        }
        else if (whichNumber === 0)
        {
            return 1;
        }
        else
        {
            let factorial = 1;

            for (let x = 1; x <= whichNumber; x++)
            {
                factorial *= x;
            }

            return factorial;
        }
    }

    /* prompt the user for a number */
    let number = parseInt(prompt("Enter a non-negative integer to calculate its factorial:"));

    /* check if the input is valid */
    if (isNaN(number) || number < 0)
    {
        alert("Enter a non-negative integer");
    }
    else
    {
        /* calculate the factorial */
        let factorialResult = calculateFactorial(number);

        /* display the result */
        alert("Factorial of " + number + " is: " + factorialResult);
    }

}());
```

---

```javascript
javascript:(
/* Calculate Circle Circumference and Area */
function()
{
    function calculateCircleProperties()
    {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));

        if (!isNaN(radius) && radius >= 0)
        {
            let area = Math.PI * Math.pow(radius, 2);

            let circumference = 2 * Math.PI * radius;

            alert(
                "Radius: " + radius.toFixed(2) + "\n" +
                "Area: " + area.toFixed(2) + "\n" +
                "Circumference: " + circumference.toFixed(2)
            );
        }
        else
        {
            alert("Enter a valid positive number for the radius.");
        }
    }

    calculateCircleProperties();

}());
```

---

```javascript
javascript:(
/* Button Beep Sound using Oscillator */
function()
{
    /* create a button element */
    let button = document.createElement('button');
    button.textContent = 'Click me for a beep';

    /* create a new AudioContext */
    let AudioContext = window.AudioContext || window.webkitAudioContext;

    let audioContext = new AudioContext();

    /* add click event to play the beep sound */
    button.addEventListener('click', function()
    {
      /* create oscillator node for the beep sound */
        let oscillator = audioContext.createOscillator();

        oscillator.type = 'sine';

        /* frequency of the beep sound */
        oscillator.frequency.value = 1000;

   oscillator.connect(audioContext.destination);

        oscillator.start();

        setTimeout(function()
        {
            oscillator.stop();
        }, 100);
    });

    /* append the button to the body */
    document.body.append(button);

}());
```

---

```javascript
javascript:(
/* Draggable Square */
function()
{
    function createDraggableSquare()
    {
        let square = document.createElement('div');
        square.style.position = 'absolute';
        square.style.left = '100px';
        square.style.top = '100px';
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.backgroundColor = 'aqua';
        square.style.cursor = 'move';

    /* initialize variables for tracking drag state */
        let isDragging = false;
        let offsetX;
        let offsetY;

        /* mouse down event and start dragging */
        square.addEventListener('mousedown', function(event)
        {
            isDragging = true;

            offsetX = event.clientX - square.getBoundingClientRect().left;

            offsetY = event.clientY - square.getBoundingClientRect().top;
        });

        /* mouse up event and stop dragging */
        window.addEventListener('mouseup', function()
        {
            isDragging = false;
        });

    /* mouse move event and update square pos */
        window.addEventListener('mousemove', function(event)
        {
            if (isDragging)
            {
                let x = event.clientX - offsetX;
                let y = event.clientY - offsetY;

            /* make square stay within the viewport */
                x = Math.min(Math.max(x, 0), window.innerWidth - 50);

                y = Math.min(Math.max(y, 0), window.innerHeight - 50);

                square.style.left = x + 'px';
                square.style.top = y + 'px';
            }
        });

        document.body.append(square);
    }

    createDraggableSquare();

}());
```

---

```javascript
javascript:(
/* Drag any element on any webpage */
function()
{
    function makePageElementsDraggable()
    {
        let dragItem = null;
        let offsetX;
        let offsetY;

    document.addEventListener('mousedown', function(e)
        {
            dragItem = e.target;

            offsetX = e.clientX - dragItem.getBoundingClientRect().left;

            offsetY = e.clientY - dragItem.getBoundingClientRect().top;

            dragItem.style.position = 'absolute';
document.body.append(dragItem);
        });

    document.addEventListener('mousemove', function(e)
        {
            if (dragItem)
            {
                dragItem.style.left = e.clientX - offsetX + 'px';

                dragItem.style.top = e.clientY - offsetY + 'px';
            }
        });

        document.addEventListener('mouseup', function()
        {
            dragItem = null;
        });
    }

    makePageElementsDraggable();

}());
```

---

```javascript
javascript:(
/* Newton's First Law of Motion - The Law of Inertia.*/
function()
{
    function createMovingSquare()
    {
        let box = document.createElement("div");
        box.style.position = "absolute";
        box.style.top = "50px";
        box.style.left = "50px";
        box.style.width = "100px";
        box.style.height = "100px";
        box.style.backgroundColor = "aqua";
        document.body.append(box);

        /* starting velocity */
        let velocity = 1;

        function animate()
        {
            /* move the box horizontally */
            box.style.left = parseInt(box.style.left) + velocity + "px";

            /* check if box has reached right edge */
            if (parseInt(box.style.left) + parseInt(box.style.width) >= window.innerWidth)
            {
                /* reverse direction */
                velocity = -1;
            }

            /* check if box has reached left edge */
            if (parseInt(box.style.left) <= 0)
            {
                /* reverse direction */
                velocity = 1;
            }
        }

        let animationFrameId001;

        function gameLoop()
        {
            animate();

            animationFrameId001 = requestAnimationFrame(gameLoop);
        }

        gameLoop();
    }

    createMovingSquare();

}());

/*
Newton's First Law of Motion - an object will keep going in its current state of motion unless an external force acts on it.

In this script, the object continues moving freely until it encounters the screen's edges.

When it hits a wall, it changes direction by bouncing off with an equal and opposite force to its original motion.
*/
```

---

```javascript
javascript:(
/* Calculate Distance of Galactus to Earth */
function()
{
    function calculateGalactusDistanceToEarth()
    {
        /* start distance of Galactus to Earth */
        let distance = 1000000; /* miles */

        /* how fast Galactus is traveling */
        let speed = 10000; /* mph */

        /* how often to update the distance */
        let updateTime = 1 * 1000;

        function updateDistance()
        {
            /* update distance */
            distance -= speed / 60;

            if (distance <= 0)
            {
                document.getElementById("galactus-update").innerHTML = "Galactus has arrived!";

                clearInterval(interval);
            }
            else
            {
                document.getElementById("galactus-update").innerHTML = "Galactus is " + distance.toFixed(2) + " miles away.";
            }
        }

        /* create a div element for the updates */
        let updateDiv = document.createElement("div");
        updateDiv.id = "galactus-update";
        updateDiv.style.position = "fixed";
        updateDiv.style.right = "10px";
        updateDiv.style.bottom = "10px";
        updateDiv.style.padding = "10px";
        updateDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        updateDiv.style.color = "white";
        updateDiv.style.fontFamily = "Arial";
        updateDiv.style.fontSize = "16px";
        updateDiv.style.zIndex = "10000";
        document.body.append(updateDiv);

        /* update the distance initially */
        updateDistance();

        /* timer to update the distance */
        let interval = setInterval(updateDistance, updateTime);
    }

    calculateGalactusDistanceToEarth();

}());
```

---

```javascript
javascript:(
/* Calculate Distance of Galactus to Earth and How Long Until Arrival */
function()
{
    function calculateGalactusDistanceAndTimeToEarth()
    {
        /* start distance of Galactus to Earth */
        let distance = 1000000; /* miles */

        /* how fast Galactus is traveling */
        let speed = 10000;  /* mph */

        /* how often to update the distance */
        let updateTime = 1 * 1000;

        function updateDistance()
        {
            /* update distance */
            distance -= speed / 60;

            if (distance <= 0)
            {
                document.getElementById("galactus-update").innerHTML = "Galactus has arrived!";
                clearInterval(interval);
            }
            else
            {
                /* calculate time in hours */
                let timeInHours = distance / speed;

               /* convert time to hours and minutes */
                let hours = Math.floor(timeInHours);

                let minutes = Math.floor((timeInHours - hours) * 60);

                document.getElementById("galactus-update").innerHTML =
"Galactus is " + distance.toFixed(2) +
" miles away.<br>Arrival in " +
hours + " hours and " + minutes + " minutes.";
            }
        }

        /* create a div element for the updates */
        let updateDiv = document.createElement("div");
        updateDiv.id = "galactus-update";
        updateDiv.style.position = "fixed";
        updateDiv.style.right = "10px";
        updateDiv.style.bottom = "10px";
        updateDiv.style.padding = "10px";
        updateDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        updateDiv.style.color = "white";
        updateDiv.style.fontFamily = "Arial";
        updateDiv.style.fontSize = "16px";
        updateDiv.style.zIndex = "10000";
        document.body.append(updateDiv);

        /* update the distance initially */
        updateDistance();

        /* timer updates distance */
        let interval = setInterval(updateDistance, updateTime);
    }

   calculateGalactusDistanceAndTimeToEarth();

}());
```

---

```javascript
javascript:(
/* Square Expands with Each Click */
function()
{
    function createExpandingSquare()
    {
        /* create a square element */
        let square = document.createElement('div');
        square.id = "square";
        square.style.position = "absolute";
        square.style.left = 100 + "px";
        square.style.top = 50 + "px";
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'width 0.3s, height 0.3s';
        square.style.cursor = 'pointer';

        /* starting width and height */
        let width = 100;
        let height = 100;

        /* add click event listener to grow the square on each click */
        square.onclick = function()
        {
            width += 20;
            height += 20;

            square.style.width = width + 'px';
            square.style.height = height + 'px';
        };

        /* add the square to the page */
        document.body.append(square);
    }

    createExpandingSquare();

}());
```

---

```javascript
javascript:(
/* Square Expands/Contracts by Click */
function()
{
    function createExpandingContractingSquare()
    {
        /* create a square element */
        let square = document.createElement('div');
        square.id = 'square';
        square.style.position = 'absolute';
        square.style.left = '100px';
        square.style.top = '50px';
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'width 0.3s, height 0.3s';
        square.style.cursor = 'pointer';

        /* starting width and height */
        let width = 100;
        let height = 100;

        /* initialize a variable to keep track of the direction (expanding or contracting) */
        let expanding = true;

        /* onclick adjust the square's size */
        square.onclick = function()
        {
            if (expanding)
            {
                width += 20;
                height += 20;

                if (width >= 300)
                {
                    expanding = false;
                }
            }
            else
            {
                width -= 20;
                height -= 20;

                if (width <= 100)
                {
                    expanding = true;
                }
            }
            square.style.width = width + 'px';
            square.style.height = height + 'px';
        };

        /* add the square to the page */
        document.body.append(square);
    }

    createExpandingContractingSquare();

}());
```

---

```javascript
javascript:(
/* Square Expands/Contracts by Timer */
function()
{
    function createExpandingContractingSquare()
    {
        /* create a square element */
        let square = document.createElement('div');
        square.id = 'square';
        square.style.position = 'absolute';
        square.style.left = '100px';
        square.style.top = '50px';
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'width 0.3s, height 0.3s';
        square.style.cursor = 'pointer';

      /* stop timer when square is clicked */
        square.onclick = function()
        {
            clearInterval(timerInterval);
        };

        /* add the square to the page */
        document.body.append(square);

        /*----*/

        /* width and height */
        let width = 100;
        let height = 100;

       /* keep track of expanding or contracting */
        let expanding = true;

        function updateSquareSize()
        {
            if (expanding)
            {
                width += 20;
                height += 20;

                if (width >= 300)
                {
                    expanding = false;
                }
            } 
            else
            {
                width -= 20;
                height -= 20;

                if (width <= 100)
                {
                    expanding = true;
                }
            }

            square.style.width = width + 'px';
            square.style.height = height + 'px';
        }

        /* update square's size every 1 second */
        let timerInterval = setInterval(updateSquareSize, 1000);
    }

    createExpandingContractingSquare();

}());
```

---

```javascript
javascript:(
/* Square Moves in Square Pattern by Timer */
function()
{
    function createSquareMoveInSquarePattern()
    {
        /* create a square element */
        let square = document.createElement('div');
        square.style.position = 'absolute';
        square.style.left = '20px';
        square.style.top = '20px';
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'transform 2s';

        /* starting position */
        let x = 20;
        let y = 20;

        /* 0 is right, 1 is down, 2 is left, 3 is up */
        let direction = 0;

        /* add the square to the page */
        document.body.append(square);

        function moveSquare()
        {
            if (direction === 0)
            {
                x += 100;
            }
            else if (direction === 1)
            {
                y += 100;
            }
            else if (direction === 2)
            {
                x -= 100;
            }
            else if (direction === 3)
            {
                y -= 100;
            }

            square.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

            /* update direction */
            direction = (direction + 1) % 4;
        }

        /* start moving the square */
        moveSquare();

        /* repeat square pattern continuously */
        setInterval(moveSquare, 2000);
    }

    createSquareMoveInSquarePattern();

}());
```

---

```javascript
javascript:(
/* Special Efx - when clicked div turns to particles */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = document.createElement('div');
        specialEfxBox.style.position = 'absolute';
        specialEfxBox.style.left = "100px";
        specialEfxBox.style.top = "50px";
        specialEfxBox.style.width = '50px';
        specialEfxBox.style.height = '50px';
        specialEfxBox.style.backgroundColor = 'blue';
        specialEfxBox.style.cursor = 'pointer';

        specialEfxBox.onclick = function()
        {
            let particles = [];

            let amount = 500;

            for (let x = 0; x < amount; x++)
            {
                let particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '5px';
                particle.style.height = '5px';
                particle.style.backgroundColor = 'aqua';
                particle.style.animation = 'explode 1s ease-in-out';

             /* random X coordinate within a range */
             let randomX = Math.random() * 200 - 100;

             /* random Y coordinate within a range */
              let randomY = Math.random() * 200 - 100;

                particle.style.left = specialEfxBox.getBoundingClientRect().left + randomX + 'px';

                particle.style.top = specialEfxBox.getBoundingClientRect().top + randomY + 'px';

                particles.push(particle);

                document.body.append(particle);
            }

            /* hide the original div */
            specialEfxBox.style.display = 'none';

            setTimeout(function()
            {
                for (let i = 0; i < particles.length; i++)
                {
                  /* remove particles after animation */
                    particles[i].remove();
                }
            }, 1000);
        };

        document.body.append(specialEfxBox);

        /*----*/

        let style001 = document.createElement('style');

        style001.innerHTML = `
           @keyframes explode {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(2);
            }
        }`;

        document.head.append(style001);
    }

    makeClickableSpecialEfx();

}());
```

---

```javascript
javascript:(
/* Special Efx - Random Color Squares */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = document.createElement('div');
        specialEfxBox.style.position = 'absolute';
        specialEfxBox.style.left = '100px';
        specialEfxBox.style.top = '50px';
        specialEfxBox.style.width = '50px';
        specialEfxBox.style.height = '50px';
        specialEfxBox.style.backgroundColor = 'blue';
        specialEfxBox.style.cursor = 'pointer';

        specialEfxBox.onclick = function()
        {
            let particles = [];

            let amount = 500;

            for (let x = 0; x < amount; x++)
            {
                let particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '10px';
                particle.style.height = '10px';
                particle.style.backgroundColor = getRandomColor();
                particle.style.animation = 'explode 1s ease-in-out';

             /* random X coordinate within a range */
                let randomX = Math.random() * 200 - 100;

             /* random Y coordinate within a range */
                let randomY = Math.random() * 200 - 100;

                particle.style.left = specialEfxBox.getBoundingClientRect().left + randomX + 'px';

                particle.style.top = specialEfxBox.getBoundingClientRect().top + randomY + 'px';

                particles.push(particle);

                document.body.append(particle);
            }

            /* hide the original div */
            specialEfxBox.style.display = 'none';

            setTimeout(function()
            {
                for (let i = 0; i < particles.length; i++)
                {
                  /* remove particles after animation */
                    particles[i].remove();
                }
            }, 500);
        };

        document.body.append(specialEfxBox);

        /*----*/

        let style001 = document.createElement('style');

        style001.innerHTML = `
            @keyframes explode {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(5);
            }
        }`;

        document.head.append(style001);
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        return 'rgb('+r+', '+g+', '+b+')';
    }

    makeClickableSpecialEfx();

}());
```

---

```javascript
javascript:(
/* Special Efx - Circles Random Color and Size */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = document.createElement('div');
        specialEfxBox.style.position = 'absolute';
        specialEfxBox.style.left = '100px';
        specialEfxBox.style.top = '50px';
        specialEfxBox.style.width = '100px';
        specialEfxBox.style.height = '100px';
        specialEfxBox.style.backgroundColor = 'blue';
        specialEfxBox.style.cursor = 'pointer';

        specialEfxBox.onclick = function()
        {
            let particles = [];

            let amount = 500;

            for (let x = 0; x < amount; x++)
            {
                let particle = document.createElement('div');
                particle.style.position = 'absolute';

                /* get a random size for the circle */
                let size = getRandomSize();

                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                /* make it a circle */
                particle.style.borderRadius = '50%';
                particle.style.backgroundColor = getRandomColor();
                particle.style.animation = 'explode 1s ease-in-out';

             /* random X coordinate within a range */
               let randomX = Math.random() * 200 - 100;

             /* random Y coordinate within a range */
               let randomY = Math.random() * 200 - 100;
                particle.style.left = specialEfxBox.getBoundingClientRect().left + randomX + 'px';

                particle.style.top = specialEfxBox.getBoundingClientRect().top + randomY + 'px';

                particles.push(particle);

                document.body.append(particle);
            }

            /* hide the original div */
            specialEfxBox.style.display = 'none';

            setTimeout(function()
            {
                for (let i = 0; i < particles.length; i++)
                {
                  /* remove particles after animation */
                    particles[i].remove();
                }
            }, 500);
        };

        document.body.append(specialEfxBox);

        /*----*/

        let style001 = document.createElement('style');

        style001.innerHTML = `
            @keyframes explode {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(5);
            }
        }`;

        document.head.append(style001);
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        return 'rgb('+r+', '+g+', '+b+')';
    }

    /* function to get a random size for circle */
    function getRandomSize()
    {
        return Math.floor(Math.random() * 20) + 5;
    }

    makeClickableSpecialEfx();

}());
```

---

```javascript
javascript:(
/* Special Efx - Circles in a Circle */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = document.createElement('div');
        specialEfxBox.style.position = 'absolute';
        specialEfxBox.style.left = '50%';
        specialEfxBox.style.top = '50%';
        specialEfxBox.style.transform = 'translate(-50%, -50%)';
        specialEfxBox.style.width = '50px';
        specialEfxBox.style.height = '50px';
        specialEfxBox.style.backgroundColor = 'blue';
        /* make it a circle */
        specialEfxBox.style.borderRadius = '50%';
        specialEfxBox.style.cursor = 'pointer';

        specialEfxBox.onclick = function()
        {
            let particles = [];
            let amount = 500;

            for (let angle = 0; angle < 360; angle += 360 / amount)
            {
                let particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '50px';
                particle.style.height = '50px';
                /* make it a circle */
                particle.style.borderRadius = '50%';
                particle.style.backgroundColor = getRandomColor();
                particle.style.animation = 'explode 1s ease-in-out';

                let radius = 200;

                let x = Math.cos((angle * Math.PI) / 180) * radius;

                let y = Math.sin((angle * Math.PI) / 180) * radius;

                particle.style.left = 'calc(50% + ' + x + 'px)';

                particle.style.top = 'calc(50% + ' + y + 'px)';

                /*----*/

                particles.push(particle);

                document.body.append(particle);
            }

            /* hide the original div */
            specialEfxBox.style.display = 'none';

            setTimeout(function()
            {
                for (let i = 0; i < particles.length; i++)
                {
                    /* remove particles after animation */
                    particles[i].remove();
                }
            }, 500);
        };

        document.body.append(specialEfxBox);

        /*----*/

        let style001 = document.createElement('style');

        style001.innerHTML = `
            @keyframes explode {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(5);
            }
        }`;

        document.head.append(style001);
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        return 'rgb('+r+', '+g+', '+b+')';
    }

    makeClickableSpecialEfx();

}());
```

---

```javascript
javascript:(
/* Special Efx - Circle Expands */
function()
{
    function makeSpecialEfx()
    {
        let particles = [];

        let amount = 1000;

        for (let angle = 0; angle < 360; angle += 360 / amount)
        {
            let particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '50px';
            particle.style.height = '50px';
            particle.style.borderRadius = "50%";
            particle.style.backgroundColor = 'aqua';
            particle.style.animation = 'explode 1s ease-in-out';

            /* start particles from the center */
            let radius = 0;

            /*----*/

            let x = Math.cos((angle * Math.PI) / 180) * radius;

            let y = Math.sin((angle * Math.PI) / 180) * radius;

            /*----*/

            particle.style.left = 'calc(50% + ' + x + 'px)';

            particle.style.top = 'calc(50% + ' + y + 'px)';

            /*----*/

            particles.push(particle);

            document.body.append(particle);
        }

        setTimeout(function()
        {
            for (let i = 0; i < particles.length; i++)
            {
                /* remove particles after animation */
                particles[i].remove();
            }
        }, 1000);
    }

    /*-----*/

    let style001 = document.createElement('style');

    style001.innerHTML = `
        @keyframes explode {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(5);
        }
    }`;

    document.head.append(style001);

    makeSpecialEfx();

}());

/* 
The Circle expands with a smooth animation.
*/
```

---

```javascript
javascript:(
/* Special Efx - Circle Expands to Concentric Circles */
function()
{
    function makeSpecialEfx()
    {
        let circles = [];

        /* number of concentric circles */
        let numCircles = 10;

        /* initial size of the innermost circle */
        let circleSize = 50;

        for (let i = 0; i < numCircles; i++)
        {
            let circle = document.createElement('div');
            circle.style.position = 'absolute';
            circle.style.width = circleSize + 'px';
            circle.style.height = circleSize + 'px';
            circle.style.borderRadius = '50%';
            circle.style.backgroundColor = 'aqua';
            circle.style.animation = 'expandCircle 1s ease-in-out';

            /*----*/

            /* calculate position to center circles */
            let leftPosition = (window.innerWidth - circleSize) / 2;

            let topPosition = (window.innerHeight - circleSize) / 2;

            /*----*/

            circle.style.left = leftPosition + 'px';
            circle.style.top = topPosition + 'px';

            /*----*/

            /* increase the circle size for the next concentric circle */
            circleSize += 50;

            circles.push(circle);

            document.body.append(circle);
        }

        setTimeout(function()
        {
            for (let i = 0; i < circles.length; i++)
            {
                /* remove circles after animation */
                circles[i].remove();
            }
        }, 1000);
    }

    /*----*/

    let style001 = document.createElement('style');

    style001.innerHTML = `
        @keyframes expandCircle {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(1.5);
        }
    }`;

    document.head.append(style001);

    makeSpecialEfx();

}());
```

---

```javascript
javascript:(
/* Special Efx - Array of Objects - Random Choice */
function()
{
    function generateSpecialEffects()
    {
        let specialEfx =
        [
            {
                name: 'Effect 1',
                color: 'aqua',
                size: 50,
            },

            {
                name: 'Effect 2',
                color: 'yellow',
                size: 200,
            },

            {
                name: 'Effect 3',
                color: 'blue',
                size: 400,
            },
        ];

        function createRandomEfx()
        {
            let whichArray = specialEfx;

            let randomIndex = Math.floor(Math.random() * whichArray.length);

            let effectChosen = whichArray[randomIndex];

            /*----*/

            let particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = effectChosen.size + 'px';
            particle.style.height = effectChosen.size + 'px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = effectChosen.color;
            particle.style.animation = 'expandCircle 1s ease-in-out';

            /*----*/

          /* calculate position to center the circle */
            let leftPosition = (window.innerWidth - effectChosen.size) / 2;

            let topPosition = (window.innerHeight - effectChosen.size) / 2;

            /*----*/

            particle.style.left = leftPosition + 'px';
            particle.style.top = topPosition + 'px';

            /*----*/

            document.body.append(particle);

            setTimeout(function()
            {
                /* remove particle after animation */
                particle.remove();
            }, 700);
        }

        /*----*/

        let style001 = document.createElement('style');

        style001.innerHTML = `
            @keyframes expandCircle {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(1.5);
            }
        }`;

        document.head.append(style001);

        /* create random efx at regular intervals */
        setInterval(function()
        {
            createRandomEfx(specialEfx);
        }, 2000);
    }

    generateSpecialEffects();

}());
```

---

```javascript
javascript:(
/* Cards - Shuffle Deck - Create the deck as an Array */
function()
{
    function shuffleDeck()
    {
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        let deck = [];

        /* create the deck as an array */
        for (let i = 0; i < suits.length; i++)
        {
            for (let j = 0; j < values.length; j++)
            {
                deck.push(values[j] + ' of ' + suits[i]);
            }
        }

        /* shuffle the deck */
        for (let i = 0; i < deck.length - 1; i++)
        {
            let j = i + Math.floor(Math.random() * (deck.length - i));

            /* swap the elements at indices i and j */
            let temp = deck[i];

            deck[i] = deck[j];

            deck[j] = temp;
        }

        return deck;
    }

    let shuffledDeck = shuffleDeck();

    /* show as objects */
    console.log(shuffledDeck);

    /* show as JSON */
    console.log(JSON.stringify(shuffledDeck));

    /* show as JSON */
    alert(JSON.stringify(shuffledDeck));

}());
```

---

```javascript
javascript:(
/* Cards - Shuffle Deck - Create deck as an Array - Rows of 4 */
function()
{
    function shuffleDeck()
    {
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        let deck = [];

        /* create the deck */
        for (let i = 0; i < suits.length; i++)
        {
            for (let j = 0; j < values.length; j++)
            {
                deck.push(values[j] + ' of ' + suits[i]);
            }
        }

        /* shuffle the deck */
        for (let i = 0; i < deck.length - 1; i++)
        {
            let j = i + Math.floor(Math.random() * (deck.length - i));

            /* swap the elements at indices i and j */
            let temp = deck[i];

            deck[i] = deck[j];

            deck[j] = temp;
        }

        return deck;
    }

    let shuffledDeck = shuffleDeck();

    /* create a container div to hold the cards */
    let container = document.createElement('div');
    container.style.position = "absolute";
    container.style.left = "100px";
    container.style.top = "10px";
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(4, 1fr)';
    container.style.gridGap = '10px';
    container.style.margin = '20px';

    /* add each card to the container */
    for (let i = 0; i < shuffledDeck.length; i++)
    {
        let cardDiv = document.createElement('div');
        cardDiv.textContent = shuffledDeck[i];
        cardDiv.style.padding = '10px';
        cardDiv.style.border = '1px solid';
        cardDiv.style.borderColor = 'rgb(255, 255, 255)';
        cardDiv.style.borderRadius = '5px';
        cardDiv.style.fontSize = '20px';
        cardDiv.style.textAlign = 'center';
        container.append(cardDiv);
    }

    /* append the container to the body */
    document.body.append(container);

}());
```

---

```javascript
javascript:(
/* Cards - Shuffle Deck - Create deck as an Array of Objects */
function()
{
    function shuffleDeck()
    {
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        let deck = [];

        /* create the deck as an array of objects */
        for (let i = 0; i < suits.length; i++)
        {
            for (let j = 0; j < values.length; j++)
            {
                deck.push(
                {
                    suit: suits[i],
                    number: values[j]
                });
            }
        }

        /* shuffle the deck */
        for (let i = 0; i < deck.length - 1; i++)
        {
            let j = i + Math.floor(Math.random() * (deck.length - i));

            let temp = deck[i];

            deck[i] = deck[j];

            deck[j] = temp;
        }

        return deck;
    }

    let shuffledDeck = shuffleDeck();

    /* show as objects */
    console.log(shuffledDeck);

    /* show as JSON */
    console.log(JSON.stringify(shuffledDeck));

    /* show as JSON */
    alert(JSON.stringify(shuffledDeck));

}());
```

---

```javascript
javascript:(
/* Cards - Shuffle Deck - Create the deck as an Array of Objects - Rows of 4 */
function()
{
    function shuffleDeck()
    {
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        let deck = [];

        /* create the deck as an array of objects */
        for (let i = 0; i < suits.length; i++)
        {
            for (let j = 0; j < values.length; j++)
            {
                deck.push(
                {
                    suit: suits[i],
                    number: values[j]
                });
            }
        }

        /* shuffle the deck */
        for (let i = 0; i < deck.length - 1; i++)
        {
            let j = i + Math.floor(Math.random() * (deck.length - i));

            let temp = deck[i];

            deck[i] = deck[j];

            deck[j] = temp;
        }

        return deck;
    }

    let shuffledDeck = shuffleDeck();

    /* show as objects */
    console.log(shuffledDeck);

    /* show as JSON */
    console.log(JSON.stringify(shuffledDeck));

    /*----*/

    /* create a container div to hold the cards */
    let container = document.createElement('div');
    container.style.position = "absolute";
    container.style.left = "100px";
    container.style.top = "10px";
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(4, 1fr)';
    container.style.gridGap = '10px';
    container.style.margin = '20px';

    /* add each card to the container */
    for (let i = 0; i < shuffledDeck.length; i++)
    {
        let cardDiv = document.createElement('div');
        cardDiv.textContent = shuffledDeck[i].number + " of " + shuffledDeck[i].suit;
        cardDiv.style.padding = '10px';
        cardDiv.style.border = '1px solid';
        cardDiv.style.borderColor = 'rgb(255, 255, 255)';
        cardDiv.style.borderRadius = '5px';
        cardDiv.style.fontSize = '20px';
        cardDiv.style.textAlign = 'center';
        container.append(cardDiv);
    }

    /* append the container to the body */
    document.body.append(container);

}());
```

---

```javascript
javascript:(
/* Trigonometry - Convert Degrees To Radians */
function()
{
    function getAngleInDegree()
    {
        let angle = parseFloat(prompt("Enter an angle in degrees:"));

        return angle;
    }

    function convertDegreeToRadian(angle)
    {
        if (!isNaN(angle))
        {
            /* angle in degree converted to radian */
            let radians = angle * (Math.PI / 180);

            return radians;
        }
        else
        {
            alert("Angle wasn't entered in numbers");
        }
    }

    let result = convertDegreeToRadian(getAngleInDegree());

    console.log(result);

    alert(result);

}());
```

---

```javascript
javascript:(
/* Trigonometry - Sine */
function()
{
    function getAngleInDegree()
    {
        let angle = parseFloat(prompt("Enter an angle in degrees:"));

        return angle;
    }

    function convertDegreeToRadian(angle)
    {
        if (!isNaN(angle))
        {
            /* angle in degree converted to radian */
            let radians = angle * (Math.PI / 180);

            return radians;
        }
        else
        {
            alert("Angle wasn't entered in numbers");
        }
    }

    let theRadians = convertDegreeToRadian(getAngleInDegree());

    function sineOfAngle()
    {
        let sine = Math.sin(theRadians).toFixed(2);

        return sine;
    }

    console.log(sineOfAngle());

    alert(sineOfAngle());

}());
```

---

```javascript
javascript:(
/* Trigonometry - Cosine */
function()
{
    function getAngleInDegree()
    {
        let angle = parseFloat(prompt("Enter an angle in degrees:"));

        return angle;
    }

    function convertDegreeToRadian(angle)
    {
        if (!isNaN(angle))
        {
            /* angle in degree converted to radian */
            let radians = angle * (Math.PI / 180);

            return radians;
        }
        else
        {
            alert("Angle wasn't entered in numbers");
        }
    }

    let theRadians = convertDegreeToRadian(getAngleInDegree());

    function cosineOfAngle()
    {
        let cosine = Math.cos(theRadians).toFixed(2);

        return cosine;
    }

    console.log(cosineOfAngle());

    alert(cosineOfAngle());

}());
```

---

```javascript
javascript:(
/* Trigonometry - Tangent */
function()
{
    function getAngleInDegree()
    {
        let angle = parseFloat(prompt("Enter an angle in degrees:"));

        return angle;
    }

    function convertDegreeToRadian(angle)
    {
        if (!isNaN(angle))
        {
            /* angle in degree converted to radian */
            let radians = angle * (Math.PI / 180);

            return radians;
        }
        else
        {
            alert("Angle wasn't entered in numbers");
        }
    }

    let theRadians = convertDegreeToRadian(getAngleInDegree());

    function tangentOfAngle()
    {
        let tangent = Math.tan(theRadians).toFixed(2);

        return tangent;
    }

    console.log(tangentOfAngle());

    alert(tangentOfAngle());

}());
```

---

```javascript
javascript:(
/* Trigonometry - Sine, Cosine, Tangent Calculator */
function()
{
    function calculateTrigonometry()
    {
        let angle = parseFloat(prompt("Enter an angle in degrees:"));

        if (!isNaN(angle))
        {
            let radians = angle * (Math.PI / 180);
            let sine = Math.sin(radians);
            let cosine = Math.cos(radians);
            let tangent = Math.tan(radians);

            let message = "Angle: " + angle + " degrees\n";

            message += "Sine: " + sine.toFixed(4) + "\n";
            message += "Cosine: " + cosine.toFixed(4) + "\n";

            message += "Tangent: " + tangent.toFixed(4);

            alert(message);
        }
        else
        {
            alert("Angle wasn't entered in numbers");
        }
    }

    calculateTrigonometry();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Circle made using Divs */
function()
{
    function generateCircleOfDivs()
    {
        /* number of divs to create */
        let numberOfDivs = 360;

        /* the radius of the circle */
        let radius = 50;

        /* x pos of the circle's center */
        let centerX = 100;

        /* y pos of the circle's center */
        let centerY = 100;

        let container = document.createElement("div");
        container.style.width = "200px";
        container.style.height = "200px";
        container.style.position = "fixed";
        container.style.left = 100 + "px";
        container.style.top = 100 + "px";
        container.style.border = "1px solid black";
        document.body.append(container);

        for (let x = 0; x < numberOfDivs; x++)
        {
            let angle = (x / numberOfDivs) * 2 * Math.PI;

            let xPos = centerX + radius * Math.cos(angle);

            let yPos = centerY + radius * Math.sin(angle);

            /*----*/

            let div = document.createElement("div");
            div.style.width = "10px";
            div.style.height = "10px";
            div.style.background = "blue";
            div.style.borderRadius = "50%";
            div.style.position = "absolute";
            div.style.left = xPos + "px";
            div.style.top = yPos + "px";
            container.append(div);
        }
    }

    generateCircleOfDivs();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Spinning Circle of Divs */
function()
{
    function generateCircleOfMovingDivs()
    {
        /* number of divs to create */
        let numberOfDivs = 36;

        /* radius of the circle */
        let radius = 50;

        /* center position */
        let centerX = 100;
        let centerY = 100;

        let container = document.createElement("div");
        container.style.position = "fixed";
        container.style.left = "20px";
        container.style.top = "20px";
        container.style.width = "200px";
        container.style.height = "200px";
        document.body.append(container);

        for (let x = 0; x < numberOfDivs; x++)
        {
            let angle = (x / numberOfDivs) * 2 * Math.PI;

            let xPos = centerX + radius * Math.cos(angle);

            let yPos = centerY + radius * Math.sin(angle);

            let div = document.createElement("div");
            div.style.position = "absolute";
            div.style.left = xPos + "px";
            div.style.top = yPos + "px";
            div.style.width = "10px";
            div.style.height = "10px";
            div.style.background = "blue";
            div.style.borderRadius = "50%";
            container.append(div);

            /* animate the divs */
            setInterval(function()
            {
                let rotateAngle = (x / numberOfDivs) * 2 * Math.PI + (new Date().getTime() / 1000);

                xPos = centerX + radius * Math.cos(rotateAngle);

                yPos = centerY + radius * Math.sin(rotateAngle);

                div.style.left = xPos + "px";

                div.style.top = yPos + "px";

            }, 50);
        }
    }

    generateCircleOfMovingDivs();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Pulsating Circle of Divs */
function()
{
    function circleOfDivsPulsating()
    {
        /* number of divs to create */
        let numberOfDivs = 60;

        /* radius of the circle */
        let radius = 50;

        /* center position */
        let centerX = 100;
        let centerY = 100;

        /* container for the circle */
        let container = document.createElement("div");
        container.style.position = "fixed";
        container.style.left = "100px";
        container.style.top = "100px";
        container.style.width = "200px";
        container.style.height = "200px";
        container.style.margin = "0 auto";
        container.style.overflow = "hidden";
        document.body.append(container);

        /* create the divs */
        for (let x = 0; x < numberOfDivs; x++)
        {
            let angle = (x / numberOfDivs) * 2 * Math.PI;

            let xPos = centerX + radius * Math.cos(angle);

            let yPos = centerY + radius * Math.sin(angle);

            let div = document.createElement("div");
            div.style.width = "10px";
            div.style.height = "10px";
            div.style.background = "blue";
            div.style.borderRadius = "50%";
            div.style.position = "absolute";
            div.style.left = xPos + "px";
            div.style.top = yPos + "px";
            container.append(div);
        }

        /* animate the pulsating effect */
        let scale = 1;
        let growing = true;

        function animate()
        {
            if (growing)
            {
                scale += 0.01;

                if (scale >= 2)
                {
                    growing = false;
                }
            }
            else
            {
                scale -= 0.01;

                if (scale <= 0.5)
                {
                    growing = true;
                }
            }

            container.style.transform = 'scale('+scale+')';
        }

        setInterval(function()
        {
            animate();
        }, 10);
    }

    circleOfDivsPulsating();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Draw Sine and Cosine */
function()
{
    function graphSineAndCosine()
    {
        let canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.left = 100 + "px";
        canvas.style.top = 50 + "px";
        canvas.width = 700;
        canvas.height = 500;

        /*----*/

        let context = canvas.getContext("2d");

        /* clear the canvas */
        context.clearRect(0, 0, canvas.width, 
        canvas.height);

        /* draw x and y axes */
        context.beginPath();
        context.moveTo(0, canvas.height / 2);
        context.lineTo(canvas.width,     
        canvas.height / 2);
        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2,         
        canvas.height);
        context.strokeStyle = "black";
        context.stroke();
        context.closePath();

        /* draw sine function */
        context.beginPath();
        context.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++)
        {
            let radians = (x - canvas.width / 2) * (Math.PI / 180);

            let y = Math.sin(radians) * (canvas.height / 4) + (canvas.height / 2);

            context.lineTo(x, y);
        }

        context.strokeStyle = "blue";
        context.lineWidth = 4;
        context.stroke();
        context.closePath();

        /* draw cosine function */
        context.beginPath();
        context.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++)
        {
            let radians = (x - canvas.width / 2) * (Math.PI / 180);

            let y = Math.cos(radians) * (canvas.height / 4) + (canvas.height / 2);

            context.lineTo(x, y);
        }

        context.strokeStyle = "red";
        context.lineWidth = 4;
        context.stroke();
        context.closePath();

        document.body.append(canvas);
    }

    graphSineAndCosine();

}());

/*
creates a dynamic trigonometric graph using canvas to draw the sine and cosine functions
*/
```

---

```javascript
javascript:(
/* Trigonometry - Sine Wave Motion */
function()
{
    function generateSineWaveWithMotion()
    {
        let amplitude = 50;
        let frequency = 0.1;

        let xOffset = 0;
        let yOffset = 100;

        let canvasWidth = window.innerWidth;
        let canvasHeight = 200;

        /*----*/

        let canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.zIndex = '10000';
        canvas.style.pointerEvents = 'none';
        document.body.append(canvas);

        /*----*/

        let context = canvas.getContext('2d');

        /*----*/

        function drawSineWave()
        {
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.beginPath();

            for (let x = 0; x < canvasWidth; x += 1)
            {
                let y = amplitude * Math.sin(frequency * x + xOffset) + yOffset;

                context.lineTo(x, y);
            }

            context.strokeStyle = 'blue';
            context.lineWidth = 4;
            context.stroke();
        }

        function animate()
        {
            xOffset += 1;
            drawSineWave();
            requestAnimationFrame(animate);
        }

        animate();
    }

    generateSineWaveWithMotion();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Cosine Wave Motion */
function()
{
    function generateCosineWaveWithMotion()
    {
        let amplitude = 50;
        let frequency = 0.05;

        let xOffset = 0;
        let yOffset = 100;

        let canvasWidth = window.innerWidth;
        let canvasHeight = 200;

        /*----*/

        let canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.zIndex = '10000';
        canvas.style.pointerEvents = 'none';
        document.body.append(canvas);

        /*----*/

        let context = canvas.getContext('2d');

        /*----*/

        function drawCosineWaves()
        {
            context.clearRect(0, 0, canvas.width, canvas.height);

            /* draw the cosine wave in red */
            context.beginPath();
            context.strokeStyle = 'red';
            context.lineWidth = 4;

            for (let x = 0; x < canvasWidth; x += 1)
            {
                let y = amplitude * Math.cos(frequency * x + xOffset) + yOffset;
                context.lineTo(x, y);
            }
            context.stroke();
        }

       /*----*/

        function animate()
        {
            xOffset += 0.1;
            drawCosineWaves();
            requestAnimationFrame(animate);
        }

        animate();
    }

    generateCosineWaveWithMotion();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Tangent Wave Motion */
function()
{
    function generateTangentWaveWithMotion()
    {
        let amplitude = 50;
        let frequency = 0.05;

        let xOffset = 0;
        let yOffset = 100;

        let canvasWidth = window.innerWidth;
        let canvasHeight = 200;

        /*----*/

        let canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.zIndex = '10000';
        canvas.style.pointerEvents = 'none';
        document.body.append(canvas);

        /*----*/

        let context = canvas.getContext('2d');

        /*----*/

        function drawTangentWave()
        {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();

            for (let x = 0; x < canvasWidth; x += 1)
            {
                let y = amplitude * Math.tan(frequency * x + xOffset) + yOffset;
                context.lineTo(x, y);
            }

            context.strokeStyle = 'green';
            context.lineWidth = 2;
            context.stroke();
        }

        function animate()
        {
            xOffset += 0.1;
            drawTangentWave();
            requestAnimationFrame(animate);
        }

        animate();
    }

    generateTangentWaveWithMotion();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Sine and Cosine Wave Motion */
function()
{
    function generateSineAndCosineWavesWithMotion()
    {
        let amplitude = 50;
        let frequency = 0.05;

        let xOffset = 0;
        let yOffset = 100;

        let canvasWidth = window.innerWidth;
        let canvasHeight = 200;

        /*----*/

        let canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.zIndex = '10000';
        canvas.style.pointerEvents = 'none';
        document.body.append(canvas);

        /*----*/

        let context = canvas.getContext('2d');

        /*----*/

        function drawSineCosineWaves()
        {
            context.clearRect(0, 0, canvas.width, canvas.height);

            /* draw the sine wave in blue */
            context.beginPath();
            context.strokeStyle = 'blue';
            context.lineWidth = 2;

            for (let x = 0; x < canvasWidth; x += 1)
            {
                let y = amplitude * Math.sin(frequency * x + xOffset) + yOffset;
                context.lineTo(x, y);
            }

            context.stroke();

            /* draw the cosine wave in red */
            context.beginPath();
            context.strokeStyle = 'red';

            for (let x = 0; x < canvasWidth; x += 1)
            {
                let y = amplitude * Math.cos(frequency * x + xOffset) + yOffset;
                context.lineTo(x, y);
            }

            context.stroke();
        }

        /*----*/

        function animate()
        {
            xOffset += 0.1;
            drawSineCosineWaves();
            requestAnimationFrame(animate);
        }

        animate();
    }

    generateSineAndCosineWavesWithMotion();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Draw a Circle - Draw a 45 Degree Line - Create a Label */
function()
{
    function drawCircleWith45DegreeLine()
    {
        let canvasWidth = 400;
        let canvasHeight = 400;

        let canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.zIndex = '10000';
        canvas.style.pointerEvents = 'none';
        document.body.append(canvas);

        /*----*/

        let context = canvas.getContext('2d');

        /*----*/

        function drawCircle()
        {
            let centerX = canvasWidth / 2;
            let centerY = canvasHeight / 2;

            let radius = 150;

            context.strokeStyle = 'aqua';

            context.lineWidth = 4;

            /* draw the circle */
            context.beginPath();

            context.arc(centerX, centerY, radius, 0, 2 * Math.PI);

            context.stroke();

            /*----*/

            /* draw the radius line at an angle */
            let angleInDegrees = 45;

            let angleInRadians = (angleInDegrees * Math.PI) / 180;

            let endX = centerX + radius * Math.cos(angleInRadians);

            let endY = centerY + radius * Math.sin(angleInRadians);

            context.strokeStyle = 'white';
            context.lineWidth = 4;
            context.beginPath();
            context.moveTo(centerX, centerY);
            context.lineTo(endX, endY);
            context.stroke();

            /*----*/

            /* label the angle in degrees */
            context.font = '30px arial';
            context.fillStyle = 'white';
            context.fillText(angleInDegrees + '°', centerX + 20, centerY - 20);
        }
        drawCircle();
    }

    drawCircleWith45DegreeLine();

}());

/*
creates a circle with a 45 degree line and a label
*/
```

---

```javascript
javascript:(
/* Trigonometry - Angle between two objects Constant Updates */
function()
{
    let object1 = document.createElement("div");
    object1.style.position = "absolute";
    object1.style.top = "50px";
    object1.style.left = "50px";
    object1.style.width = "20px";
    object1.style.height = "20px";
    object1.style.background = "red";
    document.body.append(object1);

    /*----*/

    let object2 = document.createElement("div");
    object2.style.position = "absolute";
    object2.style.top = "100px";
    object2.style.left = "200px";
    object2.style.width = "20px";
    object2.style.height = "20px";
    object2.style.background = "blue";
    document.body.append(object2);

    function calculateAngle()
    {
        let deltaX = object2.offsetLeft - object1.offsetLeft;

        let deltaY = object2.offsetTop - object1.offsetTop;

        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        return angle;
    }

    function updateAngleDisplay()
    {
        let angle = calculateAngle();

        console.log("Angle between objects: " + angle.toFixed(2) + " degrees");
    }

    function moveObjectDown()
    {
        let top = parseInt(object2.style.top) || 0;

        object2.style.top = (top + 1) + "px";

        /* move the blue object down */
        updateAngleDisplay();
    }

    function animate()
    {
        moveObjectDown();
        requestAnimationFrame(animate);
    }

    animate();

    /* start moving the blue object down and updating the angle */
    moveObjectDown();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Ball Moves in a Circle */
function()
{
    /* create a ball element */
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

    /*----*/

    /* set the initial position */
    let angle = 0;

    let xPos = 100;
    let yPos = 100;

    let radius = 100;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);

        let y = yPos + radius * Math.sin(angle);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        /* angle increment for speed */
        angle += 0.02;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Ball moves in elliptical pattern */
function()
{
    let ball = document.createElement('div');
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    document.body.append(ball);

    /* initial position and parameters for ellipse */
    let angle = 0;

    let xPos = 300;
    let yPos = 200;

    /* horizontal radius */
    let a = 150;

    /* vertical radius */
    let b = 100;

    function updatePosition()
    {
        let x = xPos + a * Math.cos(angle);
        let y = yPos + b * Math.sin(angle);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        /* angle increment for speed */
        angle += 0.02;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Ball with Sinusoidal Motion */
function()
{
    /* create a ball element */
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

    /* position and parameters for sine wave */
    let angle = 0;

    let xPos = 0;
    let yPos = 100;

    /* amplitude of the wave (vertical size) */
    let amplitude = 100;

    /* frequency of the wave (speed) */
    let frequency = 0.2;

    function updatePosition()
    {
        /* horizontal motion */
        let x = xPos + angle * 50;
        
        /* vertical motion using sine function */
        let y = yPos + amplitude * Math.sin(angle * frequency);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        /* adjust the angle increment for speed */
        angle += 0.05;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Ball with Sinusoidal Motion Up and Down Only */
function()
{
    /* create a ball element */
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.left = 100 + 'px';
    ball.style.top = 0 + 'px';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

    /* initial position, params for the sine wave */
    let angle = 0;

    let yPos = 100;

    /* amplitude of the wave (vertical size) */
    let amplitude = 100;

    // frequency of the wave (speed)
    let frequency = 0.7;

    function updatePosition()
    {      
        /* vertical motion using sine function */
        let y = yPos + amplitude * Math.sin(angle * frequency);

        ball.style.top = y + 'px';

        /* adjust the angle increment for speed */
        angle += 0.02;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Ball moves in figure 8 pattern  */
function()
{
    /* create a ball element */
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

   /* set initial pos and parameters for figure eight motion */
    let angle = 0;

    let xPos = 400;
    let yPos = 150;

    let radius = 100;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);
        let y = yPos + radius * Math.sin(2 * angle);

        /* use sine with double the angle for the figure-eight */
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        /* angle increment for speed */
        angle += 0.02;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Ball moves in figure 8 pattern - adjusted speed and radius */
function()
{
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

    /* pos and params for figure-eight motion */
    let angle = 0;

    let xPos = 400;
    let yPos = 150;

    let radius = 75;

    let speed = 0.09;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);

        let y = yPos + radius * Math.sin(2 * angle);

  /* sine with double the angle for figure-eight */
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        /* angle increment for speed */
        angle += speed;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Ball moves in Spiral pattern - From Center Outward */
function()
{
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

    /* set initial pos and parameters for spiral motion */
    let angle = 0;

    let xPos = 400;
    let yPos = 400;

    let radius = 5;

    let angularSpeed = 0.05;

    let radialSpeed = 1;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);
        let y = yPos + radius * Math.sin(angle);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        angle += angularSpeed;

        radius += radialSpeed;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Trigonometry - Ball Spiral motion starts outside to center, back outwards */
function()
{
    let ball = document.createElement('div');
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    document.body.append(ball);

/* initial pos, params for inward spiral motion */
    let angle = 0;

    let xPos = 400;
    let yPos = 200;

    /* start from the outer edge */
    let radius = 200;
    let angularSpeed = 0.05;

 /* positive radial speed for inward movement */
    let radialSpeed = 1;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);
        let y = yPos + radius * Math.sin(angle);

        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        angle += angularSpeed;

        /* decrease the radius to move inward */
        radius -= radialSpeed;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Bouncing Ball - Linear - Bounces Up/Down - No Trigonometry required */
function()
{
    function createBallWithMotion()
    {
        let ball = document.createElement('div');
        ball.id = 'ball';
        ball.style.position = "absolute";
        ball.style.width = "50px";
        ball.style.height = "50px";
        ball.style.borderRadius = "50%";
        ball.style.margin = "0px";
        ball.style.overflow = "hidden";
        ball.style.backgroundColor = "aqua";
        document.body.append(ball);

        /* 1 goes down, -1 goes up */
        let direction = 1;

        let position = 0;

        let speed = 2;

        function animate()
        {
            position += direction * speed;

            ball.style.top = position + 'px';

            if (position >= (window.innerHeight - 50) || position <= 0)
            {
                /* reverse direction at top or bottom */
                direction *= -1;
            }
        }

        let animationFrameId001;

        function gameLoop()
        {
            animate();

            animationFrameId001 = requestAnimationFrame(gameLoop);
        }

        gameLoop();
    }

    createBallWithMotion();

}());
```

---

```javascript
javascript:(
/* Bouncing Ball - Linear - Starts at an Angle - No Trigonometry Required */
function()
{
    function createBallWithMotion()
    {
        let ball = document.createElement('div');
        ball.id = 'ball';
        ball.style.position = "absolute";
        ball.style.width = "50px";
        ball.style.height = "50px";
        ball.style.borderRadius = "50%";
        ball.style.margin = "0px";
        ball.style.overflow = "hidden";
        ball.style.backgroundColor = "aqua";
        document.body.append(ball);

        let x = 0;
        let y = 0;

        let dx = 5;
        let dy = 5;

        function animate()
        {
            x += dx;
            y += dy;

            if (x < 0 || x > window.innerWidth - ball.clientWidth)
            {
                dx = -dx;
            }

            if (y < 0 || y > window.innerHeight - ball.clientHeight)
            {
                dy = -dy;
            }

            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
        }

        let animationFrameId001;

        function gameLoop()
        {
            animate();

            animationFrameId001 = requestAnimationFrame(gameLoop);
        }

        gameLoop();
    }

    createBallWithMotion();

}());
```

---

```javascript
javascript:(
/* Bouncing Ball - Linear - Starts at Angle - Trigonometry Angle Calculation */
function()
{
    function createBouncingBall()
    {
        let ball = document.createElement('div');
        ball.id = 'ball';
        ball.style.position = "absolute";
        ball.style.width = "50px";
        ball.style.height = "50px";
        ball.style.borderRadius = "50%";
        ball.style.margin = "0px";
        ball.style.overflow = "hidden";
        ball.style.backgroundColor = "aqua";
        document.body.append(ball);

        /* initial angle in degrees */
        let angle = 45; 
        let speed = 2;

        /* convert degrees to radians for Math.sin and Math.cos */
        let radians = angle * (Math.PI / 180);

        let xSpeed = Math.cos(radians) * speed;
        let ySpeed = Math.sin(radians) * speed;

        let positionX = 0;
        let positionY = 0;

        function animate()
        {
            positionX += xSpeed;
            positionY += ySpeed;

            ball.style.left = positionX + 'px';
            ball.style.top = positionY + 'px';

            /* bounce off the walls */
            if (positionX >= (window.innerWidth - 50) || positionX <= 0)
            {
                xSpeed *= -1;
            }

            if (positionY >= (window.innerHeight - 50) || positionY <= 0)
            {
                ySpeed *= -1;
            }
        }

        let animationFrameId001;

        function gameLoop()
        {
            animate();

            animationFrameId001 = requestAnimationFrame(gameLoop);
        }

        gameLoop();
    }

    createBouncingBall();

}());
```

---

```javascript
javascript:(
/* Bouncing Circles - Linear - Starts at Angle - No Trigonometry Required  */
function()
{
    let circles = [];

    let numberOfCircles = 10;

    function getRandomPosition()
    {
        let x = Math.floor(Math.random() * window.innerWidth);

        let y = Math.floor(Math.random() * window.innerHeight);

        return {
            x: x,
            y: y
        };
    }

    for (let x = 0; x < numberOfCircles; x++)
    {
        let circle = document.createElement('div');
        circle.style.position = 'absolute';
        circle.style.width = '20px';
        circle.style.height = '20px';
        circle.style.backgroundColor = 'none';
        circle.style.borderStyle = 'solid';
        circle.style.borderWidth = '1px';
        circle.style.borderRadius = '50%';
        circle.style.pointerEvents = 'none';

        let position = getRandomPosition();
        circle.style.left = position.x + 'px';
        circle.style.top = position.y + 'px';

        circle.dx = Math.random() * 4 - 2;
        circle.dy = Math.random() * 4 - 2;

        document.body.append(circle);

        circles.push(circle);
    }

    function animate()
    {
        for (let x = 0; x < circles.length; x++)
        {
            let circle = circles[x];

            circle.style.left = (parseInt(circle.style.left) + circle.dx) + 'px';

            circle.style.top = (parseInt(circle.style.top) + circle.dy) + 'px';

            if (parseInt(circle.style.left) <= 0 || parseInt(circle.style.left) >= window.innerWidth - 20)
            {
                circle.dx *= -1;
            }

            if (parseInt(circle.style.top) <= 0 || parseInt(circle.style.top) >= window.innerHeight - 20)
            {
                circle.dy *= -1;
            }
        }
    }

    let animationFrameId001;

    function gameLoop()
    {
        animate();

        animationFrameId001 = requestAnimationFrame(gameLoop);
    }

    gameLoop();

}());
```

---

```javascript
javascript:(
/* Ball - Bouncing with Gravity and Damping */
function()
{
    /* create a ball element */
    let ball = document.createElement('div');
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    ball.style.position = 'absolute';
    document.body.append(ball);

    /* set initial pos, velocity, and parameters */
    let y = 0;

    let velocity = 0;

    let xPos = 200;

    let initialY = 100;

    /* acceleration due to gravity */
    let gravity = 0.5;

    /* damping factor (controls bounce) */
    let damping = 0.8;

    function updatePosition()
    {
        /* apply gravity */
        velocity += gravity;

        /* update vertical position */
        y += velocity;

        /* bounce when ball reaches the floor */
        if (y >= window.innerHeight - 50)
        {
            /* prevent ball from going below floor */
            y = window.innerHeight - 50;

            /* reverse velocity with damping */
            velocity *= -damping;
        }

        ball.style.left = xPos + 'px';

        ball.style.top = y + 'px';
    
        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());
```

---

```javascript
javascript:(
/* Calculus - Cartesian coordinate system - plot points on a graph*/
function()
{
    /* graph container */
    let graphContainer = document.createElement("div");
    graphContainer.style.position = "absolute";
    graphContainer.style.width = "400px";
    graphContainer.style.height = "400px";
    graphContainer.style.border = "1px solid #000";
    document.body.append(graphContainer);

    /* origin point (0, 0) */
    let origin = document.createElement("div");
    origin.style.position = "absolute";
    origin.style.left = "200px";
    origin.style.top = "200px";
    origin.style.width = "5px";
    origin.style.height = "5px";
    origin.style.background = "red";
    graphContainer.append(origin);

  /* prompt user to enter a point's coordinates */
    let x = parseFloat(prompt("Enter the x-coordinate:"));
    let y = parseFloat(prompt("Enter the y-coordinate:"));

    /* create user's point and plot it on graph */
    let userPoint = document.createElement("div");
    userPoint.style.position = "absolute";
    userPoint.style.left = (200 + x) + "px";
    userPoint.style.top = (200 - y) + "px";
    userPoint.style.width = "5px";
    userPoint.style.height = "5px";
    userPoint.style.background = "blue";
    graphContainer.append(userPoint);

    /* show coordinates of user's point */
    alert("You plotted a point at (" + x + ", " + y + ") on the graph.");

}());

/*
creates a graph with an origin (0, 0) at the center.

we enter the x and y coordinates for a point and it our script will plot those points on the graph.

this visualizes the Cartesian coordinate system by plotting points on a graph.

this is a very important concept of precalculus for more advanced topics in mathematics and science.
*/
```

---

```javascript
javascript:(
/* Calculus Line Segments - Connecting Points - Cartesian Coodinate System */
function()
{
    /* graph container */
    let graphContainer = document.createElement("div");
    graphContainer.style.position = "absolute";
    graphContainer.style.width = "400px";
    graphContainer.style.height = "400px";
    graphContainer.style.border = "1px solid #000";
    document.body.append(graphContainer);

    /* origin point (0, 0) */
    let origin = document.createElement("div");
    origin.style.position = "absolute";
    origin.style.left = "200px";
    origin.style.top = "200px";
    origin.style.width = "5px";
    origin.style.height = "5px";
    origin.style.background = "red";
    graphContainer.append(origin);

    /* prompt user to enter coordinates of first point */
    let x1 = parseFloat(prompt("Enter the x-coordinate of the first point:"));
    let y1 = parseFloat(prompt("Enter the y-coordinate of the first point:"));

    /* prompt user to enter coordinates of second point */
    let x2 = parseFloat(prompt("Enter the x-coordinate of the second point:"));
    let y2 = parseFloat(prompt("Enter the y-coordinate of the second point:"));

    /* create line segment */
    let lineSegment = document.createElement("div");
    lineSegment.style.position = "absolute";
    lineSegment.style.width = "2px";

    /* calculate length */
    lineSegment.style.height = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + "px";

    /* set transformation origin */
    lineSegment.style.transformOrigin = "0 0";

    /* rotate line */
    lineSegment.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;

    /* set starting point */
    lineSegment.style.left = (200 + x1) + "px";

    /* set starting point */
    lineSegment.style.top = (200 - y1) + "px";

    /* line color */
    lineSegment.style.background = "green";

    graphContainer.append(lineSegment);

    /* show the coordinates of the two points */
    alert("You plotted a line segment from (" + x1 + ", " + y1 + ") to (" + x2 + ", " + y2 + ").");

}());

/*
draws line segments to connect two points on the graph. 

prompts user to enter the coordinates of two points and then draw the line segment connecting them.

shows the important foundational concept of straight lines and their equations in precalculus
*/
```

---

```javascript
javascript:(
/* Algebra - Solves Linear Equation */
function()
{
    /* enter coefficients a and b */
    let a = parseFloat(prompt("Enter the coefficient a"));

    let b = parseFloat(prompt("Enter the constant b"));

    /* test if the inputs are valid numbers */
    if (!isNaN(a) && !isNaN(b)) 
    {
        /* solve linear equation ax + b = 0 for x */
        let x = -b / a;

        alert("The solution for x is: " + x);
    }
    else
    {
        alert("Enter valid numeric coefficients.");
    }

}());
```

---

```javascript
javascript:(
/* Statistics - Total, Average, Highest */
function()
{
    let people =
    [
        {
            name: "Jane",
            score: 98
        },
        {
            name: "Jennifer",
            score: 85
        },
        {
            name: "Joan",
            score: 92
        },
        {
            name: "John",
            score: 83
        }
    ];

    function getStatistics(whichArray)
    {
        // calculate the sum of scores
        let sum = 0;

        for (let i = 0; i < whichArray.length; i++)
        {
            sum += whichArray[i].score;
        }

        // calculate the average score
        let average = sum / whichArray.length;

        // find the person with the highest score
        let highestScore = -1;

        let highestScorer = "";

        for (let i = 0; i < whichArray.length; i++)
        {
            if (whichArray[i].score > highestScore)
            {
                highestScore = whichArray[i].score;

                highestScorer = whichArray[i].name;
            }
        }

        alert("Total people: " + whichArray.length + "\nTotal score: " + sum + "\nAverage score: " + average + "\nHighest scorer: " + highestScorer + " with a score of " + highestScore);
    }

    getStatistics(people);

}());

/*

Total people: 4
Total score: 358
Average score: 89.5
Highest scorer: Jane with a score of 98

*/
```

---

```javascript
javascript:(
/* AI - Cube chases cube that moves at random positions */
function()
{
    /* create div for the first cube */
    let cube1 = document.createElement("div");
    cube1.style.position = "absolute";
    cube1.style.top = "100px";
    cube1.style.left = "100px";
    cube1.style.width = "50px";
    cube1.style.height = "50px";
    cube1.style.backgroundColor = "blue";
    document.body.append(cube1);

    /* create div for the second cube */
    let cube2 = document.createElement("div");
    cube2.style.position = "absolute";
    cube2.style.top = "200px";
    cube2.style.left = "200px";
    cube2.style.width = "50px";
    cube2.style.height = "50px";
    cube2.style.backgroundColor = "red";
    document.body.append(cube2);

    /*----*/

    function moveRandomly()
    {
        let maxX = window.innerWidth - 50;
        let maxY = window.innerHeight - 50;
        cube2.style.top = Math.random() * maxY + "px";
        cube2.style.left = Math.random() * maxX + "px";
    }

    /* move second cube randomly every 2 seconds */
    setInterval(moveRandomly, 2000);

    /*----*/

    function chase()
    {
     let cube1X = parseFloat(cube1.style.left) || 0;
     let cube1Y = parseFloat(cube1.style.top) || 0;
     let cube2X = parseFloat(cube2.style.left) || 0;
     let cube2Y = parseFloat(cube2.style.top) || 0;

      let deltaX = cube2X - cube1X;
      let deltaY = cube2Y - cube1Y;
      let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      let speed = 2;

      let offsetX = (deltaX / distance) * speed;
      let offsetY = (deltaY / distance) * speed;

      cube1.style.left = cube1X + offsetX + "px";
      cube1.style.top = cube1Y + offsetY + "px";
    }

    /* first cube chases second cube every 30 milliseconds */
    setInterval(chase, 30);

}());

/*
const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY); is used to calculate the Euclidean distance between two points in a two dimensional Cartesian coordinate system.
*/

/*
calculates the distance between two points in a two dimensional space using the Pythagorean theorem.
*/
```

---

```javascript
javascript:(
/* AI - Cube chases other cube smoothly */
function()
{
    /* create div for the first cube */
    let cube1 = document.createElement("div");
    cube1.style.position = "absolute";
    cube1.style.top = "100px";
    cube1.style.left = "100px";
    cube1.style.width = "50px";
    cube1.style.height = "50px";
    cube1.style.backgroundColor = "blue";
    document.body.append(cube1);

    /* create div for the second cube */
    let cube2 = document.createElement("div");
    cube2.style.position = "absolute";
    cube2.style.top = "200px";
    cube2.style.left = "200px";
    cube2.style.width = "50px";
    cube2.style.height = "50px";
    cube2.style.backgroundColor = "red";
    document.body.append(cube2);

    /*----*/

    function moveRandomly(cube)
    {
        let maxX = window.innerWidth - 50;
        let maxY = window.innerHeight - 50;

        let targetX = Math.random() * maxX;
        let targetY = Math.random() * maxY;

        let speed = 70;

        let distance = Math.sqrt(
      Math.pow(targetX - cube.offsetLeft, 2) +
        Math.pow(targetY - cube.offsetTop, 2)
        );

        /* milliseconds */
        let duration = (distance / speed) * 1000;

        cube.style.transition =
      "left " + duration + "ms linear, top " + duration + "ms linear";

       cube.style.left = targetX + "px";
       cube.style.top = targetY + "px";

       setTimeout(function()
       {
           /* clear the transition */
           cube.style.transition = "";

           moveRandomly(cube);

       }, duration);
    }

    /* move both cubes towards each other */
    moveRandomly(cube1);
    moveRandomly(cube2);

    /*----*/

    function chase()
    {
     let cube1X = parseFloat(cube1.style.left) || 0;
     let cube1Y = parseFloat(cube1.style.top) || 0;
     let cube2X = parseFloat(cube2.style.left) || 0;
     let cube2Y = parseFloat(cube2.style.top) || 0;

        let deltaX = cube2X - cube1X;
        let deltaY = cube2Y - cube1Y;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        let speed = 70;

        let offsetX = (deltaX / distance) * speed;
        let offsetY = (deltaY / distance) * speed;

        cube1.style.left = cube1X + offsetX + "px";
        cube1.style.top = cube1Y + offsetY + "px";

        requestAnimationFrame(chase);
      }

      /* move first cube to chase second cube */
      chase();

}());
```

---

```javascript
javascript:(
/* Airplane Projectile Simulated Drop where user clicks */
function()
{
    let airplane = document.createElement('div');
    airplane.style.position = 'absolute';
    airplane.style.left = '-50px';
    airplane.style.top = '50px';
    airplane.style.width = '50px';
    airplane.style.height = '20px';
    airplane.style.backgroundColor = 'blue';
    airplane.style.transition = 'all 2s linear';
    document.body.append(airplane);

    /*----*/

    let projectile = document.createElement('div');
    projectile.style.position = 'absolute';
    projectile.style.width = '15px';
    projectile.style.height = '15px';
    projectile.style.borderRadius = "50%";
    projectile.style.backgroundColor = 'aqua';
    projectile.style.transition = 'all 1s linear';
    projectile.style.display = 'none';
    document.body.append(projectile);

    let flying = false;

    document.onclick = function(event)
    {
        if (!flying)
        {
            flying = true;

            airplane.style.transform = 'translate(' + window.innerWidth + 'px, 0)';

            setTimeout(function()
            {
                let x = event.clientX;
                let y = event.clientY;

                projectile.style.left = x + 'px';
                projectile.style.top = '25px';

                projectile.style.display = 'block';

                /* projectile path */
                projectile.style.transform = 'translateY(' + (y - 25) + 'px)';
            }, 1000);
        }
    };

}());

/*
When a person left clicks their mouse on the screen an airplane will fly to the right and simulate dropping a projectile below, which will remain on the screen.
*/
```

---

```javascript
javascript:(
/* Airplane - Projectile - Realistic - drops from bottom middle of airplane  */
function()
{
    let airplane = document.createElement('div');
    airplane.id = "airplane";
    airplane.style.position = 'absolute';
    airplane.style.left = '-50px';
    airplane.style.top = '50px';
    airplane.style.width = '50px';
    airplane.style.height = '20px';
    airplane.style.backgroundColor = 'blue';
    airplane.style.transition = 'all 2s linear';
    document.body.append(airplane);

    /*----*/

    let projectile = document.createElement('div');
    projectile.id = "projectile";
    projectile.style.position = 'absolute';
    projectile.style.width = '15px';
    projectile.style.height = '15px';
    projectile.style.borderRadius = "50%";
    projectile.style.backgroundColor = 'aqua';
    /* initially hide the object */
    projectile.style.display = 'none';
    document.body.append(projectile);

    let flying = false;

    document.onclick = function(event)
    {
        if (!flying)
        {
            flying = true;

            let x = event.clientX + 15;
            let y = event.clientY;

            /* adjustment for the airplane's center */
            let airplaneCenterAdjustment = airplane.offsetWidth / 2;

            /* set plane's starting position to left of viewport */
            airplane.style.left = -airplaneCenterAdjustment + 'px';

/* set plane's final pos (where it was clicked)*/
            airplane.style.transform = 'translate(' + (x - airplaneCenterAdjustment) + 'px, 0)';

            /* set initial pos of the projectile at the bottom middle of the airplane */
            let airplaneRect = airplane.getBoundingClientRect();

            let projectileLeft = x - airplaneCenterAdjustment;

           /* place projectile at bottom of airplane */
            let projectileTop = airplaneRect.bottom;                  

            projectile.style.left = projectileLeft + 'px';
            projectile.style.top = projectileTop + 'px';

            /* calculate the distance to fall (from top to the user's click Y-coordinate) */
            let distanceToFall = y - projectileTop;

            /* set a timeout to start the object's descent and reveal it */
            setTimeout(function()
            {
                /* display object to make it visible */
                projectile.style.display = 'block';

                /* set the initial time and speed */
                let startTime = null;

                /* falling speed: higher values make it fall faster */
                let speed = 200;

                function animateProjectile(timestamp)
                {
                    if (!startTime)
                    {
                        startTime = timestamp;
                    }

                    /* calculate the elapsed time */
                    let elapsedTime = timestamp - startTime;

                    /* calculate the new top position based on the elapsed time and speed */
                    let newY = (elapsedTime / 1000) * speed;

                    if (newY < distanceToFall)
                    {
                        /* continue the animation */
      requestAnimationFrame(animateProjectile);
                    }
                    else
                    {
                        /* finish the animation when it reaches the target Y coordinate */
                        newY = distanceToFall;
                    }

                    /* apply the new top position */
                    projectile.style.transform = 'translateY(' + newY + 'px)';
                }

                /* start the animation */
        requestAnimationFrame(animateProjectile);
            }, 2000);

                /* adjust the timeout delay based on the airplane's transition duration */
        }
    };

}());
```

---

```javascript
javascript:(
/* Make Roads like in Cities Skylines */
function()
{
    function makeRoad()
    {
        let road = document.createElement("div");
        road.style.position = "absolute";
        road.style.backgroundColor = "gray";
        road.style.height = "20px";
        road.style.width = "5px";
        road.style.pointerEvents = "none";
        document.body.append(road);

        let isDrawing = false;

      document.addEventListener("mousedown", function(e)
        {
            isDrawing = true;
            road.style.left = e.pageX + "px";
            road.style.top = e.pageY + "px";
        });

        document.addEventListener("mouseup", function()
        {
            isDrawing = false;
        });

      document.addEventListener("mousemove", function(e)
        {
            if (isDrawing)
            {
                let currentX = e.pageX;
                let currentY = e.pageY;

                let deltaX = currentX - parseInt(road.style.left);

                let deltaY = currentY - parseInt(road.style.top);

                let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                let angle = Math.atan2(deltaY, deltaX);

                road.style.width = length + "px";

                road.style.transform = "rotate(" + angle + "rad)";
            }
        });
    }

    makeRoad();

}());

/* After we have activated this bookmarklet, we hold left click and drag our mouse to make the road, and then let go of the left click to place the road at that angle.
Now at anytime that we want we can left click to place that angled road piece anywhere on the screen. */
```

---

```javascript
javascript:(
/* Password Generator - Specify How Many Characters without Input Validation */
function()
{
    function makePassword()
    {
        function generatePassword(whichAmount)
        {
            let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/{}[]";

            let password = "";

            for (let x = 0; x < whichAmount; x++)
            {
                let randomIndex = Math.floor(Math.random() * characters.length);

                password += characters.charAt(randomIndex);
            }

            return password;
        }

        let passwordLength = prompt("Enter how many characters");

        if (passwordLength !== null)
        {
            let parsedLength = parseInt(passwordLength);

            let generatedPassword = generatePassword(parsedLength);

            console.log("Password is " + generatedPassword);

            alert("Password is " + generatedPassword);
        }
    }

    makePassword();

}());
```

---

```javascript
javascript:(
/* Password Generator - Specify How Many Characters with Input Validation */
function()
{
    function makePassword()
    {
        function generatePassword(whichAmount)
        {
            let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/{}[]";

            let password = "";

            for (let x = 0; x < whichAmount; x++)
            {
                let randomIndex = Math.floor(Math.random() * characters.length);

                password += characters.charAt(randomIndex);
            }

            return password;
        }

        let passwordLength = prompt("Enter how many characters");

        if (passwordLength !== null)
        {
            let parsedLength = parseInt(passwordLength);

            if (!isNaN(parsedLength) && parsedLength > 0)
            {
                let generatedPassword = generatePassword(parsedLength);

                console.log("Password is " + generatedPassword);

                alert("Password is " + generatedPassword);
            }
            else
            {
                alert("You didn't enter how many characters you want the password to be.");
            }
        }
    }

    makePassword();

}());
```

---

```javascript
javascript:(
/* RegEx - Text Between Quotes - Single Match */
function()
{
    let text = 'This is "some text" within double quotes.';

    let regex = /"([^"]+)"/g;

    let match = text.match(regex);

    if (match)
    {
        alert(match);
    }

}());
```

---

```javascript
javascript:(
/* RegEx - Text Between Quotes - join - shows each match on separate lines */
function()
{
    let text = 'This is "some text" within double quotes. Here is "more text" in double quotes.';

    let regex = /"([^"]+)"/g;

    let matches = text.match(regex);

    if (matches)
    {
        /* show each match on a new line */
        alert(matches.join("\n"));
    }

}());
```

---

```javascript
javascript:(
/* RegEx - Highlight Selected Text that is Text Between Quotes - join - shows each match on separate lines */
function()
{
    let text = window.getSelection().toString();

    let regex = /"([^"]+)"/g;

    let matches = text.match(regex);

    if (matches)
    {
        /* show each match on a new line */
        alert(matches.join("\n"));
    }

}());
```

---

```javascript
javascript:(
/* RegEx - Highlight Text Between Quotes - join - shows each match on new line */
function()
{
    let text = document.body.textContent;

    let regex = /"([^"]+)"/g;

    let matches = text.match(regex);

    if (matches)
    {
        /* show each match on a new line */
        alert(matches.join("\n"));
    }

}());
```

---

```javascript
javascript:(
/* NLP - Count How Many Words in a Selection */
function()
{
    function getWordAndCharCountOfSelected()
    {
        /* get selected text from the webpage */
        let selectedText = window.getSelection().toString();

        /* count the number of words */
        /* \s+ matches one or more whitespace characters (spaces, tabs, linebreaks)
        /* splits the text based on any combination of whitespace characters */
        let wordCount = selectedText.split(/\s+/).filter(Boolean).length;

        /* count the number of characters */
        let charCount = selectedText.length;

        /* return the statistics */
        return "Word Count: " + wordCount + "\nCharacter Count: " + charCount;
    }

    alert(getWordAndCharCountOfSelected());

}());

/*
counts the number of words by splitting the text using a regular expression that matches one or more whitespace characters (spaces, tabs, and linebreaks) and then filters out any empty strings from the resulting array before counting its length.
*/
```

```javascript
javascript:(
/* Natural Language Processing - split, some, startsWith */
function()
{
    function processLanguage()
    {
        let sentence = prompt("Say Anything");

        let words = sentence.split(' ');

        let found = words.some(function(word)
        {
            return word.startsWith('n');
        });

        if (found)
        {
            alert('Found a word that starts with "n".');
        }
        else
        {
            alert('No words found that start with "n".');
        }
    }

    processLanguage();

}());

/* Found a word that starts with "n"! */
```

---

```javascript
javascript:(
/* NLP - with input */
function()
{
    /* create a container div for input element */
    let container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.right = '10px';
    container.style.top = '10px';
    document.body.append(container);

    /*----*/

    /* create the input element */
    let userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = 'Search for words starting with "n"';
    container.append(userInput);

    /*----*/

    /* create a button for executing the search */
    let searchButton = document.createElement('button');
    searchButton.innerText = 'Search';

    /* Enter key triggers a click on send button */
    userInput.onkeydown = function(event)
    {
        if (event.key === "Enter")
        {
            /* prevent default Enter key behavior */
            event.preventDefault();

            /* trigger a click on the search button */
            searchButton.click();
        }
    };

    container.append(searchButton); 

    /*----*/

    function searchWords()
    {
        let sentence = "It's a very nice day out.";

        let words = sentence.split(' ');

        let found = words.some(function(word)
        {
            return word.startsWith('n');
        });

        if (found)
        {
            alert('Found a word that starts with "n"!');
        }
        else
        {
            alert('No words found that start with "n".');
        }
    }

    /* attach search func to button click event */
    searchButton.addEventListener('click', function()
    {
        searchWords();
    });

}());
```

---

```javascript
javascript:(
/* NLP - with input, word character count */
function()
{
    let container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.right = '10px';
    container.style.top = '10px';
    document.body.append(container);

    /*----*/

    /* userInput */
    let userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = 'Search for words starting with "n"';
    container.append(userInput);

    /*----*/

    /* searchButton */
    let searchButton = document.createElement('button');
    searchButton.innerText = 'Search';

    /* Enter key triggers a click on send button */
    userInput.onkeydown = function(event)
    {
        if (event.key === "Enter")
        {
            /* prevent default Enter key behavior */
            event.preventDefault();

            /* trigger a click on the search button */
            searchButton.click();
        }
    };

    container.append(searchButton); 

    /*----*/

    function searchWords()
    {
        let sentence = "It's a very nice day out.";

        let words = sentence.split(' ');

        let found = words.some(function(word)
        {
            return word.startsWith('n');
        });

        if (found)
        {
            alert('Found a word that starts with "n"!');
        }
        else
        {
            alert('No words found that start with "n".');
        }

        /* count the number of words */
        let wordCount = words.length;

        /* count the number of characters */
        let charCount = sentence.length;

      /* display word count and character count */
        console.log("Word Count: " + wordCount + "\n" + "Character Count: " + charCount);
    }

    /* attach search func to button click event */
    searchButton.addEventListener('click', function()
    {
        searchWords();
    });

}());
```

---

```javascript
javascript:(
/* Robot AI */
/*Textbox for Input with Send Button - Random Responses every time to keywords and phrases and variations of keywords and phrases found. Other random response when no keywords are found - and Calculations*/
function()
{
    let mainDiv = document.createElement("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.top = "0";
    mainDiv.style.right = "0";
    mainDiv.style.padding = "5px";
    mainDiv.style.backgroundColor = "rgb(0, 0, 0)";
    mainDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.style.zIndex = "10000";
    document.body.append(mainDiv);

    let userInput = document.createElement("input");
    userInput.type = "text";
    userInput.placeholder = "Type Words Here";
    userInput.style.width = "200px";
    userInput.style.paddingLeft = "10px";
    userInput.style.paddingRight = "10px";
    userInput.style.paddingTop = "4px";
    userInput.style.paddingBottom = "4px";
    mainDiv.append(userInput);

    let sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    mainDiv.append(sendButton);

   /* if keyword is found, use these responses */
    let responses =
    [
        {
            keywords: ["hi", "howdy", "hey"],
            responses: ["Howdy", "Hi there", "Hi"]
        },
        {
            keywords: ["weather", "forecast", "sunny", "cloudy"],
            responses: ["It's a beautiful day.", "The weather is very nice.", "It's sunny and warm."]
        },
        {
            keywords: ["how are you", "what's up", "what are you up to?"],
            responses: ["I'm doing good, you?", "Having fun and you?", "I'm good, how about you?"]
        },
        {
            keywords: ["bye", "goodbye", "take care"],
            responses: ["Bye. Talk to you soon.", "Goodbye!", "Have fun."]
        },
        {
            keywords: ["interests", "career"],
            responses: ["Computer Science is fun.", "Programming is lots of fun.", "I like programming a lot."]
        }
    ];

/* if no keywords found, use these responses */
    let randomResponses =
    [
        "That's interesting!",
        "Would you tell me more?",
        "Hmm, tell me more about that.",
        "Would you elaborate?",
        "Interesting, please go on.",
        "Fascinating! Tell me more.",
    ];

    let context = null;

    /* Enter key triggers a click on send button */
    userInput.onkeydown = function(event)
    {
        if (event.key === "Enter")
        {
            /* prevent default Enter key behavior */
            event.preventDefault();

            /* trigger a click on the send button */
            sendButton.click();
        }
    };

    sendButton.onclick = function()
    {
        let userQuestion = userInput.value.trim();

        if (userQuestion)
        {
            let responseObj = responses.find(function(obj)
            {
                return obj.keywords.some(function (keyword)
                {
                    return userQuestion.toLowerCase().indexOf(keyword) !== -1;
                });
            });

            if (responseObj)
            {
                let randomIndex = Math.floor(Math.random() * responseObj.responses.length);

    alert(responseObj.responses[randomIndex]);

                if (responseObj.keywords.indexOf("bye") !== -1)
                {
                    context = null;
                }
                else
                {
                    context = responseObj.keywords;
                }
            }
            else
            {
                let result = calculate(userQuestion);

                if (result !== null)
                {
                    alert("The result is: " + result);
                }
                else
                {
                    let randomIndex = Math.floor(Math.random() * randomResponses.length);

            alert(randomResponses[randomIndex]);
                }
            }

            userInput.value = "";
        }
    };

    function calculate(input)
    {
        try
        {
            return eval(input);
        }
        catch (error)
        {
            return null;
        }
    }

}());
```

---
