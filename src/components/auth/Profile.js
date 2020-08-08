import React from 'react'
import Batman from '../../images/bat.jpg';
import Default from '../../images/default.jpg';

// import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';



const Profile = (props) => {
    const {auth,profile}=props;
    // if(!auth.uid) return <Redirect to='/pre-home'/>
    return (
        <>
            <div className="row my-2">
                <div className="col">
                  <div className="card">
                    <img src={Batman} className="card-img-top" style={{height:250}} alt="..."/>
                    <div className="img-contain"><img className="profile-pic" src={Default} alt="..."/></div>
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link text-dark" id="twiits-tab" data-toggle="tab" href="#twiits" role="tab" aria-controls="twiits" aria-selected="true">Twiits</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" id="media-tab" data-toggle="tab" href="#media" role="tab" aria-controls="media" aria-selected="false">Media</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Info</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade" id="twiits" role="tabpanel" aria-labelledby="twiits-tab">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</div>
                            <div className="tab-pane fade" id="media" role="tabpanel" aria-labelledby="media-tab">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,</div>
                            <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
                                <ul>
                                   <li>Full Name : <mark className="text-success">{profile.fullName}</mark></li>
                                   <li>Email : <mark className="text-success">{auth.email}</mark></li>
                                   <li>Address : <mark className="text-success">{profile.address} , {profile.city}</mark></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

const mapStatetoProps = (state)=>{
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStatetoProps)(Profile)
