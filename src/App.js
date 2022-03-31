import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Inventory from './Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Shop></Shop>}></Route>

        <Route path='/home' element={<Shop></Shop>}></Route>

        <Route path='/order' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
