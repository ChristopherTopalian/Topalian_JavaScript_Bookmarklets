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
