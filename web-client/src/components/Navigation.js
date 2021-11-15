import React, { Component } from "react";

class Navigation extends Component {
   
      render (){
          return  <nav className="nav nav-pills nav-fill">
          <a className={`nav-link ${this.props.invitedTab ? 'active' : ""}`} aria-current="page" onClick={() => this.props.onClickHandler('invited')} >Invited</a>
          <a className={`nav-link ${this.props.acceptedTab ? 'active' : ""}`} onClick={() => this.props.onClickHandler('accepted')}>Accepted</a>
        </nav>
      }
}

export default Navigation;