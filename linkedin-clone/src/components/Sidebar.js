import React from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebr__hash">
                <p>{topic}</p>
            </span>
        </div>
    )

    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQG_BbXNcxV4Tg/profile-displaybackgroundimage-shrink_200_800/0/1606855546314?e=1617235200&v=beta&t=Ifkroxykfemi_bZbbd0XdLf68JfsnbH_ll-9c6pfYWM" alt="" />
                <Avatar className="sidebar__avatar"/>
                <h2>Vardan Meliksetyan</h2>
                <h4>test@test.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,943</p>    
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('#reactjs')}
                {recentItem('#development')}
                {recentItem('#Material UI')}
                {recentItem('#Web Development')}

            </div>

        </div>
    )
}

export default Sidebar
