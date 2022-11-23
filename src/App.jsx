import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Mensaje por aquí"/>
    </>
  );
}

export default App;
