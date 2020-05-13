import React, { Component } from "react";

class CommentBox extends Component {
  state = { comment: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ comment: "" });
  };
  render() {
    return (
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
    );
  }
}

export default CommentBox;
