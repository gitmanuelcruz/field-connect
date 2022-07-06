import { Link, NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-primary menu-fondo">
        <div className='container-fluid'>
          <Link to='/'>
            <img src="../field-connect.png" className="logo" width={200} />
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mx-auto'>
                <NavLink 
                  className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                  to='/inicio'>Create Company
                </NavLink>
                <NavLink 
                  className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                  to='/items'>Impersonate
                </NavLink>
                <NavLink 
                  className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                  to='/pokemon'>Role permissions
                </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
