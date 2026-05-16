# Task MANAGER API 

A REST API for managing tasks, built with Node.js, Express, MySQL, and Tailwind CSS.

This API allows users to create, read, update, and delete tasks.


## Features

- Add a task
- Display all tasks
- Update a task
- Delete a task
- Mark task as completed
- Filter tasks (All / Active / Completed)


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



## Database

Create Database
```bash
CREATE DATABASE taskmanager;
```
Create Table
```bash
CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  status BOOLEAN DEFAULT false
);
```


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


- `GET /tasks` : Get all tasks.
- `GET /tasks/:id` : Get a single task.
- `POST /tasks` : Create a task.
- `PUT /tasks/:id` : Update a task.
- `DELETE /tasks/:id` : Delete a task.



## User Interface

The frontend interface allows users to:

- Add tasks.
- Edit tasks.
- Delete tasks.
- Change task status.
- Filter tasks dynamically.


## Author: 
- Safa, Ilyase, Maryam