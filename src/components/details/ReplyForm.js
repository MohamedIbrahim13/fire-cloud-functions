import React, { useState } from 'react';
import sendReply from '../../actions/commentAction';
import {connect} from 'react-redux';

const ReplyForm = (props) => {
    const [reply,setReply]=useState('');
    const {twiitId} = props;
    const [twid ,setTwid] =useState(twiitId);
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.sendReply({reply,twid});
        setReply('');
    };


    return (
        <>
          <form className="form-inline justify-content-center mt-2" onSubmit={handleSubmit}>
                <input type="text" className="form-control mr-sm-2" value={reply} onChange={(e)=>{setReply(e.target.value)}}/>
                <button type="submit" className="btn btn-prim text-white mt-1 rounded-pill">Submit</button>
          </form>  
        </>
    )
}

const dispatchStatetoProps=(dispatch)=>{
    return {
        sendReply:(reply)=>dispatch(sendReply(reply))
    }
};

export default connect(null,dispatchStatetoProps)(ReplyForm)
