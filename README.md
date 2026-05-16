# Task MANAGER API 

A REST API for managing tasks, built with node.js, Express, and MySQL.

This API allows users to create, read, update, and delete tasks.


## Core Functionality

- Task Creation : Add a task.
- List Tasks : Get the entire collection of stored tasks.
- Locate Task : Retrieve a specific task using its unique ID.
- Modify Task : Update the title or toggle the status of an existing task.
- Delete Task : Permanently delete a task from the database.


## Project Structure

```bash
Task/
│── controllers/
│   └── taskController.js
│── frontend/
│   └── index.html
│── routes/
│   └── taskRoutes.js
│── .env
│── .gitignore
│── app.js
└── db.js
```


## Technologies Used 

Frontend

- HTML           :  Structure and markup of the user interface.
- Tailwind CSS   :  Utility-first CSS framework for styling.
- JavaScript     :  Handles UI logic and sends requests to the task management API.


Backend

- Node.js        : JavaScript runtime , executes server-side code outside the browser.
- Express.js     : HTTP routing, middleware pipeline, and REST API handler.
- dotenv         : Loads environment variables from a .env file at startup.
- cors           : Middleware that enables cross-origin requests from the browser.
- morgan         : HTTP request logger for development and debugging.
- nodemon        : Auto-restarts the server on file changes.


Database

- MySQL          : Relational database ; persists and queries application data.
- mysql2         : Node.js MySQL driver with Promise and async/await support.





## Installation

- Clone the repo :
```bash
  git clone https://github.com/your-username/your-repo.git
```

- Navigate to the project folder :
```bash
  cd repo
```

- Install dependencies :
```bash
  npm install
```

- Create a .env file in the root directory and add the following :
```bash
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=your_password
  DB_NAME=your_database
  PORT=3000
```

- Run the server :
```bash
  npm run dev
```


## How Do I Call the API ?

Base URL: `http://localhost:3000`

Use :


- `GET /tasks` : get all tasks, 
- `GET /tasks/:id` : get a single task,
- `POST /tasks` : create one, 
- `PUT /tasks/:id` : update it,
- `DELETE /tasks/:id` : delete it.

