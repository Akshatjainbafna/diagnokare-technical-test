import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/about' Component={About} />
      <Route exact path='/contact' Component={Contact} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
