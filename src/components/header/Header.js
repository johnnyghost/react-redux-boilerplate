import React from 'react';
import { Link } from 'react-router';
import header from './assets/styles/header.css';

import magnifierImage from './assets/images/magnifier.svg';
const Header = () => {
  return (
    <header className={ header.root }>
      <div className="row">
        <div className= { header.logo + ' large-1 columns' } >ghost</div>

        <ul className={ header.menu + ' large-8 columns'}>
          <li className={ header.menuItem }>
            <Link to="activity">Activity</Link>
          </li>
          <li className={ header.menuItem }>
            <Link to="weight">Weight</Link>
          </li>
          <li className={ header.menuItem }>
            <Link to="sleep">Sleep</Link>
          </li>
          <li className={ header.menuItem }>
            <img src={ magnifierImage }/>
          </li>
        </ul>

        <ul className={ header.menu + ' large-2 columns end'}>
          <li className={ header.menuItem }>Login</li>
          <li className={ header.menuItemHighlight }>Sign up</li>
        </ul>

      </div>
    </header>
  );
};

export default Header;
