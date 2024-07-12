import { Outlet } from 'react-router-dom';
import Navbar from './components/Nav';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default App;
