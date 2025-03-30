import React, { Component } from 'react';
import './styles.css'; // არ დაგავიწყდეს სტილის ფაილის იმპორტი

class UsersList extends Component {
  render() {
    const users = [
        {firstName: "ლაშა", lastName: "მოსიძე"}, 
        {firstName: "საბა", lastName: "აბუსელიძე"}, 
        {firstName: "ლაშა", lastName: "ბერიძე"}
    ];

    return (
      <div className="fruits-container">
        <h2>მომხმარებლების სია</h2>
        <ul className="fruits-list">
          {users.map((user, index) => (
            <li key={index} className="fruit-item">{user.firstName} {user.lastName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
