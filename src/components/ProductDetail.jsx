import { faCartPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../features/cart/cartSlice'

export default function ProductDetail() {
  const products = useSelector(store => store.product.products)
  const cartProducts = useSelector(store => store.cart.cartProducts)
  const dispatch = useDispatch()

  const { id } = useParams()
  const selectedProduct = products.find(product => product.id === id)

  return (
    <div className='detail' >
      <img src={selectedProduct.imageURL} alt="#" />
      <div>
        <h5>{selectedProduct.name}</h5>
        <p>{selectedProduct.details}</p>
        <p>$ {selectedProduct.price}</p>

        {!cartProducts.includes(selectedProduct) && <button
          className='btn btn-primary'
          onClick={() => dispatch(addToCart(selectedProduct))}
        >Add to cart
          <FontAwesomeIcon className='icon' icon={faCartPlus} style={{ color: "#ffffff", }} />
        </button>}

        {cartProducts.includes(selectedProduct) && <button
          className='btn btn-danger'
          onClick={() => dispatch(removeFromCart(selectedProduct.id))}
        >Remove from cart
          <FontAwesomeIcon className='icon' icon={faTrashCan} style={{ color: "#ffffff", }} />
        </button>}

      </div>
    </div>
  )
}
