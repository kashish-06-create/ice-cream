  import { useAuth0 } from "@auth0/auth0-react";
  import React from "react";
  import { Link } from "react-router-dom";

import './navbar.css'; 
export default function Navbar () {
  const {user , loginWithRedirect ,isAuthenticated} = useAuth0();
  const { logout } = useAuth0();
  
  console.log("current user" , user);
    return(<>
      <header>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" >ice cream</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">          
          <Link to="/" className="nav-link " aria-current="page">
            Home
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/flavors" className="nav-link">
            Flavors
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cards" className="nav-link">
            Card
          </Link>
        </li>
        <li className="butten">
      {  isAuthenticated? (
          <button  className="btn btn-outline-success" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logout</button>
            
        ):(
       <button  className="btn btn-outline-success" onClick={e => loginWithRedirect()}>login</button>
      )}
      
    </li>
      </ul>
    </div>
  </div>
</nav>
 </header>
</>
)
}