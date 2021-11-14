import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Invited from "./components/Invited";
import Accepted from "./components/Accepted";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading all modules...",
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
    if(status == "accepted") {
      this.setState({accepted: this.state.invited.filter(function(invite) { 
        return invite.id == id 
      })});
    }
   

    fetch("http://localhost/api/leads/"+id, {
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
  getData() {
    fetch("http://localhost/api/leads")
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
