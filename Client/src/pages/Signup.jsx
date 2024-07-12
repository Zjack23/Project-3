import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../graphql/mutations';
import { Link } from 'react-router-dom'; // Import Link for navigation

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [signup, { data, loading, error }] = useMutation(SIGNUP_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ variables: { username, email, password } });
      // Assuming response.data contains the data returned by your mutation
      console.log('Signup successful!', response.data);
      navigate('/');
    } catch (err) {
      console.error('Error signing up:', err);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      
      <div className="mt-3">
        <p>Already signed up? <Link to="/login">Login <i className="bi bi-arrow-right"></i></Link></p>
      </div>
    </div>
  );
};

export default SignupPage;
