import React, { Component } from 'react'
import './UserHomePage.css'
import { Section } from '../../components/Utils/Utils'
import STORE from '../../STORE';

// components
import VideoCard from '../../components/VideoCard/VideoCard'

export class UserHomePage extends Component {

  render() {
    return (
      <>
        <nav className='user_nav'>
          <ul className='user_links'>
            <li style={{'fontWeight': 'bold'}}>most recent</li>
            <li>best rated</li>
            <li>my videos</li>
          </ul>
        </nav>
        <Section grid className='UserHomePage'>
          {STORE.videos.map(video => {
        return <VideoCard key={video.id} video={video} onSuccess={this.handleSuccess} />
      })}
        </Section>
      </>
    )
  }
}

export default UserHomePage