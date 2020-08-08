import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../../actions/authAction';


const UserLinks = (props) => {
    return (
        <ul className="nav justify-content-around justify-content-lg-end">
            <li className="nav-item">
                <a href='/profile' type="button" className="nav-link px-2">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                    </svg>
                    {props.profile.username}
                </a>
            </li>
            <li className="nav-item">
                <a type="button" onClick={props.logOut} className="nav-link px-2">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-exclamation-circle mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg>
                    Logout
                </a>
            </li>

      </ul>
    )
}



const dispatchStatetoProps = (dispatch)=>{
    return {
        logOut:()=>{dispatch(logOut())}
    }
}

export default connect(null,dispatchStatetoProps)(UserLinks)

