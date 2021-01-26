import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl}) {

    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
                <img src={photoUrl} alt="" />
            </div>

            <div className="post__buttons">
                <InputOption 
                    Icon={ThumbUpAltOutlinedIcon} 
                    title="Like"
                    color="gray"
                />
                <InputOption
                    Icon={ChatBubbleOutlineOutlinedIcon}
                    title="Comment"
                    color="gray"
                 />
                 <InputOption
                    Icon={ShareOutlinedIcon}
                    title="Share"
                    color="gray"
                 />
                 <InputOption
                    Icon={SendOutlinedIcon}
                    title="Send"
                    color="gray"
                 />
            </div>

        </div>
    )
}

export default Post