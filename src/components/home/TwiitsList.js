import React from 'react';
import TwiitSummary from './TwiitSummary';



const TwiitsList = ({twiits}) => {

    return (
        
            <div className="row py-2" data-masonry={{percentPosition: true }}>
                {twiits && twiits.map(twiit=>{
                    return (<TwiitSummary  twiit={twiit}  key ={twiit.id} />)
                  })
                }
            </div>
        
    )
}

export default TwiitsList
