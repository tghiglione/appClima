import './App.css';
import Home from './components/Home/Home';
import Cities from './components/Cities/Cities';
import Weather from './components/Weather/Weather';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar/>
        </header>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ciudades' element={<Cities/>}/>
          <Route path='/clima' element={<Weather/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
