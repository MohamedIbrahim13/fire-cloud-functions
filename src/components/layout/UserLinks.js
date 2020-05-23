import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {logOut} from '../../actions/authAction';
import Notifications from './Notifications';

const UserLinks = (props) => {
    const {notifications} = props;
    return (
        <div className="my-2 my-lg-0">
            <a href='/profile' type="button" className="px-2">{props.profile.username}</a>
            <div className="dropdown d-inline">
                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLinkTwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Highlights
                </a>
                <Notifications notifications={notifications}/>
            </div>
            <a type="button" onClick={props.logOut} className="px-2">Logout</a>
        </div>
    )
}

const mapStatetoProps =(state)=>{
    return {
        notifications : state.firestore.ordered.notifications
    }
}

const dispatchStatetoProps = (dispatch)=>{
    return {
        logOut:()=>{dispatch(logOut())}
    }
}

export default compose(connect(mapStatetoProps,dispatchStatetoProps),firestoreConnect([{collection:'notifications',limit:6,orderBy:['noti_time':'asc']}]))(UserLinks)

