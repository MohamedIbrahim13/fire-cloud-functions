import React from 'react'

const Notifications = ({notifications}) => {
    return (
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkTwo">
            {notifications && notifications.map(noti=>{
                return (
                <a className="dropdown-item text-dark" href="#" key={noti.id}>{noti.text}</a>
                )
            })}
                    
        </div>
    )
}

export default Notifications
