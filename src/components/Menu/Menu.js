import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * @author H.V.D
 *  className Menu
 **/

const menu = [
  {
    name: 'About Us',
    to: '/about-us',
    exact: true,
  },
  {
    name: 'Features',
    to: '/features',
    exact: true,
  },
  {
    name: 'Contact',
    to: '/contact',
    exact: true,
  },
];

class Menu extends Component {
  state = {};
  showMenu(menu) {
    var result = null;
    if (menu.length > 0) {
      result = menu.map((menu, index) => {
        return (
          <li key={index} className="nav-item active">
            <NavLink to={menu.to} exact={menu.exact} className="nav-link">
              {menu.name}
            </NavLink>
          </li>
        );
      });
    }
    return result;
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light d-flex justify-content-around">
        <NavLink exact to="/" className="navbar-brand">
          CodeFun
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 align-items-start align-items-lg-center">
            {this.showMenu(menu)}
          </ul>
          <div className="navbar-text">
            {/* <!-- Button trigger modal--> */}
            <NavLink
              to="/sign-in"
              data-toggle="modal"
              data-target="#sign-in"
              className="btn navbar-btn btn-primary btn-shadow btn-gradient"
            >
              Sign In
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {};
export default Menu;
