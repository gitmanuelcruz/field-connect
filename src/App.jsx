import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from './components/navegacion/Menu';
import { Inicio } from './components/paginas/Inicio';
import { Items } from './components/paginas/Items';
import { Pokemon } from './components/paginas/Pokemon';
export const App = () => {

  return (
    <>
      <Router>
        <Menu />
        <div className='App'>
          
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/items" element={<Items />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </div>
        
      </Router>
      
    </>

  )
}

export default App;
