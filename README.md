# User Management Application

This is a React-based User Management application that allows users to view, edit, add, and delete user details. The application fetches user data from the https://jsonplaceholder.typicode.com/ and provides a simple interface for managing users.

## Features

- View a list of users with pagination.
- Add a new user.
- Edit an existing user's details.
- Delete a user from the list.
- Error handling for API failures.
- Responsive user interface for mobile and desktop.

## Project Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

# Installation Steps

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the application:**

   After the dependencies are installed, start the development server:

   ```bash
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

## Application Overview

### Components

- **App.js**: 
  - The main component that handles fetching user data, managing the state for the users, form inputs, pagination, and actions (add, edit, delete).
  - It contains methods to handle user interactions and state updates.

- **UserList.js**: 
  - This component is responsible for displaying the list of users.
  - It provides buttons to edit or delete individual users.
  
- **UserForm.js**: 
  - This component displays the form for adding or editing a user. 
  - It handles form submissions and input changes.

- **ErrorBoundary.js**: 
  - This component catches errors in the child components and displays a fallback UI in case something goes wrong.

### Functionality

1. **Viewing Users:**
   - The `UserList` component fetches and displays a list of users. Each user has an "Edit" and "Delete" button for interacting with them.

2. **Editing Users:**
   - When the "Edit" button is clicked, the form is populated with the user's current data. After editing, the changes are saved to the state.

3. **Adding a New User:**
   - The "Add User" button opens a form to add a new user to the list. This simulates adding a user by creating a new user object and adding it to the state.

4. **Deleting a User:**
   - The "Delete" button removes the user from the list by filtering out the user from the state.

5. **Pagination:**
   - The application supports pagination, allowing users to navigate between pages of users. It fetches a set number of users per page from the API.

6. **Error Handling:**
   - If any error occurs while fetching user data or processing requests, an error message is displayed.

## File Structure

```plaintext
/src
├── components
│   ├── ErrorBoundary.js      # Error boundary to catch errors in child components
│   ├── UserForm.js           # Form to add or edit user
│   ├── UserList.js           # Displays list of users
├── App.js                    # Main component with business logic
├── index.js                  # Entry point for React application
├── App.css                   # Basic styling for the app
```

### Key Concepts

- **State Management**: 
  - The app uses React's local state to manage the list of users, form inputs, pagination, and error messages.

- **API Communication**:
  - Axios is used to make API calls to fetch users from the JSONPlaceholder API.
  - The app simulates adding and deleting users since the data is not persistent in the JSONPlaceholder API.

- **Error Boundaries**:
  - `ErrorBoundary.js` ensures that if any component throws an error, it’s caught and a user-friendly message is shown.

### How to Contribute

If you want to contribute to this project:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch with a descriptive name.
4. Implement your changes and write tests if necessary.
5. Commit your changes and push them to your fork.
6. Open a pull request to the main repository.

### Challenges Faced & Potential Improvements

1. **Challenges**:
   - Handling form state for both adding and editing users can be tricky when managing the input fields dynamically.
   - Pagination logic can be enhanced further by managing the total number of pages based on the total users available.

2. **Potential Improvements**:
   - Implement sorting and filtering functionality for user lists.
   - Use React Context or a state management library like Redux for global state management.
   - Integrate a real database for adding, editing, and deleting user data (currently, the app uses a mock API with `JSONPlaceholder`).



