import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from "../../actions/authAction";


const JoinForm = (props) => {
    const [fullName,setFname] = useState('');
    const [username,setUname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.signUp({fullName,username,email,password,address,city});
        // console.log({fullName,username,email,password,address,city});
        // setFname('');
        // setEmail('');
        // setPassword('');
        // setAddress('');
        // setCity('');
    };
    const {auth,authError} = props;
    if(auth.uid) return <Redirect to='/'/>
    return (
        <div className="mt-5 mt-sm-5 mt-md-5 flex-sm-column flex-md-column flex-column d-flex d-md-flex d-sm-flex align-items-sm-center align-items-md-center align-items-center">
          <form onSubmit={handleSubmit} className="form-signin" >
            <div className="container">
                <div className="form-row mb-1">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Full Name" value={fullName} onChange={(e)=>{setFname(e.target.value)}} required autoFocus/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e)=>{setUname(e.target.value)}} required autoFocus/>
                    </div>
                </div>
                <div className="form-row mb-1">
                    <div className="col">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required autoFocus/>
                    </div>
                    <div className="col">
                        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required autoFocus/>
                    </div>
                </div>
                <div className="form-row mb-1">
                    <div className="col-8">
                        <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e)=>{setAddress(e.target.value)}} required autoFocus/>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="City" value={city} onChange={(e)=>{setCity(e.target.value)}} required autoFocus/>
                    </div>
                </div>
                <button type="submit" className="btn btn-prim btn-block mt-2">Submit</button>
                <div className="text-danger text-center">
                    {authError ? <p className="lead">{authError}</p> : null}
                </div>
            </div> 
          </form> 
        </div>
    )
}

const dispatchStatetoProps =(dispatch)=>{
    return {
        signUp:(newUser)=>{dispatch(signUp(newUser))}
    }
}

const mapStatetoProps =(state)=>{
    return {
        auth:state.firebase.auth ,authError:state.auth.authError
    }
}

export default connect(mapStatetoProps,dispatchStatetoProps)(JoinForm)
