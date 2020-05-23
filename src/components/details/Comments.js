import React from 'react'
import CommentSummary from './CommentSummary'

const Comments = ({replies,twiitId}) => {
    return (
        <div className="row bg-white">
            <div className="col-lg col-md col-sm">
                <div className="list-group list-group-flush">
                    {replies && replies.map(reply=>{
                        while(reply.twid === twiitId){
                            return (<CommentSummary reply={reply}  key={reply.id}/>);
                        }
                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default Comments
