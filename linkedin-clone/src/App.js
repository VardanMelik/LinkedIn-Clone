import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { selectUser } from './features/userSlice';
import Login from './components/Login';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      
     {!user ? <Login /> :(
       <>
       <Header/>
        <div className="app__body">
          <Sidebar/>
          <Feed/>
        </div> 
      </>
     )}

     

    </div>
  );
}

export default App;
