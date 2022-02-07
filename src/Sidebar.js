import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="./images/linkedin.png" alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>Sonny Nagasha</h2>
                <h4>jem@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
              <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>
                      2,543
                    </p>
              </div>
              <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>
                      2,543
                    </p>
              </div>
             </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('design')}
            </div>
        </div>
    );
}

export default Sidebar;
