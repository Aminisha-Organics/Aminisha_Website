import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Certifications from './pages/Certifications';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  // Keep Router here, and delegate animation to a child that can use useLocation()
  return (
    <Router>
      <AnimatedApp />
    </Router>
  );
}

function AnimatedApp() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/ammonium-persulfate" element={<ProductDetail product="ammonium" />} />
            <Route path="/products/sodium-persulfate" element={<ProductDetail product="sodium" />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
