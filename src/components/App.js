import React from "react";
import { Route, Link } from "react-router-dom";
// components
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import requireAuth from './requireAuth';
//redux
import { connect } from "react-redux";
import { changeAuth } from "redux/actions";
class App extends React.Component {
  renderButton() {
    const { changeAuth } = this.props;
    if (this.props.auth) {
      return <button onClick={() => changeAuth(false)}>Sign out</button>;
    }
    return <button onClick={() => changeAuth(true)}>Sign in</button>;
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={requireAuth(CommentBox)} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { changeAuth })(App);
