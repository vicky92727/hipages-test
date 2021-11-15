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
      acceptedTab: false,
      perPage: 2,
      page: 1,
      invitePage: 1,
      pagesInvite: 0,
      pagesAccept: 0,
    };
    this.onClickHandler = this.onClickHandler.bind(this)
    this.handleInvitedPageClick = this.handleInvitedPageClick.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
  }
  handlePageClick(event) {
    let page = event.selected;
    page++;
    this.setState({page},this.getPaginatedData)
    
   }

   handleInvitedPageClick(event) {
    let invitePage = event.selected;
    invitePage++;
    this.setState({invitePage},this.getPaginatedData)
    
   }
  onClick = (id,status) => {
    this.setState({invited: this.state.invited.filter(function(invite) { 
      return invite.id !== id 
    })});
    if(status === status.ACCEPTED) {
      this.setState({accepted: this.state.invited.filter(function(invite) { 
        return invite.id === id 
      })});
    }
    this.updatLeadsCall(id,status);
  }


  async updatLeadsCall(id,status) {
    try {
      const body = {status : status}
      const res = await putService(`leads/${id}`,body);
      this.setState({accepted : res.data.accepted.data})
      this.setState({invited : res.data.invited.data})
      const pageinvite = res.data.invited.data.length > 0 ? res.data.invited.last_page: 0;
      const pageaccept = res.data.accepted.data.length > 0 ? res.data.accepted.last_page : 0;

      this.setState({pagesInvite : pageinvite,pagesAccept: pageaccept})
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
  async getPaginatedData() {
    try {
      const page = this.state.invitedTab ? this.state.invitePage : this.state.page
      const res = await getService(`leads?page=${page}`);
      const {perPage} = this.state;
      const pageinvite = res.data.invited.data.length > 0 ? res.data.invited.last_page: 0;
      const pageaccept = res.data.accepted.data.length > 0 ? res.data.accepted.last_page : 0;
      this.state.invitedTab && this.setState({
        invited : res.data.invited.data, 
        pagesInvite: pageinvite,
      })
      this.state.acceptedTab && this.setState({
        accepted : res.data.accepted.data,
        pagesAccept: pageaccept
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getData() {
    try {
      const res = await getService(`leads?page=${this.state.page}`);
      const {perPage} = this.state;
      const pageinvite = res.data.invited.data.length > 0 ? res.data.invited.last_page: 0;
      const pageaccept = res.data.accepted.data.length > 0 ? res.data.accepted.last_page : 0;
      this.setState({
        invited : res.data.invited.data, 
        accepted : res.data.accepted.data,
        pagesInvite: pageinvite,
        pagesAccept: pageaccept
      })
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
              {this.state.invitedTab && <Invited handleInvitedPageClick={this.handleInvitedPageClick} pageCount={this.state.pagesInvite} onClick={this.onClick} invited={this.state.invited}/>}
              {this.state.acceptedTab && <Accepted handlePageClick={this.handlePageClick} pageCount={this.state.pagesAccept} accepted={this.state.accepted} />}
            </div>
  }
}

export default App;
