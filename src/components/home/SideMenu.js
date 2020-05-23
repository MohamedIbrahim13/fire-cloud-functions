import React from 'react';
import {connect} from 'react-redux';

const SideMenu = (props) => {
    const {notifications} = props;
    const num = notifications ? notifications.length : 0;
    return (
        <div className="row mt-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="list-group">
                    <div className="list-group-item list-group-item-action">Notifications  
                    <span className="badge badge-pill badge-prim text-white ml-lg-1 ml-md-1 ml-sm-1">{num}</span>
                    </div>
                    <div className="list-group-item list-group-item-action">Advertise</div> 
                </div>
            </div>
        </div>  
    )
}

const mapStatetoProps =(state)=>{
    return {
        notifications : state.firestore.ordered.notifications
    }
}

export default connect(mapStatetoProps)(SideMenu)
