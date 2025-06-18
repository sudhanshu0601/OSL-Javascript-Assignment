# OSL-Javascript-Assignment

## Description
This is a simple and functional To-Do List application built using **HTML**, **CSS**, and **JavaScript**. It allows users to add tasks, view them in a list, and delete individual tasks. The app uses **Local Storage** to save tasks so they persist even after the page is refreshed.

## Features
- Add new tasks
- Display tasks in a list
- Delete individual tasks
- Automatically saves tasks using local storage

## What I Learned
- How to use `localStorage` for data persistence in the browser
- DOM manipulation with JavaScript (creating elements, handling events)
- Writing modular and reusable JavaScript functions
- Using `DOMContentLoaded` to ensure scripts run after the page loads

## Challenges Faced
- **Local Storage management**: Ensuring tasks are properly saved and retrieved from localStorage, especially handling empty or corrupted data.
- **Delete button functionality**: Making sure the correct task gets deleted using the index and re-rendering the updated list.
- **Form validation**: Preventing empty tasks from being added by trimming the input value.

## How to Run
1. Open `index.html` in any modern web browser.
2. Add a task in the input field and click **Add Task**.
3. Your tasks will appear below with a delete icon.
4. Tasks will remain saved even if you refresh the page, thanks to local storage.

