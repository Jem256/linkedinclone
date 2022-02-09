import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header/>

      { !user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>

    // <Router>
    //   <div className='app'>
    //     <Switch>
    //       <Route path='/'>
    //         <Login />
    //       </Route>
    //       <Route path='home'>
    //         <Header/>
    //         <Feed/>
    //         <Sidebar/>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
