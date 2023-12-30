import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../features/cart/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Product({ product }) {
  const cartProducts = useSelector(store => store.cart.cartProducts)
  const dispatch = useDispatch()

  return (
    <Link className='card text-decoration-none' to={`/${product.id}`} >
      <img src={product.imageURL} alt="#" />
      <div className='d-flex flex-column'>
        <h5 className='p-2 mb-2'>{product.name}</h5>
        <p className='p-2 mb-6'>$ {product.price}</p>

        {!cartProducts.includes(product) && <button
          className='btn btn-primary mt-6'
          onClick={(e) => {
            e.preventDefault()
            dispatch(addToCart(product))
          }
          }
        >Add to cart
          <FontAwesomeIcon className='icon' icon={faCartPlus} style={{ color: "#ffffff", }} />
        </button>}

        {cartProducts.includes(product) && <button
          className='btn btn-danger mt-6'
          onClick={(e) => {
            e.preventDefault()
            dispatch(removeFromCart(product.id))
          }}
        >Remove from cart
          <FontAwesomeIcon className='icon' icon={faTrashCan} style={{ color: "#ffffff", }} />
        </button>}

      </div>
    </Link>
  )
}
