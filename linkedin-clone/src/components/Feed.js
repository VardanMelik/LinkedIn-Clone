import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import CalendarViewDayOutlinedIcon from '@material-ui/icons/CalendarViewDayOutlined';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';


function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect( () => {
        db.collection("posts").onSnapshot( (snapshot) => 
            setPosts(
                snapshot.docs.map( (doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
        ))
    }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Vardan Melik',
            description: 'This is test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Before')
        setInput("");
        console.log('After')
    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input 
                        type="text" 
                            onChange={ e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption
                        Icon={ImageOutlinedIcon}
                        title="Photo"
                        color="#70B5F9"
                    />

                    <InputOption
                        Icon={SubscriptionsOutlinedIcon}
                        title="Video"
                        color="#E7A33E"
                    />

                    <InputOption
                        Icon={EventAvailableOutlinedIcon}
                        title="Event"
                        color="#C0CBCD"
                    />

                    <InputOption
                        Icon={CalendarViewDayOutlinedIcon}
                        title="Write article"
                        color="#7FC15E"
                    />
                </div>
            </div>
            {
                posts.map( ({ id, data: {name, description, message, photoUrl}}) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))
            }
            {/*<Post
                name="Vardan Melik"
                description="This is a LinkedIn 1st post"
                message="Full Stack Development"
                photoUrl="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            />*/}
            
        </div>
    )
}

export default Feed
