import { faCartShopping, faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Search from './Search'

export default function Navbar() {

  const cartProducts = useSelector(store => store.cart.cartProducts)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className='container'>

        <NavLink to='/' className='text-white text-decoration-none navbar-brand' >
          <h2 className="navbar-brand">
            <span>
              <FontAwesomeIcon icon={faShop} size="xl" style={{ color: "#f5f9ff" }} />
            </span>
            <span className="ml-2 font-weight-bold text-light">{document.title}</span>
          </h2>


        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-between custom-nav w-100 ">

            <li className="nav-item mr-auto">
              <Search />
            </li>

            <li className="nav-item ml-auto p-2">
              <NavLink to='cart' className='text-white text-decoration-none nav-link'>
                <FontAwesomeIcon className='fa' icon={faCartShopping} size="2xl" />
                <span className='badge badge-warning' id='lblCartCount'> {cartProducts.length}</span>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>

    </nav>
  )
}
