import React from 'react';

import './index.css'

const UserForm = ({ formState, onChange, onSubmit, isEditing }) => {
  return (
    <div>
      <h2>{isEditing ? 'Edit User' : 'Add User'}</h2> {/* Toggle the title based on edit mode */}
      <form onSubmit={onSubmit} className='form-elements'> {/* Form submission handler */}
        {/* Input fields for user details */}
        <input
          type="text"
          name="firstName"
          value={formState.firstName} // Bind the value to the formState
          onChange={onChange} // Handle input change
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formState.lastName} // Bind the value to the formState
          onChange={onChange} // Handle input change
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formState.email} // Bind the value to the formState
          onChange={onChange} // Handle input change
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="department"
          value={formState.department} // Bind the value to the formState
          onChange={onChange} // Handle input change
          placeholder="Department"
        />
        {/* Submit button text changes based on whether we're adding or editing a user */}
        <button className='add-user-button' type="submit">{isEditing ? 'Save Changes' : 'Add User'}</button>
      </form>
    </div>
  );
};

export default UserForm;
