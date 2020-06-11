import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "redux/actions";
import requireAuth from './requireAuth';
class CommentBox extends Component {
  state = { comment: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button id="fetch-comments" onClick={this.props.fetchComments}>
          Fetch comments
        </button>
      </div>
    );
  }
}

export default connect(null, { saveComment, fetchComments })(CommentBox);
