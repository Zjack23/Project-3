import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import './Comments.css';

const GET_COMMENTS = gql`
  query GetComments($movieId: String!) {
    comments(movieId: $movieId) {
      _id
      username
      comment
      date
    }
  }
`;

const ADD_COMMENT = gql`
  mutation AddComment($movieId: String!, $username: String!, $comment: String!, $date: String!) {
    addComment(movieId: $movieId, username: $username, comment: $comment, date: $date) {
      _id
      username
      comment
      date
    }
  }
`;

const Comments = () => {
  const { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_COMMENTS, { variables: { movieId: id } });
  const [addComment] = useMutation(ADD_COMMENT);
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (newComment.trim() === '' || username.trim() === '') {
      return; // Prevent empty username or comment from being submitted
    }
    const date = new Date().toLocaleDateString();
    await addComment({ variables: { movieId: id, username, comment: newComment, date } });
    setNewComment('');
    setUsername('');
    setShowForm(false);
    refetch();
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading comments</p>;

  return (
    <div className="container">
      <h2>Movie Reviews </h2>

      {/* Toggle Form Button */}
      <button onClick={toggleForm}>Add Comment</button>

      {/* Comment Form */}
      {showForm && (
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Your Name"
            required
          />
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add your comment"
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {/* Comment List */}
      <ul className="comment-list">
        {data.comments.map((comment, index) => (
          <li key={comment._id} className={`comment-item ${index % 2 === 0 ? 'gray-bg' : 'white-bg'}`}>
            <div className="comment-line"></div>
            <div className="comment-content">
              <div className="comment-heading">
                <span className="comment-author">{comment.username}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-text">{comment.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
