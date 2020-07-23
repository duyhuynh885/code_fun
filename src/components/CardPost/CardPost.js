import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @author
 * @class CardPost
 **/

class CardPost extends Component {
  state = {};
  render() {
    return (
      <div class="card">
        <h5 class="card-header">Featured</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

CardPost.propTypes = {};
export default CardPost;
