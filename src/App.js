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
import ImageRotator from './components/ImageRotator';
import Login from './pages/Login';
import Cart from './pages/Cart';
import MainLayout from './components/MainLayout';
import FloatingNavbar from './components/FloatingNavbar';
import bg from './images/lib.jpeg';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <MainLayout>
              
              <ImageRotator />
              <ThreeDBook />
              <NewBook />
              <Testimonials />
            </MainLayout>
          } />
          <Route path="/books" element={
            <MainLayout>
              <Collections />
            </MainLayout>
          } />
          <Route path="/cart" element={
            <MainLayout>
              <Cart />
            </MainLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
