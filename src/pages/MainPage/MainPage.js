import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavProfile from '../../components/NavProfile/NavProfile';
import PostList from '../../container/PostList/PostList'
/**
 * @author
 * @class MainPage
 **/

class MainPage extends Component {
  state = {};
  
  render() {
    return (
      <div className="main-page">
        <NavProfile />
        <PostList />
        
      </div>
    );
  }
}

MainPage.propTypes = {};
export default MainPage;
