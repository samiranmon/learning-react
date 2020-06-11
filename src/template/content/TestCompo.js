import React from "react";
import { connect } from "react-redux";

class TestCompo extends React.Component {
  render() {
    return (
      <div>
        Test component example :<br />
        <span> Age : {this.props.age}</span> <br />
        <br />
        <button onClick={this.props.onAgeUp}>Age Up</button>
        &nbsp; &nbsp;
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <br />
        <br />
      </div>
    );
  }
}

const mapDispachToProps = dispach => {
  return {
    onAgeUp: () => dispach({ type: "AGE_UP" }),
    onAgeDown: () => dispach({ type: "AGE_DOWN" })
  };
};

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(TestCompo);
