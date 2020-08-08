import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signIn} from "../../actions/authAction";

const LoginForm = (props) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log({email,password});
        props.signIn({email,password});
        // setEmail('');
        // setPassword('');

    };
    const {auth,authError} = props;
    if(auth.uid) return <Redirect to='/'/>;

    return (
        <div className="row h-100">
            
            <div className="col-md-6 offset-md-3 col-12 justify-content-center align-items-center justify-content-md-center align-md-items-center mt-3 mb-3 mt-md-5 mb-md-3">
              
              <form onSubmit={handleSubmit} className="form-signin px-3 py-3 rounded-lg">
                <div className="text-center mb-3 h3">Login</div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e)=>{setEmail(e.target.value)}} required autoFocus />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e)=>{setPassword(e.target.value)}} required autoFocus />
                </div>
                <button type="submit" className="btn btn-success btn-block mt-1">Submit</button>
                <div className="text-danger text-center">
                    {authError ? <p className="lead">{authError}</p> : null}
                </div>
                <div className="text-danger text-center mt-3">
                    New user ? <a href="/join-us">Join us</a>
                </div>
              </form> 
            </div>
        </div>
    )
}

const mapStatetoProps=(state)=>{
    return {
        auth:state.firebase.auth,authError:state.auth.authError
    }
};

const dispatchStatetoProps =(dispatch)=>{
    return {
        signIn : (creds)=> {dispatch(signIn(creds))}
    }
}

export default connect(mapStatetoProps,dispatchStatetoProps)(LoginForm)
