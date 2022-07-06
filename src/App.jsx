import { Route, Routes } from 'react-router-dom';
import { Inicio, Items, Menu, Pokemon } from './components';
import './App.css';

export const App = () => {

  return (
    <>
        <Menu />
        <div className='App'>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/items" element={<Items />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </div>      
    </>

  )
}