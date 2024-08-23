import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ScrollingText from './components/ScrollingText';
import NewBook from './components/NewBook';
import Catalog from './components/Catalog';
import Testimonials from './components/Testimonials';
import Collections from './pages/Collections';
import Checkout from './pages/Checkout';
import ThreeDBook from './components/ThreeDBook';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollingText />
      <ThreeDBook />
      <NewBook />
      <Catalog />
      <Testimonials />
      <Router>
      <Routes>
        <Route path="/" element={<Collections />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
