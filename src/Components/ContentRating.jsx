
import React, { Component } from 'react';
import './ContentRating.css';
import reactLogo from '../assets/react.svg';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRatings: prevState.totalRatings + 1,

    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRatings: prevState.totalRatings + 1,
    }));
  };

  render() {
    const { likes, dislikes, totalRatings } = this.state;

    return (
      <div className='content-rating'>
        <img src={reactLogo} alt='React logo' className='image' />
        <p id='reactInfo'>
          React is a JavaScript library for building user interfaces. Let us know if
          you liked this quick intro by using the buttons below.
        </p>
        <div className='rating-buttons'>
          <button className='like-button' onClick={this.handleLike}>Like ({likes})</button>
          <button className='dislike-button' onClick={this.handleDislike}>Dislike ({dislikes})</button>
        </div>
        <p>Total Ratings: {totalRatings}</p>
      </div>
    );
  }
}

export default ContentRating;
