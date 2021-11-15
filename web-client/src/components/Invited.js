import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'

class Invited extends Component {
    render (){
        return <div>
    {this.props.invited.map((invite) => (<div key={invite.id} className="card">
       <div className="card-body">
            <div className="head-content">
                <div className="avatar">{invite.contact_name.charAt(0)}</div>
                <div className="title-date">
                    <h5 className="card-title">{invite.contact_name}</h5>
                    <p className="date-time">{invite.created_at}</p>
                </div>
            </div>
            <div className="loc-cat-id">
                <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;{invite.suburb.name}</div>
                <div className="category"><FontAwesomeIcon icon={faBriefcase} />&nbsp;{invite.category.name}</div>
                <div className="jobid">Job ID: {invite.id}</div>
            </div>
            <p className="card-text">{invite.description}</p>
            <div className="row">
                <div className="col-sm-12">
                    <a onClick={() => this.props.onClick(invite.id,'accepted')} className="btn btn-primary btn-md center-block accept">Accept</a>
                    <a onClick={() => this.props.onClick(invite.id,'declined')} className="btn btn-primary btn-md center-block decline">Decline</a>
                    <span className="price">${invite.price}</span><span className="leads"> Lead invitation</span>
                </div>
            </div>
        </div>
    </div>
    ))}
    </div>
    }
}

export default Invited;