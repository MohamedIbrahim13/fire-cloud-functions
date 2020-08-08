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
        <div className="row h-100">
         <div className="col-md-6 offset-md-3 col-12 justify-content-center align-items-center justify-content-md-center align-md-items-center mt-3 mb-3 mt-md-5 mb-md-3">
          <form onSubmit={handleSubmit} className="form-signin px-3 py-3 rounded-lg">
            <div className="text-center mb-2 h3">Join us</div>
                <div className="mb-2">
                    <label htmlFor="FullName" className="form-label">Email</label>
                    <input type="text" className="form-control" id="FullName" placeholder="Full Name" value={fullName} onChange={(e)=>{setFname(e.target.value)}} required autoFocus/>
                </div>
                <div className="mb-2">
                    <label htmlFor="UserName" className="form-label">Email</label>
                    <input type="text" className="form-control" id="UserName" placeholder="Username" value={username} onChange={(e)=>{setUname(e.target.value)}} required autoFocus/>
                </div>
                <div className="mb-2">
                    <label htmlFor="Mail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Mail" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required autoFocus/>
                </div>
                <div className="mb-2">
                    <label htmlFor="Pass" className="form-label">Email</label>
                    <input type="password" className="form-control" id="Pass" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required autoFocus/>
                </div>
                <div className="mb-2">
                    <label htmlFor="Address" className="form-label">Email</label>
                    <input type="text" className="form-control" id="Address" placeholder="Address" value={address} onChange={(e)=>{setAddress(e.target.value)}} required autoFocus/>
                </div>
                <div className="mb-2">
                     <label htmlFor="City" className="form-label">Email</label>
                    <input type="text" className="form-control" id="City" placeholder="City" value={city} onChange={(e)=>{setCity(e.target.value)}} required autoFocus/>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-0">Submit</button>
                <div className="text-danger text-center">
                    {authError ? <p className="lead">{authError}</p> : null}
                </div> 
                <div className="text-danger text-center mt-3">
                    Already a user ? <a href="/log-in">Login</a>
                </div>
          </form> 
         </div>
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
