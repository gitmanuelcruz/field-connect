import React from 'react';
import { Link } from 'react-router-dom';

export const Hola = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container-fluid'>
        <Link to='/'>
                        <img src="./field-connect.png" width={200} />
                    </Link>
        </div>

        </nav>
    </>
  )
}
