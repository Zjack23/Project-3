import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import './Nav.css'; // Adjust the path as per your file structure

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/info">Info</Link> {/* Adjust with your actual links */}
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" onClick={() => Auth.logout()}>
              Logout
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      );
    } else {
      return (
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/info">Info</Link> {/* Adjust with your actual links */}
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/signup">Signup</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/login">Login</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      );
    }
  }

  return (
    <header className="flex-row px-1 nav-container">
      <h1>
        <Link to="/">
          007
        </Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
