import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllItems } from './cartSlice'
import Product from '../products/Product'


export default function Cart() {
  const cartProducts = useSelector(store => store.cart.cartProducts)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  }, [cartProducts])

  return (
    <>
      {cartProducts.length > 0 && <>
        <div className='d-flex flex-wrap justify-content-start  '>
          {cartProducts.map(product =>
            <Product product={product} key={product.id} />
          )}
        </div>

        <div className='text-center mb-4'>
          <button className='btn btn-primary'
            onClick={() => dispatch(clearAllItems())}>CHECKOUT</button>
        </div>
      </>
      }

      {cartProducts.length === 0 && <div className='bg-light text-center emptycart'>
        <FontAwesomeIcon
          icon={faCartShopping}
          size="2xl"
          style={{ color: "#2361cd", }}
        />
        <h5>Your cart is empty</h5>
        <p>You have not added item to your card.</p>
      </div>}
    </>
  )
}
