import React from 'react';
import Default from '../../images/default.jpg';
import Batman from '../../images/bat.jpg';
import { Link } from 'react-router-dom';

const MiniProfileShow = ({twiits,auth}) => {
    const totalNum=  twiits ? twiits.length : 0;
    return (
        <div className="row mb-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card">
                    <Link to='/profile'><img src={Batman} className="cover card-img-top" alt='Cover'/></Link>
                    <div className="card-body">
                        <img src={Default} className="profile card-title mb-3" alt="..."/>
                            <div className="row mt-lg-3 mt-md-3 mt-sm-3">
                                <div className="col-lg-6 col-md-6 col-sm-6 border-right border-dark text-center text-dark">
                                    {/* {twiits && twiits.map(twiit=>{
                                        let num=0;
                                        if (twiit.authorId === auth.uid) {
                                            num += 1;
                                        }
                                        return num;
                                    })} */}
                                    {totalNum}
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 text-center"><span className="material-icons">people</span></div> 
                            </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default MiniProfileShow
