import { Route, Routes } from 'react-router-dom';
import { Inicio, Items, Menu, Pokemon } from './components';
import './App.css';

export const App = () => {

  return (
    <>
      <h5 className='titulo'>Company Feature</h5>
      <div className='contenedor'>
        <div className='App'>
          <Menu />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/items" element={<Items />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </div>
      </div>
    </>

  )
}