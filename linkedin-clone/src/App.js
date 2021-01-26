import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';
import Widgets from './components/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      console.log('onAuthStateChanged')
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }
        ));
        console.log('If userAuth Login')
        // user logged in
      } else {
        console.log('Logout function')
        // user us logged out 
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="App">
      
     {/*!user ? <Login /> :(
       <>
       <Header/>
        <div className="app__body">
          <Sidebar/>
          <Feed/>
        </div> 
      </>
     )*/}

     <Header/>
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div> 

     

    </div>
  );
}

export default App;
