# Task MANAGER API 

A REST API for managing tasks, built with node.js, Express, and MySQL.

This API allows users to create, read, update, and delete tasks.


## Core Functionality

- Task Creation : Add a task with a title and completion status.
- List Tasks : Get the entire collection of stored tasks.
- Locate Task : Retrieve a specific task using its unique ID.
- Modify Task : Update the title or toggle the status of an existing task.
- Delete Task : Permanently delete a task from the database.


## Project Structure

Task/
|── controllers
|   └── taskController.js
|── frontend
|   └── index.html
|── routes
|   └── taskRoutes.js
|── .env
|── .gitignore
|── app.js
└──  db.js
