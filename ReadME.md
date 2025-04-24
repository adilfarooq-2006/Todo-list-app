# To-Do List App

This is a simple To-Do list application built with **React**. The app allows you to manage your tasks by adding, editing, deleting, marking tasks as completed, and toggling between showing all tasks or just incomplete ones. The tasks are stored in **local storage**, so your data persists even when you refresh the page.

## Features
- **Add Todo**: Add new tasks to your list with a title.
- **Edit Todo**: Edit existing tasks.
- **Delete Todo**: Delete tasks from your list.
- **Mark as Completed**: Toggle between completed and incomplete tasks.
- **Show/Hide Completed**: Option to show or hide completed tasks.
- **Local Storage**: The app uses local storage to save tasks, so they persist even after a page refresh.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **localStorage**: Web API for storing data in the browser.
- **Tailwind CSS**: Tailwind is used for styling and making it responsive

## How It Works
1. **App Component**: The main component where tasks are displayed and managed. It uses React hooks like `useState` and `useEffect` to manage state and persist tasks in local storage.
2. **Local Storage**: Tasks are saved to local storage, allowing them to persist across sessions.
3. **Toggle Completed Tasks**: You can mark tasks as completed by checking the checkbox. Completed tasks can be hidden or shown using the "Show Finished" checkbox.
4. **Edit and Delete**: Each task has buttons for editing or deleting it.
