import React from 'react';
import './menu.css';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const Menu = () => {
  return (
    <div className="menu">
      {items.map((item) => (
        <div key={item} className="menu-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Menu;
