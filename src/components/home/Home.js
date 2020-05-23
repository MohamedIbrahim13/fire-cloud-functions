import React from 'react';
import MiniProfileShow from './MiniProfileShow';
import SideMenu from './SideMenu';
import TwiitForm from './TwiitForm';
import TwiitsList from './TwiitsList';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


const Home = (props) => {
    const {twiits,auth}=props;
    if(!auth.uid) return <Redirect to='/pre-home'/>
    return (
        <div className="h-auto">
            <div className="container-lg container-md container-sm">
                <div className="row py-2">
                    <div className="col-lg-3 col-md-3 col-sm-12 mb-2">
                        <MiniProfileShow twiits={twiits} auth={auth}/>   
                        <SideMenu />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
                        <TwiitForm />
                        <div className="row bg-white">
                            <TwiitsList twiits={twiits}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <p className="bg-white">ads.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = (state)=>{
    return {
        twiits:state.firestore.ordered.twiits,
        auth:state.firebase.auth
    }
}

export default compose(connect(mapStatetoProps),firestoreConnect([{collection:'twiits',orderBy:['twiit_time':'asc']}]))(Home)
