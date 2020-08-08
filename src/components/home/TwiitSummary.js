import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import {motion} from 'framer-motion';

const cardVariants = {
  hover:{
    scale:1.25,
    textShadow:'0px 0px 8px rgb(255,255,255)',
    boxShadow:'0px 0px 8px rgb(255,255,255)',
    transition:{
      yoyo: Infinity,
      duration: 0.3
    }
  } 
};

const TwiitSummary = ({twiit}) => {
    const likesInvok = (id)=>{
        const twiitLikes = firebase.functions().httpsCallable('twiitLikes');
        twiitLikes({id}).catch(error=>console.log(error.message));
    };
    return (
        <div className="col-4 mb-1">
            <motion.div className="card p-1" whileHover="hover" variants={cardVariants}>
                <figure className="p-1 mb-0">
                    <figcaption className="mb-0 text-muted text-truncate d-flex justify-content-between">
                        <Link to ={'/fire-details/'+twiit.id} className="text-info text-decoration-none">
                            <p><em>{twiit.twiit}</em></p>
                        </Link>
                        <button type="button" className="btn d-inline" onClick={()=>{likesInvok(twiit.id)}}>
                            <small className="d-flex align-items-center">
                                <div className="mr-1">{twiit.likes}</div>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-hand-index-thumb" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M6.75 1a.75.75 0 0 0-.75.75V9.5a.5.5 0 0 1-.854.354l-2.41-2.411a.517.517 0 0 0-.809.631l2.512 4.185 1.232 2.465a.5.5 0 0 0 .447.276h6.302a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 1 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 1 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 1 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"/>
                                </svg>
                            </small>
                        </button>
                    </figcaption>
                </figure>
            </motion.div>
        </div>
    )
}

export default TwiitSummary
