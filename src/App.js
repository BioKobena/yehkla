import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Router from './routes';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Page404 from './components/pages/Page404';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="home" element={<Home />} />
          <Route index path="about" element={<About />} />
          <Route index path="service" element={<Products />} />
          <Route index path="contact" element={<Contact />} />
          <Route index path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
