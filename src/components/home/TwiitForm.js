import React, { useState } from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
import sendTwiit from "../../actions/twiitAction";
import {motion} from 'framer-motion';

const TwiitForm = (props) => {
    const [twiit,setTwiit]=useState('');
    const [showTitle,setShow] = useState(true);
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.sendTwiit({twiit});
        // console.log({twiit});
        setTwiit('');
    };
    // const {auth} = props;
    setTimeout(()=>{
        setShow(false)
    },10000);
    return (
            <div className="col-12 bg-dark rounded-lg bg-gradient mb-2">
                <form className="p-3" onSubmit={handleSubmit}>
                    {showTitle && (<motion.h4 className="text-center title text-white-50" exit={{y:-10000}}>A Warm Welcome </motion.h4>)}
                    <div className="d-flex flex-row">
                        <div className="col-10">
                            <input type="text" className="form-control" placeholder="Tell us what's in your mind ..." value={twiit} onChange={(e)=>{setTwiit(e.target.value)}} />
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-danger btn-block text-light">Fire</button>
                        </div>
                    </div>
                                
                </form>
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
