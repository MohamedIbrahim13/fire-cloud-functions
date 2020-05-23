import React from 'react';
import moment from 'moment';
import firebase from 'firebase/app';

const CommentSummary = ({reply}) => {
    const likesCall = (id)=>{
        const replyLikes = firebase.functions().httpsCallable('replyLikes');
        replyLikes({id}).catch(error=>console.log(error.message));
    };
    return (
        <div className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{reply.owner}</h5>
                <small className="text-muted">{moment(reply.reply_time.toDate()).calendar()}</small>
            </div>
            <p className="mb-1">{reply.reply}</p>
            <button type="button" className="btn mr-2" onClick={()=>{likesCall(reply.id)}}><small>{reply.likes}<span className="material-icons ml-1">stars</span></small></button>
            <button type="button" className="btn mr-2"><small>Share<span className="material-icons ml-1">share</span></small></button>
                        
        </div>
    )
}

export default CommentSummary
