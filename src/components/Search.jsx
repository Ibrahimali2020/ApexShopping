import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../features/products/productSlice'

export default function Search() {

  const searchTerm = useSelector(store => store.product.searchTerm)
  const dispatch = useDispatch()

  return (
    <div className="form-group nav-link">
      <input
        onChange={e => dispatch(setSearchTerm(e.target.value))}
        value={searchTerm}
        type="text"
        className="form-control search"
        placeholder="Search..." />
    </div>

  )
}
