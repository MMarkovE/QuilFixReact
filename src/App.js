
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Nosotros } from './components/Nosotros/Nosotros';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
