import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBriefcase, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ReactPaginate from "react-paginate";

class Accepted extends Component {
    render (){
        return <div>
    {this.props.accepted.length > 0 ? (this.props.accepted.map((accept) => (<div key={accept.id} className="card">
       <div className="card-body">
            <div className="head-content">
                <div className="avatar">{accept.contact_name.charAt(0)}</div>
                <div className="title-date">
                    <h5 className="card-title">{accept.contact_name}</h5>
                    <p className="date-time">{accept.created_at}</p>
                </div>
            </div>
            <div className="loc-cat-id">
                <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;{accept.suburb.name}</div>
                <div className="category"><FontAwesomeIcon icon={faBriefcase} />&nbsp;{accept.category.name}</div>
                <div className="jobid">Job ID: {accept.id}</div>
                <span className="price">${accept.price}</span><span className="leads"> Lead invitation</span>
            </div>
            <div className="contact-detail">
            <div className="phone"><FontAwesomeIcon icon={faPhoneAlt} />&nbsp;<span>{accept.contact_phone}</span></div>
                <div className="email"><FontAwesomeIcon icon={faEnvelope} />&nbsp;<span>{accept.contact_email}</span></div>
            </div>
            <p className="card-text">{accept.description}</p>
            
        </div>
    </div>
    ))) : <div className="card-body"><div className="head-content">No more accepted leads</div></div>}

    {this.props.accepted.length > 0 ? <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        activePage={this.props.accepted.current_page}
        itemsCountPerPage={this.props.accepted.per_page}
        totalItemsCount={this.props.accepted.total}
        pageCount={this.props.pageCount}
        onPageChange={this.props.handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        /> : ""}
    </div>
    }
}

export default Accepted;