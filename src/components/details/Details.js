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
    if(!auth.uid) return <Redirect to='/pre-home' />;

    return (
        <div className="bg-home h-auto">
            <div className="container">
                <div className="row py-2">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                        <TwiitInfoDetail twiit={twiit} twiitId={twiitId}/>
 
                        <div className="row">
                            <div className="col-lg col-md col-sm">
                                <p className="lead bg-white">Ads...</p>
                            </div>
                        </div>
                        <SideMenu />
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        
                        <Comments replies={replies} twiitId={twiitId}/>
                           
                    </div>

                </div>
            </div>
        </div>
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
