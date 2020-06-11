import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    shouldNavigateToHome() {
      const { auth } = this.props;
      if (!auth) this.props.history.push("/");
    }

    componentDidMount() {
      this.shouldNavigateToHome();
    }

    componentDidUpdate() {
      this.shouldNavigateToHome();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps({ auth }) {
    return {
      auth,
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
