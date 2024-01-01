import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './features/cart/Cart';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ProductDetail from './components/ProductDetail';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const products = useSelector(store => store.product.products)
  const cartProducts = useSelector(store => store.cart.cartProducts)

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  }, [cartProducts])

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container app">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
