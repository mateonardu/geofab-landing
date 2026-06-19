import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import ProductoMacetas from './pages/ProductoMacetas';
import ProductoAntimaleza from './pages/ProductoAntimaleza';
import ProductoMulching from './pages/ProductoMulching';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/producto/macetas-geotextiles" element={<ProductoMacetas />} />
          <Route path="/producto/tela-antimaleza" element={<ProductoAntimaleza />} />
          <Route path="/producto/mulching-geotextil" element={<ProductoMulching />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
