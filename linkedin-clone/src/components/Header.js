import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />

                <div className="header__search">
                    <SearchOutlinedIcon/>
                    <input type="text" />
                </div>

            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeOutlinedIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountOutlinedIcon} title="My Network"/>
                <HeaderOption Icon={WorkOutlineOutlinedIcon} title="Jobs"/>
                <HeaderOption Icon={SmsOutlinedIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsNoneOutlinedIcon} title="Notifications"/>
                <HeaderOption 
                    avatar='https://media-exp1.licdn.com/dms/image/C4D03AQHcanQH7MZ6SQ/profile-displayphoto-shrink_100_100/0/1590049661007?e=1617235200&v=beta&t=3O3JgksbrCGbYFGqaHgTe_Y5Nk1bu_eGO3STpqJ77s8' 
                    /*More={ExpandMoreOutlinedIcon} */
                    title="Me"/>
            </div>
            
        </div>
    )
}

export default Header
