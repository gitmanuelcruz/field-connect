import { Link, NavLink } from 'react-router-dom';
import { urlImages } from '../../helpers/urlImages';
const logo = urlImages('field-connect.png');

export const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-primary menu-fondo">
        <div className='container-fluid'>
          <Link to='/'>
            <img src={logo} className="logo" width={200} />
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mx-auto'>
                <NavLink 
                  className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'menu-active':'menu-title'}` }
                  to='/inicio'>Create Company
                </NavLink>
                <NavLink 
                  className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'menu-active':'menu-title'}` }
                  to='/items'>Impersonate
                </NavLink>
                <NavLink 
                  className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'menu-active':'menu-title'}` }
                  to='/pokemon'>Role permissions
                </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
