import React from 'react';
import moment from 'moment';
import ReplyForm from './ReplyForm';


const TwiitInfoDetail = ({twiit,twiitId}) => {
    

    if(twiit){
        return (
            
                <div className="col-12 d-flex flex-column mb-2">
                    
                    <div><p className="text-white"><var>{twiit.twiit}</var></p></div>
                    <div>
                        <span className="text-info mr-4">{twiit.authorName}</span>
                        {/* <small>{twiit.likes}<span className="material-icons ml-1">stars</span></small> */}
                        <small className="text-danger">{moment(twiit.twiit_time.toDate()).calendar()}</small>
                    </div>
                    <ReplyForm twiitId={twiitId}/>
                    
                </div>
            
        )
    }else {
        return (
            <div className="row mb-2">
                <div className="col-12">
                    <p className="lead">Loading....</p>
                </div>
            </div>
        )
    }
    
}





export default TwiitInfoDetail
