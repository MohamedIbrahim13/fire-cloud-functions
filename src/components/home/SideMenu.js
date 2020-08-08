import React,{useState} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import Notifications from '../layout/Notifications';

const SideMenu = (props) => {
    const {notifications} = props;
    const [open, setOpen] = useState(false);
    // const num = notifications ? notifications.length : 0;
    return (
        <div className="row mt-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="list-group">
                    <div className="list-group-item list-group-item-action">
                        <button type="button" onClick={() => setOpen(prevOpen => !prevOpen)} className="btn btn-light btn-block" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            {open ? 'Hide Notifications' : 'Show Notifications'}
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bell-fill ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                            </svg>
                        </button> 
                        <Notifications notifications={notifications} />
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

export default compose(connect(mapStatetoProps),firestoreConnect([{collection:'notifications',limit:6,orderBy:['noti_time':'asc']}]))(SideMenu)
