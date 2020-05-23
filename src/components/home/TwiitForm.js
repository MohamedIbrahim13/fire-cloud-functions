import React, { useState } from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
import sendTwiit from "../../actions/twiitAction";

const TwiitForm = (props) => {
    const [twiit,setTwiit]=useState('');
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.sendTwiit({twiit});
        // console.log({twiit});
        setTwiit('');
    };
    // const {auth} = props;
    return (
        <div className="row bg-white mb-lg-2 mb-md-2 mb-sm-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <form className="py-2 py-md-2 py-sm-2" onSubmit={handleSubmit}>
                    <h4 className="text-center title">A Warm Welcome </h4>
                    <div className="form-row">
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Tell us what's in your mind ..." value={twiit} onChange={(e)=>{setTwiit(e.target.value)}} />
                                       
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <button type="submit" className="btn btn-prim mb-2 text-white">Twiit</button>
                        </div>
                    </div>
                                
                </form>
            </div>
        </div>
    )
}

const mapStatetoProps = (state)=>{
    return {
        auth:state.firebase.auth
    }
};

const dispatchStatetoProps =(dispatch)=>{
    return {
        sendTwiit:(twiit)=>dispatch(sendTwiit(twiit))
    }
}

export default connect(mapStatetoProps,dispatchStatetoProps)(TwiitForm)
