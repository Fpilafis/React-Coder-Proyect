import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
/* import Clicker from './Componentes/Clicker';*/
/* import ItemList from './Componentes/ItemList'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Footer from './Componentes/Footer';
import CatVerduras from './Componentes/Category/CatVerduras';
import CatCondimentos from './Componentes/Category/CatCondimentos';
/* import Item from './Componentes/Item';
import ItemDetail from './Componentes/ItemDetail'; */


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/category/verduras' element={<CatVerduras/>} />
        <Route path='/category/condimentos' element={<CatCondimentos/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
   