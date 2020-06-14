import React, { Component } from 'react'
import './VideoCard.css'
import { AverageRating } from '../../components/Utils/Utils'

// components
import Video from '../../components/Video/Video'

export class VideoCard extends Component {
  renderVideo() {
    return <Video 
        key={this.props.video.id}
        video={this.props.video}
      />
  }

  render() {
    const { rating, title, description } = this.props.video;

    return (
      <main className='VideoCard'>
        <div className='video_rating'>
          {AverageRating(Math.round(rating))}
        </div>
        <h2 className='video_title'>
          {title}
        </h2>
        {this.renderVideo()}
        <div className='video_description'>
          <p>{description}</p>
        </div>

      </main>
    )
  }
}

export default VideoCard
