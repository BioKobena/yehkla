import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from './components/theme'
import NavBar from './components/NavBar';
// import Router from './routes';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Page404 from './components/pages/Page404';
import Services from './components/pages/Services';

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter className="page">
        <ThemeProvider>
          <NavBar />
          <Routes>
            <Route index path="home" element={<Home />} />
            <Route index path="about" element={<About />} />
            <Route index path="service" element={<Services />} />
            <Route index path="contact" element={<Contact />} />
            <Route index path="*" element={<Page404 />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
