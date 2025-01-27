import React from 'react';

import './index.css'

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>User List</h2>
      <table className='users-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Iterate over the users array and display each user's information in a table row */}
          {users.map((user) => (
            <tr key={user.id} className='users-list'>
              <td className='users-list'>{user.id}</td>
              <td>{user.name.split(' ')[0]}</td>
              <td>{user.name.split(' ')[1]}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                {/* Buttons to trigger editing and deleting a user */}
                <button className='edit-button' onClick={() => onEdit(user)}>Edit</button>
                <button className='delete-button' onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
