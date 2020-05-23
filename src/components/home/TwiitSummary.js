import React from 'react';
import Batman from '../../images/bat.jpg';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';



const TwiitSummary = ({twiit}) => {
    const likesInvok = (id)=>{
        const twiitLikes = firebase.functions().httpsCallable('twiitLikes');
        twiitLikes({id}).catch(error=>console.log(error.message));
    };
    return (
        <>
           <li className="media">
                <img src={Batman} className="mr-3" alt="..."/>
                <div className="media-body text-truncate">
                    <Link to ={'/twiit/'+twiit.id}>
                        <em>{twiit.twiit}</em>
                    </Link>
                </div>
                <button type="button" className="btn" onClick={()=>{likesInvok(twiit.id)}}><small>{twiit.likes}<span className="material-icons ml-1">stars</span></small></button>
            </li>
            <hr/>
        </>
    )
}

export default TwiitSummary
