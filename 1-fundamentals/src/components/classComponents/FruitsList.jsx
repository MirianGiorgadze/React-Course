import React, { Component } from 'react';
import './styles.css'; // არ დაგავიწყდეს სტილის ფაილის იმპორტი

class FruitsList extends Component {
  render() {
    const fruits = ['ვაშლი', 'ბანანი', 'ატამი'];

    return (
      <div className="fruits-container">
        <h2>ხილის სია</h2>
        <ul className="fruits-list">
          {fruits.map((fruit, index) => (
            <li key={index} className="fruit-item">{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FruitsList;
