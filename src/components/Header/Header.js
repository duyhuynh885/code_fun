import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import FeaturePage from '../../pages/FeaturePage/FeaturePage';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import HomePage from '../../pages/HomePage/HomePage';
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import PasswordReset from '../PasswordReset/PasswordReset';
  /**
 * @author
 * @class Header
 **/

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/features" component={FeaturePage} />
          </Switch>
          <SignIn path="/sign-in" />
          <SignUp path="/sign-up" />
          <PasswordReset path="/password-reset" />
        </Router>
      </header>
    );
  }
}

Header.propTypes = {};
export default Header;
