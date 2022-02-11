import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function LandingPage() {
  // const user = useSelector(selectUser)  
  return (
      <div className='landingPage'>
            <div className='landingPage__nav'>
                <a href="/">
                  <img src="/images/login-logo.svg" alt="" />
                </a>
               
                <div className='Join'>Join Now</div>
                <Link to="/login">
                  <div className='signIn'>SignIn</div>
                </Link>
            </div>
            <div className='landingPage__section'>
                <div className='hero'>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg" alt=""/>
                </div>
                <form>
                    <button className='google'>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </button>
                </form>
            </div>

        </div>
  );
}

export default LandingPage;
