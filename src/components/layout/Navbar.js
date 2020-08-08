import React from 'react';
import UserLinks from './UserLinks';
import {connect} from 'react-redux';





const Navbar = (props) => {
    const {auth,profile} = props;
    const links = auth.uid ? <UserLinks profile={profile} /> : null ;
    return (
        <nav className="nav-masthead navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container-fluid container-md">
                <div className="navbar-brand">Fire Cloud</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                RSS Feed
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-rss-fill ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5a1 1 0 0 0 0 2 8 8 0 0 1 8 8 1 1 0 1 0 2 0c0-5.523-4.477-10-10-10zm0 4a1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 1 0 2 0 6 6 0 0 0-6-6zm.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                </svg>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr-1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Questions
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="ml-1 bi bi-patch-question-fll" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1.602-2.027c-.05.386-.218.627-.554.627-.377 0-.585-.317-.585-.745v-.11c0-.727.307-1.208.926-1.641.614-.44.822-.762.822-1.325 0-.638-.42-1.084-1.03-1.084-.55 0-.916.323-1.074.914-.109.364-.292.51-.564.51C6.203 6.12 6 5.873 6 5.48c0-.251.045-.468.139-.69.307-.798 1.079-1.29 2.099-1.29 1.341 0 2.262.902 2.262 2.227 0 .896-.376 1.511-1.05 1.986-.648.445-.806.726-.846 1.26z"/>
                                </svg>
                            </a>
                            <div className="dropdown-menu p-2" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Github</a>
                                <a className="dropdown-item" href="#">LinkedIn</a>
                                
                            </div>
                        </li>
                        <li className="nav-item">
                            <form className="d-flex flex-row align-items-center">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                
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
