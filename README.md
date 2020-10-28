
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/hjlogique/Note-Taker?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/hjlogique/Note-Taker?style=flat&logo=appveyor)
  
# Note-Taker


  ## Description 
  
  This application allows users to write, save, view and delete their notes, so that they can organize their thoughts and keep track of information they need. It uses an express backend and saves and retrieves note data from a JSON file.

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  
  In command line type the `npm i` command to install the NPM package dependencies specified in the `package.json` file. There is one main required module called [express](https://www.npmjs.com/package/express), which is a flexible `Node. js` web app framework used to structure a web application to handle multiple different http requests at a specific url. 
  Next type `node server.js` in the command line to run the server. The `PORT` number used for this application is `3001`. To view the application in the browser use `localhost:3001` as your URL. This application is also deployed on the `Heroku` server. You can access it at this [link to Note Taker on Heroku](https://glacial-wildwood-15051.herokuapp.com).
  
  ## Usage 
  
  Using this application, users can write view, save and delete notes. By selecting the `pen icon` (new note button) users can create a new note. Once the note title and the text content are entered by users, they can use the `floppy disk icon` (save button) to save the new note. As soon as the new note is saved, a new row is added to the left column list. By selecting each item in the list users can view the content of the selected note. Each `trash icon` (delete button) in the listed items deletes the selected note and removes it from the list. The followings are two screenshots of the application:

![Note Taker application screenshot1](/screenshots/Screenshot1.png)

![Note Taker application screenshot2](/screenshots/Screenshot2.png)
 
  ## Contributing
  
  Please let me know if there are any ways to improve the logic, the code or the features of this application. Please also let me know about any found bugs or issues. I would really appreciate your contributions.
  
  ## Questions
  
  [Link to my GitHub profile](https://github.com/hjlogique)

  If you have any questions, please contact me via email:
  
  Email: hjlogique@yahoo.com
  
  ## License
  
  MIT License