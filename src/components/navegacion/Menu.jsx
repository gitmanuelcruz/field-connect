import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
Dropdown

export const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container-fluid'>
          <Link to='/'>
            <img src="./field-connect.png" width={200} />
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item'>
                <Link className='nav-link active"' to='/inicio'>Create Company</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/items'>Impersonate</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/pokemon'>Role permissions</Link>
              </li>


            </ul>
          </div>
        </div>

      </nav>
    </>
  )
}
