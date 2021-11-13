import React, { Component } from "react";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          invited: true,
          accepted: false
        };
      }
      onClickHandler(cname) {
        if(cname == "invited") {
          this.setState({ invited: true,  accepted: false });
        } else if(cname == "accepted") {
          this.setState({ invited: false, accepted: true });
        }
      }
      render (){
          return  <nav className="nav nav-pills nav-fill">
          <a className={`nav-link ${this.state.invited ? 'active' : ""}`} aria-current="page" onClick={() => this.onClickHandler('invited')} href="#">Invited</a>
          <a className={`nav-link ${this.state.accepted ? 'active' : ""}`} onClick={() => this.onClickHandler('accepted')} href="#">Accepted</a>
        </nav>
      }
}

export default Navigation;