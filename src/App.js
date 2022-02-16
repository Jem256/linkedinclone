import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
// import LandingPage from './LandingPage';
// import Home from './Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Feed from './Feed';
import Widgets from './Widgets';
import Sidebar from './Sidebar';

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
          <Sidebar className='app_sideBar'/>
          <Feed/>
          <Widgets/>
        </div>
      )}
    </div>

    // <Router>
    //   <div className='app'>
    //     <Switch>
    //       <Route path='/'>
    //         <LandingPage />
    //       </Route>
    //       <div className="app__body">
    //         <Route path='login'>
    //           <Header />
    //           <Login />
    //         </Route>
    //         <Route path='home' className="app__body">
    //           <Header/>
    //           <Home/>
    //         </Route>
    //       </div>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
