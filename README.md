# intern-coding-challenge

## Installation & Usage
Requirements: Node, Git
Instructions to start
1. Frontend:
  - Navigate to frontend/ folder
  - execute 'npm install'
  - edit backend host and port in config.js file
  - execute 'npm start'
  - application starts at port 3000
2. Backend :
  - Navigate to backend/ folder
  - execute 'npm install'
  - edit host and port for backend as well as for database in config file
  - execute 'node index.js'
  - application starts listening at port 5676
  - Navigate to kafka-backend/ folder
  - execute 'npm install'
  - execute 'node server.js'

## Usage
Open localhost:3000 in the browser, the app will send a GET request to the backend to retrieve ticket data. 
The data from the backend will be listed in a table with 10 rows per page.

Click on a ticket to display additional details. Click on 'x' button or anywhere other than the modal to close..

The tickets are paginated with 10 tickets per page and click on arrow button to navigate to other pages.
Click on 'down arrow' at the bottom of the page to change the number of tickets to view per page.
