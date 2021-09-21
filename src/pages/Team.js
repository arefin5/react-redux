import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDevloper } from "../Redux/reducer/usersReducer/user.actionCreator";
import DevloperDetails from "./DevloperDetails";
import Spinner from "../Componnent/Sppinner/Spinner";
import SelectedMember from "./SelectedMember";
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
  state={
    NameSelect:null 
  }
  onNameSelect=devsdet=>{
    this.setState({
      NameSelect:devsdet
    })
  }
  componentDidMount() {
    this.props.fetchDevloper();
  }
  render() {
    if (this.props.devsdet.isLooading) {
      return <Spinner />;
    } else {
      // console.log(this.props.devsdet.devsdet);
      // console.log(this.props, "fggg");
      let teamName=this.props.devsdet.devsdet.map(item=>{
        return(
          <DevloperDetails devloper={item} keys={item.id} 
          PropNameSelect={()=>this.onNameSelect(item)}/>
        )
      })
      let SelectDev=null
      if(this.state.NameSelect !=null){
        SelectDev= <SelectedMember devloper={this.state.NameSelect}/>
      }
      return <div>
          {teamName}
          {SelectDev}
      </div>;
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Team);
