import React from 'react';
import TwiitSummary from './TwiitSummary';



const TwiitsList = ({twiits}) => {

    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className="list-unstyled py-2 py-md-2 py-sm-2">
                {twiits && twiits.map(twiit=>{
                    return (
    
                        <TwiitSummary  twiit={twiit}  key ={twiit.id} />
                    )
                  })
                }
            </ul>
        </div>
    )
}

export default TwiitsList
