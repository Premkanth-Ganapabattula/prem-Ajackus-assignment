import React, { Component } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ErrorBoundary from './components/ErrorBoundary';

import './App.css'

class App extends Component {
  // Initial state to store users, form data, error messages, and other UI-related states
  state = {
    users: [], // Holds the list of users fetched from the API
    formState: { // Holds data for the current form (both for adding and editing users)
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      department: '',
    },
    error: '', // Stores error messages from API requests
    isEditing: false, // Boolean flag to check if we're in "edit" mode or "add" mode
    page: 1, // Tracks the current page for pagination
    perPage: 5, // Number of users to display per page
  };

  // Fetch users when the component is mounted
  componentDidMount() {
    this.fetchUsers();
  }

  // Function to fetch users from the API
  fetchUsers = async () => {
    try {
      const { page, perPage } = this.state; // Get current page and users per page from the state
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${perPage}`);
      this.setState({ users: response.data }); // Update users in state with the response
    } catch (error) {
      this.setState({ error: 'Failed to fetch users' }); // Set error message if fetching fails
    }
  };

  // Function to handle changes in the form inputs
  handleFormChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the input field that changed
    this.setState({
      formState: {
        ...this.state.formState, // Retain the existing form state values
        [name]: value, // Update the value of the specific input field
      },
    });
  };

  // Handle form submission to either add or edit a user
  handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const { formState, isEditing, users } = this.state;

    if (isEditing) {
      // If in "edit" mode, update the user in the state
      const updatedUsers = users.map((user) =>
        user.id === formState.id // Find the user by their ID
          ? { ...user, name: formState.firstName + " " + formState.lastName, email: formState.email, company: {name: formState.department} }
          : user // Keep other users unchanged
      );
      this.setState({
        users: updatedUsers, // Update the list of users in state
        isEditing: false, // Turn off editing mode
        formState: { id: '', firstName: '', lastName: '', email: '', department: '' }, // Clear the form
      });
    } else {
      // If not in "edit" mode, add a new user
      const newUser = {
        id: new Date().getTime(), // Mock a unique ID for the new user
        name: formState.firstName + " " + formState.lastName,
        email: formState.email,
        company: {
          name: formState.department
        }
      };
      this.setState({
        users: [...users, newUser], // Add the new user to the list
        formState: { id: '', firstName: '', lastName: '', email: '', department: '' }, // Clear the form
      });
    }
  };

  // Function to populate the form for editing a user
  handleEdit = (user) => {
    // Set the form to the user's current data and set the editing flag to true
    this.setState({
      formState: {
        id: user.id,
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1],
        email: user.email,
        department: user.company.name,
      },
      isEditing: true, // Enable editing mode
    });
  };

  // Function to delete a user from the state
  handleDelete = (id) => {
    const updatedUsers = this.state.users.filter((user) => user.id !== id); // Filter out the user with the given ID
    this.setState({
      users: updatedUsers, // Update the state with the remaining users
    });
  };

  // Handle pagination (change the current page)
  handlePagination = (pageNumber) => {
    this.setState({ page: pageNumber }, this.fetchUsers); // Update the page number and fetch users for the new page
  };

  render() {
    const { users, formState, error, isEditing, page, perPage } = this.state;

    return (
      <div className="App">
        <ErrorBoundary>
          <h1 className='main-heading'>User Management</h1>
          {error && <p>{error}</p>} {/* Show error message if fetching users fails */}
          
          {/* Button to reset the form and prepare for adding a new user */}
          <button className='add-user-button' onClick={() => this.setState({ isEditing: false, formState: { id: '', firstName: '', lastName: '', email: '', department: '' } })}>
            Add User
          </button>
          
          {/* UserForm component to handle user input */}
          <UserForm
            formState={formState}
            onChange={this.handleFormChange}
            onSubmit={this.handleFormSubmit}
            isEditing={isEditing}
          />
          
          {/* UserList component to display users in a table */}
          <UserList users={users} onEdit={this.handleEdit} onDelete={this.handleDelete} />
          
          {/* Pagination controls */}
          <div>
            <button onClick={() => this.handlePagination(page - 1)} disabled={page <= 1}>
              Prev
            </button>
            <span>{`Page ${page}`}</span>
            <button onClick={() => this.handlePagination(page + 1)}>
              Next
            </button>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
