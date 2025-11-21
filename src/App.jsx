import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout'; 
import './App.css'

function App() {

  return (
    <div className='app'>

      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer mensaje={"Bienvenidos a nuestro ecommerce"} />} />
            <Route path='/category/:category' element={<ItemListContainer  />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path = '/cart' element = { <Cart/>}/>
            <Route path = '/checkout' element = {<Checkout/>} />
            <Route path='*' element={<ErrorPage  />} />
          </Routes>
          
        </CartProvider>
      </BrowserRouter>

    </div>
  )
}

export default App