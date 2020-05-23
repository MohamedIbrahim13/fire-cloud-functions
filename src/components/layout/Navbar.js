import React from 'react';
import UserLinks from './UserLinks';

import {connect} from 'react-redux';





const Navbar = (props) => {
    const {auth,profile} = props;
    const links = auth.uid ? <UserLinks profile={profile} /> : null ;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-indigo">
            <div className="container">
                <div className="navbar-brand font-weight-bolder">Twiiter</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><span className="material-icons">rss_feed</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="material-icons">contact_support</span></a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item text-dark" href="#">Github</a>
                                <a className="dropdown-item text-dark" href="#">LinkedIn</a>
                                
                            </div>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline my-2 my-md-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                   {links}
                </div>
            </div>
        </nav>
    )
}

const mapStatetoProps = (state)=>{
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStatetoProps)(Navbar)
