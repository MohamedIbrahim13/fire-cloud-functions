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
    if(!auth.uid) return <Redirect to='/log-in'/>
    return (


                <div className="row py-2">
                    <div className="col-12 col-md-3 order-md-1 mb-1 mt-5 mt-md-0">
                        <MiniProfileShow twiits={twiits} auth={auth}/>   
                        <SideMenu />
                    </div>
                    <div className="col-12 order-first order-md-2 col-md-6 mb-2 d-flex flex-column">
                        <TwiitForm />
                        <TwiitsList twiits={twiits}/>
                    </div>
                    <div className="col-12 order-last order-md-3 col-md-3 bg-dark bg-gradient rounded-lg">
                        <p className="lead">ads.</p>
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
