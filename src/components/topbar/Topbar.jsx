import React from 'react'
import './Topbar.css'
import {NotificationsNoneIcon} from '@material-ui/icons/NotificationsNone';

const Topbar = () => {
    return (
        <>
            <div className='topbar'>
            <div className='topbarWrapper'>
            <div className='topLeft'>
            <span className='logo'>
                Reactjs Dashboard
            </span>
            </div>
            <div className='topRight'>
            <NotificationsNoneIcon />
                </div>

            
            </div>
            </div>
        </>
    )
}

export default Topbar
