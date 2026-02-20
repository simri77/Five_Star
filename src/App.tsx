import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import StaffPage from './pages/Staff';
import DeliveryPage from './pages/Delivery';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;