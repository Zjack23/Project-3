import React, { useState } from 'react';
import './LoginSignupForm.css';

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/signup';
    try {
      // Simulated response handling
      console.log('Form submitted with data:', formData);
      alert(`Form submitted with data: ${JSON.stringify(formData)}`);
    } catch (err) {
      console.error(err);
      // Handle error
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      <div className={`form-box ${isLogin ? '' : 'form-box-signup'}`}>
        <form onSubmit={handleFormSubmit}>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          {!isLogin && (
            <div className="input-container">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                required
              />
            </div>
          )}
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className="form-button">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <button type="button" onClick={toggleForm} className="form-button">
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupForm;
