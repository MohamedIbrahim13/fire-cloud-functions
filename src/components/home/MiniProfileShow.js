import React from 'react';
import Default from '../../images/default.jpg';
import Batman from '../../images/bat.jpg';
import { Link } from 'react-router-dom';

const MiniProfileShow = ({twiits,auth}) => {
    const totalNum=  twiits ? twiits.length : 0;
    return (
        <div className="row mb-2">
            <div className="col-12">
                <div className="card">
                    <Link to='/profile'><img src={Batman} className="cover card-img-top" alt='Cover'/></Link>
                    <div className="img-contain"><img className="profile" src={Default} alt="..."/></div> 
                    <div className="card-body">
                        
                        <div className="d-flex">
                            <div className="border-right border-dark text-center flex-fill text-dark">
                                    {/* {twiits && twiits.map(twiit=>{
                                        let num=0;
                                        if (twiit.authorId === auth.uid) {
                                            num += 1;
                                        }
                                        return num;
                                    })} */}
                                    {totalNum}
                            </div>
                            <div className="text-center flex-fill">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                            </div> 
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default MiniProfileShow
