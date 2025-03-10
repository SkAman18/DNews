import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class Navbar extends Component {
  render() {
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">DNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Business">Business</Link></li>
            <li><Link className="dropdown-item" to="/General">General</Link></li>
            <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/Health">Health</Link></li>
            <li><Link className="dropdown-item" to="/Science">Science</Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/technology">technology</Link></li>
          


          </ul>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

      </div>
    )
  }
}

export default Navbar






 {/* <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
          <div className="container-fluid" >
      <Link className="navbar-brand" to="/">DN</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
        </ul>
      </div>
    </div>
  </nav> */}