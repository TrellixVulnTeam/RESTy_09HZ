import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <header>
        <h1>RESTy  McRestface</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>

            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
