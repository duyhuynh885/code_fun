import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from '../../components/PostItem/PostItem';
import callApi from '../../utils/callApi';
/**
 * @author
 * @class PostList
 **/

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    callApi('posts', 'GET', null).then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  }
  showPost = (posts) => {
    var result = [];
    if (posts.length === 0) {
      return <h1>Bạn chưa có nội dung</h1>;
    } else {
      result = posts.map((post, index) => <PostItem key={index} post={post} />);
    }
    return result;
  };
  render() {
    var { posts } = this.state;

    return (
      <div>
        <div className="d-flex justify-content-end m-2">
          <button
            type="button"
            className="btn btn-warning mr-2"
            style={{ width: '4.5rem' }}
          >
            Join
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ width: '4.5rem' }}
          >
            Create
          </button>
        </div>
        <div className="d-flex justify-content-center m-4">
          {this.showPost(posts)}
        </div>
      </div>
    );
  }
}

PostList.propTypes = {};
export default PostList;
