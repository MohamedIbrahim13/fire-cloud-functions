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
        <div className="mt-5 mt-sm-5 mt-md-5 flex-sm-column flex-md-column flex-column d-flex d-md-flex d-sm-flex align-items-sm-center align-items-md-center align-items-center">
          <form onSubmit={handleSubmit} className="form-signin">
                <div className="form-group row mt-1">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail" value={email} onChange={(e)=>{setEmail(e.target.value)}} required autoFocus />
                    </div>
                </div>
                <div class="form-group row mt-1">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" value={password} onChange={(e)=>{setPassword(e.target.value)}} required autoFocus />
                    </div>
                </div>
                <button type="submit" className="btn btn-prim btn-block mt-2">Submit</button>
                <div className="text-danger text-center">
                    {authError ? <p className="lead">{authError}</p> : null}
                </div>
          </form>  
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
