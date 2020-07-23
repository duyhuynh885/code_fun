import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @author
 * @class PostItem
 **/

class PostItem extends Component {
  
  

  render() {
    var {post} = this.props;
    return (
      <div className="card mr-4" style={{width:'18rem'}}>
        <h5 className="card-header">{post.title}</h5>
        <div className="card-body">
    <h5 className="card-title">Create by: {post.createdAt}</h5>
          <p className="card-text">
            {post.description}
          </p>
          <a href="#" className="btn btn-primary" >
            Show More
          </a>

        </div>
      </div>
    );
  }
}

PostItem.propTypes = {};
export default PostItem;
