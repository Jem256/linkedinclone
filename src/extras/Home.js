import React from 'react';
import './Home.css';
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import Widgets from '../Widgets';

function Home() {
  return (
      <div className='home'>
          <div className='home__section'>
                <h5><a>Hiring in a hurry? - </a></h5>
                <p>Find talented pros in record time with Upwork and keep business moving.</p>
            </div>
            <div className='home__Layout'>
                <Feed/>
                <Sidebar/>
                <Widgets/>
            </div>
      </div>
  );
}

export default Home;
