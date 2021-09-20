import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDevloper } from "../Redux/reducer/usersReducer/user.actionCreator";
import DevloperDetails from "./DevloperDetails";
import Spinner from "../Componnent/Sppinner/Spinner";
const mapStateToProps = (state) => {
  return {
    devsdet: state.devsdet,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchDevloper: () => dispatch(fetchDevloper()),
  };
};
class Team extends Component {
  componentDidMount() {
    this.props.fetchDevloper();
  }
  render() {
    if (this.props.devsdet) {
      return <Spinner />;
    } else {
      console.log(this.props.devsdet.devsdet);
      console.log(this.props, "fggg");
      return <div>
          
      </div>;
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Team);
