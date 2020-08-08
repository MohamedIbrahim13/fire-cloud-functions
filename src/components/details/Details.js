import React from 'react'
import SideMenu from '../home/SideMenu'
import Comments from './Comments'
import TwiitInfoDetail from './TwiitInfoDetail';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';



const Details = (props) => {
    const {auth,twiit,replies,twiitId}=props;
    if(!auth.uid) return <Redirect to='/log-in' />;

    return (
        <>
          <div className="row g-2">
                <div className="col-12 col-md-5 d-flex flex-column mb-1 p-2">
                    <TwiitInfoDetail twiit={twiit} twiitId={twiitId}/>
                    <div>
                        <p className="lead bg-white">Ads...</p>
                    </div>
                    <SideMenu />
                </div>
                <div className="col-12 col-md-7 p-3">
                    <Comments replies={replies} twiitId={twiitId}/>  
                </div>

            </div>
        </>
    )
}

const mapStatetoProps = (state,ownProps)=>{
    const id = ownProps.match.params.id;
    const twiits=state.firestore.data.twiits;
    const twiit =twiits ? twiits[id] :null;
    // const replies_data = state.firestore.data.replies;
    // const replies_ordered = state.firestore.ordered.replies;
    // console.log(replies_data,replies_ordered);
    return {
        auth:state.firebase.auth,
        twiit:twiit,
        replies:state.firestore.ordered.replies,
        twiitId:id
    }
}

export default compose(connect(mapStatetoProps),firestoreConnect([{collection:'twiits'},{collection:'replies'}]))(Details)
