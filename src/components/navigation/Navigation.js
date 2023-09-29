import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Список задач</Link>
        </li>
        <li>
          <Link to="/settings">Настройки</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
