# google-book-react-search-02.13.21

## About The Project

---

![alt text](client/src/Assets/Images/image1.PNG)

![alt text](client/src/Assets/Images/image2.PNG)

![alt text](client/src/Assets/Images/image3.PNG)

![alt text](client/src/Assets/Images/image4.PNG)
![alt text](client/src/Assets/Images/image5.PNG)
![alt text](client/src/Assets/Images/image6.PNG)

-    User able to view entire employee directory at once so that have quick access to their information.

-    When user open this app can able to see randome users table with the following information in UI.


    * user's Image
    * Name
    * E-mail
    * Phone
    * DOB

-    The user should be able to:


    * Sort the table by Name column category in header row of table(Click on a  Name column category
     to sort by that column in ascending or descending order).

    * Enter a search in the search box to query of the  Name column(Filter the user's list using first
     and last name property)

## Implemented the following functionalities

### Get the Random User's List:

-    To get the random user's list using API("https://randomuser.me/api/?results=200") and display information as a table
     in UI.

### Filterted the User's List with onChange event and Javascript filter method.

-    When we enter character or characters in search box,then the user's list will be displayed who has
     the same charcter or charactes in user's first and last name.

### Sort the User's List(ascending/descending) with JavaScript sort method.

## Built With

-    React components
-    Javascript filter and sort methods
-    HTML

## Getting Started

To get a local copy up and running follow below steps.

## Prerequisites

None

## Installation instructions:

Clone the repo git clone git@github.com:NirmalaAbothu/user-directory-01.30.2021.git then open Git Bash window ,navigate to project folder "user-directory-01.30.2021" then run
following commands

-    Make a package.json file by running `npm init` from the command line.
-    `npm install axios`
-    `npm start`
-    Navigate to the browser and type: `localhost:3000'

## Credits

### Followed the below documentation

-    React documentation
-    JavaScript documentation

## License & copyright

Copyright © 2020 Nirmala Abothu

[Deployed Github Link](https://nirmalaabothu.github.io/user-directory-01.30.2021/)
