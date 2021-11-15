import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Invited from "./components/Invited";
import Accepted from "./components/Accepted";
import { BASE_URL, STATUS_NEW, STATUS_ACCEPTED, STATUS_DECLINED } from "./config";

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
    if(status == STATUS_ACCEPTED) {
      this.setState({accepted: this.state.invited.filter(function(invite) { 
        return invite.id == id 
      })});
    }
    this.updatLeadsCall(id,status);
  }


  async updatLeadsCall(id,status) {
    await fetch(BASE_URL+"leads/"+id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({status : status}),
    })
    .then(response => response.json())
    .then(res => {
       var acceptedData = res.accepted
       this.setState({accepted : acceptedData})
    });
  }
  onClickHandler(cname) {
    if(cname === "invited") {
      this.setState({ invitedTab: true,  acceptedTab: false });
    } else if(cname === "accepted") {
      this.setState({ invitedTab: false, acceptedTab: true });
    }
  }
  async getData() {
    await fetch(BASE_URL+"leads")
    .then(response => response.json())
    .then(res => {
      var invitedData = res.invited
      var acceptedData = res.accepted
      this.setState({invited : invitedData, accepted : acceptedData})
    });
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
