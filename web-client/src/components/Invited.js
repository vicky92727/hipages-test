import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'

class Invited extends Component {
    render (){
   return <div className="card"><div className="card-body">
            <div className="head-content">
                <div className="avatar">A</div>
                <div className="title-date">
                    <h5 className="card-title">Card title</h5>
                    <p className="date-time">Januar 4 @ 2:37pm</p>
                </div>
            </div>
            <div className="loc-cat-id">
                <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;Sydney 2020</div>
                <div className="category"><FontAwesomeIcon icon={faBriefcase} />&nbsp;Carpenter</div>
                <div className="jobid">Job ID: 552212</div>
            </div>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="row">
                <div className="col-1">
                    <a href="#" className="btn btn-primary accept">Accept</a>
                </div>
                <div className="col-1">
                    <a href="#" className="btn btn-primary decline">Decline</a>
                </div>
                <div className="col float-left">
                    <span className="price">$89</span><span className="lead"> Lead invitation</span>
                </div>
            </div>
        </div>
    </div>

    }
}

export default Invited;