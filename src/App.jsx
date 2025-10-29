import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';


import './App.css'


function App() {

  return (
    <div className='app'>

     <BrowserRouter>
        <NavBar />

        <Routes>
          <Route  path='/'  element = { <ItemListContainer mensaje={"Página en desarrollo"} /> }  />
           <Route path='/category/:category' element = {<ItemListContainer mensaje={"Página en desarrollo"} /> } />
           <Route path='/detail/:id'  element = {<ItemDetailContainer/>}     />
           <Route path= '*'  element = { <ErrorPage/> } />
       </Routes> 
        
     </BrowserRouter>

    </div>
  )
}

export default App
