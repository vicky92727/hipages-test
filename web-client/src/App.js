import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Invited from "./components/Invited";
import Accepted from "./components/Accepted";
import { getService, putService } from "./service/base.service";
import { status } from "./constant";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invited: [],
      accepted: [],
      invitedTab: true,
      acceptedTab: false
    };
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClick = (id,status) => {
    this.setState({invited: this.state.invited.filter(function(invite) { 
      return invite.id !== id 
    })});
    if(status == status.ACCEPTED) {
      this.setState({accepted: this.state.invited.filter(function(invite) { 
        return invite.id == id 
      })});
    }
    this.updatLeadsCall(id,status);
  }


  async updatLeadsCall(id,status) {
    try {
      const body = {status : status}
      const res = await putService(`leads/${id}`,body);
      this.setState({accepted : res.data.accepted})
    } catch (error) {
      console.log(error)
    }

  }
  onClickHandler(cname) {

    switch (cname) {
      case status.INVITED:
        this.setState({ invitedTab: true,  acceptedTab: false });
        break;
      case status.ACCEPTED:
        this.setState({ invitedTab: false, acceptedTab: true });
        break;
        default:
        break;
    }
  }
  async getData() {
    try {
      const res = await getService('leads');
      this.setState({invited : res.data.invited, accepted : res.data.accepted})
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount() {
   this.getData()
  }


  render() {
    return  <div className="container-sm">
              <Navigation onClickHandler = {this.onClickHandler}  invitedTab={this.state.invitedTab} acceptedTab={this.state.acceptedTab} />
              {this.state.invitedTab && <Invited onClick={this.onClick} invited={this.state.invited}/>}
              {this.state.acceptedTab && <Accepted accepted={this.state.accepted} />}
            </div>
  }
}

export default App;
