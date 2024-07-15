import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'; // Import the CSS file

const Card = ({ id, title, content, image }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      {image && <img src={image} alt={title} className="card-image" />}
      <p>{content}</p>
      
      <div className="feedback">
        <button className="thumb thumb-up" onClick={handleLike}>👍 {likes}</button>
        <button className="thumb thumb-down" onClick={handleDislike}>👎 {dislikes}</button>
      </div>
      
      <Link to={`/comments/${id}`}>
        <button>See Reviews</button>
      </Link>
    </div>
  );
};

export default Card;
