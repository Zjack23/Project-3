import React from 'react';
import Comments from './Comments';

const ParentComponent = () => {
  const user = {
    firstName: 'John', // Replace this with actual user data
    lastName: 'Doe',
    email: 'john.doe@example.com',
  };

  return <Comments user={user} />;
};

export default ParentComponent;
