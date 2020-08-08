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
          <form className="d-flex justify-content-center align-items-center mt-2" onSubmit={handleSubmit}>
                <input type="text" className="form-control mr-1" value={reply} placeholder="Send Your Reply..." onChange={(e)=>{setReply(e.target.value)}}/>
                <button type="submit" className="btn btn-danger mt-1 rounded">
                    
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-reply-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.079 11.9l4.568-3.281a.719.719 0 0 0 0-1.238L9.079 4.1A.716.716 0 0 0 8 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z"/>
                    </svg>
                </button>
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
