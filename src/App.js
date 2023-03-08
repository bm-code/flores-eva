import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
// import Servicios from "./pages/Servicios"
// import Contacto from "./pages/Contacto"
// import Header from './components/Header'
// import Footer from './components/Footer';
// import Tienda from './pages/Tienda/Tienda';
// import Links from './pages/Links';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <Header /> */}
      <Home />
      {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/tienda' element={<Tienda />} />
          <Route path='/links' element={<Links />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
