import React, { Fragment, Component } from "react";
import Nav from "./Nav";
import Signin from "./Signin";
import { handleInitialData } from "../Actions/index";
import NewQuestion from "./NewQuestion";
import { connect } from "react-redux";

class App extends Component() {
  componentDidMount() {
    this.props.dispatch.handleInitialData();
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <NewQuestion />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    questions: state.questions,
  };
};

const mapDispatchToProps = () => {
  return {
    handleInitialData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
