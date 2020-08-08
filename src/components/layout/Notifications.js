import React from 'react'

const Notifications = ({notifications}) => {
    return (
        <div className="collapse" id="collapseExample">
            {notifications && notifications.map(noti=>{
                return (
                <div className="dropdown-item text-dark"  key={noti.id}>{noti.text}</div>
                )
            })}
                    
        </div>
    )
}

export default Notifications
