import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import productList from '../data/productList.json'
import { getProducts } from '../features/products/productSlice'
import Product from '../features/products/Product'

export default function Home() {

  const products = useSelector(store => store.product.products)
  const searchTerm = useSelector(store => store.product.searchTerm)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchTerm === '') dispatch(getProducts(productList.products))

    dispatch(getProducts(productList.products
      .filter(product => product.name.toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()))))
  }, [dispatch, searchTerm])


  return (
    <div className='d-flex flex-wrap justify-content-start  '>
      {products.map(product =>
        <Product product={product} key={product.id} />
      )}
      <ToastContainer />

    </div>
  )
}
