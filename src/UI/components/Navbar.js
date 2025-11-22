import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar =() => {
      const menuItems =[
            {url :'/home', label: 'Home'},
            {url :'/bouquets', label: 'Bouquets'},
            {url :'/fleurs', label: 'Fleurs'},
            {url :'/moncompte', label:'MonCompte'},
            
        ]
    return(
      <div className='navbar navbar-expand-lg bg-white '>
        <div className='container-fluid'>
            <Link className='navbar-brand text-pink d-flex align-items-center font-marck fs-2' to='/home'>Fleuria</Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse z-3' id='navbarNav'>
                <ul className='navbar-nav ms-auto'>
                     { menuItems.map((item,index) => (
                    <li className='nav-item m-2 ' key={index}>
                        <li className="nav-item m-2" key={index}>
                          <NavLink
                            to={item.url}
                            className="nav-link text-pink"
                            style={({ isActive }) => ({
                              textDecoration: 'none', 
                              fontWeight: isActive ? 'bold' : 'normal', 
                              color: isActive ? '#c2185b' : '#e83e8c', 
                                 })}
                         >
    {item.label}
  </NavLink>
</li>

                      

                    </li>
                ))}
                </ul>

            </div>

        </div>
      </div>
       
    )
}
export default Navbar;