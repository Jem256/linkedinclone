import React from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {
  return (
      <div className='feed'>
          <div className="feed__inputContainer">
              <div className="feed__input">
                  <CreateIcon />
                  <form action="">
                      <input type="text" />
                      <button type='submit'>Send</button>
                  </form>
              </div>

              <div className="feed__inputOptions">
                  <InputOption Icon={ImageIcon} title='Photo' color="#70b5f9" />
                  <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                  <InputOption Icon={EventNoteIcon} title='Event' color="#c0cbcd" />
                  <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7fc15e" />
              </div>

              <Post name='sonyy jem' description='this is a test' 
              message='wow this worked!' />
          </div>
      </div>
  );
}

export default Feed;