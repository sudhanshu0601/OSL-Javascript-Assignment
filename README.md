# OSL JavaScript Assignment

## Overview  
This is a basic yet functional To-Do List app built using **HTML**, **CSS**, and **JavaScript**. It lets you add tasks, view them in a list, and delete them individually. Tasks are saved using **Local Storage**, so they stay even after you refresh the page.

## Features  
- Add new tasks  
- View tasks in a list  
- Delete tasks one by one  
- Automatic saving using Local Storage  

## What I Learned  
- How to use `localStorage` to keep data persistent in the browser  
- Manipulating the DOM: creating elements, adding event listeners, updating the UI dynamically  
- Writing modular and reusable JavaScript functions  
- Using `DOMContentLoaded` to ensure the script runs after the page has fully loaded

## Challenges  
- **Managing Local Storage**: Making sure tasks are saved and loaded properly, especially when the data might be empty or corrupted  
- **Deleting tasks**: Ensuring the correct task gets removed and the list re-renders properly  
- **Form validation**: Preventing users from adding empty tasks by trimming input values

## How to Use  
1. Open `index.html` in any modern browser  
2. Enter a task into the input field and click **Add Task**  
3. Your task will appear in a list below, with a delete icon next to it  
4. All tasks are saved automatically and will remain even if you refresh the page

