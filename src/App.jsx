import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ejemplocontador from './components/Ejemplos/Ejemplocontador';

 
function App() {


  return (

    <div className='app'>
    <NavBar />
    <ItemListContainer mensaje  =  {"Página en desarrollo"}/>


    
    </div>

  )
}

export default App
 