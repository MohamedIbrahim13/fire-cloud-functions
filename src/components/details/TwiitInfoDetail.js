import React from 'react';
import moment from 'moment';
import ReplyForm from './ReplyForm';




const TwiitInfoDetail = ({twiit,twiitId}) => {
    

    if(twiit){
        return (
            <div className="row mb-2">
                <div className="col-lg col-md col-sm">
                    <div class="jumbotron">
                        <p><var>{twiit.twiit}</var></p>
                        <span className="text-danger mr-4">{twiit.authorName}</span>
                        {/* <small>{twiit.likes}<span className="material-icons ml-1">stars</span></small> */}
                        <small className="text-muted">{moment(twiit.twiit_time.toDate()).calendar()}</small>
                        <ReplyForm twiitId={twiitId}/>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div className="row mb-2">
                <div className="col-lg col-md col-sm">
                    <div className="jumbotron">
                        <p className="lead">Loading....</p>
                    </div>
                </div>
            </div>
        )
    }
    
}





export default TwiitInfoDetail
