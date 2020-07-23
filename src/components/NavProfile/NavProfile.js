import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fire } from '../../config/firebase';

/**
 * @author
 * @class NavProfile
 **/

class NavProfile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      imgUrl: '',
    }
  }
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light d-flex justify-content-between">
        <span className="navbar-brand">Classwork</span>
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
        <div className="dropdown nav-item">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Duy Huynh
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownId">
            <a  className="dropdown-item" href="#">
            <i className="fa fa-user"></i> Profile
            </a>
            <a role="button" className="dropdown-item" onClick={this.logout}>
            <i className="fa fa-power-off"></i> Log out
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

NavProfile.propTypes = {};
export default NavProfile;
